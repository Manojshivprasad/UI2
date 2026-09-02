"use client";

import {
  LayoutGrid,
  Bot,
  ClipboardList,
  Bell,
  Settings,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { useLoopStep } from "@/lib/useLoopStep";
import { cn } from "@/lib/cn";

const navIcons = [LayoutGrid, Bot, ClipboardList, Bell, Settings];

const feed = [
  {
    label: "Reconciled 342 transactions across 3 accounts",
    status: "auto" as const,
  },
  {
    label: "Flagged suspicious wire transfer for review",
    status: "escalated" as const,
  },
  {
    label: "Auto-approved refund under policy threshold",
    status: "auto" as const,
  },
  {
    label: "Routed loan exception to underwriting analyst",
    status: "pending" as const,
  },
];

const statusStyles = {
  auto: { label: "Auto-completed", icon: CheckCircle2, className: "bg-emerald-100 text-emerald-700" },
  pending: { label: "Pending approval", icon: Clock, className: "bg-accent/10 text-accent" },
  escalated: { label: "Escalated", icon: AlertTriangle, className: "bg-amber-100 text-amber-700" },
};

export function AgentConsole({ className }: { className?: string }) {
  const step = useLoopStep(feed.length, 950);
  const visible = Math.min(step + 1, feed.length);

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-surface-alt/70 px-5 py-3">
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">
          Agent Activity Console
        </span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" />
          Live
        </span>
      </div>

      <div className="flex">
        <div className="flex w-12 flex-col items-center gap-4 border-r border-border-warm bg-surface-alt/40 py-5">
          {navIcons.map((NavIcon, i) => (
            <span
              key={i}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                i === 1 ? "bg-accent text-on-accent" : "text-muted-foreground/50"
              )}
            >
              <NavIcon className="size-4" aria-hidden="true" />
            </span>
          ))}
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">
              Today&apos;s Task Feed
            </span>
            <span className="rounded-full bg-surface-alt px-2.5 py-1 text-[10px] font-semibold text-foreground">
              {visible}/{feed.length} shown
            </span>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5">
            {feed.slice(0, visible).map((item) => {
              const s = statusStyles[item.status];
              return (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border-warm bg-background px-3.5 py-3"
                >
                  <span className="text-[12px] leading-snug text-foreground">
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      "flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold",
                      s.className
                    )}
                  >
                    <s.icon className="size-3" aria-hidden="true" />
                    {s.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
