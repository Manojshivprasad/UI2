"use client";

import { useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import { cn } from "@/lib/cn";

type FilterKey = "status" | "account" | "customer" | "reference";

const filters: { key: FilterKey; label: string }[] = [
  { key: "status", label: "Audit Status" },
  { key: "account", label: "Account ID" },
  { key: "customer", label: "Customer ID" },
  { key: "reference", label: "Reference" },
];

const transactions = [
  { id: "TXN-2291", account: "AC-10234", customer: "CUS-5521", reference: "INV-8842", status: "Flagged" },
  { id: "TXN-2292", account: "AC-10234", customer: "CUS-6602", reference: "INV-8843", status: "Reviewed" },
  { id: "TXN-2293", account: "AC-10877", customer: "CUS-5521", reference: "INV-8844", status: "Pending" },
  { id: "TXN-2294", account: "AC-10877", customer: "CUS-7743", reference: "INV-8845", status: "Reviewed" },
];

function matches(txn: (typeof transactions)[number], filter: FilterKey | null) {
  if (!filter) return true;
  if (filter === "status") return txn.status === "Flagged";
  if (filter === "account") return txn.account === "AC-10234";
  if (filter === "customer") return txn.customer === "CUS-5521";
  return txn.reference === "INV-8844";
}

const statusTone: Record<string, string> = {
  Flagged: "bg-accent/10 text-accent",
  Reviewed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-surface-alt text-muted-foreground",
};

export function TransactionFilterMock({ className }: { className?: string }) {
  const [selected, setSelected] = useState<FilterKey | null>(null);
  const [applied, setApplied] = useState<FilterKey | null>(null);

  return (
    <div className={cn("w-full", className)}>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setSelected((s) => (s === f.key ? null : f.key))}
            aria-pressed={selected === f.key}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors duration-200",
              selected === f.key
                ? "border-accent bg-accent text-on-accent"
                : "border-border-warm text-muted-foreground hover:border-accent/40"
            )}
          >
            {f.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setApplied(selected)}
          className="ml-auto flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-colors duration-200 hover:bg-foreground/90"
        >
          <SlidersHorizontal className="size-3" aria-hidden="true" />
          Filter
        </button>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-border-warm">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2 border-b border-border-warm bg-surface-alt/60 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Transaction</span>
          <span>Account</span>
          <span>Customer</span>
          <span>Reference</span>
          <span>Status</span>
        </div>
        <ul>
          {transactions.map((txn) => {
            const isMatch = matches(txn, applied);
            return (
              <li
                key={txn.id}
                className={cn(
                  "grid grid-cols-[1fr_1fr_1fr_1fr_auto] items-center gap-2 border-b border-border-warm bg-background px-3.5 py-2.5 text-xs transition-opacity duration-300 last:border-b-0",
                  applied && !isMatch && "opacity-30"
                )}
              >
                <span className="truncate font-mono text-foreground">{txn.id}</span>
                <span className="truncate text-muted-foreground">{txn.account}</span>
                <span className="truncate text-muted-foreground">{txn.customer}</span>
                <span className="truncate text-muted-foreground">{txn.reference}</span>
                <span
                  className={cn(
                    "justify-self-start rounded-full px-2 py-0.5 text-[10px] font-semibold",
                    statusTone[txn.status]
                  )}
                >
                  {txn.status}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Search className="size-3" aria-hidden="true" />
        {applied
          ? `Showing transactions matching ${filters.find((f) => f.key === applied)?.label}`
          : "Pick a filter, then apply it to narrow the list."}
      </p>
    </div>
  );
}
