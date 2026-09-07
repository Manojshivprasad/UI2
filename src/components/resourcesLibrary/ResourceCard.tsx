import { Download, type LucideIcon } from "lucide-react";

export type Resource = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  format: string;
  type: string;
};

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border-warm bg-background p-7">
      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
          <resource.icon className="size-5" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-surface-alt px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          {resource.format}
        </span>
      </div>
      <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.blurb}
      </p>
      <div className="mt-5 flex flex-col gap-1.5">
        <span
          aria-disabled="true"
          className="flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border-warm bg-surface-alt/60 px-4 py-2.5 text-sm font-semibold text-muted-foreground"
        >
          <Download className="size-4" aria-hidden="true" />
          Download
        </span>
        <span className="text-center text-[11px] text-muted-foreground/70">
          Coming soon
        </span>
      </div>
    </div>
  );
}
