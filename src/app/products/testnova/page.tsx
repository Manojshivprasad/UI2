import { ScanSearch, BookCheck, Landmark, Bell } from "lucide-react";
import { Hero } from "@/components/testnova/Hero";
import { ProductValue } from "@/components/testnova/ProductValue";
import { FeatureCards } from "@/components/products/FeatureCards";
import { CapabilityRows } from "@/components/products/CapabilityRows";
import { NumberedSteps } from "@/components/products/NumberedSteps";
import { ProblemsGrid } from "@/components/products/ProblemsGrid";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { ScenarioRunner } from "@/components/productVisuals/testnova/ScenarioRunner";
import { TimeAwareScrubber } from "@/components/productVisuals/testnova/TimeAwareScrubber";
import { OrchestrationGraph } from "@/components/productVisuals/testnova/OrchestrationGraph";

const whatItDoes = [
  {
    title: "Business Process Testing",
    description:
      "Validates integrated business processes end-to-end, catching integration failures before production — not isolated scripts.",
    visual: <ScenarioRunner />,
  },
  {
    title: "Time-Aware Verification",
    description:
      "Dynamic business-date handling and full EOD-cycle simulation, so interest, penalties, and multi-day workflows are tested as they really behave.",
    visual: <TimeAwareScrubber />,
  },
  {
    title: "Cross-System Orchestration",
    description:
      "Runs across all connected applications simultaneously, validating dependencies a single-system tool can't see.",
    visual: <OrchestrationGraph />,
  },
];

const howItWorks = [
  {
    title: "Scenarios",
    blurb:
      "A Python script paired with an Excel data sheet. Each row is one unique execution — the atomic unit of testing.",
  },
  {
    title: "Business Processes",
    blurb:
      "A sequence of scenarios chained together to mirror a real banking workflow, such as full loan origination.",
  },
  {
    title: "Test Runs",
    blurb:
      "Scheduled execution of a business process with a chosen data set — versioned, tracked, and fully automated.",
  },
];

const verification = [
  {
    icon: Landmark,
    title: "Account Balances",
    blurb: "Direct system observation post-execution confirms correct balance outcomes.",
  },
  {
    icon: BookCheck,
    title: "Accounting Impacts",
    blurb: "Ledger entries and journal impacts verified against expected outcomes.",
  },
  {
    icon: ScanSearch,
    title: "Limits",
    blurb: "Credit and transactional limit states checked across relevant system states.",
  },
  {
    icon: Bell,
    title: "Statuses",
    blurb: "Account, loan, and process statuses validated to confirm correct progression.",
  },
];

const problems = [
  "Static data failure — fixed inputs break as time moves.",
  "Missing processes — isolated scripts miss integration failures.",
  "Slow manual validation — repetitive human checking eats the UAT window.",
  "Multi-day hardship — no static tool can replicate EOD cycles.",
  "System complexity — dependencies span every connected application.",
  "Inflexible re-running — re-testing with new data means starting over.",
];

export default function TestNovaPage() {
  return (
    <>
      <Hero />

      <ProductValue />

      <CapabilityRows
        eyebrow="What It Does"
        heading="Testing built for how banks actually run"
        items={whatItDoes}
        tone="alt"
      />

      <NumberedSteps
        eyebrow="How It Works"
        heading="Three levels that mirror how a bank operates"
        steps={howItWorks}
      />

      <FeatureCards
        eyebrow="Intelligent Validation"
        heading="Verification through observation, not just execution"
        intro="TestNova separates the doing from the checking. Business processes are executed once; outcomes are then validated using Test Result Verification Scenarios (TRVS) that observe the system directly — so TestNova doesn't just tell you the process ran, it tells you the process worked."
        items={verification}
        tone="alt"
      />

      <ProblemsGrid
        heading="Six pitfalls solved"
        problems={problems}
      />

      <ProductFinalCta subtext="See how TestNova validates entire business processes — not just code — in your own environment." />
    </>
  );
}
