import { CONTACT, WHATSAPP_NUMBER } from "@/lib/siteConfig";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft hover:bg-green-400"
      >
        WhatsApp
      </a>
      <a
        href={`tel:${CONTACT.phoneHref}`}
        className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft hover:bg-primary-dark"
      >
        Call Now
      </a>
    </div>
  );
}

