import { ScrollReveal } from "@/components/ScrollReveal";
import { WorkingStructure } from "./Visuals";

export function ProductValue() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Confidence before every release, not after.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            TestNova validates integrated business processes end-to-end —
            time-aware, cross-system, and fully automated — so integration
            failures surface in test, not in production.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex justify-center">
          <WorkingStructure />
        </ScrollReveal>
      </div>
    </section>
  );
}
