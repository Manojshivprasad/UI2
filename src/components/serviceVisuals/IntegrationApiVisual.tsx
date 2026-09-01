"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Landmark, Link2, CreditCard, Share2, Boxes } from "lucide-react";
import { VisualFrame } from "./VisualFrame";
import { NodeChip } from "./NodeChip";

const sources = [
  { icon: Landmark, label: "Banking Core", x: 8, y: 14 },
  { icon: Link2, label: "Fintech", x: 8, y: 50 },
  { icon: CreditCard, label: "Payments", x: 8, y: 86 },
];

const gateway = { x: 50, y: 50 };
const destination = { icon: Boxes, label: "Connected Services", x: 92, y: 50 };

export function IntegrationApiVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <VisualFrame>
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
          aria-hidden="true"
        >
          {sources.map((s) => (
            <line
              key={s.label}
              x1={s.x + 3.5}
              y1={s.y}
              x2={gateway.x - 4}
              y2={gateway.y}
              stroke="var(--color-border-warm)"
              strokeWidth={0.5}
            />
          ))}
          <line
            x1={gateway.x + 4}
            y1={gateway.y}
            x2={destination.x - 3.5}
            y2={destination.y}
            stroke="var(--color-border-warm)"
            strokeWidth={0.5}
          />

          {!shouldReduceMotion &&
            sources.map((s, i) => (
              <motion.circle
                key={s.label}
                r={0.9}
                fill="var(--color-accent)"
                initial={false}
                animate={{
                  cx: [s.x + 3.5, gateway.x - 4],
                  cy: [s.y, gateway.y],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}

          {!shouldReduceMotion && (
            <motion.circle
              r={0.9}
              fill="var(--color-accent)"
              initial={false}
              animate={{
                cx: [gateway.x + 4, destination.x - 3.5],
                cy: [gateway.y, destination.y],
              }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </svg>

        {sources.map((s) => (
          <div
            key={s.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <NodeChip icon={s.icon} label={s.label} />
          </div>
        ))}

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${gateway.x}%`, top: `${gateway.y}%` }}
        >
          <NodeChip icon={Share2} label="API Gateway" filled />
        </div>

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
        >
          <NodeChip icon={destination.icon} label={destination.label} />
        </div>
      </div>
    </VisualFrame>
  );
}
