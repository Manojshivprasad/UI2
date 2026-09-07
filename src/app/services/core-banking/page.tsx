import { Hero } from "@/components/coreBanking/Hero";
import { PartnershipComparison } from "@/components/services/PartnershipComparison";
import { ServiceOfferings } from "@/components/coreBanking/ServiceOfferings";
import { EngagementModels } from "@/components/services/EngagementModels";
import { ToolsAccelerators } from "@/components/services/ToolsAccelerators";
import { Differentiators } from "@/components/services/Differentiators";
import { Faq } from "@/components/Faq";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";

const faqItems = [
  {
    question: "Which core banking platform do you implement?",
    answer:
      "We specialize in Finastra Fusion Essence, with hands-on experience across configuration, customization, integration, and go-live for retail and corporate banking modules.",
  },
  {
    question: "How do you reduce the risk of a core banking migration or upgrade?",
    answer:
      "A repeatable methodology covering impact analysis, phased data migration with reconciliation, automated regression testing, and structured hypercare after go-live.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Fixed-price delivery, T&M/staff augmentation, managed services, or outcome-based engagements — chosen based on your scope, timeline, and risk appetite.",
  },
];

const ours = {
  name: "ThoughtsCrest",
  points: [
    {
      label: "Banking domain:",
      body: "Our team was part of Fusion Essence (originally BankFusion Universal Banking) from its earliest development stages, and has been involved in 80% of all Essence implementations.",
    },
    {
      label: "Implementation depth:",
      body: "From configuration and customization to integration, testing, and go-live, we make the platform fit your products, processes, and regulators.",
    },
    {
      label: "Local partnership:",
      body: "On-the-ground delivery and support across 13 countries and 4 continents, through every phase of implementation and beyond.",
    },
  ],
};

const partner = {
  name: "Finastra Fusion Essence",
  points: [
    {
      label: "Modern foundation:",
      body: "A cloud-native, API-first, and modular core banking platform supporting retail, SME, corporate, and Islamic banking on one foundation.",
    },
    {
      label: "Product breadth:",
      body: "A full suite spanning deposits, lending, payments, treasury, digital engagement, and analytics — so growth doesn't mean stitching together new systems.",
    },
    {
      label: "Global proven platform:",
      body: "Positioned a SPARK Leader in Retail Core Banking Systems, EMEA and Asia Pacific (QKS Group, Q4 2025).",
    },
  ],
};

export default function CoreBankingPage() {
  return (
    <>
      <Hero />
      <PartnershipComparison ours={ours} partner={partner} />
      <ServiceOfferings />
      <EngagementModels />
      <ToolsAccelerators />
      <Differentiators />
      <Faq title="Frequently asked questions" items={faqItems} />
      <ProductFinalCta
        heading="Ready to modernize your core banking platform?"
        subtext="Talk to our team about greenfield implementations, upgrades, or migration — no obligation, just a straight conversation."
        primaryLabel="Book a Consultation"
      />
    </>
  );
}
