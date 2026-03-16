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

      <section className="section-padding bg-black/80">
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
                className="flex items-center justify-between border-white/10 bg-white/[0.02]"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{client}</p>
                  <p className="text-xs text-gray-400">
                    Industrial / Infrastructure Client
                  </p>
                </div>
                <div className="h-10 w-20 rounded bg-white/5" aria-hidden="true">
                  {/* client-logo-placeholder.svg */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-black/80">
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
                className="border-white/10 bg-gradient-to-b from-white/5 to-black/70"
              >
                <p className="text-sm font-semibold text-white">{category.title}</p>
                <p className="text-xs text-gray-300">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black/90">
        <div className="container-default">
          <div className="rounded-2xl border border-accent/30 bg-accent/5 px-6 py-8 sm:px-10">
            <SectionHeading
              eyebrow="Trusted by Leading Companies"
              title="Plan your next project with Perfect Ready Mix Concrete"
              subtitle="Share your upcoming industrial, commercial, infrastructure or pharma project details, and we will collaborate with your team to structure ready mix concrete supply aligned to your schedule."
            />
            <a
              href="/request-quote"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-background shadow-card-soft hover:bg-accent-soft"
            >
              Request project-ready proposal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

