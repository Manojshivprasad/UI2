import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

export type FeatureCardItem = {
  icon: LucideIcon;
  title: string;
  blurb: string;
};

export function FeatureCards({
  id,
  eyebrow,
  heading,
  intro,
  items,
  columns = 3,
  tone = "default",
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  intro?: string;
  items: FeatureCardItem[];
  columns?: 2 | 3;
  tone?: "default" | "alt";
}) {
  return (
    <section id={id} className={cn("py-24 sm:py-32", tone === "alt" && "bg-surface-alt")}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {intro}
            </p>
          )}
        </ScrollReveal>

        <div
          className={cn(
            "grid grid-cols-1 gap-5 sm:grid-cols-2",
            columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          )}
        >
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border-warm bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
