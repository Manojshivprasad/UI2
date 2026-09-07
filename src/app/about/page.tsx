import { Hero } from "@/components/about/Hero";
import { DnaTimeline } from "@/components/DnaTimeline";
import { Values } from "@/components/about/Values";
import { Stats } from "@/components/about/Stats";
import { CoreStrengths } from "@/components/about/CoreStrengths";
import { Team } from "@/components/about/Team";
import { Markets } from "@/components/about/Markets";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

const storyPillars = [
  {
    heading: "Founded in 2015",
    body: "Started by a group of banking consultants building custom software for financial institutions — we've since grown into a full-spectrum core banking implementation and digital transformation firm.",
  },
  {
    heading: "Official Finastra Partner",
    body: "Deep expertise in Fusion Essence core banking implementation, customization, training, and support. Our team was part of Fusion Essence (originally BankFusion Universal Banking) from its earliest development stages, and has been involved in 80% of all Essence implementations.",
  },
  {
    heading: "A Growing Global Footprint",
    body: "120+ consultants have delivered 70+ project implementations for banks and financial institutions across 13 countries and 4 continents.",
  },
  {
    heading: "A Proprietary Product Suite",
    body: "What began as recurring engagement patterns became AuditOne, TestNova, FinLink, and Asset360 — accelerators that now cut core banking setup and testing time by over 70%.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero />
      <DnaTimeline heading="Our Story" pillars={storyPillars} />
      <Values />
      <Stats />
      <CoreStrengths />
      <Team />
      <Markets />
      <Testimonials />
      <CtaBand />
    </>
  );
}
