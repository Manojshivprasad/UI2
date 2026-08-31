import { HeroSection } from "@/components/HeroSection";
import { StatsAndTrustedBy } from "@/components/StatsAndTrustedBy";
import { ProductsBento } from "@/components/ProductsBento";
import { ServicesSection } from "@/components/ServicesSection";
import { DnaTimeline } from "@/components/DnaTimeline";
import { AgenticAiSpotlight } from "@/components/AgenticAiSpotlight";
import { CaseStudiesPreview } from "@/components/CaseStudiesPreview";
import { InsightsPreview } from "@/components/InsightsPreview";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsAndTrustedBy />
      <ProductsBento />
      <ServicesSection />
      <DnaTimeline />
      <AgenticAiSpotlight />
      <CaseStudiesPreview />
      <InsightsPreview />
      <CtaBand />
    </>
  );
}
