"use client";

import { useState } from "react";
import { resolveExpr } from "./data";
import { inputCls } from "./ui";
import { cn } from "@/lib/cn";

const presets = ["#TSD", "#TSD+1", "#TSD_M+1", "#TSD_ME", "#BD+2", "#BD-2", "#BD_M+12"];

/** Enter a sample start date and see each TSD / BD expression resolve — the TSD Reference panel. */
export function TsdCalculator({
  expressions = presets,
  compact = false,
  className,
}: {
  expressions?: string[];
  compact?: boolean;
  className?: string;
}) {
  const [tsd, setTsd] = useState("2025-07-10");
  const [custom, setCustom] = useState("#BD+5");
  const customResult = resolveExpr(custom, tsd);

  return (
    <div className={cn("w-full", className)}>
      <label className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
        Test Start Date (TSD)
        <input
          type="date"
          value={tsd}
          onChange={(e) => setTsd(e.target.value)}
          className={inputCls}
          aria-label="Sample test start date"
        />
      </label>

      <ul className={cn("mt-3 divide-y divide-border-warm rounded-xl border border-border-warm bg-white", compact ? "text-[11px]" : "text-xs")}>
        {expressions.map((expr) => (
          <li key={expr} className="flex items-center justify-between gap-3 px-3 py-2">
            <code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-foreground">{expr}</code>
            <span className="font-semibold text-foreground">{resolveExpr(expr, tsd) ?? "—"}</span>
          </li>
        ))}
        <li className="flex items-center justify-between gap-3 px-3 py-2">
          <input
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            spellCheck={false}
            aria-label="Try your own expression"
            className={cn(inputCls, "w-28 font-mono")}
          />
          <span className={cn("font-semibold", customResult ? "text-accent" : "text-muted-foreground/60")}>
            {customResult ?? "try #TSD+n"}
          </span>
        </li>
      </ul>
    </div>
  );
}
