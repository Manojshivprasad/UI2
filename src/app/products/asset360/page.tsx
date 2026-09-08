import {
  FolderCheck,
  MapPin,
  Calculator,
  ArrowRightLeft,
  ShieldCheck,
  BookCopy,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Hero } from "@/components/asset360/Hero";
import { ProductValue } from "@/components/asset360/ProductValue";
import { FeatureCards } from "@/components/products/FeatureCards";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { CategoryChips } from "@/components/productVisuals/asset360/CategoryChips";
import { DepreciationSection } from "@/components/productVisuals/asset360/DepreciationSection";
import { InteractiveLifecycle } from "@/components/productVisuals/asset360/InteractiveLifecycle";

const benefits = [
  {
    icon: FolderCheck,
    title: "Centralized Records",
    blurb: "Maintain all asset data in one unified system.",
  },
  {
    icon: MapPin,
    title: "Asset Tracking",
    blurb: "Monitor asset usage and location efficiently.",
  },
  {
    icon: Calculator,
    title: "Accurate Depreciation",
    blurb: "Automated calculations across multiple accounting methods.",
  },
  {
    icon: ArrowRightLeft,
    title: "Disposal Accounting",
    blurb: "Manage asset disposal and profit/loss accounting.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Compliance",
    blurb: "Audit-ready reports aligned with accounting standards.",
  },
  {
    icon: BookCopy,
    title: "5-Book Support",
    blurb: "Financial, Tax, and IFRS books managed in parallel.",
  },
];

export default function Asset360Page() {
  return (
    <>
      <Hero />

      <ProductValue />

      <section className="bg-surface-alt py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Asset Configuration &amp; Categorization
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Structured asset organization
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Asset360 organizes assets through structured categorization.
              Categories support multiple sub-categories and configurable
              attributes — serial numbers, location, technical
              specifications, and maintenance information.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-10">
            <CategoryChips />
          </ScrollReveal>
        </div>
      </section>

      <DepreciationSection />

      <InteractiveLifecycle />

      <FeatureCards
        eyebrow="Key Benefits"
        heading="Why organizations choose Asset360"
        items={benefits}
      />

      <ProductFinalCta
        subtext="Asset360 helps organizations maintain better financial control and operational visibility over fixed assets — from acquisition to disposal."
        primaryHref="/contact"
        primaryLabel="Request a Demo"
      />
    </>
  );
}
