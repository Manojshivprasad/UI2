import { Monitor, Smartphone, Globe, Cloud, ShieldCheck } from "lucide-react";
import { VisualFrame } from "./VisualFrame";
import { FlowLine } from "./FlowLine";

const apps = [Monitor, Smartphone, Globe];

export function CloudInfraVisual() {
  return (
    <VisualFrame>
      <div className="flex h-full w-full flex-col items-center justify-center gap-1.5">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2.5">
            {apps.map((AppIcon, i) => (
              <span
                key={i}
                className="flex size-8 items-center justify-center rounded-lg border border-border-warm bg-background text-muted-foreground"
              >
                <AppIcon className="size-4" aria-hidden="true" />
              </span>
            ))}
          </div>
          <span className="text-[11px] font-semibold text-foreground">
            Applications
          </span>
        </div>

        <FlowLine orientation="vertical" duration={1.8} dotCount={2} className="h-8 w-px flex-none" />

        <div className="flex flex-col items-center gap-1.5">
          <span className="flex size-12 items-center justify-center rounded-2xl border border-accent/50 bg-accent/10 text-accent">
            <Cloud className="size-6" aria-hidden="true" />
          </span>
          <span className="text-[11px] font-semibold text-foreground">
            Cloud Services
          </span>
        </div>

        <FlowLine orientation="vertical" duration={1.8} dotCount={2} className="h-8 w-px flex-none" />

        <div className="flex flex-col items-center gap-1.5">
          <span className="flex size-12 items-center justify-center rounded-2xl border border-accent bg-accent text-on-accent">
            <ShieldCheck className="size-6" aria-hidden="true" />
          </span>
          <span className="text-[11px] font-semibold text-foreground">
            Secure Infrastructure
          </span>
        </div>
      </div>
    </VisualFrame>
  );
}
