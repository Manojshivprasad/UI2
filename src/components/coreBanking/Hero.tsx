import { Button } from "@/components/Button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CoreBankingVisual } from "@/components/serviceVisuals/CoreBankingVisual";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Services
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          [Placeholder] We implement and modernize core banking platforms
          end-to-end
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          [Placeholder] 30+ core banking implementations across African and
          Indian markets — delivered with a repeatable methodology that
          reduces migration and upgrade risk.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact/book-a-consultation">
            Book a Consultation
          </Button>
          <Button href="#offerings" variant="ghost">
            View Service Offerings
          </Button>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mx-auto mt-16 max-w-xl">
        <CoreBankingVisual />
      </ScrollReveal>
    </section>
  );
}
