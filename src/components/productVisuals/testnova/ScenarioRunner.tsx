"use client";

import { useEffect, useState } from "react";
import { Play, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

const steps = ["Loan Application", "Credit Check", "Approval", "Disbursement"];

export function ScenarioRunner({ className }: { className?: string }) {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (step < 0 || step >= steps.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 650);
    return () => clearTimeout(t);
  }, [step]);

  const run = () => {
    if (step === -1 || step >= steps.length) setStep(0);
  };

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border-warm bg-surface-alt/70 px-5 py-3">
        <span className="text-xs font-semibold text-foreground">
          Business Process: Loan Origination
        </span>
        <button
          type="button"
          onClick={run}
          disabled={step >= 0 && step < steps.length}
          className="ml-auto flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent transition-colors duration-200 hover:bg-accent/20 disabled:opacity-50"
        >
          <Play className="size-3" aria-hidden="true" /> Run
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-border-warm">
        {steps.map((label, i) => {
          const state = i < step ? "done" : i === step ? "running" : "queued";
          return (
            <li key={label} className="flex items-center gap-3 px-5 py-3.5">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                  state === "done" && "border-emerald-500 bg-emerald-50 text-emerald-600",
                  state === "running" && "border-accent bg-accent/10 text-accent",
                  state === "queued" && "border-border-warm bg-surface-alt/60 text-muted-foreground/50"
                )}
              >
                {state === "done" ? (
                  <Check className="size-3.5" aria-hidden="true" />
                ) : state === "running" ? (
                  <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={cn(
                  "text-sm",
                  state === "queued" ? "text-muted-foreground/60" : "text-foreground"
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
