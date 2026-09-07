import { Hero } from "@/components/agenticAi/Hero";
import { ValueSection } from "@/components/agenticAi/ValueSection";
import { HowItWorks } from "@/components/agenticAi/HowItWorks";
import { UseCases } from "@/components/agenticAi/UseCases";
import { TrustGuardrails } from "@/components/agenticAi/TrustGuardrails";
import { FinalCta } from "@/components/agenticAi/FinalCta";

export default function AgenticAiPage() {
  return (
    <>
      <Hero />
      <ValueSection />
      <HowItWorks />
      <UseCases />
      <TrustGuardrails />
      <FinalCta />
    </>
  );
}
