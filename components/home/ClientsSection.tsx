import { clients } from "@/lib/content";
import { SectionHeading, Card } from "@/components/ui/Primitives";

export function ClientsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-black/80 to-background">
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
              className="flex items-center justify-between border-white/10 bg-white/[0.02]"
            >
              <div>
                <p className="text-sm font-semibold text-white">{client}</p>
                <p className="text-xs text-gray-400">
                  Industrial / Infrastructure Project Partner
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
  );
}

