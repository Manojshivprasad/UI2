import { ScrollReveal } from "@/components/ScrollReveal";

const pillars = [
  {
    number: "01",
    title: "Banking-First Expertise",
    blurb: "Consultants who come from banking operations, not generalist IT.",
  },
  {
    number: "02",
    title: "Predictable Delivery",
    blurb: "A repeatable methodology refined across 70+ project implementations.",
  },
  {
    number: "03",
    title: "Security & Compliance",
    blurb: "Audit-ready practices built in from day one, not bolted on.",
  },
  {
    number: "04",
    title: "Onsite-Offshore Model",
    blurb: "Local delivery presence backed by a scalable offshore bench.",
  },
];

export function Differentiators() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Differentiators
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          What sets our delivery apart
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
        <ul className="flex flex-col divide-y divide-border-warm">
          {pillars.slice(0, 2).map((p) => (
            <li key={p.number} className="flex items-start gap-5 py-6">
              <span className="font-heading text-2xl font-bold text-accent/50">
                {p.number}
              </span>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  {p.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col divide-y divide-border-warm sm:border-l sm:border-border-warm sm:pl-12">
          {pillars.slice(2).map((p) => (
            <li key={p.number} className="flex items-start gap-5 py-6">
              <span className="font-heading text-2xl font-bold text-accent/50">
                {p.number}
              </span>
              <div>
                <p className="font-heading text-lg font-bold text-foreground">
                  {p.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
