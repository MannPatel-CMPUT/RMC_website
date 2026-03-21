/**
 * Server-only: used by `/api/lead`. Do not import from client components
 * (keeps notification addresses off the public JS bundle).
 */
export const LEAD_NOTIFICATION_RECIPIENTS = [
  "businesshead@perfectrmc.in",
  "perfect_rmc@yahoo.com"
] as const;

export const LEAD_EMAIL_SUBJECT_PREFIX = "Perfect RMC";

/** Shown in customer auto-reply subject lines. */
export const SITE_BRAND_NAME = "Perfect Ready Mix Concrete";
