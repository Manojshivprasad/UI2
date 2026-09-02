"use client";

import { Lightbulb, ShieldCheck, Database, BrainCircuit } from "lucide-react";
import { ArticleListing } from "@/components/ArticleListing";

const articles = [
  {
    category: "Core Banking",
    tag: "Core Banking",
    icon: Lightbulb,
    title: "[Placeholder] What a 4th-generation core actually changes",
    excerpt: "[Placeholder] A look at what separates modern core platforms from legacy systems in practice.",
    date: "[Placeholder date]",
  },
  {
    category: "Compliance",
    tag: "Compliance",
    icon: ShieldCheck,
    title: "[Placeholder] Staying audit-ready during a core migration",
    excerpt: "[Placeholder] How to keep regulators satisfied while your systems are mid-transition.",
    date: "[Placeholder date]",
  },
  {
    category: "Data Migration",
    tag: "Data Migration",
    icon: Database,
    title: "[Placeholder] Reconciliation strategies that actually scale",
    excerpt: "[Placeholder] Lessons from large-scale data migrations across multiple markets.",
    date: "[Placeholder date]",
  },
  {
    category: "AI & Automation",
    tag: "AI & Automation",
    icon: BrainCircuit,
    title: "[Placeholder] Where agentic AI fits in banking operations today",
    excerpt: "[Placeholder] A practical view of what autonomous agents can and can't do yet.",
    date: "[Placeholder date]",
  },
  {
    category: "Core Banking",
    tag: "Core Banking",
    icon: Lightbulb,
    title: "[Placeholder] Buy vs. build: choosing a core banking vendor",
    excerpt: "[Placeholder] A framework for evaluating platform partners against your roadmap.",
    date: "[Placeholder date]",
  },
  {
    category: "Compliance",
    tag: "Compliance",
    icon: ShieldCheck,
    title: "[Placeholder] The real cost of manual compliance reviews",
    excerpt: "[Placeholder] Why manual review processes quietly become the bottleneck.",
    date: "[Placeholder date]",
  },
];

export default function InsightsPage() {
  return (
    <ArticleListing
      eyebrow="Resources"
      heading="[Placeholder] Insights"
      subtext="[Placeholder] Analysis and perspectives from our consultants on core banking, compliance, and modernization."
      categories={["Core Banking", "Compliance", "Data Migration", "AI & Automation"]}
      articles={articles}
    />
  );
}
