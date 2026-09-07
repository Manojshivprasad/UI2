import {
  Landmark,
  Building2,
  ShieldCheck,
  Banknote,
  CreditCard,
  PiggyBank,
  Wallet,
  TrendingUp,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 30, suffix: "+", label: "Core Banking Implementations" },
  { value: 15, suffix: "+", label: "Data Migrations" },
  { value: 80, suffix: "+", label: "Consultants" },
  { value: 10, suffix: "+", label: "Business Process Automations" },
];

const trustedBy: { icon: LucideIcon; label: string }[] = [
  { icon: Landmark, label: "National Bank" },
  { icon: Building2, label: "ZB Financial Holdings" },
  { icon: ShieldCheck, label: "Awash Bank" },
  { icon: Banknote, label: "Sama Alhayat" },
  { icon: CreditCard, label: "Co-operative Bank of Kenya" },
  { icon: PiggyBank, label: "Mediterranean Bank" },
  { icon: Wallet, label: "Tonik Bank" },
  { icon: TrendingUp, label: "Bangkok Bank" },
  { icon: Boxes, label: "Belize Bank" },
];

export function StatsAndTrustedBy() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-16 sm:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="border-y border-border-warm bg-surface-alt px-6 py-16 lg:px-10">
        <ScrollReveal className="mx-auto max-w-5xl">
          <p className="text-center text-sm text-muted-foreground">
            Trusted by banks and financial institutions across 13 countries
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
            {trustedBy.map(({ icon: LogoIcon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2.5 text-muted-foreground/50 transition-colors duration-300 hover:text-accent"
              >
                <LogoIcon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-heading text-lg font-semibold">{label}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
