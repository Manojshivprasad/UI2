"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const days = [
  { label: "Day 1", balance: "$10,000.00", note: "Loan disbursed." },
  { label: "Day 15", balance: "$10,041.20", note: "Interest accrued mid-cycle." },
  { label: "EOD 30", balance: "$10,083.50", note: "Month-end interest posted." },
  { label: "Day 45", balance: "$9,583.50", note: "First repayment applied." },
];

export function TimeAwareScrubber({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const day = days[active];

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-3xl border border-border-warm bg-white p-6 shadow-xl shadow-black/5",
        className
      )}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
        Loan account balance
      </p>
      <p className="mt-1 font-heading text-2xl font-bold text-foreground">
        {day.balance}
      </p>

      <div className="relative mt-6">
        <div className="h-1 w-full rounded-full bg-border-warm" />
        <div
          className="absolute inset-y-0 left-0 h-1 rounded-full bg-accent transition-all duration-300"
          style={{ width: `${(active / (days.length - 1)) * 100}%` }}
        />
        <div className="mt-3 flex justify-between">
          {days.map((d, i) => (
            <button
              key={d.label}
              type="button"
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-1.5"
            >
              <span
                className={cn(
                  "size-3 rounded-full border-2 transition-colors duration-200",
                  i <= active ? "border-accent bg-accent" : "border-border-warm bg-white"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium",
                  i === active ? "text-accent" : "text-muted-foreground/60"
                )}
              >
                {d.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 rounded-2xl bg-surface-alt/70 p-3.5 text-[11px] leading-relaxed text-foreground">
        {day.note}
      </p>
    </div>
  );
}
