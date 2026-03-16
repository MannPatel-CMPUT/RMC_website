import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { CONTACT, ADDRESS } from "@/lib/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Perfect Ready Mix Concrete Vadodara",
  description:
    "Contact Perfect Ready Mix Concrete for ready mix concrete supply, pumping and logistics support in Vadodara, Halol, Waghodia and nearby Gujarat regions."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Perfect Ready Mix Concrete"
        description="Share your requirement or query and our team will respond with technical and commercial guidance for your ready mix concrete needs."
      />

      <section className="section-padding bg-black/80">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact Details"
              title="Reach our team"
              subtitle="Connect with our sales and operations team for quotations, scheduling and technical clarifications."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="space-y-2 border-white/10">
                <h3 className="text-sm font-semibold text-white">Call Us</h3>
                <p className="text-sm text-gray-300">
                  Phone:{" "}
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="font-semibold text-accent"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
                <p className="text-xs text-gray-400">
                  For urgent pour coordination and immediate requirements.
                </p>
              </Card>
              <Card className="space-y-2 border-white/10">
                <h3 className="text-sm font-semibold text-white">Email Us</h3>
                <p className="text-sm text-gray-300">
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-accent"
                  >
                    {CONTACT.email}
                  </a>
                </p>
                <p className="text-xs text-gray-400">
                  Share BOQs, drawings and detailed project documents.
                </p>
              </Card>
              <Card className="space-y-2 border-white/10">
                <h3 className="text-sm font-semibold text-white">WhatsApp</h3>
                <p className="text-sm text-gray-300">
                  Use WhatsApp (see floating button) to quickly exchange site photos and
                  location pins.
                </p>
              </Card>
              <Card className="space-y-2 border-white/10">
                <h3 className="text-sm font-semibold text-white">Business Hours</h3>
                <p className="text-sm text-gray-300">Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-xs text-gray-400">
                  Sunday and night pours based on advance planning and confirmation.
                </p>
              </Card>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-background to-black/80">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Location"
              title="Plant and office location"
              subtitle="Located near Jarod on Waghodia Road, Vadodara, we are well positioned to serve industrial and infrastructure projects across the region."
            />
            <Card className="space-y-1 border-white/10">
              <p className="text-sm text-gray-200">{ADDRESS.line1}</p>
              <p className="text-sm text-gray-200">{ADDRESS.line2}</p>
              <p className="text-sm text-gray-200">
                {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postalCode}
              </p>
              <p className="text-sm text-gray-200">{ADDRESS.country}</p>
            </Card>
            <Card className="space-y-2 border-white/10">
              <h3 className="text-sm font-semibold text-white">Route guidance</h3>
              <p className="text-sm text-gray-300">
                Share your site location and we will guide the most efficient route and
                travel time for our transit mixers and pumps.
              </p>
            </Card>
          </div>
          <div className="space-y-3">
            <Card className="h-56 border-white/10 bg-black/50">
              <p className="p-3 text-xs text-gray-500">
                Embedded Google Maps placeholder – replace with actual map iframe for the
                plant location.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

