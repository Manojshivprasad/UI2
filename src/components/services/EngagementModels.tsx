import { ScrollReveal } from "@/components/ScrollReveal";

const models = [
  {
    title: "Fixed-Price Delivery",
    blurb: "Defined scope, fixed cost, predictable outcome.",
  },
  {
    title: "T&M / Staff Augmentation",
    blurb: "Skilled banking specialists embedded in your team.",
  },
  {
    title: "Managed Services",
    blurb: "We run it, you focus on the business.",
  },
  {
    title: "Outcome-Based",
    blurb: "Engagements priced and measured against the results that matter to you.",
  },
];

export function EngagementModels() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Engagement Models
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Work with us the way that fits you
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((model, i) => (
          <ScrollReveal key={model.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border-warm bg-white/60 p-6">
              <h3 className="font-heading text-base font-bold text-foreground">
                {model.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {model.blurb}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
