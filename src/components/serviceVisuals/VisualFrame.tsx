import type { ReactNode } from "react";

export function VisualFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex aspect-[5/4] w-full items-center justify-center overflow-hidden rounded-3xl border border-border-warm bg-white/60 p-6 shadow-sm sm:p-8">
      {children}
    </div>
  );
}
