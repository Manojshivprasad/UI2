import { ScrollReveal } from "@/components/ScrollReveal";

const ours = {
  name: "[Company Name]",
  points: [
    {
      label: "Banking domain:",
      body: "Hands-on experience with core banking operations, data migration, and integration — we understand the systems your bank runs on every day.",
    },
    {
      label: "Implementation depth:",
      body: "From configuration and customization to integration, testing, and go-live, we make the platform fit your products, processes, and regulators.",
    },
    {
      label: "Local partnership:",
      body: "On-the-ground delivery and support across our markets, through every phase of implementation and beyond.",
    },
  ],
};

const partner = {
  name: "[Partner Platform]",
  points: [
    {
      label: "Modern foundation:",
      body: "A cloud-ready core banking platform built for retail and corporate banking on a single, scalable foundation.",
    },
    {
      label: "Product breadth:",
      body: "A full suite spanning deposits, lending, payments, and digital channels — so growth doesn't mean stitching together new systems.",
    },
    {
      label: "Global proven platform:",
      body: "Trusted by financial institutions worldwide, with the resilience, compliance, and roadmap of an established banking technology leader.",
    },
  ],
};

function Panel({
  name,
  points,
  tone,
}: {
  name: string;
  points: { label: string; body: string }[];
  tone: "primary" | "neutral";
}) {
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

export function PartnershipComparison() {
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
