"use client";

import { Zap, Users, FileClock, Share2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingCard } from "@/components/flow/FloatingCard";
import { AgentConsole } from "./AgentConsole";

export function ValueSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            [Placeholder] Work gets done. Your team stays in control.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            [Placeholder] Agentic AI takes on the repetitive operational work
            across your banking stack — reconciliation, monitoring, routine
            approvals — while every action stays logged, explainable, and
            escalated to a human whenever it matters.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <FloatingCard
            icon={Zap}
            label="Autonomous Execution"
            value="Auto"
            tone="positive"
            className="-left-3 -top-4 hidden sm:flex"
            floatDelay={0}
          />
          <FloatingCard
            icon={Users}
            label="Human-in-the-Loop"
            value="Gated"
            tone="neutral"
            className="-right-3 -top-6 hidden sm:flex"
            floatDelay={0.7}
          />
          <FloatingCard
            icon={FileClock}
            label="Full Audit Trail"
            value="Logged"
            tone="neutral"
            className="-bottom-4 -left-3 hidden sm:flex"
            floatDelay={1.4}
          />
          <FloatingCard
            icon={Share2}
            label="Cross-System Orchestration"
            value="Unified"
            tone="neutral"
            className="-bottom-6 -right-3 hidden sm:flex"
            floatDelay={2.1}
          />
          <AgentConsole />
        </ScrollReveal>
      </div>
    </section>
  );
}
