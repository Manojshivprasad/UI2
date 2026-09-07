"use client";

import { useState } from "react";
import {
  LayoutGrid,
  ShieldCheck,
  ClipboardList,
  Bell,
  Settings,
  Check,
} from "lucide-react";
import { useLoopStep } from "@/lib/useLoopStep";
import { cn } from "@/lib/cn";

const navItems = [
  { icon: LayoutGrid, label: "Overview" },
  { icon: ShieldCheck, label: "Compliance" },
  { icon: ClipboardList, label: "Reports" },
  { icon: Bell, label: "Alerts" },
  { icon: Settings, label: "Settings" },
];

const checks = [
  "KYC records reconciled",
  "Transaction logs verified",
  "Access control audit",
  "Regulatory report generated",
];

const alerts = [
  { label: "Unusual login pattern flagged", tone: "warning" as const },
  { label: "Quarterly report submitted", tone: "positive" as const },
  { label: "Access review completed", tone: "positive" as const },
];

export function DashboardMock({ className }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const step = useLoopStep(checks.length, 900, hovered);
  const done = step >= checks.length;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "w-full overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-surface-alt/70 px-5 py-3">
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">
          {navItems[activeNav].label}
        </span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" />
          Live
        </span>
      </div>

      <div className="flex">
        <div className="flex w-12 flex-col items-center gap-4 border-r border-border-warm bg-surface-alt/40 py-5">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveNav(i)}
              aria-pressed={activeNav === i}
              aria-label={item.label}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg transition-colors duration-200",
                activeNav === i
                  ? "bg-accent text-on-accent"
                  : "text-muted-foreground/50 hover:bg-accent/10 hover:text-accent"
              )}
            >
              <item.icon className="size-4" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="flex-1 p-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-border-warm bg-background p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                Audit Score
              </p>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                98.4
              </p>
            </div>
            <div className="rounded-2xl border border-border-warm bg-background p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                Compliance
              </p>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                100%
              </p>
            </div>
            <div className="rounded-2xl border border-border-warm bg-background p-3.5">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                Open Findings
              </p>
              <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                {done ? "0" : "2"}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-5 gap-4">
            <div className="col-span-3 rounded-2xl border border-border-warm bg-background p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  Q3 Compliance Sweep
                </span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                    done ? "bg-emerald-100 text-emerald-700" : "bg-accent/10 text-accent"
                  )}
                >
                  {done ? "Passed" : "Scanning…"}
                </span>
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {checks.map((label, i) => {
                  const checked = step > i;
                  return (
                    <li key={label} className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                          checked
                            ? "border-accent bg-accent"
                            : "border-border-warm bg-transparent"
                        )}
                      >
                        {checked && (
                          <Check className="size-2.5 text-white" strokeWidth={3} />
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-[11px] transition-colors duration-300",
                          checked ? "text-foreground" : "text-muted-foreground/70"
                        )}
                      >
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-span-2 rounded-2xl border border-border-warm bg-background p-4">
              <span className="text-xs font-semibold text-muted-foreground">
                Recent Alerts
              </span>
              <ul className="mt-3 flex flex-col gap-2.5">
                {alerts.map((alert) => (
                  <li key={alert.label} className="flex items-start gap-2">
                    <span
                      className={cn(
                        "mt-1 size-1.5 shrink-0 rounded-full",
                        alert.tone === "positive" ? "bg-emerald-500" : "bg-accent"
                      )}
                    />
                    <span className="text-[11px] leading-snug text-foreground">
                      {alert.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
