import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 30, suffix: "+", label: "Core Banking Implementations" },
  { value: 15, suffix: "+", label: "Data Migrations" },
  { value: 80, suffix: "+", label: "Consultants" },
  { value: 10, suffix: "+", label: "Business Process Automations" },
];

const trustedBy = ["AwashBank", "Sama Alhayat", "National Bank", "zb Financial Holdings"];

export function StatsAndTrustedBy() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 sm:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="border-y border-border-warm bg-surface-alt px-6 py-14 lg:px-10">
        <ScrollReveal className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
            Trusted By
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:divide-x sm:divide-border-warm">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="px-6 font-heading text-lg font-bold text-foreground/40 grayscale transition-all duration-300 first:pl-0 hover:text-accent hover:grayscale-0"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
