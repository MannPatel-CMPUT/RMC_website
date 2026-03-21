import Link from "next/link";
import { ADDRESS, COMPANY_NAME, CONTACT, SOCIALS } from "@/lib/siteConfig";

const extraContactNumbers = ["7574848571", "9328666666"];
const extraContactEmails = ["perfect_rmc@yahoo.com"];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-100">
      <div className="container-default section-padding grid gap-10 md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <h3 className="text-lg font-semibold tracking-tight">{COMPANY_NAME}</h3>
          <p className="max-w-md text-sm text-zinc-600">
            Quality-focused ready mix concrete supplier supporting industrial, commercial
            and infrastructure projects across Vadodara, Halol, Waghodia and nearby
            regions since 2012.
          </p>
          <div className="text-sm text-zinc-600">
            <p>{ADDRESS.line1}</p>
            <p>{ADDRESS.line2}</p>
            <p>
              {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postalCode}
            </p>
            <p>{ADDRESS.country}</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
            Contact
          </h4>
          <div className="space-y-1 text-sm text-zinc-600">
            <p>
              Phone:{" "}
              <a href={`tel:${CONTACT.phoneHref}`} className="hover:text-accent">
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p className="pt-1">
              Additional:{" "}
              {extraContactNumbers.map((num, idx) => (
                <span key={num}>
                  <a href={`tel:+91${num}`} className="hover:text-accent">
                    +91 {num}
                  </a>
                  {idx < extraContactNumbers.length - 1 ? " / " : ""}
                </span>
              ))}
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                {CONTACT.email}
              </a>
            </p>
            <p>
              Additional Email:{" "}
              {extraContactEmails.map((email, idx) => (
                <span key={email}>
                  <a href={`mailto:${email}`} className="hover:text-accent">
                    {email}
                  </a>
                  {idx < extraContactEmails.length - 1 ? " / " : ""}
                </span>
              ))}
            </p>
          </div>
          <div className="space-y-1 text-sm text-zinc-600">
            <p>Business Hours:</p>
            <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
            <p>Sunday: On prior scheduling for pours</p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
            Quick Links
          </h4>
          <div className="flex flex-col gap-1 text-sm text-zinc-600">
            <Link href="/about" className="hover:text-accent">
              About Us
            </Link>
            <Link href="/products-services" className="hover:text-accent">
              Products & Services
            </Link>
            <Link href="/infrastructure" className="hover:text-accent">
              Infrastructure
            </Link>
            <Link href="/quality-assurance" className="hover:text-accent">
              Quality Assurance
            </Link>
            <Link href="/clients-projects" className="hover:text-accent">
              Clients & Projects
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact Us
            </Link>
            <Link href="/request-quote" className="hover:text-accent">
              Request a Quote
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
              Connect
            </p>
            <div className="flex gap-3 text-sm text-zinc-600">
              <a href={SOCIALS.linkedin} aria-label="LinkedIn" className="hover:text-accent">
                LinkedIn
              </a>
              <a href={SOCIALS.facebook} aria-label="Facebook" className="hover:text-accent">
                Facebook
              </a>
              <a href={SOCIALS.instagram} aria-label="Instagram" className="hover:text-accent">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 bg-white">
        <div className="container-default flex flex-col items-center justify-between gap-3 py-4 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

