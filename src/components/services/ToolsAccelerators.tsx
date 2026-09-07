import {
  Wrench,
  Bot as BotIcon,
  Layers,
  Gauge,
  Share2,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const tools: { icon: LucideIcon; title: string; blurb: string }[] = [
  {
    icon: Wrench,
    title: "TCL Build Configurator",
    blurb: "Configure builds faster with a repeatable, proven setup.",
  },
  {
    icon: BotIcon,
    title: "TCL Test Automate",
    blurb: "Automated testing that accelerates QA without cutting corners.",
  },
  {
    icon: Layers,
    title: "Customization Factory",
    blurb: "A structured approach to delivering customizations at scale.",
  },
  {
    icon: Gauge,
    title: "Migration Factory Accelerator",
    blurb: "De-risk and speed up data migration projects.",
  },
  {
    icon: Share2,
    title: "FinLink ESB",
    blurb: "Connect systems through our enterprise service bus.",
  },
];

export function ToolsAccelerators() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Speed Up Your Process Using Our Tools
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Proprietary tooling that shortens delivery
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-warm bg-white/60 p-6">
                <span className="font-heading text-sm font-bold text-accent/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 flex size-10 items-center justify-center rounded-lg bg-surface-alt text-accent">
                  <tool.icon className="size-4.5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tool.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
