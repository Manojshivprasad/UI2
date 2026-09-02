import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const sizes = {
  sm: { box: "size-8 sm:size-9", icon: "size-3.5 sm:size-4", label: "text-[9px] sm:text-[10px]" },
  md: { box: "size-10 sm:size-11", icon: "size-4.5 sm:size-5", label: "text-[10px] sm:text-[11px]" },
  lg: { box: "size-12 sm:size-14", icon: "size-5 sm:size-6", label: "text-[11px] sm:text-xs" },
};

export function NodeChip({
  icon: NodeIcon,
  label,
  active = true,
  filled = false,
  dashed = false,
  size = "md",
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  filled?: boolean;
  dashed?: boolean;
  size?: keyof typeof sizes;
}) {
  const s = sizes[size];
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl border transition-colors duration-500",
          s.box,
          dashed && "border-dashed",
          filled && active
            ? "border-accent bg-accent text-on-accent"
            : active
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-border-warm bg-background text-muted-foreground/60"
        )}
      >
        <NodeIcon className={s.icon} aria-hidden="true" />
      </span>
      <span
        className={cn(
          "text-center font-semibold leading-tight transition-colors duration-500",
          s.label,
          active ? "text-foreground" : "text-muted-foreground/60"
        )}
      >
        {label}
      </span>
    </div>
  );
}
