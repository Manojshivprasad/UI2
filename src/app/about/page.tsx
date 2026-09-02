import { Hero } from "@/components/about/Hero";
import { DnaTimeline } from "@/components/DnaTimeline";
import { Values } from "@/components/about/Values";
import { Stats } from "@/components/about/Stats";
import { Team } from "@/components/about/Team";
import { Markets } from "@/components/about/Markets";
import { CtaBand } from "@/components/CtaBand";

const storyPillars = [
  {
    heading: "[Placeholder] Founded",
    body: "[Placeholder] Started by a small team of banking consultants who saw the same implementation mistakes repeat across every project.",
  },
  {
    heading: "[Placeholder] First Implementation",
    body: "[Placeholder] Delivered our first end-to-end core banking rollout, and the methodology that followed us ever since.",
  },
  {
    heading: "[Placeholder] Regional Expansion",
    body: "[Placeholder] Grew from a single market into a team embedded across African and Indian banking institutions.",
  },
  {
    heading: "[Placeholder] Product Suite Launch",
    body: "[Placeholder] Turned repeated engagement patterns into products — AuditOne, TestNova, FinLink, and Asset360.",
  },
  {
    heading: "Deep Banking DNA",
    body: "A decade of core banking implementation, workflow automation, and data migration across African and Indian markets. We ship faster, with full control and audit-ready confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero />
      <DnaTimeline heading="Our Story" pillars={storyPillars} />
      <Values />
      <Stats />
      <Team />
      <Markets />
      <CtaBand />
    </>
  );
}
