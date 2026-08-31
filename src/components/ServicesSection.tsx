import { services } from "@/lib/siteConfig";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";

export function ServicesSection() {
  return (
    <section className="bg-surface-alt py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            [Placeholder] Tech that flexes around your teams
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-16">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={service.href}
                direction={isEven ? "left" : "right"}
                className={cn(
                  "flex flex-col items-center gap-8 sm:flex-row",
                  !isEven && "sm:flex-row-reverse"
                )}
              >
                <div className="flex aspect-video w-full shrink-0 items-center justify-center rounded-2xl border border-border-warm bg-background sm:w-72">
                  <Icon
                    name={service.icon}
                    className="size-16 text-accent"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {service.label}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {service.blurb}
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
