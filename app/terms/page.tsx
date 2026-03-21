import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Terms & Conditions – Perfect Ready Mix Concrete",
  description:
    "High-level terms and conditions placeholder for Perfect Ready Mix Concrete. Replace with your finalized commercial and legal terms."
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms & Conditions"
        title="Website and enquiry terms"
        description="This section provides a high-level template for terms and conditions related to website use and enquiry handling."
      />
      <section className="section-padding bg-zinc-100">
        <div className="container-default space-y-6 text-sm text-zinc-700">
          <SectionHeading
            eyebrow="Scope"
            title="Use of this website"
            subtitle="This website is intended for businesses and professionals seeking ready mix concrete supply and related services."
          />
          <p>
            All information presented on this website is for general guidance only.
            Project-specific technical decisions should always be taken in consultation
            with qualified structural and design professionals.
          </p>
          <p>
            Any quotations, proposals or commitments from Perfect Ready Mix Concrete are
            subject to separate written confirmations, including commercial terms,
            technical specifications and scheduling agreements shared directly with you.
          </p>
          <p>
            For production use, please work with your legal advisor to replace this
            template with a comprehensive terms and conditions document that reflects
            your contracting practices, liabilities and limitations.
          </p>
        </div>
      </section>
    </>
  );
}

