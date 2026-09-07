"use client";

import { ListChecks, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FloatingCard } from "@/components/flow/FloatingCard";
import { AgentConsole } from "./AgentConsole";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Agentic AI
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          Move beyond chatbots
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          We deploy governed banking agents that execute real workflows —
          with audit-ready logs, human-in-the-loop controls, and full data
          sovereignty. Built on a banking-grade agent platform, delivered by
          a team that understands banking.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact/book-a-consultation">
            Book a Consultation
          </Button>
          <Button href="#how-it-works" variant="ghost">
            See it in Action
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="relative mx-auto mt-16 max-w-4xl">
        <FloatingCard
          icon={ListChecks}
          label="Tasks Today"
          value="1,204"
          tone="neutral"
          className="-left-4 top-6 hidden sm:flex lg:-left-10"
          floatDelay={0}
        />
        <FloatingCard
          icon={CheckCircle2}
          label="Auto-Resolved"
          value="98%"
          tone="positive"
          className="-right-4 top-24 hidden sm:flex lg:-right-12"
          floatDelay={0.8}
        />
        <FloatingCard
          icon={Clock}
          label="Pending Review"
          value="12"
          tone="warning"
          className="-left-2 bottom-6 hidden sm:flex lg:-left-8"
          floatDelay={1.6}
        />

        <AgentConsole />
      </ScrollReveal>
    </section>
  );
}
