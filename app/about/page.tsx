import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { businessDescription } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us – Perfect Ready Mix Concrete Vadodara",
  description:
    "Learn about Perfect Ready Mix Concrete, an IS:4926 compliant ready mix concrete supplier established in 2012 in Vadodara, Gujarat, serving industrial, commercial and infrastructure projects."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Concrete partner with a regional footprint and engineering focus"
        description={businessDescription}
      />

      <section className="section-padding bg-zinc-100">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Who We Are"
              title="Established in 2012 with a clear focus on quality and reliability"
              subtitle="Perfect Ready Mix Concrete operates from Jarod / Waghodia / Vadodara, Gujarat, supplying IS:4926 compliant ready mix concrete to industrial, commercial and infrastructure projects."
            />
            <p className="text-sm text-zinc-700">
              Since inception, our focus has been simple: deliver consistent, technically
              sound ready mix concrete supported by responsive service. With a 30 Cum/hr
              batching plant, dedicated transit mixer fleet, concrete pumps and in-house
              QA/QC laboratory, we are structured for time-bound pours and demanding
              project specifications.
            </p>
            <p className="text-sm text-zinc-700">
              Our team works closely with project managers, consultants and procurement
              teams to align mix designs, logistics and documentation with project
              requirements, while maintaining a strong safety and compliance mindset on
              every pour.
            </p>
          </div>
          <div className="space-y-4">
            <Card className="space-y-2 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-900">Regional coverage</h3>
              <p className="text-sm text-zinc-700">
                We primarily serve projects across Vadodara, Halol, Waghodia, Jarod and
                nearby industrial corridors. For larger industrial or infrastructure
                projects elsewhere in Gujarat, we evaluate feasibility based on volume
                and schedule.
              </p>
            </Card>
            <Card className="space-y-2 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-900">
                Office & plant credibility
              </h3>
              <p className="text-sm text-zinc-700">
                With a dedicated batching plant, office infrastructure and on-ground
                operations team, we provide a professional, document-ready interface for
                corporate procurement and EPC partners.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="container-default grid gap-8 md:grid-cols-3">
          <Card className="space-y-3 border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-900">Our Mission</h3>
            <p className="text-sm text-zinc-700">
              To be the preferred ready mix concrete partner for industrial, commercial
              and infrastructure projects in Gujarat by combining engineering discipline,
              reliable operations and responsive service.
            </p>
          </Card>
          <Card className="space-y-3 border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-900">Our Vision</h3>
            <p className="text-sm text-zinc-700">
              To build long-term relationships with clients by consistently delivering
              quality concrete, technical transparency and predictable supply, enabling
              safer and more durable structures.
            </p>
          </Card>
          <Card className="space-y-3 border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-900">Our Values</h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-700">
              <li>Quality and safety first</li>
              <li>Commitment to timelines and productivity</li>
              <li>Transparent communication and documentation</li>
              <li>Continuous improvement in mix design and operations</li>
              <li>Respect for people, environment and regulations</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-zinc-50">
        <div className="container-default grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Designed for industrial, commercial and infrastructure performance"
              subtitle="Our combination of plant capacity, fleet, QA/QC and field experience makes us a dependable RMC partner for complex projects."
            />
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>• IS:4926 compliant ready mix concrete production</li>
              <li>• In-house QA/QC laboratory with testing and documentation</li>
              <li>• 30 Cum/hr batching plant with power backup and support equipment</li>
              <li>• Experience with industrial, pharma, infrastructure and commercial work</li>
              <li>• Strong local knowledge of Vadodara, Halol, Waghodia and Jarod belt</li>
            </ul>
          </div>
          <div className="space-y-4">
            <Card className="h-32 border-dashed border-zinc-300">
              <p className="text-xs text-gray-500">
                Image placeholder – plant photograph (`plant-1.jpg`)
              </p>
            </Card>
            <Card className="h-32 border-dashed border-zinc-300">
              <p className="text-xs text-gray-500">
                Image placeholder – mixer trucks (`mixer-truck-1.jpg`)
              </p>
            </Card>
            <Card className="h-32 border-dashed border-zinc-300">
              <p className="text-xs text-gray-500">
                Image placeholder – office / operations (`qa-lab-1.jpg`)
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

