"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  decimals?: number;
  className?: string;
};

function formatValue(value: number, decimals: number) {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = `${formatValue(target, decimals)}${suffix}`;
      return;
    }

    const counter = { value: 0 };
    const tween = gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${formatValue(counter.value, decimals)}${suffix}`;
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
  }, [target, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {formatValue(0, decimals)}
      {suffix}
    </span>
  );
}
