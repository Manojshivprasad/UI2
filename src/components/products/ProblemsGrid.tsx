import { XCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

export function ProblemsGrid({
  eyebrow = "Problems It Solves",
  heading,
  problems,
  tone = "default",
}: {
  eyebrow?: string;
  heading: string;
  problems: string[];
  tone?: "default" | "alt";
}) {
  return (
    <section className={cn("py-24 sm:py-32", tone === "alt" && "bg-surface-alt")}>
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-2xl border border-border-warm bg-white/60 px-5 py-4">
                <XCircle className="mt-0.5 size-4.5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-foreground">{problem}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
