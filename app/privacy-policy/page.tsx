import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/Primitives";

export const metadata: Metadata = {
  title: "Privacy Policy – Perfect Ready Mix Concrete",
  description:
    "Privacy policy for Perfect Ready Mix Concrete, describing how basic contact information submitted through the website is handled."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="How we handle your information"
        description="This summary privacy policy outlines how we handle basic contact and project information submitted through this website."
      />
      <section className="section-padding bg-black/85">
        <div className="container-default space-y-6 text-sm text-gray-200">
          <SectionHeading
            eyebrow="Overview"
            title="Information we collect"
            subtitle="We collect only the information you choose to provide through our contact and quotation forms."
          />
          <p>
            This website is designed as a B2B lead-generation platform. Information such
            as your name, company, phone number, email address, project location,
            concrete grades and related project details is used solely to respond to your
            enquiry and to prepare a relevant proposal.
          </p>
          <p>
            We do not sell your information to third parties. Information may be shared
            internally within Perfect Ready Mix Concrete for the purposes of technical
            review, operations planning and commercial discussion.
          </p>
          <p>
            For the final production site, please review this template text with your
            legal or compliance advisor and extend it as needed to reflect your actual
            data handling, retention and cookie policies.
          </p>
        </div>
      </section>
    </>
  );
}

