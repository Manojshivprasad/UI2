import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
      <ScrollReveal>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          About Us
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
          About us
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          We&apos;re a global technology partner for banks and financial
          institutions — helping them modernize core systems, automate
          operations, and adopt AI with confidence. For over a decade,
          we&apos;ve turned complex banking transformation into faster
          go-lives, lower risk, and measurable results.
        </p>
      </ScrollReveal>
    </section>
  );
}
