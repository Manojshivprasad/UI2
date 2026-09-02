"use client";

import { Radar, ShieldCheck, BellRing, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

export function ProductValue() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Everything your banking team needs. Nothing it doesn&apos;t.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            AuditOne brings monitoring, compliance, alerting and control into
            a single intelligent workspace — so your team spends less time
            stitching together reports and more time acting on what matters.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <FloatingCard
            icon={Radar}
            label="Real-Time Monitoring"
            value="Live"
            tone="positive"
            className="-left-3 -top-4 hidden sm:flex"
            floatDelay={0}
          />
          <FloatingCard
            icon={ShieldCheck}
            label="Automated Compliance"
            value="Auto"
            tone="neutral"
            className="-right-3 -top-6 hidden sm:flex"
            floatDelay={0.7}
          />
          <FloatingCard
            icon={BellRing}
            label="Intelligent Alerts"
            value="Smart"
            tone="warning"
            className="-bottom-4 -left-3 hidden sm:flex"
            floatDelay={1.4}
          />
          <FloatingCard
            icon={Layers}
            label="Centralized Control"
            value="Unified"
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
