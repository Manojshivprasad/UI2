import { ArrowRight, type LucideIcon } from "lucide-react";

export type CaseStudy = {
  icon: LucideIcon;
  client: string;
  industry: string;
  metric: string;
};

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border-warm bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
        <caseStudy.icon className="size-5" aria-hidden="true" />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {caseStudy.industry}
      </p>
      <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
        {caseStudy.client}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {caseStudy.metric}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Read case study
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}
