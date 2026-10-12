"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/gsap";

const Hero3D = dynamic(
  () => import("@/components/hero3d/Hero3D").then((m) => m.Hero3D),
  { ssr: false }
);

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el || prefersReducedMotion()) return;

    const split = SplitText.create(el, { type: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.035,
      ease: "expo.out",
    });

    return () => split.revert();
  }, []);

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 pb-8 pt-10 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:pb-12 lg:pt-14">
      <div className="flex max-w-xl flex-col items-start gap-6 text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-border-warm bg-surface-alt px-4 py-1.5 text-xs font-semibold text-accent">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Global technology partner for banks &amp; financial institutions
        </span>

        <h1
          ref={headlineRef}
          className="font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl"
        >
          We build the systems institutions run on.
        </h1>

        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          ThoughtsCrest builds core banking implementations, automation, and
          AI for financial institutions that can&rsquo;t afford to get it
          wrong. We pair deep banking-domain expertise with proprietary
          delivery accelerators — so you ship faster, with full control and
          audit-ready confidence.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/book-a-consultation">
            Book a Consultation
          </Button>
          <Button href="/products" variant="ghost">
            Explore Products
          </Button>
        </div>
      </div>

      <div className="flex w-full justify-center lg:flex-1">
        <Hero3D />
      </div>
    </section>
  );
}
