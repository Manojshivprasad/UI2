import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Icon } from "@/components/Icon";
import { resources } from "@/lib/siteConfig";
import { CtaBand } from "@/components/CtaBand";

export default function ResourcesPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Resources
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            Resources
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Insights, blog posts, and our resource library in one place.
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {resources.map((item, i) => (
            <ScrollReveal key={item.href} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-border-warm bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-surface-alt text-accent">
                  <Icon name={item.icon} className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {item.label}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Browse
                  <ArrowUpRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
