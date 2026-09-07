import Link from "next/link";
import { Lightbulb, Newspaper, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/Button";

const insights = [
  {
    category: "Insights",
    icon: Lightbulb,
    title: "[Placeholder] What a 4th-generation core actually changes",
    href: "/resources/insights",
  },
  {
    category: "Blog",
    icon: Newspaper,
    title: "[Placeholder] Notes from a live migration cutover",
    href: "/resources/blog",
  },
  {
    category: "Resource Library",
    icon: BookOpen,
    title: "[Placeholder] Playbook: buying a core banking system",
    href: "/resources/library",
  },
];

export function InsightsPreview() {
  return (
    <section className="bg-surface-alt py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Resources
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              [Placeholder] Latest thinking
            </h2>
          </div>
          <Button href="/resources" variant="ghost">
            Browse resources
          </Button>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {insights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border-warm bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl bg-surface-alt">
                  <item.icon className="size-8 text-accent" aria-hidden="true" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.category}
                </p>
                <h3 className="mt-1 font-heading text-base font-bold leading-snug text-foreground">
                  {item.title}
                </h3>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
