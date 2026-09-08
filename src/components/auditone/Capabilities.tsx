import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";
import { DashboardMock } from "./DashboardMock";
import { AutomationQueueMock } from "./AutomationQueueMock";
import { InsightChartMock } from "./InsightChartMock";
import { LayeredStackMock } from "./LayeredStackMock";

const capabilities = [
  {
    title: "Sync banking data automatically",
    description:
      "See exactly when data last synced, how many records came through, and when the next sync runs — no manual refresh needed.",
    visual: <DashboardMock />,
  },
  {
    title: "Filter down to exactly what matters",
    description:
      "Multi-criteria filters — audit status, account ID, customer ID, branch, date range, and more — narrow thousands of records to the ones that need review.",
    visual: <AutomationQueueMock />,
  },
  {
    title: "Audit with a full paper trail",
    description:
      "Select a record, add a comment, and audit it — with built-in handling that stops the same record from being audited twice.",
    visual: <InsightChartMock />,
  },
  {
    title: "Drill into every field",
    description:
      "View Details opens the full record — including any linked contra transaction — for line-by-line review.",
    visual: <LayeredStackMock />,
  },
];

export function Capabilities() {
  return (
    <section id="platform" className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center sm:mb-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Capabilities
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            One workspace, every control your team needs
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-20 sm:gap-28">
          {capabilities.map((cap, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={cap.title}
                direction={isEven ? "left" : "right"}
                className={cn(
                  "group flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:gap-16",
                  !isEven && "sm:flex-row-reverse"
                )}
              >
                <div className="w-full transition-transform duration-500 ease-out sm:w-[52%] group-hover:-translate-y-1">
                  {cap.visual}
                </div>
                <div className="w-full sm:w-[38%]">
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
