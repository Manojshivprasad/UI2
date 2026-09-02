import { ScrollReveal } from "@/components/ScrollReveal";

const team = [
  { initials: "PN", name: "[Placeholder Name]", role: "[Placeholder] Chief Executive Officer" },
  { initials: "PN", name: "[Placeholder Name]", role: "[Placeholder] Chief Technology Officer" },
  { initials: "PN", name: "[Placeholder Name]", role: "[Placeholder] Head of Delivery" },
  { initials: "PN", name: "[Placeholder Name]", role: "[Placeholder] Head of Compliance" },
];

export function Team() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Leadership
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            [Placeholder] The team behind the delivery
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="text-center">
              <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-accent/10 font-heading text-xl font-bold text-accent">
                {member.initials}
              </span>
              <p className="mt-4 font-heading text-base font-bold text-foreground">
                {member.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
