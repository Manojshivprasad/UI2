import { ScrollReveal } from "@/components/ScrollReveal";
import { GuardrailFlow } from "./GuardrailFlow";

const pillars = [
  { number: "01", title: "Audit-Ready Logs" },
  { number: "02", title: "Human In The Loop" },
  { number: "03", title: "Data Sovereignty" },
  { number: "04", title: "Regulatory Compliance" },
];

export function TrustGuardrails() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Trust &amp; Guardrails
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built for a regulated industry, not around it
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <ul className="flex flex-col divide-y divide-border-warm">
              {pillars.map((p) => (
                <li key={p.number} className="flex items-center gap-5 py-5">
                  <span className="font-heading text-2xl font-bold text-accent/50">
                    {p.number}
                  </span>
                  <span className="font-heading text-lg font-bold text-foreground sm:text-xl">
                    {p.title}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" className="rounded-3xl border border-border-warm bg-white/60 p-6 shadow-sm sm:p-8">
            <GuardrailFlow />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
