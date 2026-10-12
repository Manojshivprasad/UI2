import { ScrollReveal } from "@/components/ScrollReveal";
import { RunLifecycle } from "./Visuals";

export function RunLifecycleSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Test Run Control
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            A clear lifecycle for every Test Run
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Verify business processes, dates, test data and server details
            while a run is in Draft, then mark it Ready for Execution — select
            a status to see what it allows.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <RunLifecycle />
        </ScrollReveal>
      </div>
    </section>
  );
}
