import {
  Workflow,
  FolderArchive,
  ScanLine,
  ListChecks,
  Share2,
  Gauge,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { PartnershipComparison } from "@/components/services/PartnershipComparison";
import { FeatureCards } from "@/components/products/FeatureCards";
import { EngagementModels } from "@/components/services/EngagementModels";
import { ToolsAccelerators } from "@/components/services/ToolsAccelerators";
import { Differentiators } from "@/components/services/Differentiators";
import { Faq } from "@/components/Faq";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { WorkflowAutomationVisual } from "@/components/serviceVisuals/WorkflowAutomationVisual";

const ours = {
  name: "ThoughtsCrest",
  points: [
    {
      label: "Banking process expertise:",
      body: "We understand the multi-system, document-heavy processes banking operations actually run on.",
    },
    {
      label: "Full discovery-to-go-live:",
      body: "From current-state mapping through configuration, integration, and rollout.",
    },
    {
      label: "Local delivery:",
      body: "On-the-ground delivery and support across the markets we serve.",
    },
  ],
};

const partner = {
  name: "Newgen",
  points: [
    {
      label: "OmniDocs ECM/DMS:",
      body: "Content and records management with retention, legal holds, and granular access controls.",
    },
    {
      label: "Loan Origination System:",
      body: "A configurable LOS built for banking origination workflows.",
    },
    {
      label: "Low-code platform:",
      body: "NewgenONE iBPS for process and case management, plus AP Automation out of the box.",
    },
  ],
};

const whatWeDeliver = [
  {
    icon: Workflow,
    title: "Process Re-engineering & BPM",
    blurb:
      "Map current state, redesign on an Intelligent Process Automation Platform with SLA timers, escalations, exception queues, and audit trails.",
  },
  {
    icon: FolderArchive,
    title: "Content & Records",
    blurb:
      "Centralized document lifecycle on NewgenONE ECM with retention, legal holds, and granular access controls.",
  },
  {
    icon: ScanLine,
    title: "Intelligent Capture",
    blurb:
      "Branch and central scan flows, barcode/QR, OCR/ICR, classification, validation, maker-checker, and quality gates.",
  },
  {
    icon: ListChecks,
    title: "Business Rules & No-Code Apps",
    blurb:
      "Configurable forms, checklists, dynamic routing, and versioned rule packs for rapid change.",
  },
  {
    icon: Share2,
    title: "Systems Integration",
    blurb:
      "Ready connectors and REST APIs for core banking, LOS/LMS, CRM, AML/KYC, payments, SMS/email, and e-signature.",
  },
  {
    icon: Gauge,
    title: "Observability & Compliance",
    blurb:
      "Operational dashboards, KPI boards (TAT, WIP, aging), e-discovery, and regulator-ready audit logs.",
  },
];

const faqItems = [
  {
    question: "What automation platform do you build on?",
    answer:
      "We build on Newgen's NewgenONE platform — OmniDocs ECM, iBPS for low-code process and case management, and OmniScan for high-volume capture — configured to your existing banking workflows.",
  },
  {
    question: "What kinds of processes can you automate?",
    answer:
      "Document-heavy, multi-system processes such as customer onboarding, loan origination, accounts payable, and compliance case management — anywhere manual handoffs slow operations down.",
  },
  {
    question: "How quickly can you adapt workflows as our processes change?",
    answer:
      "Business rules, forms, and routing are configured on a low-code platform, so process changes are typically a configuration change rather than a development cycle.",
  },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      <ServiceHero
        title="Workflow Automation"
        subhead="Automate the manual, multi-system processes that slow banking operations down — with the controls, evidence, and reliability banking demands."
        visual={WorkflowAutomationVisual}
      />

      <PartnershipComparison ours={ours} partner={partner} />

      <FeatureCards
        id="offerings"
        eyebrow="What We Deliver"
        heading="Automation across the process lifecycle"
        items={whatWeDeliver}
        tone="alt"
      />

      <EngagementModels />
      <ToolsAccelerators />
      <Differentiators />
      <Faq title="Frequently asked questions" items={faqItems} />

      <ProductFinalCta
        heading="See it in your environment"
        subtext="Talk to our team about automating the processes slowing your banking operations down."
        primaryLabel="Book a Demo"
      />
    </>
  );
}
