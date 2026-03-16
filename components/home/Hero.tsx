"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";
import { Button, Card } from "@/components/ui/Primitives";
import { CONTACT } from "@/lib/siteConfig";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-dark to-background pb-10 pt-16 sm:pt-20 lg:pt-24">
      <div className="container-default grid gap-12 lg:grid-cols-[minmax(0,3.2fr),minmax(0,2.3fr)] lg:items-center">
        <motion.div
          className="space-y-8"
          initial={heroVariants.hidden}
          animate={heroVariants.show}
        >
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Ready Mix Concrete · Vadodara · Gujarat
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              {heroContent.title}
            </h1>
            <p className="max-w-xl text-sm text-gray-100 sm:text-base">
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
            <p className="w-full text-xs text-gray-400 sm:w-auto">
              Operating since 2011 · IS:4926 compliant ready mix concrete
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {heroContent.trustBadges.map((badge) => (
              <Card
                key={badge.label}
                className="space-y-1 border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                  {badge.label}
                </p>
                <p className="text-sm font-semibold text-white">{badge.value}</p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
        >
          <div className="relative h-64 overflow-hidden rounded-3xl border border-white/10 bg-black/40 sm:h-80 lg:h-96">
            <Image
              src="/hero-rmc.jpg"
              alt="Perfect Ready Mix Concrete plant and transit mixers operating in Gujarat"
              fill
              priority
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                  1 RMC Plant · 60 m³/hr
                </p>
                <p className="text-xs text-gray-100 sm:text-sm">
                  Modern batching plant with in-house QA/QC and structured fleet
                  coordination.
                </p>
              </div>
              <div className="hidden rounded-2xl border border-white/10 bg-black/40 px-3 py-2 text-right sm:block">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                  Fleet Snapshot
                </p>
                <p className="text-xs text-gray-100">
                  10 Transit Mixers · 2 Static Pumps
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

