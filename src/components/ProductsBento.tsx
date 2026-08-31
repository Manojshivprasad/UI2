import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/siteConfig";
import { Icon } from "@/components/Icon";
import { ScrollReveal } from "@/components/ScrollReveal";

export function ProductsBento() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Products
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          [Placeholder] A modular platform for modern banking
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {products.map((product, i) => (
          <ScrollReveal key={product.href} delay={i * 0.08}>
            <Link
              href={product.href}
              className="group relative block h-full overflow-hidden rounded-2xl border border-border-warm bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
              />
              <span className="relative flex size-12 items-center justify-center rounded-xl bg-surface-alt text-accent">
                <Icon name={product.icon} className="size-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 font-heading text-xl font-bold text-foreground">
                {product.label}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {product.blurb}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                Learn more
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
