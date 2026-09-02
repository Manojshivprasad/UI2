import { HeartHandshake, Hammer, Users2, Target, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const values: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: HeartHandshake,
    title: "Integrity",
    blurb: "[Placeholder] We tell clients what they need to hear, not what's easiest to say.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship",
    blurb: "[Placeholder] Implementation details matter — we sweat the ones others skip.",
  },
  {
    icon: Users2,
    title: "Partnership",
    blurb: "[Placeholder] We stay on the ground through go-live and beyond, not just the handoff.",
  },
  {
    icon: Target,
    title: "Impact",
    blurb: "[Placeholder] Every engagement is measured against real operational outcomes.",
  },
];

export function Values() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Values
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            [Placeholder] What we stand for
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border-warm bg-white/60 p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
