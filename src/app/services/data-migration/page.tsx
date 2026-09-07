import {
  ClipboardList,
  SprayCan,
  Repeat,
  FlaskConical,
  Rocket,
  FileCheck2,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureCards } from "@/components/products/FeatureCards";
import { EngagementModels } from "@/components/services/EngagementModels";
import { ToolsAccelerators } from "@/components/services/ToolsAccelerators";
import { Differentiators } from "@/components/services/Differentiators";
import { Faq } from "@/components/Faq";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { DigitalTransformationVisual } from "@/components/serviceVisuals/DigitalTransformationVisual";

const whatWeDeliver = [
  {
    icon: ClipboardList,
    title: "Migration Assessment & Strategy",
    blurb:
      "Profile source systems and define a migration approach scoped to your data volumes, timeline, and risk tolerance.",
  },
  {
    icon: SprayCan,
    title: "Data Profiling & Cleansing",
    blurb:
      "Identify data quality issues early and remediate them before they reach the target system.",
  },
  {
    icon: Repeat,
    title: "ETL Build & Reconciliation",
    blurb:
      "Extract, transform, and load pipelines paired with automated reconciliation at every stage.",
  },
  {
    icon: FlaskConical,
    title: "Mock Runs & Dress Rehearsals",
    blurb:
      "Full rehearsal migrations against production-like data to surface issues before cutover.",
  },
  {
    icon: Rocket,
    title: "Cutover Execution & Go-Live Support",
    blurb:
      "Hands-on support through the live cutover window, with rollback plans ready if needed.",
  },
  {
    icon: FileCheck2,
    title: "Audit Trail & Compliance Reporting",
    blurb:
      "Full traceability of every record migrated, with reports ready for regulators and auditors.",
  },
];

const faqItems = [
  {
    question: "How do you keep data accurate during migration?",
    answer:
      "Automated reconciliation at every stage of the ETL pipeline, plus dedicated data profiling and cleansing before any record reaches the target system.",
  },
  {
    question: "How do you speed up migration without adding risk?",
    answer:
      "Our Migration Factory Accelerator standardizes the ETL and reconciliation approach across projects, so teams aren't rebuilding the same pipeline logic from scratch.",
  },
  {
    question: "Can you migrate between different core banking systems?",
    answer:
      "Yes — our migration approach is platform-agnostic; we've moved data between multiple core banking systems, not just within a single vendor's ecosystem.",
  },
];

export default function DataMigrationPage() {
  return (
    <>
      <ServiceHero
        title="Data Migration"
        subhead="Move data between core systems with accuracy and confidence. Our Migration Factory Accelerator reduces risk and timeline on the migrations that keep teams up at night."
        visual={DigitalTransformationVisual}
      />

      <FeatureCards
        id="offerings"
        eyebrow="What We Deliver"
        heading="Every stage, reconciled"
        items={whatWeDeliver}
        tone="alt"
      />

      <EngagementModels />
      <ToolsAccelerators />
      <Differentiators />
      <Faq title="Frequently asked questions" items={faqItems} />

      <ProductFinalCta
        heading="See it in your environment"
        subtext="Talk to our team about the migration that's keeping you up at night."
        primaryLabel="Book a Demo"
      />
    </>
  );
}
