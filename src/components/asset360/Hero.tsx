"use client";

import { TrendingUp, Calculator, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { PhoneMock } from "./PhoneMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

const badges = [
  "Full Lifecycle Coverage",
  "5-Book Depreciation",
  "Audit-Ready Reports",
  "Compliance-First Design",
];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Products
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          Asset360 — Fixed asset management, end to end
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          A complete solution to manage the entire lifecycle of fixed assets —
          from acquisition through disposal. Built to improve accuracy,
          control, and transparency across your organization.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border-warm bg-surface-alt px-3.5 py-1.5 text-xs font-semibold text-foreground"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact">Request a Demo</Button>
          <Button href="#platform" variant="ghost">
            Explore the Platform
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="relative mx-auto mt-16 max-w-4xl">
        <FloatingCard
          icon={TrendingUp}
          label="AUM Growth"
          value="+4.2%"
          tone="positive"
          className="-left-4 top-6 hidden sm:flex lg:-left-10"
          floatDelay={0}
        />
        <FloatingCard
          icon={Calculator}
          label="Depreciation Posted"
          value="$2.1M"
          tone="neutral"
          className="-right-4 top-24 hidden sm:flex lg:-right-12"
          floatDelay={0.8}
        />
        <FloatingCard
          icon={MapPin}
          label="Assets Tracked"
          value="4,208"
          tone="neutral"
          className="-right-2 bottom-20 hidden sm:flex lg:-right-8"
          floatDelay={1.6}
        />
        <FloatingCard
          icon={ShieldCheck}
          label="Compliance"
          value="Audit-Ready"
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
