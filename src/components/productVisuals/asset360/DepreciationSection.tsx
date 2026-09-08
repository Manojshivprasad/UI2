"use client";

import { useState } from "react";
import { TrendingDown, TrendingUp, BarChart3, Layers3 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

const methods = [
  {
    key: "SLM",
    icon: TrendingDown,
    title: "Straight Line Method",
    blurb: "Equal depreciation expense spread evenly over the asset's useful life.",
    points: [100, 80, 60, 40, 20, 0],
  },
  {
    key: "WDV",
    icon: TrendingUp,
    title: "Written Down Value",
    blurb: "Depreciation calculated as a percentage of the asset's remaining book value.",
    points: [100, 70, 49, 34, 24, 17],
  },
  {
    key: "DDB",
    icon: BarChart3,
    title: "Double Declining Balance",
    blurb: "An accelerated method that front-loads depreciation in earlier years.",
    points: [100, 60, 36, 22, 13, 8],
  },
  {
    key: "UOP",
    icon: Layers3,
    title: "Units of Production",
    blurb: "Depreciation tied directly to actual asset usage or output.",
    points: [100, 90, 55, 45, 25, 15],
  },
];

function buildPath(points: number[]) {
  const step = 100 / (points.length - 1);
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${100 - p}`).join(" ");
}

export function DepreciationSection() {
  const [active, setActive] = useState(0);
  const method = methods[active];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Depreciation Management
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            A robust, flexible depreciation engine
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Flexible scheduling, automatic journal entries, and support for 5
            accounting books (Financial, Tax, IFRS, and more).
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={0.1}
          className="mx-auto max-w-2xl rounded-3xl border border-border-warm bg-white p-6 shadow-xl shadow-black/5 sm:p-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {methods.map((m, i) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-200",
                  i === active
                    ? "border-accent bg-accent text-on-accent"
                    : "border-border-warm text-muted-foreground hover:border-accent/40"
                )}
              >
                <m.icon className="size-3.5" aria-hidden="true" />
                {m.key}
              </button>
            ))}
          </div>

          <div className="mt-6 h-40 w-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="size-full overflow-visible"
            >
              <path
                d={buildPath(method.points)}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className="mt-4 text-center">
            <p className="font-heading text-lg font-bold text-foreground">{method.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{method.blurb}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
