"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";
import { Button, Card } from "@/components/ui/Primitives";
import { CONTACT } from "@/lib/siteConfig";
import { AnimatedMixerTruck } from "@/components/AnimatedMixerTruck";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section
      id="home-hero"
      className="bg-gradient-to-b from-zinc-100 via-white to-zinc-100 pb-10 pt-16 text-zinc-900 sm:pt-20 lg:pt-24"
    >
      <div className="container-default">
        <motion.div
          className="space-y-8"
          initial={heroVariants.hidden}
          animate={heroVariants.show}
        >
          <div className="space-y-5">
            <div className="rounded-2xl border border-zinc-300/70 bg-zinc-100/95 px-4 py-4 shadow-[0_12px_30px_rgba(24,24,27,0.12)] backdrop-blur-sm sm:px-6 sm:py-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="min-w-0 flex-1 space-y-2">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                    {heroContent.title}
                  </h1>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-900 sm:text-xs">
                    Ready Mix Concrete | Vadodara, Gujarat
                  </p>
                </div>

                <div className="flex shrink-0 justify-center sm:justify-end">
                  <AnimatedMixerTruck
                    className="w-[7.5rem] sm:w-[8.75rem] lg:w-[10.5rem]"
                    mode="logoPause"
                    drumDurationSeconds={20}
                    drumDurationHoverSeconds={12}
                    enableFloat
                  />
                </div>
              </div>
            </div>

            <p className="max-w-xl text-sm text-zinc-700 sm:text-base">
              {heroContent.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/request-quote">
              <Button className="px-6 py-3 text-[11px] sm:text-xs">
                Get a Quote
              </Button>
            </Link>

            <a href={`tel:${CONTACT.phoneHref}`}>
              <Button variant="outline" className="px-6 py-3 text-[11px] sm:text-xs">
                Call Now
              </Button>
            </a>

            <p className="w-full text-xs text-zinc-600 sm:w-auto">
              Operating since 2011 · IS:4926 compliant ready mix concrete
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4">
            {heroContent.trustBadges.map((badge) => (
              <Card
                key={badge.label}
                className="space-y-1 border-zinc-300/70 bg-white px-4 py-3"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                  {badge.label}
                </p>
                <p className="text-sm font-semibold text-zinc-900">{badge.value}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}