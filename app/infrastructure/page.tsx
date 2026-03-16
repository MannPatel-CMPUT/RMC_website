import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card, StatCard } from "@/components/ui/Primitives";
import { infrastructureStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Infrastructure – Batching Plant, Fleet & QA/QC",
  description:
    "Explore Perfect Ready Mix Concrete's infrastructure including 30 Cum/hr batching plant, concrete pumps, 9 transit mixers, 125 kVA generator, backhoe JCBs and in-house QA/QC laboratory in Vadodara."
};

const equipment = [
  { name: "Batching Plant", detail: "30 Cum/hr capacity with calibrated batching" },
  { name: "Concrete Pumps", detail: "3 pumps for industrial and multi-storey pours" },
  { name: "Transit Mixers", detail: "9 vehicles with regular maintenance" },
  { name: "Power Generator", detail: "125 kVA backup for uninterrupted operations" },
  { name: "Backhoe JCBs", detail: "For site support and material handling" },
  { name: "Cement Storage", detail: "Structured storage and handling" }
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Plant, fleet and QA/QC infrastructure built for uptime"
        description="Our infrastructure is configured to support time-bound pours, continuous supply and documented quality control for industrial, commercial and infrastructure projects across Gujarat."
      />

      <section className="section-padding bg-black/80">
        <div className="container-default">
          <SectionHeading
            eyebrow="Key Statistics"
            title="Operational capability at a glance"
          />
          <div className="grid-responsive-3">
            {infrastructureStats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-black/80">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div>
            <SectionHeading
              eyebrow="Equipment"
              title="Infrastructure designed for consistent supply"
              subtitle="Our plant, fleet and equipment lineup enables us to maintain consistent output and support demanding pour schedules."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {equipment.map((item) => (
                <Card
                  key={item.name}
                  className="border-white/10 bg-white/[0.03]"
                >
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-gray-300">{item.detail}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <Card className="h-40 border-dashed border-white/15">
              <p className="text-xs text-gray-500">
                Image placeholder – batching plant (`plant-1.jpg`)
              </p>
            </Card>
            <Card className="h-40 border-dashed border-white/15">
              <p className="text-xs text-gray-500">
                Image placeholder – transit mixers (`mixer-truck-1.jpg`)
              </p>
            </Card>
            <Card className="h-40 border-dashed border-white/15">
              <p className="text-xs text-gray-500">
                Image placeholder – QA/QC lab (`qa-lab-1.jpg`)
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black/90">
        <div className="container-default grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Operational Readiness"
              title="Aligned with project execution needs"
              subtitle="Our team and equipment are structured to coordinate with your project schedule, including night pours and critical path activities, subject to planning."
            />
          </div>
          <Card className="space-y-2 border-white/10">
            <h3 className="text-sm font-semibold text-white">How we support uptime</h3>
            <ul className="list-disc space-y-1 pl-4 text-sm text-gray-300">
              <li>Preventive maintenance for plant and fleet</li>
              <li>Power backup to reduce downtime risk</li>
              <li>Experienced operators and on-ground supervisors</li>
              <li>Structured shift planning for extended pours</li>
              <li>Coordination with your site team and consultants</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}

