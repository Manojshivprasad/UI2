"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const endpoints = [
  { path: "/v2/payments", version: "v2", calls: "84/min" },
  { path: "/v1/accounts", version: "v1", calls: "212/min" },
  { path: "/v2/kyc", version: "v2", calls: "37/min" },
];

export function ApiOrchestrationPanel({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    "/v2/payments": true,
    "/v1/accounts": true,
    "/v2/kyc": false,
  });

  const activeCount = Object.values(enabled).filter(Boolean).length;

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border-warm bg-surface-alt/70 px-5 py-3">
        <span className="text-xs font-semibold text-foreground">API Gateway</span>
        <span className="ml-auto text-[10px] font-semibold text-muted-foreground">
          {activeCount}/{endpoints.length} active
        </span>
      </div>

      <ul className="divide-y divide-border-warm">
        {endpoints.map((ep) => {
          const isOn = enabled[ep.path];
          return (
            <li key={ep.path} className="flex items-center gap-3 px-5 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="truncate font-mono text-xs font-medium text-foreground">
                  {ep.path}
                </p>
                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  {ep.version} &middot; {isOn ? ep.calls : "paused"}
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={`Toggle ${ep.path}`}
                onClick={() =>
                  setEnabled((s) => ({ ...s, [ep.path]: !s[ep.path] }))
                }
                className={cn(
                  "relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200",
                  isOn ? "bg-accent" : "bg-border-warm"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform duration-200",
                    isOn ? "translate-x-[18px]" : "translate-x-0.5"
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
