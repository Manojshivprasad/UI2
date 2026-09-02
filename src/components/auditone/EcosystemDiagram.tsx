"use client";

import { useState } from "react";
import { LayoutGrid, ShieldCheck, Link2, FlaskConical, PieChart } from "lucide-react";
import { NodeChip } from "@/components/serviceVisuals/NodeChip";
import { cn } from "@/lib/cn";

const modules = [
  { key: "auditone", label: "AuditOne", icon: ShieldCheck, pos: "top" as const },
  { key: "finlink", label: "FinLink", icon: Link2, pos: "left" as const },
  { key: "testnova", label: "TestNova", icon: FlaskConical, pos: "right" as const },
  { key: "asset360", label: "Asset360", icon: PieChart, pos: "bottom" as const },
];

const posClasses: Record<string, string> = {
  top: "left-1/2 top-0 -translate-x-1/2",
  bottom: "left-1/2 bottom-0 -translate-x-1/2",
  left: "left-0 top-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 -translate-y-1/2",
};

const lineClasses: Record<string, string> = {
  top: "left-1/2 top-0 h-1/2 w-px -translate-x-1/2",
  bottom: "left-1/2 bottom-0 h-1/2 w-px -translate-x-1/2",
  left: "left-0 top-1/2 h-px w-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 h-px w-1/2 -translate-y-1/2",
};

export function EcosystemDiagram() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {modules.map((m) => (
        <div
          key={m.key}
          className={cn(
            "absolute bg-border-warm transition-colors duration-300",
            lineClasses[m.pos],
            selected === m.key && "bg-accent"
          )}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <NodeChip icon={LayoutGrid} label="Platform" filled size="lg" />
      </div>

      {modules.map((m) => (
        <button
          key={m.key}
          type="button"
          onClick={() => setSelected((s) => (s === m.key ? null : m.key))}
          className={cn("absolute cursor-pointer", posClasses[m.pos])}
          aria-pressed={selected === m.key}
        >
          <NodeChip
            icon={m.icon}
            label={m.label}
            active={selected === null || selected === m.key}
            filled={selected === m.key}
          />
        </button>
      ))}
    </div>
  );
}
