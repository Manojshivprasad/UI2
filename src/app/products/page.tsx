import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductsBento } from "@/components/ProductsBento";
import { CtaBand } from "@/components/CtaBand";

export default function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Products
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            AuditOne, TestNova, FinLink, and Asset360 — proprietary platforms
            built from what we kept rebuilding on banking programmes.
          </p>
        </ScrollReveal>
      </section>

      <ProductsBento />
      <CtaBand />
    </>
  );
}
