import type { ReactNode } from "react";

export function MockWindow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-warm bg-white">
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-surface-alt/70 px-4 py-2.5">
        <span className="size-2 rounded-full bg-border-warm" />
        <span className="size-2 rounded-full bg-border-warm" />
        <span className="size-2 rounded-full bg-border-warm" />
        <span className="ml-2.5 text-[11px] font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
