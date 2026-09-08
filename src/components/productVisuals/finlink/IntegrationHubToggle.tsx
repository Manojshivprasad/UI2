"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Landmark,
  CreditCard,
  Smartphone,
  Building2,
  Boxes,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/cn";

const systems = [
  { icon: Landmark, label: "Core Banking", x: 50, y: 8 },
  { icon: CreditCard, label: "Payments", x: 90, y: 32 },
  { icon: Smartphone, label: "Mobile App", x: 76, y: 82 },
  { icon: Building2, label: "Third-Party", x: 24, y: 82 },
  { icon: Boxes, label: "Channels", x: 10, y: 32 },
];

const meshEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [0, 2],
  [1, 3],
  [2, 4],
];

export function IntegrationHubToggle({ className }: { className?: string }) {
  const [connected, setConnected] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-3xl border border-border-warm bg-white p-6 shadow-xl shadow-black/5",
        className
      )}
    >
      <div className="flex items-center justify-center gap-1 rounded-full bg-surface-alt p-1">
        <button
          type="button"
          onClick={() => setConnected(false)}
          className={cn(
            "flex-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200",
            !connected ? "bg-white text-foreground shadow-sm" : "text-muted-foreground"
          )}
        >
          Point-to-point
        </button>
        <button
          type="button"
          onClick={() => setConnected(true)}
          className={cn(
            "flex-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200",
            connected ? "bg-accent text-on-accent shadow-sm" : "text-muted-foreground"
          )}
        >
          With FinLink
        </button>
      </div>

      <div className="relative mt-6 aspect-square w-full">
        <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 100 100">
          {connected
            ? systems.map((s, i) => (
                <motion.line
                  key={s.label}
                  x1="50"
                  y1="45"
                  x2={s.x}
                  y2={s.y}
                  stroke="var(--color-accent)"
                  strokeWidth="0.8"
                  strokeOpacity="0.45"
                  initial={shouldReduceMotion ? undefined : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                />
              ))
            : meshEdges.map(([a, b], i) => (
                <motion.line
                  key={`${a}-${b}`}
                  x1={systems[a].x}
                  y1={systems[a].y}
                  x2={systems[b].x}
                  y2={systems[b].y}
                  stroke="var(--color-border-warm)"
                  strokeWidth="0.8"
                  initial={shouldReduceMotion ? undefined : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                />
              ))}
        </svg>

        {connected && (
          <span
            className="absolute flex size-9 items-center justify-center rounded-xl border border-accent bg-accent text-on-accent shadow-sm"
            style={{ top: "45%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <Share2 className="size-4" aria-hidden="true" />
          </span>
        )}

        {systems.map((s) => (
          <span
            key={s.label}
            className="absolute flex flex-col items-center gap-1"
            style={{ top: `${s.y}%`, left: `${s.x}%`, transform: "translate(-50%, -50%)" }}
          >
            <span className="flex size-8 items-center justify-center rounded-lg border border-border-warm bg-background text-muted-foreground shadow-sm">
              <s.icon className="size-3.5" aria-hidden="true" />
            </span>
            <span className="whitespace-nowrap text-[9px] font-medium text-muted-foreground">
              {s.label}
            </span>
          </span>
        ))}
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        {connected
          ? "5 systems, 1 governed interface."
          : "5 systems, 8 brittle point-to-point links."}
      </p>
    </div>
  );
}
