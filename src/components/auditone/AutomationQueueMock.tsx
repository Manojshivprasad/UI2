"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Workflow, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

const tasks = [
  "Reconcile ledger entries",
  "Validate KYC batch",
  "Flag policy exceptions",
  "Publish audit report",
];

export function AutomationQueueMock({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || paused) return;
    const id = setInterval(() => {
      setStep((s) => (s + 1) % (tasks.length + 2));
    }, 900);
    return () => clearInterval(id);
  }, [shouldReduceMotion, paused]);

  const activeStep = shouldReduceMotion ? tasks.length : Math.min(step, tasks.length);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className={cn(
        "w-full max-w-md overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border-warm bg-surface-alt/70 px-5 py-3">
        <Workflow className="size-4 text-accent" aria-hidden="true" />
        <span className="text-xs font-semibold text-foreground">Automation Log</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold text-accent">
          <span
            className={cn(
              "size-1.5 rounded-full bg-accent",
              !paused && "animate-pulse"
            )}
          />
          {paused ? "Paused" : "Running"}
        </span>
      </div>

      <ul className="flex flex-col divide-y divide-border-warm">
        {tasks.map((task, i) => {
          const state =
            i < activeStep ? "done" : i === activeStep ? "running" : "queued";
          return (
            <li key={task}>
              <button
                type="button"
                onClick={() => {
                  setPaused(true);
                  setStep(i + 1);
                }}
                className="flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors duration-200 hover:bg-surface-alt/60"
              >
              <span
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full border",
                  state === "done" && "border-emerald-500 bg-emerald-50 text-emerald-600",
                  state === "running" && "border-accent bg-accent/10 text-accent",
                  state === "queued" && "border-border-warm bg-surface-alt/60 text-muted-foreground/50"
                )}
              >
                {state === "done" && <CheckCircle2 className="size-3.5" aria-hidden="true" />}
                {state === "running" && <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />}
                {state === "queued" && <Clock className="size-3.5" aria-hidden="true" />}
              </span>
              <span
                className={cn(
                  "text-sm transition-colors duration-300",
                  state === "queued" ? "text-muted-foreground/60" : "text-foreground"
                )}
              >
                {task}
              </span>
              <span
                className={cn(
                  "ml-auto text-[10px] font-semibold uppercase tracking-wide",
                  state === "done" && "text-emerald-600",
                  state === "running" && "text-accent",
                  state === "queued" && "text-muted-foreground/40"
                )}
              >
                {state}
              </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
