import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 120, suffix: "+", label: "Consultants" },
  { value: 70, suffix: "+", label: "Project implementations" },
  { value: 13, suffix: "", label: "Countries served" },
  { value: 4, suffix: "", label: "Continents" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
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
