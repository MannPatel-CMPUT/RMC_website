import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products & Services – Ready Mix Concrete Supplier Gujarat",
  description:
    "Perfect Ready Mix Concrete supplies IS:4926 compliant ready mix concrete along with concrete pumping, transit mixer delivery, testing and logistics support for projects in Vadodara and Gujarat."
};

const industries = [
  "Residential developments and townships",
  "Commercial complexes and offices",
  "Industrial factories and warehouses",
  "Infrastructure corridors and utilities",
  "Pharma and cleanroom facilities"
];

export default function ProductsServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Ready mix concrete and supporting services for demanding projects"
        description="From IS:4926 compliant ready mix concrete production to pumping, logistics and QA/QC, Perfect Ready Mix Concrete provides a complete solution for your pours in and around Vadodara."
      />

      <section className="section-padding bg-zinc-100">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div>
            <SectionHeading
              eyebrow="Ready Mix Concrete"
              title="IS:4926 compliant ready mix concrete"
              subtitle="Concrete designed and produced in accordance with IS:4926, with documented control over materials, batching, mixing and delivery."
            />
            <p className="mb-4 text-sm text-zinc-700">
              Our ready mix concrete is manufactured in a controlled environment using
              calibrated batching equipment, quality-checked materials and defined mix
              designs. This enables consistent strength gain, workability and durability
              suitable for industrial, commercial and infrastructure applications.
            </p>
            <p className="text-sm text-zinc-700">
              We support a wide range of grades and special requirements based on
              consultant inputs, including conventional grades (M15–M40) and
              project-specific mixes, subject to technical review.
            </p>
          </div>
          <Card className="space-y-3 border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-900">Key benefits</h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-zinc-700">
              <li>Consistent quality compared to site batching</li>
              <li>Reduced site congestion and labour requirement</li>
              <li>Faster pour cycles and better project productivity</li>
              <li>Documented QA/QC for audits and compliance</li>
              <li>Better control over water-cement ratio and admixtures</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="container-default">
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Services beyond concrete production"
            subtitle="Support services designed to make ready mix concrete supply predictable and efficient on site."
          />
          <div className="grid-responsive-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="flex flex-col justify-between border-zinc-200 bg-white"
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-zinc-900">{service.title}</h3>
                  <p className="text-sm text-zinc-700">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-zinc-50">
        <div className="container-default grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Industries Served"
              title="Sectors we support"
              subtitle="Our ready mix concrete and service model is tailored to the realities of industrial, commercial and infrastructure work."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <Card
                key={industry}
                className="border-zinc-200 bg-white"
              >
                <p className="text-sm font-semibold text-zinc-900">{industry}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="container-default">
          <div className="grid gap-8 rounded-2xl border border-zinc-300 bg-white px-6 py-8 sm:grid-cols-[minmax(0,3fr),minmax(0,2fr)] sm:px-10">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                Plan your next pour with Perfect Ready Mix Concrete
              </h2>
              <p className="text-sm text-zinc-700">
                Share your grades, approximate quantities and pour sequence, and our team
                will provide a structured ready mix concrete proposal for your project in
                Vadodara, Halol, Waghodia or nearby regions.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <a
                href="/request-quote"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft hover:bg-zinc-700"
              >
                Request a detailed quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

