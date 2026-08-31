import type { IconName } from "@/lib/siteConfig";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CtaBand } from "@/components/CtaBand";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconName;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon,
}: PlaceholderPageProps) {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <ScrollReveal className="flex flex-col items-center gap-6">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-surface-alt text-accent">
            <Icon name={icon} className="size-8" aria-hidden="true" />
          </span>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            [Placeholder] {description}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10">
        <ScrollReveal className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border-warm bg-surface-alt/60 px-6 py-20 text-center">
          <p className="font-heading text-lg font-semibold text-foreground">
            [Placeholder content]
          </p>
          <p className="max-w-md text-sm text-muted-foreground">
            This page is reserved for {title.toLowerCase()} content. Final
            copy, imagery, and layout for this section will replace this
            placeholder.
          </p>
        </ScrollReveal>
      </section>

      <CtaBand />
    </>
  );
}
