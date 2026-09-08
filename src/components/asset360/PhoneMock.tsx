import { Landmark, TrendingUp } from "lucide-react";
import { cn } from "@/lib/cn";

const assets = [
  { label: "Branch HQ — Nairobi", status: "Active" },
  { label: "Fleet Vehicle #08", status: "Active" },
  { label: "Server Rack B4", status: "Review" },
];

export function PhoneMock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-[220px] overflow-hidden rounded-[2rem] border border-border-warm bg-white p-2 shadow-xl shadow-black/10",
        className
      )}
    >
      <div className="rounded-[1.5rem] bg-surface-alt/40 p-4">
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-border-warm" />

        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-accent text-on-accent">
            <Landmark className="size-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] text-muted-foreground">Asset360</p>
            <p className="text-xs font-bold text-foreground">Mobile</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border-warm bg-white p-3.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Total AUM
          </p>
          <div className="mt-1 flex items-end gap-1.5">
            <span className="font-heading text-3xl font-bold text-foreground">
              $128.4M
            </span>
            <span className="mb-1 flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
              <TrendingUp className="size-3" aria-hidden="true" />
              +4.2
            </span>
          </div>
        </div>

        <ul className="mt-3 flex flex-col gap-2">
          {assets.map((asset) => (
            <li
              key={asset.label}
              className="flex items-center justify-between rounded-xl border border-border-warm bg-white px-3 py-2"
            >
              <span className="text-[11px] text-foreground">{asset.label}</span>
              <span
                className={cn(
                  "text-[10px] font-semibold",
                  asset.status === "Active" ? "text-emerald-600" : "text-accent"
                )}
              >
                {asset.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
