import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { SERVICE_AREAS } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Request a Quote – Ready Mix Concrete Vadodara & Gujarat",
  description:
    "Request a detailed ready mix concrete quotation from Perfect Ready Mix Concrete for industrial, commercial and infrastructure projects in Vadodara, Halol, Waghodia and nearby Gujarat regions."
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Share your project details for a structured ready mix concrete proposal"
        description="Provide key information about your project, grades, quantities and timelines. Our team will respond with a tailored ready mix concrete proposal."
      />

      <section className="section-padding bg-zinc-100">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Quotation Form"
              title="Project information"
              subtitle="The more detail you share, the better we can align our mix designs, logistics and pricing to your requirement."
            />
            <LeadCaptureForm />
          </div>
          <div className="space-y-4">
            <Card className="space-y-2 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-900">
                Why Perfect Ready Mix Concrete
              </h3>
              <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-700">
                <li>IS:4926 compliant ready mix concrete production</li>
                <li>30 Cum/hr batching plant with 9 transit mixers and 3 pumps</li>
                <li>In-house QA/QC laboratory and testing support</li>
                <li>Experience with industrial, infrastructure and pharma projects</li>
                <li>Strong presence across the Vadodara–Halol–Waghodia belt</li>
              </ul>
            </Card>
            <Card className="space-y-2 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-900">Service Area</h3>
              <p className="text-sm text-zinc-700">
                We primarily serve the following locations:
              </p>
              <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-700">
                {SERVICE_AREAS.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <p className="text-xs text-zinc-500">
                For large industrial or infrastructure projects beyond these regions in
                Gujarat, we review feasibility based on volumes and schedules.
              </p>
            </Card>
            <Card className="space-y-2 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-900">
                Documentation support
              </h3>
              <p className="text-sm text-zinc-700">
                We can share sample cube test reports, calibration records and supplier
                certificates as part of your technical evaluation and vendor onboarding
                process.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

