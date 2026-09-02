import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 1204, suffix: "", label: "Tasks automated daily" },
  { value: 98, suffix: "%", label: "Resolved without escalation" },
  { value: 100, suffix: "%", label: "Actions logged & auditable" },
  { value: 6, suffix: "×", label: "Faster case resolution" },
];

export function Metrics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Proof
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          [Placeholder] Illustrative figures — replace with verified metrics
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
