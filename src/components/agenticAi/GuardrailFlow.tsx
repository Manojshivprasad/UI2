"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, ShieldQuestion, CheckCircle2, AlertTriangle } from "lucide-react";
import { NodeChip } from "@/components/serviceVisuals/NodeChip";

const action = { x: 8, y: 50 };
const check = { x: 48, y: 50 };
const approved = { x: 90, y: 20 };
const escalated = { x: 90, y: 80 };

export function GuardrailFlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[5/4] w-full">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <line
          x1={action.x + 4}
          y1={action.y}
          x2={check.x - 4}
          y2={check.y}
          stroke="var(--color-border-warm)"
          strokeWidth={0.5}
        />
        <line
          x1={check.x + 4}
          y1={check.y}
          x2={approved.x - 4}
          y2={approved.y}
          stroke="var(--color-border-warm)"
          strokeWidth={0.5}
        />
        <line
          x1={check.x + 4}
          y1={check.y}
          x2={escalated.x - 4}
          y2={escalated.y}
          stroke="var(--color-border-warm)"
          strokeWidth={0.5}
        />

        {!shouldReduceMotion && (
          <>
            <motion.circle
              r={0.9}
              fill="var(--color-accent)"
              initial={false}
              animate={{ cx: [action.x + 4, check.x - 4], cy: [action.y, check.y] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              r={0.9}
              fill="var(--color-accent)"
              initial={false}
              animate={{ cx: [check.x + 4, approved.x - 4], cy: [check.y, approved.y] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.circle
              r={0.9}
              fill="var(--color-accent)"
              initial={false}
              animate={{ cx: [check.x + 4, escalated.x - 4], cy: [check.y, escalated.y] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />
          </>
        )}
      </svg>

      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${action.x}%`, top: `${action.y}%` }}
      >
        <NodeChip icon={Bot} label="Agent Action" />
      </div>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${check.x}%`, top: `${check.y}%` }}
      >
        <NodeChip icon={ShieldQuestion} label="Guardrail Check" filled />
      </div>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${approved.x}%`, top: `${approved.y}%` }}
      >
        <NodeChip icon={CheckCircle2} label="Approved" size="sm" />
      </div>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${escalated.x}%`, top: `${escalated.y}%` }}
      >
        <NodeChip icon={AlertTriangle} label="Escalated" size="sm" />
      </div>
    </div>
  );
}
