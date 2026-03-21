import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  LEAD_NOTIFICATION_RECIPIENTS,
  SITE_BRAND_NAME
} from "@/lib/leadEmailConfig";
import {
  buildContactEmailHtml,
  buildCustomerAckHtml,
  buildQuoteEmailHtml,
  contactEmailSubject,
  quoteEmailSubject,
  type ContactLeadPayload,
  type QuoteLeadPayload
} from "@/lib/leadEmail";

export const runtime = "nodejs";

const PHONE_RE = /^\+?\d{8,15}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isQuotePayload(x: unknown): x is QuoteLeadPayload {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  const str = (k: string) => typeof o[k] === "string";
  if (!str("name") || !str("company") || !str("phone") || !str("location") || !str("quantity"))
    return false;
  const phone = String(o.phone).replace(/\s+/g, "");
  if (!PHONE_RE.test(phone)) return false;
  if (o.email != null && o.email !== "" && typeof o.email === "string" && !EMAIL_RE.test(o.email))
    return false;
  return true;
}

function isContactPayload(x: unknown): x is ContactLeadPayload {
  if (!x || typeof x !== "object") return false;
  const o = x as Record<string, unknown>;
  if (
    typeof o.name !== "string" ||
    typeof o.phone !== "string" ||
    typeof o.email !== "string" ||
    typeof o.message !== "string"
  )
    return false;
  const phone = o.phone.replace(/\s+/g, "");
  if (!PHONE_RE.test(phone)) return false;
  if (!EMAIL_RE.test(o.email)) return false;
  if (o.company != null && typeof o.company !== "string") return false;
  return true;
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.EMAIL_FROM?.trim();
  const explicitTestMode =
    process.env.LEAD_EMAIL_TEST_MODE === "true" || process.env.LEAD_EMAIL_TEST_MODE === "1";
  const inferredTestMode = from === "onboarding@resend.dev";
  const isTestMode = explicitTestMode || inferredTestMode;
  const testRecipient = process.env.LEAD_TEST_RECIPIENT?.trim();

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error: "Email is not configured. Set RESEND_API_KEY and EMAIL_FROM on the server."
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const formType = (body as { formType?: string }).formType;
  const data = (body as { data?: unknown }).data;

  if (formType !== "quote" && formType !== "contact") {
    return NextResponse.json({ error: "Invalid formType" }, { status: 400 });
  }

  const submittedAt = new Date().toISOString();
  const resend = new Resend(apiKey);
  const recipients = isTestMode
    ? testRecipient
      ? [testRecipient]
      : []
    : [...LEAD_NOTIFICATION_RECIPIENTS];

  if (!recipients.length) {
    return NextResponse.json(
      {
        error:
          "Lead email test mode is enabled. Set LEAD_TEST_RECIPIENT to your own verified inbox."
      },
      { status: 503 }
    );
  }

  const sendCustomerAck =
    !isTestMode &&
    process.env.SEND_CUSTOMER_ACK !== "false" &&
    process.env.SEND_CUSTOMER_ACK !== "0";

  try {
    if (formType === "quote") {
      if (!isQuotePayload(data)) {
        return NextResponse.json({ error: "Invalid quote payload" }, { status: 400 });
      }
      const html = buildQuoteEmailHtml(data, submittedAt);
      const { error } = await resend.emails.send({
        from,
        to: recipients,
        replyTo: data.email?.trim() || undefined,
        subject: quoteEmailSubject(),
        html
      });
      if (error) {
        console.error("[api/lead] Resend quote error:", error);
        const details = `${error.name ?? ""} ${error.message ?? ""}`.toLowerCase();
        if (details.includes("testing emails") || details.includes("verify a domain")) {
          return NextResponse.json(
            {
              error:
                "Resend testing mode only allows your own email as recipient. Verify perfectrmc.in in Resend and set EMAIL_FROM to that domain."
            },
            { status: 502 }
          );
        }
        return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
      }

      if (sendCustomerAck && data.email?.trim() && EMAIL_RE.test(data.email.trim())) {
        const ack = await resend.emails.send({
          from,
          to: [data.email.trim()],
          subject: `We received your quote request — ${SITE_BRAND_NAME}`,
          html: buildCustomerAckHtml("quote request")
        });
        if (ack.error) console.error("[api/lead] Resend customer ack (quote):", ack.error);
      }
    } else {
      if (!isContactPayload(data)) {
        return NextResponse.json({ error: "Invalid contact payload" }, { status: 400 });
      }
      const html = buildContactEmailHtml(data, submittedAt);
      const { error } = await resend.emails.send({
        from,
        to: recipients,
        replyTo: data.email.trim(),
        subject: contactEmailSubject(),
        html
      });
      if (error) {
        console.error("[api/lead] Resend contact error:", error);
        const details = `${error.name ?? ""} ${error.message ?? ""}`.toLowerCase();
        if (details.includes("testing emails") || details.includes("verify a domain")) {
          return NextResponse.json(
            {
              error:
                "Resend testing mode only allows your own email as recipient. Verify perfectrmc.in in Resend and set EMAIL_FROM to that domain."
            },
            { status: 502 }
          );
        }
        return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
      }

      if (sendCustomerAck) {
        const ack = await resend.emails.send({
          from,
          to: [data.email.trim()],
          subject: `We received your message — ${SITE_BRAND_NAME}`,
          html: buildCustomerAckHtml("message")
        });
        if (ack.error) console.error("[api/lead] Resend customer ack (contact):", ack.error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[api/lead]", e);
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
