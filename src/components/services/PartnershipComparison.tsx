import { ScrollReveal } from "@/components/ScrollReveal";

export type PartnershipPanel = {
  name: string;
  points: { label: string; body: string }[];
};

function Panel({
  name,
  points,
  tone,
}: PartnershipPanel & { tone: "primary" | "neutral" }) {
  return (
    <div
      className={
        tone === "primary"
          ? "rounded-3xl border border-border-warm bg-white/70 p-8 sm:p-10"
          : "rounded-3xl border border-border-warm bg-surface-alt/60 p-8 sm:p-10"
      }
    >
      <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
        {name}
      </h3>
      <ul className="mt-6 flex flex-col gap-4">
        {points.map((point) => (
          <li key={point.label} className="text-sm leading-relaxed sm:text-base">
            <span className="font-semibold text-foreground">{point.label}</span>{" "}
            <span className="text-muted-foreground">{point.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PartnershipComparison({
  ours,
  partner,
}: {
  ours: PartnershipPanel;
  partner: PartnershipPanel;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Partnership
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Why the partnership matters
        </h2>
      </ScrollReveal>

      <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
        <ScrollReveal direction="left" className="flex-1">
          <Panel name={ours.name} points={ours.points} tone="primary" />
        </ScrollReveal>

        <ScrollReveal className="flex shrink-0 items-center justify-center py-2 lg:py-0">
          <span className="flex size-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-heading text-lg font-bold text-accent">
            ×
          </span>
        </ScrollReveal>

        <ScrollReveal direction="right" className="flex-1">
          <Panel name={partner.name} points={partner.points} tone="neutral" />
        </ScrollReveal>
      </div>
    </section>
  );
}
