import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const markets = [
  "[Placeholder City], Ethiopia",
  "[Placeholder City], Kenya",
  "[Placeholder City], Nigeria",
  "[Placeholder City], India",
  "[Placeholder City], UAE",
];

export function Markets() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Where We Work
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          [Placeholder] On the ground across our markets
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {markets.map((market) => (
            <span
              key={market}
              className="flex items-center gap-2 rounded-full border border-border-warm bg-white/60 px-4 py-2 text-sm font-medium text-foreground"
            >
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {market}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
