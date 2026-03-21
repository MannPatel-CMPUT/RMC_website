import { LEAD_EMAIL_SUBJECT_PREFIX } from "@/lib/leadEmailConfig";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export type QuoteLeadPayload = {
  name: string;
  company: string;
  phone: string;
  email?: string;
  location: string;
  grade?: string;
  quantity: string;
  date?: string;
  message?: string;
};

export type ContactLeadPayload = {
  name: string;
  company?: string;
  phone: string;
  email: string;
  message: string;
};

function row(label: string, value: string): string {
  const v = value.trim() || "—";
  return `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;width:180px;background:#f9fafb;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(v)}</td></tr>`;
}

export function buildQuoteEmailHtml(data: QuoteLeadPayload, submittedAtIso: string) {
  const rows = [
    row("Submitted at", submittedAtIso),
    row("Name", data.name),
    row("Company", data.company),
    row("Phone", data.phone),
    row("Email", data.email ?? ""),
    row("Project location", data.location),
    row("Concrete grade", data.grade ?? ""),
    row("Quantity (approx. m³)", data.quantity),
    row("Tentative delivery date", data.date ?? ""),
    row("Message / details", data.message ?? "")
  ].join("");

  return `
<!DOCTYPE html>
<html><body style="font-family:system-ui,sans-serif;font-size:14px;color:#111;">
<p><strong>New quote request</strong> — ${escapeHtml(LEAD_EMAIL_SUBJECT_PREFIX)}</p>
<table style="border-collapse:collapse;max-width:640px;">${rows}</table>
</body></html>`;
}

export function buildContactEmailHtml(data: ContactLeadPayload, submittedAtIso: string) {
  const rows = [
    row("Submitted at", submittedAtIso),
    row("Name", data.name),
    row("Company", data.company ?? ""),
    row("Phone", data.phone),
    row("Email", data.email),
    row("Message", data.message)
  ].join("");

  return `
<!DOCTYPE html>
<html><body style="font-family:system-ui,sans-serif;font-size:14px;color:#111;">
<p><strong>New contact form message</strong> — ${escapeHtml(LEAD_EMAIL_SUBJECT_PREFIX)}</p>
<table style="border-collapse:collapse;max-width:640px;">${rows}</table>
</body></html>`;
}

export function quoteEmailSubject() {
  return `[${LEAD_EMAIL_SUBJECT_PREFIX}] New quote request`;
}

export function contactEmailSubject() {
  return `[${LEAD_EMAIL_SUBJECT_PREFIX}] New contact message`;
}

export function buildCustomerAckHtml(formLabel: string) {
  return `
<!DOCTYPE html>
<html><body style="font-family:system-ui,sans-serif;font-size:14px;color:#111;line-height:1.5;">
<p>Thank you for contacting <strong>${escapeHtml(LEAD_EMAIL_SUBJECT_PREFIX)}</strong>.</p>
<p>We have received your <strong>${escapeHtml(formLabel)}</strong> and our team will get back to you shortly.</p>
<p style="color:#6b7280;font-size:13px;">This is an automated confirmation. Please do not reply to this email.</p>
</body></html>`;
}
