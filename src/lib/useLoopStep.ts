"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Cycles 0..totalSteps, holds briefly at the final step, then wraps back to 0.
 * Returns totalSteps immediately (a static "finished" state) under reduced motion.
 */
export function useLoopStep(totalSteps: number, intervalMs = 900) {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => {
      setStep((s) => (s + 1) % (totalSteps + 2));
    }, intervalMs);
    return () => clearInterval(id);
  }, [shouldReduceMotion, totalSteps, intervalMs]);

  if (shouldReduceMotion) return totalSteps;
  return Math.min(step, totalSteps);
}
