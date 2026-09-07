"use client";

import { useMemo, useState } from "react";
import { Landmark, Banknote, Share2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TagFilter } from "@/components/TagFilter";
import { CaseStudyCard } from "./CaseStudyCard";

const categories = ["Core Banking", "Payments", "Enterprise Integration"];

const caseStudies = [
  {
    icon: Landmark,
    client: "ZB Holdings, Zimbabwe",
    industry: "Core Banking",
    metric:
      "Full core transformation delivered in 12 months — zero core customisations, 750,000 customers migrated.",
  },
  {
    icon: Landmark,
    client: "Mediterranean Bank",
    industry: "Core Banking",
    metric: "Fusion Essence modernization delivered on time and with disciplined risk control.",
  },
  {
    icon: Banknote,
    client: "National Bank of Kenya",
    industry: "Payments",
    metric:
      "Outward Payments rollout via BPM platform, with strong governance and evident domain depth.",
  },
  {
    icon: Share2,
    client: "Co-operative Bank of Kenya",
    industry: "Enterprise Integration",
    metric:
      "Enterprise-layer APIs, Trade and Treasury integrations, and governed BI extracts.",
  },
];

export function CaseStudiesGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? caseStudies
        : caseStudies.filter((cs) => cs.industry === active),
    [active]
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
      <ScrollReveal className="mb-12">
        <TagFilter tags={categories} active={active} onChange={setActive} />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cs, i) => (
          <ScrollReveal key={cs.client} delay={i * 0.06}>
            <CaseStudyCard caseStudy={cs} />
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No case studies match this filter yet.
        </p>
      )}
    </section>
  );
}
