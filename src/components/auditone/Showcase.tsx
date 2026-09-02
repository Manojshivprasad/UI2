"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CheckCircle2, Activity } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DashboardMock } from "./DashboardMock";
import { PhoneMock } from "./PhoneMock";
import { FloatingCard } from "@/components/flow/FloatingCard";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yFront = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-10">
      <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          The Product
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Real product, real control
        </h2>
      </ScrollReveal>

      <div className="relative mx-auto max-w-2xl px-4 pb-16">
        <motion.div
          style={shouldReduceMotion ? undefined : { y: yBack }}
          className="relative mx-auto"
        >
          <DashboardMock />
        </motion.div>

        <FloatingCard
          icon={CheckCircle2}
          label="Findings Cleared"
          value="128"
          tone="positive"
          className="-left-2 top-10 hidden sm:flex lg:-left-10"
          floatDelay={0.3}
        />
        <FloatingCard
          icon={Activity}
          label="Uptime"
          value="99.99%"
          tone="positive"
          className="-right-2 top-2 hidden sm:flex lg:-right-10"
          floatDelay={1.1}
        />

        <motion.div
          style={shouldReduceMotion ? undefined : { y: yFront }}
          className="absolute bottom-0 right-0 w-36 translate-x-[30%] translate-y-[45%] sm:right-2 sm:w-44"
        >
          <PhoneMock />
        </motion.div>
      </div>
    </section>
  );
}
