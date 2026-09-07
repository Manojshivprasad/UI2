import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Delivered on time and with strong risk discipline.",
    name: "Kangai Maukazuva",
    title: "Chief Transformation Officer, ZB Holdings",
  },
  {
    quote:
      "Strong governance and evident domain depth on our Outward Payments rollout.",
    name: "Lawrence Mwai",
    title: "Former Head of ICT Architecture & Application Development, National Bank of Kenya",
  },
  {
    quote:
      "Delivered enterprise-layer APIs, Trade and Treasury integrations, and governed BI extracts.",
    name: "Peter Njuguna",
    title: "CIO, Co-operative Bank of Kenya",
  },
  {
    quote:
      "Delivered on time and with disciplined risk control.",
    name: "Walid Mussa",
    title: "GM, Mediterranean Bank",
  },
];

export function Testimonials({
  heading = "Client Testimonials",
  intro = "Trusted by banks and financial institutions to deliver transformation that lasts. Here's what our clients say about working with ThoughtsCrest.",
  testimonials = defaultTestimonials,
}: {
  heading?: string;
  intro?: string;
  testimonials?: Testimonial[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Testimonials
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {intro}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.08} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-border-warm bg-white/60 p-7">
              <Quote className="size-6 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="block font-heading font-bold text-foreground">
                  {t.name}
                </span>
                <span className="text-muted-foreground">{t.title}</span>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
