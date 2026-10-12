import {
  ScanSearch, BookCheck, Landmark, Bell, FileText, Boxes, ListX, ClipboardX, CalendarClock,
  LayoutDashboard, Server, CircleHelp, Copy,
} from "lucide-react";
import { Hero } from "@/components/testnova/Hero";
import { ProductValue } from "@/components/testnova/ProductValue";
import { RunLifecycleSection } from "@/components/testnova/RunLifecycleSection";
import { ChainedOutputs, DateExpressionsCard, StudioFlow, TestDataModes } from "@/components/testnova/Visuals";
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

const underTheHood = [
  {
    title: "Dates that never go stale",
    description:
      "Execution dates and test-data dates are written as expressions relative to the Test Start Date or Business Date — #TSD+1, #BD-2, #BD_M+12 — so the same test case resolves to the right date on any day it runs.",
    visual: <DateExpressionsCard />,
  },
  {
    title: "One scenario's output feeds the next",
    description:
      "Chain scenarios the way a real journey works: reference a customer or account created earlier as the input to the next scenario, with nothing to look up or re-enter.",
    visual: <ChainedOutputs />,
  },
  {
    title: "Bring your own data — or fetch it",
    description:
      "Upload a prepared Test Suite and have it validated against the scenario's fields, or let TestNova generate data from the server database with the SQL script attached to the scenario.",
    visual: <TestDataModes />,
  },
  {
    title: "Record it, don't script it",
    description:
      "TestNova Studio records a journey in the browser and generates the scenario script for you — review it, then copy, download or create the scenario in the folder you choose.",
    visual: <StudioFlow />,
  },
];

const reporting = [
  {
    icon: FileText,
    title: "Test Run Summary",
    blurb: "A downloadable summary of the whole execution, straight from the execution details page.",
  },
  {
    icon: Boxes,
    title: "Module Level Summary",
    blurb: "Choose a module and download a summary scoped to just that part of the bank.",
  },
  {
    icon: ListX,
    title: "Failed Business Processes",
    blurb: "A focused report of the business processes that failed, ready for triage.",
  },
  {
    icon: ClipboardX,
    title: "Failed Scenarios",
    blurb: "A focused report of the scenarios that failed, so the right team can pick them up fast.",
  },
];

const operations = [
  {
    icon: LayoutDashboard,
    title: "Execution dashboard",
    blurb: "An at-a-glance execution list you can search by test run, user or date range and sort by column.",
  },
  {
    icon: CalendarClock,
    title: "Scheduled executions",
    blurb: "Schedule a Test Run for later with a retry frequency and interval, then review, edit or cancel it from one list.",
  },
  {
    icon: Copy,
    title: "Clone and reuse",
    blurb: "Start a new Test Run from a proven set of business processes instead of rebuilding from scratch.",
  },
  {
    icon: Server,
    title: "Systems and servers",
    blurb: "Maintain systems, versions, users and servers — and point a single scenario at a different server when you need to.",
  },
  {
    icon: Boxes,
    title: "Modules",
    blurb: "Classify business processes by module — for example Teller, Standing Order, Lending and CASA.",
  },
  {
    icon: CircleHelp,
    title: "Guided tours",
    blurb: "Built-in help icons walk new users through every screen, one step at a time.",
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
        id="platform"
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

      <CapabilityRows
        eyebrow="Under the Hood"
        heading="The details that make bank-grade tests repeatable"
        items={underTheHood}
      />

      <RunLifecycleSection />

      <FeatureCards
        eyebrow="Intelligent Validation"
        heading="Verification through observation, not just execution"
        intro="TestNova separates the doing from the checking. Business processes are executed once; outcomes are then validated using Test Result Verification Scenarios (TRVS) that observe the system directly — so TestNova doesn't just tell you the process ran, it tells you the process worked."
        items={verification}
        tone="alt"
      />

      <FeatureCards
        eyebrow="Results & Reporting"
        heading="Evidence you can trace, down to the test case"
        intro="Every execution drills from Business Process to Scenario to individual Test Case, ending in a Testcase Summary with an Execution Events log — step-by-step evidence and, where a test case failed, the error details captured during execution."
        items={reporting}
        columns={2}
      />

      <FeatureCards
        eyebrow="Built for Teams"
        heading="Everything around the run, covered"
        items={operations}
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
