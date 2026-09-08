"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Send, RefreshCcw, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

type Phase = "idle" | "sending" | "retry" | "delivered";

export function MessageDeliverySim({ className }: { className?: string }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (phase === "sending") {
      const t = setTimeout(() => setPhase("retry"), 900);
      return () => clearTimeout(t);
    }
    if (phase === "retry") {
      const t = setTimeout(() => setPhase("delivered"), 1000);
      return () => clearTimeout(t);
    }
  }, [phase]);

  const run = () => {
    if (phase === "idle" || phase === "delivered") setPhase("sending");
  };

  const dotPosition =
    phase === "delivered" ? "100%" : phase === "retry" ? "45%" : "60%";

  return (
    <div
      className={cn(
        "w-full max-w-md rounded-3xl border border-border-warm bg-white p-6 shadow-xl shadow-black/5",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-foreground">Message Delivery</span>
        <button
          type="button"
          onClick={run}
          disabled={phase === "sending" || phase === "retry"}
          className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent transition-colors duration-200 hover:bg-accent/20 disabled:opacity-50"
        >
          <Send className="size-3" aria-hidden="true" />
          Send test message
        </button>
      </div>

      <div className="relative mt-8 flex items-center justify-between px-2">
        <span className="text-[10px] font-semibold text-muted-foreground">Source</span>
        <div className="relative mx-3 h-px flex-1 bg-border-warm">
          {phase !== "idle" && (
            <motion.span
              className={cn(
                "absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full",
                phase === "retry" ? "bg-amber-500" : "bg-accent"
              )}
              initial={shouldReduceMotion ? undefined : { left: "0%" }}
              animate={{ left: dotPosition }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </div>
        <span className="text-[10px] font-semibold text-muted-foreground">Destination</span>
      </div>

      <div className="mt-6 flex h-5 items-center justify-center gap-2 text-xs font-medium">
        {phase === "idle" && (
          <span className="text-muted-foreground/60">Ready to send</span>
        )}
        {phase === "sending" && <span className="text-accent">Sending&hellip;</span>}
        {phase === "retry" && (
          <span className="flex items-center gap-1.5 text-amber-600">
            <RefreshCcw className="size-3.5" aria-hidden="true" /> Retrying delivery
          </span>
        )}
        {phase === "delivered" && (
          <span className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="size-3.5" aria-hidden="true" /> Delivered &amp; acknowledged
          </span>
        )}
      </div>
    </div>
  );
}
