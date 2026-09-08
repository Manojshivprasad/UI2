"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

const lifecycle = [
  { title: "Acquisition & Registration", blurb: "Record new assets in the system." },
  { title: "Configuration", blurb: "Set attributes and depreciation rules." },
  { title: "Depreciation Processing", blurb: "Run periodic depreciation calculations." },
  { title: "Suspension or Adjustment", blurb: "Adjust depreciation if required." },
  { title: "Disposal or Sale", blurb: "Remove assets and account for profit/loss." },
];

export function InteractiveLifecycle() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Asset Lifecycle Management
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            End-to-end asset traceability
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Asset360 supports the complete lifecycle of an asset, ensuring
            traceability, audit history, and financial accuracy at every stage.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap">
            {lifecycle.map((stage, i) => (
              <button
                key={stage.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "flex flex-1 flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center transition-all duration-200",
                  i === active
                    ? "border-accent bg-white shadow-lg shadow-black/5"
                    : "border-border-warm bg-white/60 hover:border-accent/30"
                )}
              >
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full text-xs font-bold",
                    i === active
                      ? "bg-accent text-on-accent"
                      : i < active
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-surface-alt text-muted-foreground"
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "text-xs font-semibold",
                    i === active ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-lg rounded-2xl border border-border-warm bg-white p-5 text-center shadow-sm">
            <p className="text-sm leading-relaxed text-foreground">
              {lifecycle[active].blurb}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
