import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";
import { CoreBankingVisual } from "@/components/serviceVisuals/CoreBankingVisual";
import { WorkflowAutomationVisual } from "@/components/serviceVisuals/WorkflowAutomationVisual";
import { DigitalTransformationVisual } from "@/components/serviceVisuals/DigitalTransformationVisual";
import { AiDataVisual } from "@/components/serviceVisuals/AiDataVisual";
import { CloudInfraVisual } from "@/components/serviceVisuals/CloudInfraVisual";
import { IntegrationApiVisual } from "@/components/serviceVisuals/IntegrationApiVisual";

const services: {
  label: string;
  blurb: string;
  href: string;
  visual: ComponentType;
}[] = [
  {
    label: "Core Banking",
    blurb: "End-to-end core banking implementation.",
    href: "/services/core-banking",
    visual: CoreBankingVisual,
  },
  {
    label: "Workflow Automation",
    blurb: "Automating manual banking operations.",
    href: "/services/workflow-automation",
    visual: WorkflowAutomationVisual,
  },
  {
    label: "Digital Transformation",
    blurb: "Modernizing legacy banking infrastructure.",
    href: "/services",
    visual: DigitalTransformationVisual,
  },
  {
    label: "AI & Data Solutions",
    blurb: "Intelligent data and AI solutions for financial operations.",
    href: "/services/ai-ml",
    visual: AiDataVisual,
  },
  {
    label: "Cloud & Infrastructure",
    blurb: "Secure, scalable infrastructure for banking workloads.",
    href: "/services",
    visual: CloudInfraVisual,
  },
  {
    label: "Integration & APIs",
    blurb: "Connecting banking systems, fintech platforms and external services.",
    href: "/services",
    visual: IntegrationApiVisual,
  },
];

export function ServicesSection() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center sm:mb-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Services
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            [Placeholder] Tech that flexes around your teams
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-20 sm:gap-28">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            const Visual = service.visual;
            return (
              <ScrollReveal
                key={service.label}
                direction={isEven ? "left" : "right"}
              >
                <Link
                  href={service.href}
                  className={cn(
                    "group flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:gap-16",
                    !isEven && "sm:flex-row-reverse"
                  )}
                >
                  <div className="w-full sm:w-[45%]">
                    <Visual />
                  </div>
                  <div className="w-full sm:w-[40%]">
                    <h3 className="flex items-center gap-2 font-heading text-2xl font-bold text-foreground sm:text-3xl">
                      {service.label}
                      <ArrowUpRight
                        className="size-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.blurb}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
