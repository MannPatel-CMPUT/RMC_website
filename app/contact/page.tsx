import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading, Card } from "@/components/ui/Primitives";
import { ADDRESS, CONTACT, WHATSAPP_DEFAULT_TEXT, WHATSAPP_NUMBER } from "@/lib/siteConfig";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Perfect Ready Mix Concrete Vadodara",
  description:
    "Contact Perfect Ready Mix Concrete for ready mix concrete supply, pumping and logistics support in Vadodara, Halol, Waghodia and nearby Gujarat regions."
};

const waDigits = WHATSAPP_NUMBER.replace(/\D/g, "");
const whatsappChatHref = `https://wa.me/${waDigits}?text=${encodeURIComponent(WHATSAPP_DEFAULT_TEXT)}`;
const extraContactNumbers = ["7574848571", "9328666666"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Perfect Ready Mix Concrete"
        description="Share your requirement or query and our team will respond with technical and commercial guidance for your ready mix concrete needs."
      />

      <section className="section-padding bg-zinc-100">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact Details"
              title="Reach our team"
              subtitle="Connect with our sales and operations team for quotations, scheduling and technical clarifications."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="space-y-2 border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900">Call Us</h3>
                <p className="text-sm text-zinc-700">
                  Phone:{" "}
                  <a
                    href={`tel:${CONTACT.phoneHref}`}
                    className="font-semibold text-accent"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
                <div className="text-sm text-zinc-700">
                  <p className="font-medium">Additional numbers:</p>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    {extraContactNumbers.map((num) => (
                      <a key={num} href={`tel:+91${num}`} className="font-semibold text-zinc-900">
                        +91 {num}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-zinc-500">
                  For urgent pour coordination and immediate requirements.
                </p>
              </Card>
              <Card className="space-y-2 border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900">Email Us</h3>
                <p className="text-sm text-zinc-700">
                  Email:{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-semibold text-accent"
                  >
                    {CONTACT.email}
                  </a>
                </p>
                <p className="text-xs text-zinc-500">
                  Share BOQs, drawings and detailed project documents.
                </p>
              </Card>
              <Card className="space-y-2 border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900">WhatsApp</h3>
                <p className="text-sm text-zinc-700">
                  <a
                    href={whatsappChatHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent underline-offset-4 hover:text-accent-soft"
                  >
                    Chat on WhatsApp
                  </a>{" "}
                  — share site photos, location pins and quick queries (opens in app or web).
                </p>
              </Card>
              <Card className="space-y-2 border-zinc-200">
                <h3 className="text-sm font-semibold text-zinc-900">Business Hours</h3>
                <p className="text-sm text-zinc-700">Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-xs text-zinc-500">
                  Sunday and night pours based on advance planning and confirmation.
                </p>
              </Card>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-100 to-zinc-50">
        <div className="container-default grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Location"
              title="Plant and office location"
              subtitle="Located near Jarod on Waghodia Road, Vadodara, we are well positioned to serve industrial and infrastructure projects across the region."
            />
            <Card className="space-y-1 border-zinc-200">
              <p className="text-sm text-zinc-700">{ADDRESS.line1}</p>
              <p className="text-sm text-zinc-700">{ADDRESS.line2}</p>
              <p className="text-sm text-zinc-700">
                {ADDRESS.city}, {ADDRESS.region} {ADDRESS.postalCode}
              </p>
              <p className="text-sm text-zinc-700">{ADDRESS.country}</p>
            </Card>
            <Card className="space-y-2 border-zinc-200">
              <h3 className="text-sm font-semibold text-zinc-900">Route guidance</h3>
              <p className="text-sm text-zinc-700">
                Share your site location and we will guide the most efficient route and
                travel time for our transit mixers and pumps.
              </p>
            </Card>
          </div>
          <div className="space-y-3">
            <Card className="h-56 border-zinc-200 bg-white">
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

