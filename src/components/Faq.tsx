"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { ScrollReveal } from "@/components/ScrollReveal";

export type FaqItem = { question: string; answer: string };

export function Faq({
  eyebrow = "FAQ",
  title,
  items,
}: {
  eyebrow?: string;
  title: string;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mb-14 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {title}
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.question}
              className="rounded-2xl border border-border-warm bg-white/60"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-heading text-base font-bold text-foreground sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-accent transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
