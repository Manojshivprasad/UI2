"use client";

import { Check, Loader2 } from "lucide-react";
import { MockWindow } from "./MockWindow";
import { useLoopStep } from "@/lib/useLoopStep";

const tests = [
  "auth.spec.ts",
  "ledger.spec.ts",
  "payments.spec.ts",
  "reconciliation.spec.ts",
];

export function TestNovaVisual() {
  const step = useLoopStep(tests.length, 800);
  const passed = Math.min(step, tests.length);

  return (
    <MockWindow label="TestNova — Release Pipeline">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted-foreground">
          core-banking-release/v4.2
        </span>
        <span className="text-xs font-semibold text-foreground">
          {passed}/{tests.length} passed
        </span>
      </div>

      <ul className="mt-4 flex flex-col gap-2.5">
        {tests.map((name, i) => {
          const isPassed = i < passed;
          const isRunning = i === passed;
          return (
            <li
              key={name}
              className="flex items-center justify-between rounded-lg border border-border-warm bg-background px-3 py-2.5"
            >
              <span className="font-mono text-xs text-foreground">{name}</span>
              {isPassed ? (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <Check className="size-3.5" strokeWidth={3} />
                  passed
                </span>
              ) : isRunning ? (
                <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                  <Loader2 className="size-3.5 animate-spin" />
                  running
                </span>
              ) : (
                <span className="text-xs text-muted-foreground/60">queued</span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-border-warm">
        <div
          className="h-full rounded-full bg-accent transition-all duration-500"
          style={{ width: `${(passed / tests.length) * 100}%` }}
        />
      </div>
    </MockWindow>
  );
}
