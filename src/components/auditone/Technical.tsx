import { ScrollReveal } from "@/components/ScrollReveal";
import { ApiSnippetMock } from "./ApiSnippetMock";

const differentiators = [
  { number: "01", title: "Role-based access control" },
  { number: "02", title: "Configurable date validation" },
  { number: "03", title: "Directory-integrated login (CAS/AD/LDAP)" },
  { number: "04", title: "Transaction exclusion rules" },
];

export function Technical() {
  return (
    <section className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Technology
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Built for the complexity of modern banking
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <ul className="flex flex-col divide-y divide-border-warm">
              {differentiators.map((d) => (
                <li key={d.number} className="flex items-center gap-5 py-5">
                  <span className="font-heading text-2xl font-bold text-accent/50">
                    {d.number}
                  </span>
                  <span className="font-heading text-lg font-bold text-foreground sm:text-xl">
                    {d.title}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" className="flex justify-center">
            <ApiSnippetMock />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
