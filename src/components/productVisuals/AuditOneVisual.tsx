"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { MockWindow } from "./MockWindow";
import { useLoopStep } from "@/lib/useLoopStep";

const checks = [
  "KYC records reconciled",
  "Transaction logs verified",
  "Access control audit",
  "Regulatory report generated",
];

export function AuditOneVisual() {
  const step = useLoopStep(checks.length, 850);
  const done = step >= checks.length;

  return (
    <MockWindow label="AuditOne — Live Audit">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-muted-foreground">
          Q3 Compliance Sweep
        </span>
        <span
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300",
            done ? "bg-emerald-100 text-emerald-700" : "bg-accent/10 text-accent"
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              done ? "bg-emerald-600" : "animate-pulse bg-accent"
            )}
          />
          {done ? "All Checks Passed" : "Scanning…"}
        </span>
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {checks.map((label, i) => {
          const checked = step > i;
          return (
            <li
              key={label}
              className="flex items-center gap-3 rounded-lg border border-border-warm bg-background px-3 py-2.5"
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                  checked ? "border-accent bg-accent" : "border-border-warm bg-transparent"
                )}
              >
                {checked && <Check className="size-3 text-on-accent" strokeWidth={3} />}
              </span>
              <span
                className={cn(
                  "text-sm transition-colors duration-300",
                  checked ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </MockWindow>
  );
}
