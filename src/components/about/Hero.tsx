import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          About Us
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
          [Placeholder] Built by bankers, for banking teams
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          [Placeholder] A decade of core banking implementation, workflow
          automation, and data migration across African and Indian markets —
          delivered by people who&apos;ve sat on the other side of the table.
        </p>
      </ScrollReveal>
    </section>
  );
}
