"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot } from "lucide-react";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";

const NODE_POSITIONS = [
  { top: "18%", left: "12%" },
  { top: "30%", left: "78%" },
  { top: "68%", left: "20%" },
  { top: "75%", left: "85%" },
  { top: "50%", left: "50%" },
];

export function AgenticAiSpotlight() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-foreground py-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {NODE_POSITIONS.map((pos, i) => (
          <motion.span
            key={i}
            className="absolute size-2 rounded-full bg-accent"
            style={pos}
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.3, 1, 0.3], scale: [1, 1.6, 1] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <ScrollReveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
          <Bot className="size-7" aria-hidden="true" />
        </span>
        <h2 className="font-heading text-3xl font-bold text-background sm:text-4xl">
          Move beyond chatbots
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-background/70">
          We deploy governed banking agents that execute real workflows —
          with audit-ready logs, human-in-the-loop controls, and full data
          sovereignty. Built on a banking-grade agent platform, delivered by
          a team that understands banking.
        </p>
        <Button href="/agentic-ai" variant="onAccent" className="mt-2">
          Explore Agentic AI
        </Button>
      </ScrollReveal>
    </section>
  );
}
