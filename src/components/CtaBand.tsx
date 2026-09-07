"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/Button";

export function CtaBand() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-accent px-6 py-20 lg:px-10">
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-[-10%] size-96 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-on-accent sm:text-4xl">
          Ready to modernize your core banking stack?
        </h2>
        <p className="max-w-xl text-base text-on-accent/85">
          Talk to our team about implementation, migration, or automation —
          no obligation, just a straight conversation.
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
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
