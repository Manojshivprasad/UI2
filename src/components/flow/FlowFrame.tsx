import type { ReactNode } from "react";

export function FlowFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[220px] w-full items-center justify-center rounded-3xl border border-border-warm bg-white/60 p-8 shadow-sm sm:p-10">
      {children}
    </div>
  );
}
