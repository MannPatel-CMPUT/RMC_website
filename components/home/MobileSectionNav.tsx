"use client";

import { useEffect, useMemo, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
};

const HOME_SECTIONS: SectionItem[] = [
  { id: "home-hero", label: "Top" },
  { id: "home-services", label: "Services" },
  { id: "home-infrastructure", label: "Infra" },
  { id: "home-quality", label: "Quality" },
  { id: "home-clients", label: "Clients" },
  { id: "home-calculator", label: "Calc" },
  { id: "home-quote", label: "Quote" },
  { id: "home-faq", label: "FAQ" }
];

export function MobileSectionNav() {
  const [activeId, setActiveId] = useState<string>("home-hero");
  const [isOpen, setIsOpen] = useState(false);

  const sections = useMemo(
    () => HOME_SECTIONS.filter((item) => typeof document !== "undefined" && document.getElementById(item.id)),
    []
  );

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    sections.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!sections.length) return null;

  return (
    <>
      <div className="fixed bottom-32 right-4 z-50 md:hidden sm:bottom-36 sm:right-6">
        <button
          type="button"
          aria-label={isOpen ? "Close section navigation" : "Open section navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white/90 shadow-[0_8px_20px_rgba(0,0,0,0.12)] backdrop-blur"
        >
          <span className="sr-only">Section menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 rounded-full bg-zinc-800" />
            <span className="block h-0.5 w-5 rounded-full bg-zinc-800" />
            <span className="block h-0.5 w-5 rounded-full bg-zinc-800" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/25 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        aria-label="Quick section navigation"
        className={`fixed left-0 top-1/2 z-50 w-44 -translate-y-1/2 rounded-r-2xl border border-l-0 border-zinc-300 bg-white/95 p-3 shadow-[0_14px_30px_rgba(0,0,0,0.16)] backdrop-blur transition-transform md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-1.5">
          {sections.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wide transition ${
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
