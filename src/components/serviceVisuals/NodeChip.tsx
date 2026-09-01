import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function NodeChip({
  icon: NodeIcon,
  label,
  active = true,
  filled = false,
  dashed = false,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  filled?: boolean;
  dashed?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors duration-500 sm:size-11",
          dashed && "border-dashed",
          filled && active
            ? "border-accent bg-accent text-on-accent"
            : active
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-border-warm bg-background text-muted-foreground/60"
        )}
      >
        <NodeIcon className="size-4.5 sm:size-5" aria-hidden="true" />
      </span>
      <span
        className={cn(
          "text-center text-[10px] font-semibold leading-tight transition-colors duration-500 sm:text-[11px]",
          active ? "text-foreground" : "text-muted-foreground/60"
        )}
      >
        {label}
      </span>
    </div>
  );
}
