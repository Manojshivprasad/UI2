import {
  Sprout,
  ArrowUpCircle,
  Database,
  Puzzle,
  FlaskConical,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const offerings: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Sprout,
    title: "Greenfield Core Implementations",
    blurb: "Target operating model, product setup, parameterization, interfaces, and go-live cutover.",
  },
  {
    icon: ArrowUpCircle,
    title: "Upgrades & Forward Ports",
    blurb: "Zero-surprise upgrades with impact analysis, retrofitting, and regression safety nets.",
  },
  {
    icon: Database,
    title: "Data Migration",
    blurb: "Extract-transform-load, reconciliation, mock runs, data quality remediation, and audit trails.",
  },
  {
    icon: Puzzle,
    title: "Customizations & Integrations",
    blurb: "Lending, deposits, payments, treasury, cards, AML/KYC, regulatory reporting, digital channels.",
  },
  {
    icon: FlaskConical,
    title: "Quality Engineering & UAT Support",
    blurb: "Test strategy, automated regression packs, performance testing, and business-led UAT.",
  },
  {
    icon: LifeBuoy,
    title: "Post Go-Live Hypercare & Managed Services",
    blurb: "Stabilization, incident SLAs, continual optimization, and knowledge transition.",
  },
];

export function ServiceOfferings() {
  return (
    <section id="offerings" className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Service Offerings
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Every phase of the implementation lifecycle
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, i) => (
            <ScrollReveal key={offering.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border-warm bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
                  <offering.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {offering.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {offering.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
