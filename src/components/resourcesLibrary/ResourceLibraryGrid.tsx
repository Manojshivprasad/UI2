"use client";

import { useMemo, useState } from "react";
import { BookOpen, ClipboardList, FileText, LayoutTemplate } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TagFilter } from "@/components/TagFilter";
import { ResourceCard } from "./ResourceCard";

const categories = ["Guides", "Playbooks", "Whitepapers", "Templates"];

const resources = [
  {
    icon: BookOpen,
    type: "Guides",
    format: "PDF",
    title: "How to buy a core banking system",
    blurb: "A step-by-step guide to evaluating and selecting a platform partner.",
  },
  {
    icon: ClipboardList,
    type: "Playbooks",
    format: "PDF",
    title: "The low-disruption migration playbook",
    blurb: "Our approach to cutover planning, mock runs, and reconciliation.",
  },
  {
    icon: FileText,
    type: "Whitepapers",
    format: "PDF",
    title: "The state of core banking modernization",
    blurb: "Market research on modernization trends across the markets we serve.",
  },
  {
    icon: LayoutTemplate,
    type: "Templates",
    format: "XLSX",
    title: "Vendor evaluation scorecard",
    blurb: "A ready-to-use template for comparing platform vendors.",
  },
  {
    icon: ClipboardList,
    type: "Playbooks",
    format: "PDF",
    title: "Regulatory reporting readiness checklist",
    blurb: "Make sure nothing slips through before your next audit.",
  },
  {
    icon: BookOpen,
    type: "Guides",
    format: "PDF",
    title: "Agentic AI for banking: a starter guide",
    blurb: "What to automate first, and how to keep humans in the loop.",
  },
];

export function ResourceLibraryGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? resources : resources.filter((r) => r.type === active)),
    [active]
  );

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
      <ScrollReveal className="mb-12">
        <TagFilter tags={categories} active={active} onChange={setActive} />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((resource, i) => (
          <ScrollReveal key={resource.title} delay={i * 0.06}>
            <ResourceCard resource={resource} />
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No resources match this filter yet.
        </p>
      )}
    </section>
  );
}
