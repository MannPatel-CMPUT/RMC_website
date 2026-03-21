import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { qualityProcessSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quality Assurance – In-house QA/QC Laboratory Vadodara",
  description:
    "Perfect Ready Mix Concrete maintains in-house QA/QC laboratory, material testing, calibration records and quality processes to support IS:4926 concrete supply in Vadodara and Gujarat."
};

const checklist = [
  "In-house QA/QC laboratory",
  "Raw material testing and supplier certification",
  "Batching plant calibration records",
  "Cube testing and strength monitoring",
  "Slump checks and workability control",
  "Mix design documentation aligned with IS:4926",
  "Traceable records for audits and compliance"
];

export default function QualityAssurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Assurance"
        title="Structured QA/QC framework for every pour"
        description="Quality is embedded into our plant, materials, processes and documentation, giving consultants and project owners confidence in every cubic meter of concrete supplied."
      />

      <section className="section-padding bg-zinc-100">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div>
            <SectionHeading
              eyebrow="Technical Credibility"
              title="In-house QA/QC laboratory and documented processes"
              subtitle="Our laboratory supports material testing, cube testing, mix design optimization and documentation for industrial, commercial and infrastructure projects."
            />
            <p className="mb-4 text-sm text-zinc-700">
              We maintain calibration records for batching equipment, verify raw
              materials through supplier certificates and in-house checks, and document
              cube test results to align with project specifications and IS codes.
            </p>
            <p className="text-sm text-zinc-700">
              Our QA/QC team works closely with consultants to align mix designs and
              testing frequencies with project performance and documentation needs.
            </p>
          </div>
          <Card className="space-y-3 border-zinc-300 bg-white">
            <h3 className="text-sm font-semibold text-zinc-900">
              Why quality matters for your project
            </h3>
            <p className="text-sm text-zinc-700">
              Concrete is a critical structural element. Inconsistent quality can lead to
              strength issues, cracking and higher lifecycle costs. Our focus on QA/QC
              reduces these risks and supports long-term performance.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="container-default grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Quality Checklist"
              title="Core quality controls in place"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <Card
                  key={item}
                  className="flex items-start gap-2 border-zinc-200 bg-white"
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-emerald-400" />
                  <p className="text-xs text-zinc-700">{item}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Quality Process"
              title="From raw material to cube testing"
              subtitle="Our process ensures traceability from material receipt to final strength results."
            />
            <ol className="space-y-3 text-sm text-zinc-700">
              {qualityProcessSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent/25 text-[11px] font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

