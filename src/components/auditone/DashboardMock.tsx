"use client";

import { useState } from "react";
import { ClipboardList, Users, Landmark } from "lucide-react";
import { useLoopStep } from "@/lib/useLoopStep";
import { cn } from "@/lib/cn";

const modules = [
  {
    icon: ClipboardList,
    label: "Transactions",
    screen: "Transaction Audit Screen",
    columns: ["Status", "Transaction ID", "Reference", "Amount", "Made By"],
    filters: ["Audit Status", "Account ID", "Customer ID", "Reference"],
    rows: [
      ["Audited", "TXN-88041", "PENALTYINTADJ", "0.00", "brad"],
      ["Pending", "TXN-88042", "PENALTYINTADJ", "0.00", "brad"],
      ["Pending", "TXN-88043", "REVENUEALLOC", "0.00", "brad"],
      ["Pending", "TXN-88044", "PENALTYINTADJ", "0.00", "brad"],
    ],
  },
  {
    icon: Users,
    label: "Customers",
    screen: "Customer Static-Data Audit Screen",
    columns: ["Status", "Customer ID", "Old Value", "New Value", "Modified By"],
    filters: ["Audit Status", "Category", "Customer ID"],
    rows: [
      ["Pending", "PTY0001", "TestPOLL", "TestPOLL_TEST", "brad"],
      ["Pending", "PTY0001", "TestGUH", "TestPOL", "malini"],
      ["Pending", "PTY0001", "Tesmot", "TestPOLL", "prasanth"],
      ["Pending", "PTY0001", "TestPOL", "TestGUH", "malini"],
    ],
  },
  {
    icon: Landmark,
    label: "Accounts",
    screen: "Account Audit Screen",
    columns: ["Status", "Account ID", "Old Value", "New Value", "Modified By"],
    filters: ["Audit Status", "Category", "Account ID"],
    rows: [
      ["Pending", "010202PTY000105", "Active", "InActive", "prasanth"],
      ["Pending", "010202PTY000106", "Dormant", "InActive", "prasanth"],
      ["Pending", "020201PTY001004", "Dormant", "Active", "malini"],
      ["Pending", "010202PTY000107", "InActive", "Active", "prasanth"],
    ],
  },
];

const statusStyles: Record<string, string> = {
  Audited: "bg-emerald-100 text-emerald-700",
  Pending: "bg-accent/10 text-accent",
};

function matchedRowIndexes(rows: string[][], filter: string | null) {
  if (!filter) return null;
  if (filter === "Audit Status") {
    const statuses = rows.map((r) => r[0]);
    const target = statuses.includes("Audited") ? "Audited" : statuses[0];
    return new Set(rows.map((r, i) => (r[0] === target ? i : -1)).filter((i) => i !== -1));
  }
  // ID-based filters (Account ID, Customer ID, Reference, Category) narrow to one example match.
  return new Set([0]);
}

export function DashboardMock({ className }: { className?: string }) {
  const [hovered, setHovered] = useState(false);
  const [manualIndex, setManualIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [appliedFilter, setAppliedFilter] = useState<string | null>(null);
  const autoIndex = useLoopStep(modules.length - 1, 3200, hovered);
  const activeIndex = manualIndex ?? autoIndex;
  const active = modules[activeIndex];
  const matched = matchedRowIndexes(active.rows, appliedFilter);

  const switchModule = (i: number) => {
    setManualIndex(i);
    setSelectedFilter(null);
    setAppliedFilter(null);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "w-full overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5 transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-border-warm bg-surface-alt/70 px-6 py-4">
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="size-2.5 rounded-full bg-border-warm" />
        <span className="ml-3 truncate text-sm font-medium text-muted-foreground">
          {active.screen}
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" />
          Live
        </span>
      </div>

      <div className="flex">
        <div className="flex w-[9.5rem] shrink-0 flex-col justify-between border-r border-border-warm bg-surface-alt/40 py-6">
          <nav className="flex flex-col gap-1.5 px-2.5">
            {modules.map((m, i) => (
              <button
                key={m.label}
                type="button"
                onClick={() => switchModule(i)}
                aria-current={i === activeIndex}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-left text-xs font-semibold leading-tight transition-colors duration-200",
                  i === activeIndex
                    ? "bg-accent text-on-accent"
                    : "text-muted-foreground/70 hover:bg-accent/10 hover:text-accent"
                )}
              >
                <m.icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="truncate">{m.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-1.5 border-t border-border-warm px-4 pt-4 text-[11px] leading-snug text-muted-foreground/80">
            <span>
              <span className="font-semibold text-foreground">Last:</span> Today 06:07 PM
            </span>
            <span>
              <span className="font-semibold text-foreground">Records:</span> 5,432
            </span>
            <span>
              <span className="font-semibold text-foreground">Next:</span> Today 06:07 PM
            </span>
          </div>
        </div>

        <div className="min-w-0 flex-1 p-6">
          <div className="flex flex-wrap items-center gap-2">
            {active.filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setSelectedFilter((s) => (s === f ? null : f))}
                aria-pressed={selectedFilter === f}
                className={cn(
                  "rounded-md border px-2.5 py-1.5 text-[11px] font-medium transition-colors duration-200",
                  selectedFilter === f
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border-warm bg-background text-muted-foreground hover:border-accent/40"
                )}
              >
                {f}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setAppliedFilter(selectedFilter)}
              className="rounded-md bg-accent px-3 py-1.5 text-[11px] font-semibold text-on-accent transition-colors duration-200 hover:bg-accent-hover"
            >
              Filter
            </button>
            {appliedFilter && (
              <button
                type="button"
                onClick={() => {
                  setSelectedFilter(null);
                  setAppliedFilter(null);
                }}
                className="text-[11px] font-medium text-muted-foreground underline-offset-2 hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          <div className="mt-4 overflow-x-auto rounded-lg border border-border-warm">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <thead>
                <tr className="bg-surface-alt/60">
                  {active.columns.map((col) => (
                    <th
                      key={col}
                      className="whitespace-nowrap px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {active.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={cn(
                      i > 0 && "border-t border-border-warm",
                      matched && !matched.has(i) && "opacity-30",
                      "transition-opacity duration-300"
                    )}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="whitespace-nowrap px-3 py-2.5 text-[11px] text-foreground"
                      >
                        {j === 0 ? (
                          <span
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                              statusStyles[cell]
                            )}
                          >
                            {cell}
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
