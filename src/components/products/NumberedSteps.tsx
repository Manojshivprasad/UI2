import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

export function NumberedSteps({
  eyebrow,
  heading,
  intro,
  steps,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  steps: { title: string; blurb: string }[];
  tone?: "default" | "alt";
}) {
  return (
    <section className={cn("py-24 sm:py-32", tone === "alt" && "bg-surface-alt")}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {intro}
            </p>
          )}
        </ScrollReveal>

        <div
          className={cn(
            "grid grid-cols-1 gap-5 sm:grid-cols-2",
            steps.length === 3 && "lg:grid-cols-3",
            steps.length === 4 && "lg:grid-cols-4",
            steps.length >= 5 && "lg:grid-cols-5"
          )}
        >
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border-warm bg-white/60 p-6">
                <span className="font-heading text-2xl font-bold text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
