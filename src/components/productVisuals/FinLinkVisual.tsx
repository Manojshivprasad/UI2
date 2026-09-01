"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Landmark, Server, Link2 } from "lucide-react";
import { MockWindow } from "./MockWindow";

const nodes = [
  { icon: Landmark, label: "Core Banking" },
  { icon: Server, label: "API Gateway" },
  { icon: Link2, label: "Fintech Rails" },
];

export function FinLinkVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MockWindow label="FinLink — Integration Flow">
      <div className="relative flex items-center justify-between px-1 py-8">
        <div className="absolute left-[10%] right-[10%] top-1/2 h-px -translate-y-1/2 bg-border-warm" />
        {!shouldReduceMotion && (
          <>
            <motion.span
              className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
              animate={{ left: ["10%", "90%"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40"
              animate={{ left: ["10%", "90%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
          </>
        )}
        {nodes.map(({ icon: NodeIcon, label }) => (
          <div key={label} className="relative z-10 flex flex-col items-center gap-2">
            <span className="flex size-11 items-center justify-center rounded-xl border border-border-warm bg-background text-accent shadow-sm">
              <NodeIcon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </MockWindow>
  );
}
