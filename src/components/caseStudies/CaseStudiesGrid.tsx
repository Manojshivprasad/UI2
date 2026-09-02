"use client";

import { useMemo, useState } from "react";
import { Building2, Landmark, PiggyBank, Database } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TagFilter } from "@/components/TagFilter";
import { CaseStudyCard } from "./CaseStudyCard";

const categories = ["Retail Banking", "Corporate Banking", "Microfinance", "Data Migration"];

const caseStudies = [
  {
    icon: Building2,
    client: "[Placeholder] Regional Bank A",
    industry: "Retail Banking",
    metric: "[Placeholder] 40% faster reconciliation",
  },
  {
    icon: Landmark,
    client: "[Placeholder] Regional Bank B",
    industry: "Corporate Banking",
    metric: "[Placeholder] 6-month core migration",
  },
  {
    icon: PiggyBank,
    client: "[Placeholder] Regional Bank C",
    industry: "Microfinance",
    metric: "[Placeholder] Zero-downtime cutover",
  },
  {
    icon: Database,
    client: "[Placeholder] Regional Bank D",
    industry: "Data Migration",
    metric: "[Placeholder] 2M+ records migrated with zero discrepancies",
  },
  {
    icon: Building2,
    client: "[Placeholder] Regional Bank E",
    industry: "Retail Banking",
    metric: "[Placeholder] Digital onboarding time cut by 60%",
  },
  {
    icon: Landmark,
    client: "[Placeholder] Regional Bank F",
    industry: "Corporate Banking",
    metric: "[Placeholder] Unified treasury operations across 3 markets",
  },
  {
    icon: PiggyBank,
    client: "[Placeholder] Regional Bank G",
    industry: "Microfinance",
    metric: "[Placeholder] Loan origination automated end-to-end",
  },
  {
    icon: Database,
    client: "[Placeholder] Regional Bank H",
    industry: "Data Migration",
    metric: "[Placeholder] Legacy core decommissioned on schedule",
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
