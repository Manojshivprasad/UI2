"use client";

import { useState } from "react";
import { Check, Landmark, Share2, Link2, Server, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/cn";
import { HorizontalFlow } from "@/components/flow/HorizontalFlow";
import { VerticalFlow } from "@/components/flow/VerticalFlow";
import { FlowFrame } from "@/components/flow/FlowFrame";

function MetricSnippet() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <div className="rounded-2xl border border-border-warm bg-background p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Audit Score
        </p>
        <p className="mt-1 font-heading text-2xl font-bold text-foreground">98.4</p>
      </div>
      <div className="rounded-2xl border border-border-warm bg-background p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Compliance
        </p>
        <p className="mt-1 font-heading text-2xl font-bold text-foreground">100%</p>
      </div>
    </div>
  );
}

function ChecklistSnippet() {
  const items = ["Reconciliation complete", "Ledger balanced", "Report filed"];
  return (
    <ul className="flex w-full flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-lg border border-border-warm bg-background px-3.5 py-2.5"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-accent">
            <Check className="size-3 text-on-accent" strokeWidth={3} />
          </span>
          <span className="text-sm text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function AlertsSnippet() {
  const items = [
    { label: "Unusual login pattern flagged", tone: "warning" as const },
    { label: "Access review completed", tone: "positive" as const },
  ];
  return (
    <ul className="flex w-full flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-start gap-2.5 rounded-lg border border-border-warm bg-background px-3.5 py-3"
        >
          <span
            className={cn(
              "mt-1 size-1.5 shrink-0 rounded-full",
              item.tone === "positive" ? "bg-emerald-500" : "bg-accent"
            )}
          />
          <span className="text-sm text-foreground">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

const useCases = [
  { key: "banks", label: "Banks", snippet: <MetricSnippet /> },
  {
    key: "fintechs",
    label: "Fintechs",
    snippet: (
      <HorizontalFlow
        nodes={[
          { icon: Landmark, label: "Core Banking" },
          { icon: Share2, label: "API" },
          { icon: Link2, label: "Fintech Rails" },
        ]}
      />
    ),
  },
  { key: "financial-ops", label: "Financial Operations", snippet: <ChecklistSnippet /> },
  { key: "compliance", label: "Compliance Teams", snippet: <AlertsSnippet /> },
  {
    key: "technology",
    label: "Technology Teams",
    snippet: (
      <VerticalFlow
        nodes={[
          { icon: MonitorSmartphone, label: "Application" },
          { icon: Share2, label: "API Layer" },
          { icon: Server, label: "Platform", filled: true },
        ]}
      />
    ),
  },
];

export function UseCaseTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14">
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {useCases.map((uc, i) => (
          <button
            key={uc.key}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors duration-200",
              i === active
                ? "border-accent bg-accent/10 text-accent"
                : "border-border-warm text-muted-foreground hover:border-accent/30"
            )}
          >
            {uc.label}
          </button>
        ))}
      </div>

      <FlowFrame>{useCases[active].snippet}</FlowFrame>
    </div>
  );
}
