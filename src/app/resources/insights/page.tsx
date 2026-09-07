"use client";

import { Lightbulb, ShieldCheck, Database, BrainCircuit } from "lucide-react";
import { ArticleListing } from "@/components/ArticleListing";

const articles = [
  {
    category: "Core Banking",
    tag: "Core Banking",
    icon: Lightbulb,
    title: "What a modern core actually changes",
    excerpt: "A look at what separates cloud-native, API-first core platforms from legacy systems in practice.",
    date: "5 min read",
  },
  {
    category: "Compliance",
    tag: "Compliance",
    icon: ShieldCheck,
    title: "Staying audit-ready during a core migration",
    excerpt: "How to keep regulators satisfied while your systems are mid-transition.",
    date: "6 min read",
  },
  {
    category: "Data Migration",
    tag: "Data Migration",
    icon: Database,
    title: "Reconciliation strategies that actually scale",
    excerpt: "Lessons from large-scale core banking data migrations across multiple markets.",
    date: "7 min read",
  },
  {
    category: "AI & Automation",
    tag: "AI & Automation",
    icon: BrainCircuit,
    title: "Where agentic AI fits in banking operations today",
    excerpt: "A practical view of what governed, human-in-the-loop agents can and can't do yet.",
    date: "5 min read",
  },
  {
    category: "Core Banking",
    tag: "Core Banking",
    icon: Lightbulb,
    title: "Buy vs. build: choosing a core banking vendor",
    excerpt: "A framework for evaluating platform partners against your roadmap.",
    date: "8 min read",
  },
  {
    category: "Compliance",
    tag: "Compliance",
    icon: ShieldCheck,
    title: "The real cost of manual compliance reviews",
    excerpt: "Why manual review processes quietly become the bottleneck.",
    date: "4 min read",
  },
];

export default function InsightsPage() {
  return (
    <ArticleListing
      eyebrow="Resources"
      heading="Insights"
      subtext="Analysis and perspectives from our consultants on core banking, compliance, and modernization."
      categories={["Core Banking", "Compliance", "Data Migration", "AI & Automation"]}
      articles={articles}
    />
  );
}
