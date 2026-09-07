import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/siteConfig";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AuditOneVisual } from "@/components/productVisuals/AuditOneVisual";
import { TestNovaVisual } from "@/components/productVisuals/TestNovaVisual";
import { FinLinkVisual } from "@/components/productVisuals/FinLinkVisual";
import { Asset360Visual } from "@/components/productVisuals/Asset360Visual";

const visuals: Record<string, ComponentType> = {
  "/products/auditone": AuditOneVisual,
  "/products/testnova": TestNovaVisual,
  "/products/finlink": FinLinkVisual,
  "/products/asset360": Asset360Visual,
};

export function ProductsBento() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Products
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          [Placeholder] A modular platform for modern banking
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {products.map((product, i) => {
          const Visual = visuals[product.href];
          return (
            <ScrollReveal key={product.href} delay={i * 0.08} className="h-full">
              <Link
                href={product.href}
                className="group flex h-full flex-col rounded-3xl border border-border-warm bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                      {product.label}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      {product.blurb}
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border-warm text-foreground transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                    <ArrowUpRight className="size-4.5" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-7 flex-1 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.015]">
                  {Visual && <Visual />}
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
