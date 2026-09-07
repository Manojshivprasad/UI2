import { Share2, Network, RadioTower } from "lucide-react";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureCards } from "@/components/products/FeatureCards";
import { ProblemsGrid } from "@/components/products/ProblemsGrid";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { FinLinkVisual } from "@/components/productVisuals/FinLinkVisual";

const whatItDoes = [
  {
    icon: Network,
    title: "System Integration",
    blurb:
      "Connect core banking, payments, and third-party services without point-to-point sprawl.",
  },
  {
    icon: Share2,
    title: "API Orchestration",
    blurb:
      "Expose and manage banking APIs with versioning, security, and monitoring built in.",
  },
  {
    icon: RadioTower,
    title: "Reliable Messaging",
    blurb:
      "Guaranteed, auditable message delivery across critical banking flows.",
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
      <ProductHero
        title="FinLink"
        subhead="The integration layer that connects your banking ecosystem. FinLink is an enterprise service bus built for financial institutions — orchestrating data and transactions across core banking, channels, and third-party systems through a single, governed interface."
        visual={<FinLinkVisual />}
      />

      <FeatureCards
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
