"use client";

import { useState } from "react";
import {
  Check,
  AlertTriangle,
  MessageCircleMore,
  ShieldCheck,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HorizontalFlow } from "@/components/flow/HorizontalFlow";
import { FlowFrame } from "@/components/flow/FlowFrame";

function ReconciliationSnippet() {
  const items = ["1,204 transactions matched", "3 exceptions routed to review"];
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

function FraudSnippet() {
  const items = [
    { label: "Unusual login pattern flagged", tone: "warning" as const },
    { label: "Card testing pattern blocked", tone: "warning" as const },
  ];
  return (
    <ul className="flex w-full flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-start gap-2.5 rounded-lg border border-border-warm bg-background px-3.5 py-3"
        >
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span className="text-sm text-foreground">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function CustomerOpsSnippet() {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="flex items-center gap-3 rounded-lg border border-border-warm bg-background px-3.5 py-3">
        <MessageCircleMore className="size-4 shrink-0 text-accent" aria-hidden="true" />
        <span className="text-sm text-foreground">
          Auto-resolved refund request
        </span>
      </div>
      <div className="flex items-center gap-3 rounded-lg border border-border-warm bg-background px-3.5 py-3">
        <ArrowRight className="size-4 shrink-0 text-accent" aria-hidden="true" />
        <span className="text-sm text-foreground">
          Escalated complaint to specialist
        </span>
      </div>
    </div>
  );
}

function ComplianceSnippet() {
  return (
    <div className="grid w-full grid-cols-2 gap-3">
      <div className="rounded-2xl border border-border-warm bg-background p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Compliance
        </p>
        <p className="mt-1 font-heading text-2xl font-bold text-foreground">100%</p>
      </div>
      <div className="rounded-2xl border border-border-warm bg-background p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Flags Reviewed
        </p>
        <p className="mt-1 font-heading text-2xl font-bold text-foreground">24/24</p>
      </div>
    </div>
  );
}

function CreditOpsSnippet() {
  return (
    <HorizontalFlow
      nodes={[
        { icon: FileSearch, label: "Application" },
        { icon: ShieldCheck, label: "Risk Check" },
        { icon: Check, label: "Decision" },
      ]}
    />
  );
}

const useCases = [
  { key: "reconciliation", label: "Reconciliation", snippet: <ReconciliationSnippet /> },
  { key: "fraud", label: "Fraud Monitoring", snippet: <FraudSnippet /> },
  { key: "customer-ops", label: "Customer Operations", snippet: <CustomerOpsSnippet /> },
  { key: "compliance", label: "Compliance Monitoring", snippet: <ComplianceSnippet /> },
  { key: "credit-ops", label: "Credit Ops", snippet: <CreditOpsSnippet /> },
];

function UseCaseTabs() {
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

export function UseCases() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-10">
      <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Use Cases
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          [Placeholder] Agents already at work across the bank
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <UseCaseTabs />
      </ScrollReveal>
    </section>
  );
}
