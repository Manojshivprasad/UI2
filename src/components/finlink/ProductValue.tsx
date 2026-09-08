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
            One interface for every banking connection.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            FinLink brings integration, API orchestration, and message
            delivery into a single governed layer — so your team stops
            maintaining brittle point-to-point links and starts shipping new
            connections in days, not months.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <FloatingCard
            icon={Radar}
            label="Live Monitoring"
            value="Real-Time"
            tone="positive"
            className="-left-3 -top-4 hidden sm:flex"
            floatDelay={0}
          />
          <FloatingCard
            icon={ShieldCheck}
            label="Access Control"
            value="Governed"
            tone="neutral"
            className="-right-3 -top-6 hidden sm:flex"
            floatDelay={0.7}
          />
          <FloatingCard
            icon={BellRing}
            label="Delivery Alerts"
            value="Instant"
            tone="warning"
            className="-bottom-4 -left-3 hidden sm:flex"
            floatDelay={1.4}
          />
          <FloatingCard
            icon={Layers}
            label="Systems Connected"
            value="24"
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
