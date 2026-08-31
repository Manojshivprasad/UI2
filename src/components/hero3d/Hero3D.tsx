"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { NetworkScene } from "@/components/hero3d/NetworkScene";

function StaticFallback() {
  return (
    <div
      role="img"
      aria-label="Abstract illustration of a connected banking data network"
      className="size-full rounded-3xl bg-[radial-gradient(circle_at_50%_45%,rgba(240,114,30,0.28),transparent_65%)]"
    />
  );
}

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldMount(true);
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="aspect-square w-full max-w-lg">
      {reducedMotion || !shouldMount ? (
        <StaticFallback />
      ) : (
        <Canvas
          camera={{ position: [0, 0, 9], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 1.75]}
          role="img"
          aria-label="Interactive 3D visualization of a connected banking data network. Move your cursor to rotate."
        >
          <NetworkScene />
        </Canvas>
      )}
    </div>
  );
}
