"use client";

import { useState } from "react";
import {
  Users,
  MonitorSmartphone,
  Share2,
  Server,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

const layers: { icon: LucideIcon; label: string; description: string }[] = [
  {
    icon: Users,
    label: "Users",
    description: "Relationship managers, auditors, and ops teams — on web and mobile.",
  },
  {
    icon: MonitorSmartphone,
    label: "Application",
    description: "The AuditOne console — dashboards, workflows, and case management.",
  },
  {
    icon: Share2,
    label: "API Layer",
    description: "Secure REST endpoints for internal tools and partner integrations.",
  },
  {
    icon: Server,
    label: "Platform",
    description: "Multi-tenant core services: auth, orchestration, and audit logging.",
  },
  {
    icon: Landmark,
    label: "Banking Systems",
    description: "Core banking, payments, and ledger systems AuditOne connects to.",
  },
];

export function LayeredStackMock({ className }: { className?: string }) {
  const [selected, setSelected] = useState(layers.length - 1);
  const active = layers[selected];

  return (
    <div
      className={cn(
        "flex w-full max-w-sm flex-col items-center gap-2.5 rounded-3xl border border-border-warm bg-white/60 p-8 shadow-sm",
        className
      )}
    >
      {layers.map((layer, i) => {
        const isSelected = i === selected;
        return (
          <button
            key={layer.label}
            type="button"
            onClick={() => setSelected(i)}
            aria-pressed={isSelected}
            className={cn(
              "flex items-center gap-3 rounded-2xl border px-5 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5",
              isSelected
                ? "border-accent bg-accent text-on-accent"
                : "border-border-warm bg-white text-foreground hover:border-accent/40"
            )}
            style={{ width: `${100 - i * 9}%` }}
          >
            <layer.icon className="size-4 shrink-0" aria-hidden="true" />
            <span className="text-sm font-semibold">{layer.label}</span>
          </button>
        );
      })}

      <p className="mt-3 min-h-8 text-center text-[11px] leading-relaxed text-muted-foreground">
        {active.description}
      </p>
    </div>
  );
}
