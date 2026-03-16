import Link from "next/link";
import { navLinks } from "@/lib/content";
import { CONTACT } from "@/lib/siteConfig";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-background/90 backdrop-blur">
      <div className="container-default flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-semibold text-white">PR</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide">
              Perfect Ready Mix Concrete
            </span>
            <span className="text-xs text-gray-400">
              Ready Mix Concrete | Vadodara, Gujarat
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-100 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wide text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-quote"
            className="hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-background shadow-card-soft hover:bg-accent-soft lg:inline-flex"
          >
            Request a Quote
          </Link>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-gray-100 hover:border-accent hover:text-accent"
          >
            Call: {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

