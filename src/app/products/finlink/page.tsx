import { Hero } from "@/components/finlink/Hero";
import { ProductValue } from "@/components/finlink/ProductValue";
import { CapabilityRows } from "@/components/products/CapabilityRows";
import { ProblemsGrid } from "@/components/products/ProblemsGrid";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { IntegrationHubToggle } from "@/components/productVisuals/finlink/IntegrationHubToggle";
import { ApiOrchestrationPanel } from "@/components/productVisuals/finlink/ApiOrchestrationPanel";
import { MessageDeliverySim } from "@/components/productVisuals/finlink/MessageDeliverySim";

const whatItDoes = [
  {
    title: "System Integration",
    description:
      "Connect core banking, payments, and third-party services without point-to-point sprawl.",
    visual: <IntegrationHubToggle />,
  },
  {
    title: "API Orchestration",
    description:
      "Expose and manage banking APIs with versioning, security, and monitoring built in.",
    visual: <ApiOrchestrationPanel />,
  },
  {
    title: "Reliable Messaging",
    description:
      "Guaranteed, auditable message delivery across critical banking flows.",
    visual: <MessageDeliverySim />,
  },
];

const problems = [
  "Brittle point-to-point integrations that break with every change.",
  "No single view of data moving between banking systems.",
  "Hard-to-audit transaction flows across applications.",
  "Slow onboarding of new channels or partners.",
  "Inconsistent error handling and retries.",
  "Vendor lock-in at the integration layer.",
];

export default function FinLinkPage() {
  return (
    <>
      <Hero />

      <ProductValue />

      <CapabilityRows
        eyebrow="What It Does"
        heading="A single, governed interface"
        items={whatItDoes}
        tone="alt"
      />

      <ProblemsGrid heading="Problems it solves" problems={problems} />

      <ProductFinalCta subtext="See how FinLink connects your banking ecosystem through a single, governed interface." />
    </>
  );
}
