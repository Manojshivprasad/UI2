"use client";

import { CheckCircle2, Zap, AlertTriangle, Activity } from "lucide-react";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { PhoneMock } from "./PhoneMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Products
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          TestNova — Banking automation that actually works like a bank
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          An end-to-end automation platform built for the integrated
          complexity of modern banking. Validates entire business processes —
          not just code — so you deploy with confidence and full audit-ready
          evidence.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact/book-a-consultation">Book a Demo</Button>
          <Button href="#platform" variant="ghost">
            Explore the Platform
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="relative mx-auto mt-16 max-w-4xl">
        <FloatingCard
          icon={CheckCircle2}
          label="Pass Rate"
          value="98.2%"
          tone="positive"
          className="-left-4 top-6 hidden sm:flex lg:-left-10"
          floatDelay={0}
        />
        <FloatingCard
          icon={Zap}
          label="Avg Run Time"
          value="4m 12s"
          tone="neutral"
          className="-right-4 top-24 hidden sm:flex lg:-right-12"
          floatDelay={0.8}
        />
        <FloatingCard
          icon={AlertTriangle}
          label="Flaky Tests"
          value="1"
          tone="warning"
          className="-right-2 bottom-20 hidden sm:flex lg:-right-8"
          floatDelay={1.6}
        />
        <FloatingCard
          icon={Activity}
          label="Scenarios Run"
          value="12,480"
          tone="positive"
          className="-left-2 bottom-6 hidden sm:flex lg:-left-8"
          floatDelay={2.4}
        />

        <DashboardMock />

        <div className="absolute bottom-0 right-0 hidden w-40 translate-x-[30%] translate-y-[45%] sm:block lg:right-2 lg:w-48">
          <PhoneMock />
        </div>
      </ScrollReveal>
    </section>
  );
}
