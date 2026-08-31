"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  target,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = `${target}${suffix}`;
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value)}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
