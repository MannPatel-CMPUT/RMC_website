import { clients } from "@/lib/content";
import { SectionHeading, Card } from "@/components/ui/Primitives";

export function ClientsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
      <div className="container-default">
        <SectionHeading
          eyebrow="Clients & Projects"
          title="Trusted by leading industrial and infrastructure clients"
          subtitle="Perfect Ready Mix Concrete supports EPC contractors, industrial plants, pharma facilities and infrastructure projects across the Vadodara region."
          align="left"
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
                  Industrial / Infrastructure Project Partner
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
  );
}

