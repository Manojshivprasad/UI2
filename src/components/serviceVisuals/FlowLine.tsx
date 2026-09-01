"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function FlowLine({
  orientation = "horizontal",
  duration = 2.2,
  dotCount = 1,
  className,
}: {
  orientation?: "horizontal" | "vertical";
  duration?: number;
  dotCount?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative shrink-0 bg-border-warm",
        isHorizontal ? "h-px min-w-6 flex-1" : "w-px min-h-6 flex-1",
        className
      )}
    >
      {!shouldReduceMotion &&
        Array.from({ length: dotCount }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute size-1.5 rounded-full bg-accent"
            style={{
              top: isHorizontal ? "50%" : undefined,
              left: isHorizontal ? undefined : "50%",
              transform: "translate(-50%, -50%)",
            }}
            animate={isHorizontal ? { left: ["0%", "100%"] } : { top: ["0%", "100%"] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * duration) / dotCount,
            }}
          />
        ))}
    </div>
  );
}
