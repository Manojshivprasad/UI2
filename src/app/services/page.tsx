import { ScrollReveal } from "@/components/ScrollReveal";
import { ServicesSection } from "@/components/ServicesSection";
import { CtaBand } from "@/components/CtaBand";

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Core Banking, Workflow Automation, Data Migration, Custom
            Software Development, and AI &amp; ML — one partner across the
            full banking technology stack.
          </p>
        </ScrollReveal>
      </section>

      <ServicesSection />
      <CtaBand />
    </>
  );
}
