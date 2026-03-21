import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { clients } from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients & Projects – Industrial and Infrastructure RMC Supplier",
  description:
    "View Perfect Ready Mix Concrete's client profile including industrial, commercial, pharma and infrastructure projects across Vadodara, Halol, Waghodia and surrounding Gujarat regions."
};

const categories = [
  {
    title: "Infrastructure",
    description:
      "Roads, utilities, industrial corridors and public infrastructure requiring continuous, time-bound pours."
  },
  {
    title: "Industrial",
    description:
      "Factories, process plants, warehouses and heavy-duty floors built for industrial operations."
  },
  {
    title: "Commercial",
    description:
      "Office buildings, commercial complexes and mixed-use developments with architectural requirements."
  },
  {
    title: "Pharma",
    description:
      "Pharmaceutical facilities and cleanroom environments with strict quality and documentation needs."
  }
];

export default function ClientsProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients & Projects"
        title="Trusted by leading industrial, infra and pharma clients"
        description="Perfect Ready Mix Concrete supports EPC contractors, industrial clients and infrastructure projects across Gujarat with dependable ready mix concrete supply."
      />

      <section className="section-padding bg-zinc-100">
        <div className="container-default">
          <SectionHeading
            eyebrow="Key Clients"
            title="Representative client list"
            subtitle="Our client base includes national and regional leaders in infrastructure, manufacturing and pharmaceuticals."
          />
          <div className="grid-responsive-3">
            {clients.map((client) => (
              <Card
                key={client}
                className="flex items-center justify-between border-zinc-200 bg-white"
              >
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{client}</p>
                  <p className="text-xs text-zinc-500">
                    Industrial / Infrastructure Client
                  </p>
                </div>
                <div className="h-10 w-20 rounded bg-zinc-100" aria-hidden="true">
                  {/* client-logo-placeholder.svg */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="container-default grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Project Types"
              title="Where our concrete is used"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <Card
                key={category.title}
                className="border-zinc-200 bg-white"
              >
                <p className="text-sm font-semibold text-zinc-900">{category.title}</p>
                <p className="text-xs text-zinc-700">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-zinc-50">
        <div className="container-default">
          <div className="rounded-2xl border border-zinc-300 bg-white px-6 py-8 sm:px-10">
            <SectionHeading
              eyebrow="Trusted by Leading Companies"
              title="Plan your next project with Perfect Ready Mix Concrete"
              subtitle="Share your upcoming industrial, commercial, infrastructure or pharma project details, and we will collaborate with your team to structure ready mix concrete supply aligned to your schedule."
            />
            <a
              href="/request-quote"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-card-soft hover:bg-zinc-700"
            >
              Request project-ready proposal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

