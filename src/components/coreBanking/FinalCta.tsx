"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-accent px-6 py-24 lg:px-10">
      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-[8%] size-72 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 right-[10%] size-80 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, -28, 0], y: [0, -18, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <ScrollReveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-on-accent sm:text-4xl">
          [Placeholder] Ready to modernize your core banking platform?
        </h2>
        <p className="max-w-xl text-base text-on-accent/85">
          [Placeholder] Talk to our team about greenfield implementations,
          upgrades, or migration — no obligation, just a straight
          conversation.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/book-a-consultation" variant="onAccent">
            Book a Consultation
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            className="border-white text-on-accent hover:bg-white hover:text-accent"
          >
            Talk to our team
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
