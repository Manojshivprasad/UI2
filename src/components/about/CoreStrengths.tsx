import { Landmark, Rocket, BrainCircuit, Database, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const strengths: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Landmark,
    title: "Core Banking Expertise",
    blurb:
      "Official Finastra partner with deep expertise in Fusion Essence implementation, customization, data migration, training, and support.",
  },
  {
    icon: Rocket,
    title: "Proprietary Accelerators",
    blurb:
      "Tools like TCL Build Configurator and TestNova reduce CBS setup and testing time by over 70% — accelerating delivery without compromising quality.",
  },
  {
    icon: BrainCircuit,
    title: "Automation & AI",
    blurb:
      "Proven capabilities in workflow automation (NewgenONE, iBPS, OmniDocs) and AI-driven banking solutions that streamline operations end to end.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    blurb:
      "Building modern data lakes and data warehouses to power advanced insights and smarter, faster decision-making.",
  },
];

export function CoreStrengths() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Our Core Strengths
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          What sets our delivery apart
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((strength, i) => (
          <ScrollReveal key={strength.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border-warm bg-surface-alt/60 p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-accent">
                <strength.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {strength.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {strength.blurb}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
