"use client";

import { FolderCheck, ShieldCheck, BellRing, BookCopy } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

export function ProductValue() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Every asset, one system of record.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Asset360 brings acquisition, depreciation, and disposal into a
            single unified system — so your finance team spends less time
            reconciling spreadsheets and more time on the numbers that
            matter.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="relative">
          <FloatingCard
            icon={FolderCheck}
            label="Centralized Records"
            value="Unified"
            tone="positive"
            className="-left-3 -top-4 hidden sm:flex"
            floatDelay={0}
          />
          <FloatingCard
            icon={ShieldCheck}
            label="Compliance"
            value="Audit-Ready"
            tone="neutral"
            className="-right-3 -top-6 hidden sm:flex"
            floatDelay={0.7}
          />
          <FloatingCard
            icon={BellRing}
            label="Review Alerts"
            value="Automated"
            tone="warning"
            className="-bottom-4 -left-3 hidden sm:flex"
            floatDelay={1.4}
          />
          <FloatingCard
            icon={BookCopy}
            label="Accounting Books"
            value="5 Parallel"
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
