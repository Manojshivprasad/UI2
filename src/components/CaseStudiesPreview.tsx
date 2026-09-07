import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";

const caseStudies = [
  {
    client: "[Placeholder] Regional Bank A",
    industry: "Retail Banking",
    metric: "[Placeholder] 40% faster reconciliation",
  },
  {
    client: "[Placeholder] Regional Bank B",
    industry: "Corporate Banking",
    metric: "[Placeholder] 6-month core migration",
  },
  {
    client: "[Placeholder] Regional Bank C",
    industry: "Microfinance",
    metric: "[Placeholder] Zero-downtime cutover",
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <ScrollReveal className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Case Studies
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            [Placeholder] Proof, not promises
          </h2>
        </div>
        <Button href="/case-studies" variant="ghost">
          View all case studies
        </Button>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <ScrollReveal key={cs.client} delay={i * 0.08}>
            <Link
              href="/case-studies"
              className="group flex h-full flex-col rounded-2xl border border-border-warm bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
                <Building2 className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {cs.industry}
              </p>
              <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                {cs.client}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cs.metric}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Read case study
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
