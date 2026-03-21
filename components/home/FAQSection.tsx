 "use client";

import { useState } from "react";
import { faqItems } from "@/lib/content";
import { SectionHeading, Card } from "@/components/ui/Primitives";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-zinc-100">
      <div className="container-default">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Answers to common queries from contractors, project managers and procurement teams planning ready mix concrete supply in Gujarat."
        />
        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={item.question}
                className="border-zinc-200 bg-white p-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-zinc-900">
                    {item.question}
                  </span>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-xs text-zinc-600"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-zinc-200 px-5 py-3 text-sm text-zinc-700">
                    {item.answer}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

