import { ScrollReveal } from "@/components/ScrollReveal";
import { UseCaseTabs } from "./UseCaseTabs";

export function UseCases() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Audit Modules
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Three modules, one workspace
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <UseCaseTabs />
        </ScrollReveal>
      </div>
    </section>
  );
}
