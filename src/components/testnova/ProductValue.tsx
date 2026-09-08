"use client";

import { Clock3, Share2, BellRing, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

export function ProductValue() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Confidence before every release, not after.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            TestNova validates integrated business processes end-to-end —
            time-aware, cross-system, and fully automated — so integration
            failures surface in test, not in production.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <FloatingCard
            icon={Clock3}
            label="Time-Aware Testing"
            value="EOD-Ready"
            tone="positive"
            className="-left-3 -top-4 hidden sm:flex"
            floatDelay={0}
          />
          <FloatingCard
            icon={Share2}
            label="Cross-System"
            value="4 Apps"
            tone="neutral"
            className="-right-3 -top-6 hidden sm:flex"
            floatDelay={0.7}
          />
          <FloatingCard
            icon={BellRing}
            label="Failure Alerts"
            value="Instant"
            tone="warning"
            className="-bottom-4 -left-3 hidden sm:flex"
            floatDelay={1.4}
          />
          <FloatingCard
            icon={Layers}
            label="Scenarios Automated"
            value="12,480"
            tone="neutral"
            className="-bottom-6 -right-3 hidden sm:flex"
            floatDelay={2.1}
          />
          <DashboardMock />
        </ScrollReveal>
      </div>
    </section>
  );
}
