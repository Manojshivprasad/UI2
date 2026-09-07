"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Lightbulb } from "lucide-react";
import { cn } from "@/lib/cn";

const bars = [
  { label: "Mon", value: 42, count: "4,212", insight: "Typical start-of-week volume." },
  { label: "Tue", value: 58, count: "5,804", insight: "Steady uptick after Monday close." },
  { label: "Wed", value: 51, count: "5,109", insight: "Mid-week volume holding steady." },
  { label: "Thu", value: 73, count: "7,340", insight: "Above-average — batch jobs ran overnight." },
  { label: "Fri", value: 66, count: "6,608", insight: "Pre-weekend settlement push." },
  { label: "Sat", value: 39, count: "3,910", insight: "Weekend baseline, mostly automated." },
  { label: "Sun", value: 84, count: "12,482", insight: "Auto-flagged as an anomaly worth reviewing." },
];

const maxValue = Math.max(...bars.map((b) => b.value));

export function InsightChartMock({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = useState(bars.length - 1);
  const active = bars[selected];

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-3xl border border-border-warm bg-white p-6 shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Reconciliation volume — {active.label}
          </p>
          <p className="mt-1 font-heading text-2xl font-bold text-foreground">
            {active.count}
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
          <TrendingUp className="size-3" aria-hidden="true" />
          +18%
        </span>
      </div>

      <div className="mt-6 flex gap-2.5">
        {bars.map((bar, i) => {
          const isSelected = i === selected;
          return (
            <button
              key={bar.label}
              type="button"
              onClick={() => setSelected(i)}
              aria-pressed={isSelected}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <div className="relative h-24 w-full">
                <motion.div
                  className={cn(
                    "absolute bottom-0 left-0 w-full rounded-t-md transition-colors duration-200",
                    isSelected ? "bg-accent" : "bg-accent/25 hover:bg-accent/40"
                  )}
                  initial={shouldReduceMotion ? undefined : { height: 0 }}
                  whileInView={{ height: `${(bar.value / maxValue) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
                  style={shouldReduceMotion ? { height: `${(bar.value / maxValue) * 100}%` } : undefined}
                />
              </div>
              <span
                className={cn(
                  "text-[9px] font-medium transition-colors duration-200",
                  isSelected ? "text-accent" : "text-muted-foreground/70"
                )}
              >
                {bar.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-surface-alt/70 p-3.5">
        <Lightbulb className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
        <p className="text-[11px] leading-relaxed text-foreground">{active.insight}</p>
      </div>
    </div>
  );
}
