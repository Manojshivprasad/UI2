import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TestNovaConsole } from "./console/TestNovaConsole";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Products
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          TestNova — Banking automation that actually works like a bank
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          An end-to-end automation platform built for the integrated
          complexity of modern banking. Validates entire business processes —
          not just code — so you deploy with confidence and full audit-ready
          evidence.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact/book-a-consultation">Book a Demo</Button>
          <Button href="#platform" variant="ghost">
            Explore the Platform
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mx-auto mt-14 max-w-5xl">
        <TestNovaConsole />
        <p className="mt-4 text-xs text-muted-foreground">
          This is a live, clickable preview of the TestNova console — filter
          the Dashboard, drill into results, open a Test Run and start an
          execution. Sample data only.
        </p>
      </ScrollReveal>
    </section>
  );
}
