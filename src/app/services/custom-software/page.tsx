import {
  FileSearch,
  ShieldCheck,
  Share2,
  FlaskConical,
  Rocket,
  BookOpen,
} from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { FeatureCards } from "@/components/products/FeatureCards";
import { EngagementModels } from "@/components/services/EngagementModels";
import { ToolsAccelerators } from "@/components/services/ToolsAccelerators";
import { Differentiators } from "@/components/services/Differentiators";
import { Faq } from "@/components/Faq";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { CloudInfraVisual } from "@/components/serviceVisuals/CloudInfraVisual";

const whatWeDeliver = [
  {
    icon: FileSearch,
    title: "Requirements & Solution Design",
    blurb:
      "Translate business requirements into a technical design that fits your existing architecture and compliance environment.",
  },
  {
    icon: ShieldCheck,
    title: "Secure-by-Design Development",
    blurb:
      "Security considerations built into the development process from day one, not retrofitted before launch.",
  },
  {
    icon: Share2,
    title: "System Integration",
    blurb:
      "Connect new software cleanly with your core banking, CRM, and third-party systems.",
  },
  {
    icon: FlaskConical,
    title: "Quality Engineering & UAT",
    blurb:
      "Structured test strategy and business-led UAT before anything reaches production.",
  },
  {
    icon: Rocket,
    title: "Deployment & Go-Live",
    blurb:
      "Managed release into your environment, with rollback plans and go-live support.",
  },
  {
    icon: BookOpen,
    title: "Handover, Documentation & Support",
    blurb:
      "Full documentation and knowledge transfer, so the software is yours to run and extend.",
  },
];

const faqItems = [
  {
    question: "Is your custom software built for banking compliance?",
    answer:
      "Yes — every build is developed within your compliance environment and regulatory requirements from the design phase onward, not adapted afterward.",
  },
  {
    question: "Do we own the code?",
    answer:
      "Yes — you own the code and the intellectual property for software we build for you.",
  },
  {
    question: "How do you keep custom builds predictable?",
    answer:
      "A structured requirements and solution design phase upfront, plus the same fixed-price, T&M, or outcome-based engagement models we use across every engagement.",
  },
];

export default function CustomSoftwarePage() {
  return (
    <>
      <ServiceHero
        title="Custom Software Development"
        subhead="Banking-grade custom software, built to your requirements and your compliance environment. Secure by design, delivered predictably, owned by you."
        visual={CloudInfraVisual}
      />

      <FeatureCards
        id="offerings"
        eyebrow="What We Deliver"
        heading="From requirements to handover"
        items={whatWeDeliver}
        tone="alt"
      />

      <EngagementModels />
      <ToolsAccelerators />
      <Differentiators />
      <Faq title="Frequently asked questions" items={faqItems} />

      <ProductFinalCta
        heading="See it in your environment"
        subtext="Talk to our team about the software gap only a custom build can close."
        primaryLabel="Book a Demo"
      />
    </>
  );
}
