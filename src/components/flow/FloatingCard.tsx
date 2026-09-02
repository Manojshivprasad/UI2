"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function FloatingCard({
  icon: CardIcon,
  label,
  value,
  tone = "neutral",
  className,
  floatDelay = 0,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  tone?: "neutral" | "positive" | "warning";
  className?: string;
  floatDelay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  const dotColor =
    tone === "positive"
      ? "bg-emerald-500"
      : tone === "warning"
        ? "bg-accent"
        : "bg-muted-foreground/40";

  return (
    <motion.div
      className={cn(
        "absolute z-10 flex items-center gap-2.5 rounded-2xl border border-border-warm bg-white/95 px-3.5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-sm",
        className
      )}
      animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
    >
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-alt text-accent">
        <CardIcon className="size-4" aria-hidden="true" />
        <span
          className={cn(
            "absolute -right-0.5 -top-0.5 size-2 rounded-full ring-2 ring-white",
            dotColor,
            !shouldReduceMotion && tone !== "neutral" && "animate-pulse"
          )}
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-bold text-foreground">{value}</span>
        <span className="whitespace-nowrap text-[10px] text-muted-foreground">
          {label}
        </span>
      </span>
    </motion.div>
  );
}
