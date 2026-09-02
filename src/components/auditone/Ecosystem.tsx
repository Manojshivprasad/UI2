import { ScrollReveal } from "@/components/ScrollReveal";
import { EcosystemDiagram } from "./EcosystemDiagram";

export function Ecosystem() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Ecosystem
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          One platform. Every banking workflow.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          AuditOne sits on the same platform as our other products — select a
          module to see how it connects.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-16">
        <EcosystemDiagram />
      </ScrollReveal>
    </section>
  );
}
