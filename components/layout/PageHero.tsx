import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  aside
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-dark to-background">
      <div className="container-default grid gap-8 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)] lg:items-center">
        <div className="space-y-4">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-sm text-gray-200 sm:text-base">
              {description}
            </p>
          )}
        </div>
        {aside && <div className="space-y-4">{aside}</div>}
      </div>
    </section>
  );
}

