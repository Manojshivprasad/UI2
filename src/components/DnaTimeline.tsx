"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ScrollReveal } from "@/components/ScrollReveal";

export type TimelinePillar = { heading: string; body: string };

const defaultPillars: TimelinePillar[] = [
  {
    heading: "Founded in Core Banking",
    body: "Founded in 2015 by a group of banking consultants, we've grown into a full-spectrum core banking implementation and digital transformation firm — as an official Finastra partner with deep Fusion Essence expertise.",
  },
  {
    heading: "Proven Delivery, Globally",
    body: "120+ consultants have delivered 70+ project implementations for banks and financial institutions across 13 countries and 4 continents.",
  },
  {
    heading: "Deep Banking DNA",
    body: "A decade of core banking implementation, workflow automation, data migration, and AI — backed by proprietary accelerators like TCL Build Configurator and TestNova that cut CBS setup and testing time by over 70%.",
  },
];

export function DnaTimeline({
  heading = "Our Story",
  pillars = defaultPillars,
}: {
  heading?: string;
  pillars?: TimelinePillar[];
}) {
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
    <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
      <ScrollReveal className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {heading}
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
