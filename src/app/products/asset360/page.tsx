import {
  Landmark,
  Factory,
  Armchair,
  Truck,
  Laptop,
  Sparkles,
  TrendingDown,
  TrendingUp,
  BarChart3,
  Layers3,
  FolderCheck,
  MapPin,
  Calculator,
  ArrowRightLeft,
  ShieldCheck,
  BookCopy,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProductHero } from "@/components/products/ProductHero";
import { FeatureCards } from "@/components/products/FeatureCards";
import { NumberedSteps } from "@/components/products/NumberedSteps";
import { ProductFinalCta } from "@/components/products/ProductFinalCta";
import { Asset360Visual } from "@/components/productVisuals/Asset360Visual";

const categories = [
  { icon: Landmark, label: "Land & Property" },
  { icon: Factory, label: "Plant & Machinery" },
  { icon: Armchair, label: "Furniture & Fixtures" },
  { icon: Truck, label: "Vehicles & Transportation" },
  { icon: Laptop, label: "IT Assets" },
  { icon: Sparkles, label: "Intangible Assets" },
];

const depreciationMethods = [
  {
    icon: TrendingDown,
    title: "SLM",
    blurb: "Straight Line Method — equal depreciation expense spread evenly over the asset's useful life.",
  },
  {
    icon: TrendingUp,
    title: "WDV",
    blurb: "Written Down Value — depreciation calculated as a percentage of the asset's remaining book value.",
  },
  {
    icon: BarChart3,
    title: "DDB",
    blurb: "Double Declining Balance — an accelerated method that front-loads depreciation in earlier years.",
  },
  {
    icon: Layers3,
    title: "UOP",
    blurb: "Units of Production — depreciation tied directly to actual asset usage or output.",
  },
];

const lifecycle = [
  { title: "Acquisition & Registration", blurb: "Record new assets in the system." },
  { title: "Configuration", blurb: "Set attributes and depreciation rules." },
  { title: "Depreciation Processing", blurb: "Run periodic depreciation calculations." },
  { title: "Suspension or Adjustment", blurb: "Adjust depreciation if required." },
  { title: "Disposal or Sale", blurb: "Remove assets and account for profit/loss." },
];

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
      <ProductHero
        title="Asset360 — Fixed Asset Management System"
        subhead="A complete solution to manage the entire lifecycle of fixed assets — from acquisition through disposal. Built to improve accuracy, control, and transparency across your organization."
        badges={[
          "Full Lifecycle Coverage",
          "5-Book Depreciation",
          "Audit-Ready Reports",
          "Compliance-First Design",
        ]}
        primaryHref="/contact"
        primaryLabel="Request a Demo"
        visual={<Asset360Visual />}
      />

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

          <ScrollReveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category.label}
                className="flex items-center gap-2 rounded-full border border-border-warm bg-white/60 px-4 py-2 text-sm font-medium text-foreground"
              >
                <category.icon className="size-4 text-accent" aria-hidden="true" />
                {category.label}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <FeatureCards
        eyebrow="Depreciation Management"
        heading="A robust, flexible depreciation engine"
        intro="Flexible scheduling, automatic journal entries, and support for 5 accounting books (Financial, Tax, IFRS, and more)."
        items={depreciationMethods}
        columns={2}
      />

      <NumberedSteps
        eyebrow="Asset Lifecycle Management"
        heading="End-to-end asset traceability"
        intro="Asset360 supports the complete lifecycle of an asset, ensuring traceability, audit history, and financial accuracy at every stage."
        steps={lifecycle}
        tone="alt"
      />

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
