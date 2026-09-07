import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ProductHero({
  title,
  subhead,
  primaryHref = "/contact/book-a-consultation",
  primaryLabel = "Book a Demo",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to our team",
  badges,
  visual,
}: {
  title: string;
  subhead: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  badges?: string[];
  visual?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Products
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subhead}
        </p>

        {badges && badges.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border-warm bg-surface-alt px-3.5 py-1.5 text-xs font-semibold text-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="ghost">
            {secondaryLabel}
          </Button>
        </div>
      </ScrollReveal>

      {visual && (
        <ScrollReveal delay={0.15} className="mx-auto mt-16 max-w-xl">
          {visual}
        </ScrollReveal>
      )}
    </section>
  );
}
