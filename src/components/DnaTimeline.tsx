"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  {
    heading: "[Placeholder] Regional Expertise",
    body: "[Placeholder] Ten years embedded in African and Indian banking, working alongside compliance, treasury, and operations teams.",
  },
  {
    heading: "[Placeholder] Proven Delivery Model",
    body: "[Placeholder] A repeatable implementation methodology refined across 30+ core banking rollouts.",
  },
  {
    heading: "Deep Banking DNA",
    body: "A decade of core banking implementation, workflow automation, and data migration across African and Indian markets. We ship faster, with full control and audit-ready confidence.",
  },
];

export function DnaTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mb-14 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Our Story
        </h2>
      </ScrollReveal>

      <div ref={containerRef} className="relative pl-4">
        <div className="absolute left-[1.6rem] top-2 bottom-2 w-px bg-border-warm" />
        <div
          ref={lineRef}
          className="absolute left-[1.6rem] top-2 bottom-2 w-px bg-accent"
          style={{ transform: "scaleY(1)" }}
        />

        <ul className="flex flex-col gap-16">
          {pillars.map((pillar, i) => (
            <li key={pillar.heading}>
              <ScrollReveal delay={i * 0.05} className="flex items-start gap-6">
                <span className="relative z-10 mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent ring-4 ring-background">
                  <span className="size-2.5 rounded-full bg-on-accent" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {pillar.heading}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
