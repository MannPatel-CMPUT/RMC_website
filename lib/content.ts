import { ADDRESS, COMPANY_NAME, SERVICE_AREAS } from "./siteConfig";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products-services", label: "Products & Services" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/quality-assurance", label: "Quality Assurance" },
  { href: "/clients-projects", label: "Clients & Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/request-quote", label: "Request a Quote" }
];

export const heroContent = {
  title: "Reliable Ready Mix Concrete for Industrial and Infrastructure Projects",
  subtitle:
    "Perfect Ready Mix Concrete is an established RMC supplier operating since 2011 with a high-capacity batching plant, dependable fleet and in-house QA/QC to support projects across Vadodara, Waghodia and nearby industrial corridors in Gujarat.",
  trustBadges: [
    { label: "Since 2011", value: "Established RMC Supplier" },
    { label: "Plant Capacity", value: "60 m³/hr" },
    { label: "Transit Mixers", value: "10" },
    { label: "Static Concrete Pumps", value: "2" }
  ]
};

export const services = [
  {
    title: "Ready Mix Concrete Supply",
    description:
      "Consistent, IS:4926 compliant ready mix concrete produced with controlled batching and dependable material sourcing."
  },
  {
    title: "Static Concrete Pumping",
    description:
      "Concrete pump deployment and coordination for multi-storey, industrial and infrastructure pours."
  },
  {
    title: "Transit Mixer Delivery",
    description:
      "Fleet of well-maintained transit mixers for time-critical and continuous concrete supply."
  },
  {
    title: "Quality Testing Support",
    description:
      "Cube testing, slump checks and documentation through our in-house QA/QC laboratory."
  },
  {
    title: "On-Site Concrete Delivery",
    description:
      "Planning, scheduling and on-site coordination with your project and site management teams."
  }
];

export const infrastructureStats = [
  { label: "Batching Plant", value: "1 RMC Plant · 60 m³/hr" },
  { label: "Transit Mixers", value: "10 Vehicles" },
  { label: "Static Concrete Pumps", value: "2 Units" },
  { label: "Power Backup", value: "125 kVA Generator" },
  { label: "Site Equipment", value: "Backhoe JCBs" },
  { label: "QA/QC", value: "In-house Laboratory" }
];

export const qualityProcessSteps = [
  "Raw material checks and supplier certification",
  "Project-specific mix design and optimization",
  "Automated batching and controlled production",
  "Transit delivery with slump and workability checks",
  "On-site coordination and placement support",
  "Cube testing, documentation and quality assurance"
];

export const faqItems = [
  {
    question: "What is ready mix concrete?",
    answer:
      "Ready mix concrete (RMC) is concrete manufactured in a batching plant as per designed mix, then delivered to site using transit mixers. It ensures consistent quality, better workability and controlled strength compared to site-mixed concrete."
  },
  {
    question: "Which areas do you serve?",
    answer: `We primarily serve projects in and around ${SERVICE_AREAS.join(
      ", "
    )}. For large or specialized projects elsewhere in Gujarat, we evaluate feasibility on a case-by-case basis.`
  },
  {
    question: "Do you provide concrete pumps?",
    answer:
      "Yes, we offer concrete pumping services with experienced operators, subject to availability and project requirements."
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can submit the Request a Quote form on our website, call our sales team directly, or email us with your project details, grades, and tentative pour schedule."
  },
  {
    question: "Do you support commercial and industrial projects?",
    answer:
      "Yes. We work extensively with industrial, commercial, infrastructure and pharma projects, along with institutional and large residential developments."
  }
];

export const clients = [
  "Larsen & Toubro",
  "Polycab",
  "Banco Products",
  "Ceat Tyre",
  "Godwitt Soco Ind Park",
  "Bharat Parenetral",
  "Mepro Pharmaceutical",
  "Gem Care Appliances",
  "Kalintis Health Care",
  "Liva Pharmaceutical",
  "Scheinder Electric",
  "GE Vernova",
  "Voltas Ltd",
  "M G Motors",
  "Farmson Pharmaceutical",
  "ITM Universe",
  "BCA Stadium",
  "KRISHNASHRSY AUTO",
  "DIAMOND POWER",
  "Leading pharma manufacturers",
  "Regional infrastructure contractors",
  "Industrial estates and logistics parks"
];

export const businessDescription = `${COMPANY_NAME} is a quality-focused ready mix concrete supplier based near Jarod, Waghodia Road, Vadodara. Established in 2011, the company supports industrial, commercial and infrastructure projects with reliable RMC supply, static concrete pumping and in-house QA/QC.`;

export const addressString = `${ADDRESS.line1}, ${ADDRESS.line2}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}, ${ADDRESS.country}`;

