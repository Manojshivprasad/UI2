"use client";

import { useEffect, useState } from "react";
import { Landmark, FileStack, CreditCard, Users, Play } from "lucide-react";
import { cn } from "@/lib/cn";

const systems = [
  { icon: Landmark, label: "Core Banking" },
  { icon: FileStack, label: "LOS" },
  { icon: CreditCard, label: "Payments" },
  { icon: Users, label: "CRM" },
];

export function OrchestrationGraph({ className }: { className?: string }) {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (step < 0 || step >= systems.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), 500);
    return () => clearTimeout(t);
  }, [step]);

  const run = () => {
    if (step === -1 || step >= systems.length) setStep(0);
  };
  const allChecked = step >= systems.length;

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-3xl border border-border-warm bg-white p-6 shadow-xl shadow-black/5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">Cross-System Check</span>
        <button
          type="button"
          onClick={run}
          disabled={step >= 0 && !allChecked}
          className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent transition-colors duration-200 hover:bg-accent/20 disabled:opacity-50"
        >
          <Play className="size-3" aria-hidden="true" /> Validate
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {systems.map((sys, i) => {
          const checked = i < step || allChecked;
          const active = i === step;
          return (
            <div
              key={sys.label}
              className={cn(
                "flex flex-col items-center gap-2 rounded-2xl border p-4 transition-colors duration-300",
                checked
                  ? "border-emerald-500/50 bg-emerald-50"
                  : active
                    ? "border-accent bg-accent/5"
                    : "border-border-warm bg-surface-alt/40"
              )}
            >
              <sys.icon
                className={cn(
                  "size-5",
                  checked ? "text-emerald-600" : active ? "text-accent" : "text-muted-foreground/50"
                )}
                aria-hidden="true"
              />
              <span className="text-[11px] font-medium text-foreground">{sys.label}</span>
              <span
                className={cn(
                  "text-[9px] font-semibold uppercase",
                  checked ? "text-emerald-600" : active ? "text-accent" : "text-muted-foreground/40"
                )}
              >
                {checked ? "Verified" : active ? "Checking…" : "Pending"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
