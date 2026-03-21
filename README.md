# Perfect Ready Mix Concrete — website

## Lead & contact form emails

Submissions from **Request a quote** and **Contact** are sent to:

- `businesshead@perfectrmc.in`
- `perfect_rmc@yahoo.com`

via [Resend](https://resend.com) (free tier for low volume). No WhatsApp API is used.

### Setup

1. Copy `.env.example` to `.env.local`.
2. Create a Resend API key and add `RESEND_API_KEY`.
3. Set `EMAIL_FROM` to a **verified sender** in Resend (e.g. `Perfect RMC <noreply@perfectrmc.in>` after domain verification). For quick tests only, Resend allows `onboarding@resend.dev`.
4. Add **SPF/DKIM** records for your domain in Resend so mail reaches inboxes reliably.
5. Optional: set `SEND_CUSTOMER_ACK=false` to disable automatic “we received your message” emails to customers.

### Local testing without domain access yet

If you do not yet have access to verify `perfectrmc.in`, use Resend sandbox mode:

- `EMAIL_FROM=onboarding@resend.dev`
- `LEAD_EMAIL_TEST_MODE=true`
- `LEAD_TEST_RECIPIENT=<your own Resend account email>`

In this mode:

- lead/contact summaries are sent only to `LEAD_TEST_RECIPIENT`
- fixed business recipients in code are bypassed temporarily
- customer auto-reply emails are skipped (to avoid sandbox recipient restrictions)

### WhatsApp (manual, free)

The floating **WhatsApp** button uses `wa.me` with **+91 82550 09999** — no Meta Cloud API fees.
