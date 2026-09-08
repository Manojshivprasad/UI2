import { Crown, Users2, ShieldCheck, Eye, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const roles: { icon: LucideIcon; role: string; description: string; access: string }[] = [
  {
    icon: Crown,
    role: "Admin",
    description: "Manages roles, permissions, and resources.",
    access: "Create & amend system entities. No access to module data.",
  },
  {
    icon: Users2,
    role: "IT Team",
    description: "Manages users — creation, amendment, and deactivation.",
    access: "Create & amend users. No access to module data.",
  },
  {
    icon: ShieldCheck,
    role: "Auditor",
    description: "Views and audits data within assigned modules.",
    access: "Read & write (audit) access, scoped to assigned modules.",
  },
  {
    icon: Eye,
    role: "Inspector",
    description: "Views the data within assigned modules only.",
    access: "Read-only access, scoped to assigned modules.",
  },
];

export function SecurityMatrix() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          User Security Matrix
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Role-based access, built in
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          A Role-Based Access Control (RBAC) model — Users, Roles,
          Permissions, and Resources — decides exactly who can see and audit
          what, down to the module.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => (
          <ScrollReveal key={r.role} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-border-warm bg-white/60 p-7">
              <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
                <r.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                {r.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                {r.access}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
