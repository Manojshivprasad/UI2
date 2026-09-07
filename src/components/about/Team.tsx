import { Crown, Landmark, BrainCircuit, ShieldCheck, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const team: { icon: LucideIcon; role: string; blurb: string }[] = [
  {
    icon: Crown,
    role: "Leadership",
    blurb: "Sets the direction and stands behind every engagement.",
  },
  {
    icon: Landmark,
    role: "Core Banking Practice",
    blurb: "Fusion Essence implementation, customization, and support.",
  },
  {
    icon: BrainCircuit,
    role: "Automation & AI",
    blurb: "Workflow automation and applied AI for banking operations.",
  },
  {
    icon: ShieldCheck,
    role: "Delivery & Quality",
    blurb: "Governance, testing, and go-live discipline on every project.",
  },
];

export function Team() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Our Team
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            The team behind the delivery
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Behind every successful go-live is a team that knows banking
            inside out. Our consultants combine deep core banking domain
            knowledge with modern engineering — so transformation is
            delivered by people who understand both the technology and the
            business it serves.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.role} delay={i * 0.08} className="text-center">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <member.icon className="size-7" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-base font-bold text-foreground">
                {member.role}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{member.blurb}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
