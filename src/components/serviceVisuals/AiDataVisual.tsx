"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, BrainCircuit } from "lucide-react";
import { VisualFrame } from "./VisualFrame";
import { NodeChip } from "./NodeChip";
import { FlowLine } from "./FlowLine";

const bars = [35, 70, 50, 85];

export function AiDataVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <VisualFrame>
      <div className="flex w-full items-center">
        <div className="flex flex-none items-center">
          <NodeChip icon={Database} label="Raw Data" />
        </div>
        <FlowLine duration={1.8} dotCount={2} />

        <div className="relative flex flex-none flex-col items-center gap-1.5">
          <span className="relative flex size-12 items-center justify-center rounded-2xl border border-accent/50 bg-accent/10 text-accent sm:size-14">
            {!shouldReduceMotion && (
              <motion.span
                className="absolute inset-0 rounded-2xl border border-accent"
                animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <BrainCircuit className="size-6" aria-hidden="true" />
          </span>
          <span className="text-[11px] font-semibold text-foreground">
            AI Processing
          </span>
        </div>

        <FlowLine duration={1.8} dotCount={2} />
        <div className="flex flex-none flex-col items-center gap-1.5">
          <div className="flex h-11 items-end gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="w-1.5 rounded-t-sm bg-accent/70"
                style={{ height: `${h}%` }}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }
                }
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-foreground">
            Insights
          </span>
        </div>
      </div>
    </VisualFrame>
  );
}
