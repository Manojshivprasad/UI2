"use client";

import { RefreshCw, ShieldCheck, ClipboardCheck, Filter } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

export function ProductValue() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Filter, audit, and verify — from a single console.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            AuditOne brings automatic data synchronization, multi-criteria
            filtering, and a full audit trail with reviewer comments into one
            workspace — so your team spends less time chasing records and
            more time closing findings.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <FloatingCard
            icon={RefreshCw}
            label="Data Sync & Timing"
            value="Live"
            tone="positive"
            className="-left-3 -top-4 hidden sm:flex"
            floatDelay={0}
          />
          <FloatingCard
            icon={Filter}
            label="Multi-Criteria Filters"
            value="Instant"
            tone="neutral"
            className="-right-3 -top-6 hidden sm:flex"
            floatDelay={0.7}
          />
          <FloatingCard
            icon={ClipboardCheck}
            label="Full Audit Trail"
            value="Logged"
            tone="neutral"
            className="-bottom-4 -left-3 hidden sm:flex"
            floatDelay={1.4}
          />
          <FloatingCard
            icon={ShieldCheck}
            label="Role-Based Access"
            value="RBAC"
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
