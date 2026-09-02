"use client";

import { FlagTriangleRight, BrainCircuit, Play, UserCheck, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HorizontalFlow } from "@/components/flow/HorizontalFlow";
import { FlowFrame } from "@/components/flow/FlowFrame";

const nodes = [
  { icon: FlagTriangleRight, label: "Trigger" },
  { icon: BrainCircuit, label: "Reason" },
  { icon: Play, label: "Act" },
  { icon: UserCheck, label: "Verify" },
  { icon: CheckCircle2, label: "Complete" },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            [Placeholder] Every action follows the same decision loop
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-14">
          <FlowFrame>
            <HorizontalFlow nodes={nodes} stepped size="md" />
          </FlowFrame>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
            [Placeholder] At <span className="font-semibold text-foreground">Verify</span>,
            a human approval gate applies automatically whenever a
            configured guardrail requires sign-off — otherwise the agent
            completes the task on its own.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
