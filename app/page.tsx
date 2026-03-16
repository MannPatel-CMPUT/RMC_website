import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SectionHeading, Card, StatCard } from "@/components/ui/Primitives";
import { services, infrastructureStats, qualityProcessSteps, businessDescription, heroContent } from "@/lib/content";
import { ConcreteCalculator } from "@/components/home/ConcreteCalculator";
import { FAQSection } from "@/components/home/FAQSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";

export const metadata: Metadata = {
  title: "Ready Mix Concrete Supplier in Vadodara, Gujarat",
  description:
    "Perfect Ready Mix Concrete is a trusted RMC supplier in Vadodara, Gujarat offering IS:4926 compliant ready mix concrete with strong infrastructure, in-house QA/QC and reliable logistics.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ready mix concrete?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ready mix concrete (RMC) is concrete manufactured in a batching plant as per designed mix, then delivered to site using transit mixers."
        }
      },
      {
        "@type": "Question",
        name: "Which areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We serve Vadodara, Halol, Waghodia, Jarod and nearby industrial and infrastructure corridors in Gujarat."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />

      {/* Trust stats band */}
      <section className="border-y border-white/5 bg-black/80 py-8">
        <div className="container-default grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            { label: "Since 2011", value: "Established RMC Supplier" },
            { label: "RMC Plant", value: "1 Plant · 60 m³/hr" },
            { label: "Transit Mixers", value: "10 Vehicles" },
            { label: "Static Pumps", value: "2 Units" },
            { label: "Region", value: "Vadodara · Waghodia · Gujarat" },
            { label: "Focus", value: "Quality-Assured Concrete" }
          ].map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      {/* About snapshot */}
      <section className="section-padding bg-black/90">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Snapshot"
              title="Perfect Ready Mix Concrete – an established partner for Gujarat projects"
              subtitle={businessDescription}
            />
            <p className="text-sm text-gray-200">
              We primarily serve industrial, commercial and infrastructure projects in
              and around Vadodara, Waghodia and nearby industrial areas, supporting EPC
              contractors, project management teams and corporate procurement.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-accent hover:text-accent-soft"
            >
              Learn more about our company
            </a>
          </div>
          <Card className="space-y-4 border-accent/30 bg-gradient-to-b from-primary/20 to-black/80">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Industrial & Infrastructure Focus
            </p>
            <p className="text-sm text-gray-100">
              Since 2011, Perfect Ready Mix Concrete has been supplying IS:4926 compliant
              RMC for industrial units, logistics hubs, pharma facilities and
              infrastructure corridors across the Vadodara region.
            </p>
            <p className="text-xs text-gray-400">
              A combination of modern plant infrastructure, disciplined QA/QC and
              practical on-ground experience makes us a dependable partner for
              time-bound, quality-sensitive pours.
            </p>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gradient-to-b from-black/90 to-background">
        <div className="container-default">
          <SectionHeading
            eyebrow="Services"
            title="Ready mix concrete and supporting services"
            subtitle="A focused portfolio covering production, delivery, pumping and testing support for ready mix concrete."
          />
          <div className="grid-responsive-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col justify-between border-white/10 bg-white/[0.03] pb-5 pt-6"
              >
                <div className="space-y-3">
                  <div className="h-8 w-8 rounded-full bg-accent/15" aria-hidden="true" />
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure highlight */}
      <section className="section-padding bg-black/90">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div>
            <SectionHeading
              eyebrow="Infrastructure"
              title="Plant and fleet configured for industrial operations"
              subtitle="A 60 m³/hr batching plant, 10 transit mixers, 2 static pumps and in-house QA/QC lab aligned to the needs of industrial and infrastructure work."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {infrastructureStats.map((stat) => (
                <Card
                  key={stat.label}
                  className="space-y-1 border-white/10 bg-gradient-to-b from-white/5 to-black/60"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">
                    {stat.label}
                  </p>
                  <p className="text-sm font-semibold text-white">{stat.value}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Card className="space-y-2 border-white/10">
              <h3 className="text-sm font-semibold text-white">Operational capability</h3>
              <p className="text-sm text-gray-300">
                Our plant and fleet are planned for continuous pours and tight timelines,
                with structured scheduling, power backup and on-ground supervisors
                coordinating with your site team.
              </p>
            </Card>
            <Card className="space-y-2 border-white/10">
              <h3 className="text-sm font-semibold text-white">Modern plant operations</h3>
              <p className="text-sm text-gray-300">
                From raw material handling to batching and dispatch, our operations are
                aligned with best practices for industrial ready mix concrete
                production.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality assurance process */}
      <section className="section-padding bg-gradient-to-b from-background to-black/80">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div>
            <SectionHeading
              eyebrow="Quality Assurance"
              title="Structured QA/QC process for every cubic meter"
              subtitle="Engineered mixes, calibrated batching and documented testing aligned with IS:4926 guidelines."
            />
            <ol className="space-y-3 text-sm text-gray-200">
              {qualityProcessSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-[11px] font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <Card className="space-y-3 border-accent/30 bg-black/70">
            <h3 className="text-sm font-semibold text-white">Why quality matters</h3>
            <p className="text-sm text-gray-300">
              Concrete performance directly impacts lifecycle cost, safety and service
              life of your structure. Our QA/QC process is built to give consultants and
              project owners confidence in strength, durability and consistency.
            </p>
            <p className="text-xs text-gray-400">
              From supplier certificates and calibration records to on-site cube
              testing, we maintain documentation that supports compliance and
              traceability for industrial and infrastructure audits.
            </p>
          </Card>
        </div>
      </section>

      {/* Clients */}
      <ClientsSection />

      {/* Concrete calculator */}
      <ConcreteCalculator />

      {/* Lead capture */}
      <section className="section-padding bg-black/95">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)] lg:items-start">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Request a Quote"
              title="Share your project requirement"
              subtitle="Provide core details such as location, approximate quantities and timelines, and our team will respond with a structured ready mix concrete proposal."
            />
            <Card className="space-y-2 border-accent/30 bg-accent/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Why clients choose us
              </p>
              <ul className="list-disc space-y-1 pl-4 text-xs text-gray-200">
                <li>Since 2011 – established regional RMC supplier</li>
                <li>Modern plant with 60 m³/hr capacity</li>
                <li>10 transit mixers and 2 static pumps</li>
                <li>In-house QA/QC laboratory and documentation</li>
              </ul>
            </Card>
          </div>
          <LeadCaptureForm />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </>
  );
}

