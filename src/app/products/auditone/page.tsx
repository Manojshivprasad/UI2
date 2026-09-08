import { Hero } from "@/components/auditone/Hero";
import { ProductValue } from "@/components/auditone/ProductValue";
import { Capabilities } from "@/components/auditone/Capabilities";
import { Ecosystem } from "@/components/auditone/Ecosystem";
import { Technical } from "@/components/auditone/Technical";
import { SecurityMatrix } from "@/components/auditone/SecurityMatrix";
import { Showcase } from "@/components/auditone/Showcase";
import { UseCases } from "@/components/auditone/UseCases";
import { FinalCta } from "@/components/auditone/FinalCta";

export default function AuditOnePage() {
  return (
    <>
      <Hero />
      <ProductValue />
      <Capabilities />
      <Ecosystem />
      <Technical />
      <SecurityMatrix />
      <Showcase />
      <UseCases />
      <FinalCta />
    </>
  );
}
