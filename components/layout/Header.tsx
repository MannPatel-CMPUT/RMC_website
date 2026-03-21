import Link from "next/link";
import { navLinks } from "@/lib/content";
import { CONTACT } from "@/lib/siteConfig";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="container-default flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-semibold text-white">PR</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide">
              Perfect Ready Mix Concrete
            </span>
            <span className="text-xs text-zinc-500">
              Ready Mix Concrete | Vadodara, Gujarat
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wide text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/request-quote"
            className="hidden rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft hover:bg-zinc-700 lg:inline-flex"
          >
            Request a Quote
          </Link>
          <a
            href={`tel:${CONTACT.phoneHref}`}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-zinc-700 hover:border-zinc-600 hover:text-zinc-900"
          >
            Call: {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

