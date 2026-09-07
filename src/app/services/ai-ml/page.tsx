import {
  MessageCircleMore,
  ClipboardCheck,
  BookOpen,
  Landmark,
  Users2,
  AlertTriangle,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureCards } from "@/components/products/FeatureCards";
import { EngagementModels } from "@/components/services/EngagementModels";
import { ToolsAccelerators } from "@/components/services/ToolsAccelerators";
import { Differentiators } from "@/components/services/Differentiators";
import { Faq } from "@/components/Faq";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { AiDataVisual } from "@/components/serviceVisuals/AiDataVisual";

const whatWeDeliver = [
  {
    icon: MessageCircleMore,
    title: "Customer Service & Support Automation",
    blurb:
      "AI agents that understand customer queries, retrieve relevant information, and prepare responses — reducing turnaround time.",
  },
  {
    icon: ClipboardCheck,
    title: "Operations & Back-Office Automation",
    blurb:
      "Document verification, case processing, exception handling, compliance checks, and internal approvals.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Assistant for Bank Staff",
    blurb:
      "Instant access to product information, SOPs, policy documents, process manuals, and regulatory guidelines.",
  },
  {
    icon: Landmark,
    title: "Core Banking & Application Support",
    blurb:
      "L1/L2 application support, issue triage, ticket analysis, root-cause assistance, and operational reporting.",
  },
  {
    icon: Users2,
    title: "Sales & Relationship Management Support",
    blurb:
      "Customer insights, product suggestions, document preparation, and follow-up tracking.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud & Risk Modelling",
    blurb:
      "Transaction scanning, anomaly detection, and risk scoring models built for regulatory scrutiny.",
  },
];

const faqItems = [
  {
    question: "What AI and ML solutions do you build for banks?",
    answer:
      "From fraud and risk models to document intelligence and agentic workflows — see our Agentic AI page for the governed-agent side of this work, built with our partner Lyzr.",
  },
  {
    question: "Are your AI models explainable and auditable?",
    answer:
      "Yes — explainability and audit-ready logs are a design requirement, not an afterthought, given the regulatory scrutiny banking models face.",
  },
  {
    question: "Can we run models on our own infrastructure?",
    answer:
      "Yes — our agentic AI work with Lyzr is cloud-agnostic and LLM-agnostic, deployable inside your own environment with no data leaving your estate.",
  },
];

export default function AiMlPage() {
  return (
    <>
      <ServiceHero
        title="AI & ML Services"
        subhead="We design, build, and deploy machine-learning and AI systems for banking — from fraud and risk models to document intelligence and agentic workflows — engineered for accuracy, explainability, and regulatory scrutiny."
        visual={AiDataVisual}
      />

      <FeatureCards
        id="offerings"
        eyebrow="What We Deliver"
        heading="Applied AI across banking operations"
        items={whatWeDeliver}
        tone="alt"
      />

      <EngagementModels />
      <ToolsAccelerators />
      <Differentiators />
      <Faq title="Frequently asked questions" items={faqItems} />

      <ProductFinalCta
        heading="See it in your environment"
        subtext="Talk to our team about where AI and ML fit in your banking operations."
        primaryLabel="Book a Demo"
      />
    </>
  );
}
