import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 30, suffix: "+", label: "Core Banking Implementations" },
  { value: 15, suffix: "+", label: "Data Migrations" },
  { value: 120, suffix: "+", label: "Consultants" },
  { value: 10, suffix: "+", label: "Business Process Automations" },
];

const trustedBy: { src: string; label: string; width: number; height: number }[] = [
  { src: "/logos/national-bank.png", label: "National Bank", width: 278, height: 99 },
  { src: "/logos/zb.png", label: "ZB Financial Holdings", width: 246, height: 114 },
  { src: "/logos/awash-bank.png", label: "Awash Bank", width: 305, height: 82 },
  { src: "/logos/sama-alhayat.png", label: "Sama Alhayat", width: 153, height: 136 },
  {
    src: "/logos/cooperative-bank-kenya.png",
    label: "Co-operative Bank of Kenya",
    width: 374,
    height: 90,
  },
  {
    src: "/logos/mediterranean-bank.png",
    label: "Mediterranean Bank",
    width: 174,
    height: 101,
  },
  { src: "/logos/tonik.png", label: "Tonik Bank", width: 238, height: 80 },
  { src: "/logos/bangkok-bank.png", label: "Bangkok Bank", width: 291, height: 87 },
  { src: "/logos/belize-bank.png", label: "Belize Bank", width: 330, height: 103 },
];

export function StatsAndTrustedBy() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-10 sm:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
            <div className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </ScrollReveal>
        ))}
      </div>

      <div className="border-y border-border-warm bg-surface-alt px-6 py-12 lg:px-10">
        <ScrollReveal className="mx-auto max-w-6xl">
          <p className="text-center text-sm text-muted-foreground">
            Trusted by banks and financial institutions across 13 countries
          </p>
          <div className="mt-10 flex flex-nowrap items-center justify-center gap-x-6 overflow-x-auto sm:justify-between sm:gap-x-4">
            {trustedBy.map(({ src, label, width, height }) => (
              <span
                key={label}
                className="flex h-7 shrink-0 items-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8"
                title={label}
              >
                <Image
                  src={src}
                  alt={label}
                  width={width}
                  height={height}
                  className="h-full w-auto object-contain"
                />
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
