import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { COMPANY_NAME, CONTACT, SITE_ORIGIN } from "@/lib/siteConfig";
import { FloatingActions } from "@/components/FloatingActions";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${COMPANY_NAME} | Ready Mix Concrete Vadodara, Gujarat`,
    template: `%s | ${COMPANY_NAME}`
  },
  description:
    "Perfect Ready Mix Concrete is a trusted RMC supplier in Vadodara, Gujarat, offering IS:4926 compliant ready mix concrete with reliable logistics and in-house QA/QC.",
  openGraph: {
    type: "website",
    url: SITE_ORIGIN,
    title: `${COMPANY_NAME} | Ready Mix Concrete Vadodara, Gujarat`,
    description:
      "Trusted ready mix concrete supplier for industrial, commercial and infrastructure projects across Vadodara, Halol, Waghodia and nearby regions.",
    siteName: COMPANY_NAME
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ConcreteContractor",
    name: COMPANY_NAME,
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Jarod, Waghodia Road",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "391510",
      addressCountry: "IN"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gujarat"
    }
  };

  return (
    <html lang="en">
      <body className="relative min-h-screen bg-background text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="pb-24 pt-20">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

