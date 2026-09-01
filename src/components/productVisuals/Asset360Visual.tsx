"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MockWindow } from "./MockWindow";

const bars = [40, 65, 50, 80, 60, 90];

export function Asset360Visual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MockWindow label="Asset360 — Portfolio Overview">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold text-muted-foreground">Total AUM</p>
          <p className="mt-1 font-heading text-2xl font-bold text-foreground">
            $128.4M
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
          +4.2% today
        </span>
      </div>

      <div className="mt-5 flex h-28 items-end gap-2.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-accent/70"
            style={{ height: `${h}%` }}
            animate={
              shouldReduceMotion
                ? undefined
                : { height: [`${h}%`, `${Math.max(20, h - 25)}%`, `${h}%`] }
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </MockWindow>
  );
}
