import { Hero } from "@/components/coreBanking/Hero";
import { PartnershipComparison } from "@/components/coreBanking/PartnershipComparison";
import { ServiceOfferings } from "@/components/coreBanking/ServiceOfferings";
import { EngagementModels } from "@/components/coreBanking/EngagementModels";
import { ToolsAccelerators } from "@/components/coreBanking/ToolsAccelerators";
import { Differentiators } from "@/components/coreBanking/Differentiators";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/coreBanking/FinalCta";

const faqItems = [
  {
    question: "Which core banking platform do you implement?",
    answer:
      "[Placeholder] We specialize in [Partner Platform], with hands-on experience across configuration, customization, integration, and go-live for retail and corporate banking modules.",
  },
  {
    question: "How do you reduce the risk of a core banking migration or upgrade?",
    answer:
      "[Placeholder] A repeatable methodology covering impact analysis, phased data migration with reconciliation, automated regression testing, and structured hypercare after go-live.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "[Placeholder] Fixed-price delivery, T&M/staff augmentation, managed services, or outcome-based engagements — chosen based on your scope, timeline, and risk appetite.",
  },
];

export default function CoreBankingPage() {
  return (
    <>
      <Hero />
      <PartnershipComparison />
      <ServiceOfferings />
      <EngagementModels />
      <ToolsAccelerators />
      <Differentiators />
      <Faq title="Frequently asked questions" items={faqItems} />
      <FinalCta />
    </>
  );
}
