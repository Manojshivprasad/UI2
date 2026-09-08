import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

export type CapabilityRowItem = {
  title: string;
  description: string;
  visual: ReactNode;
};

export function CapabilityRows({
  eyebrow,
  heading,
  intro,
  items,
  tone = "default",
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: CapabilityRowItem[];
  tone?: "default" | "alt";
}) {
  return (
    <section className={cn("py-24 sm:py-32", tone === "alt" && "bg-surface-alt")}>
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center sm:mb-28">
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

        <div className="flex flex-col gap-20 sm:gap-28">
          {items.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={item.title}
                direction={isEven ? "left" : "right"}
                className={cn(
                  "flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:gap-16",
                  !isEven && "sm:flex-row-reverse"
                )}
              >
                <div className="flex w-full justify-center sm:w-[52%]">
                  {item.visual}
                </div>
                <div className="w-full sm:w-[38%]">
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
