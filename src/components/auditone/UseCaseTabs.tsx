"use client";

import { useState } from "react";
import { type LucideIcon, ArrowLeftRight, ToggleLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import { FlowFrame } from "@/components/flow/FlowFrame";
import { TransactionFilterMock } from "./TransactionFilterMock";

function ListSnippet({ items, icon: ItemIcon }: { items: string[]; icon: LucideIcon }) {
  return (
    <ul className="flex w-full flex-col gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-lg border border-border-warm bg-background px-3.5 py-2.5"
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-accent">
            <ItemIcon className="size-3 text-on-accent" strokeWidth={3} />
          </span>
          <span className="text-sm text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const useCases = [
  {
    key: "transaction",
    label: "Transaction Auditing",
    snippet: (
      <div className="flex w-full flex-col gap-4">
        <TransactionFilterMock />
        <ListSnippet
          icon={ArrowLeftRight}
          items={[
            "Select, comment, and audit a transaction in one action",
            "View linked contra transaction details in a click",
          ]}
        />
      </div>
    ),
  },
  {
    key: "customer",
    label: "Customer Static Data Auditing",
    snippet: (
      <ListSnippet
        icon={ArrowLeftRight}
        items={[
          "Track every old value → new value change on customer records",
          "See who modified and who approved each change",
          "Full detail view for every audited change",
        ]}
      />
    ),
  },
  {
    key: "account",
    label: "Account Auditing",
    snippet: (
      <ListSnippet
        icon={ToggleLeft}
        items={[
          "Track Active, Dormant, and InActive status changes",
          "Filter by account ID, category, or branch",
          "Full audit trail on every account record",
        ]}
      />
    ),
  },
];

export function UseCaseTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14">
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {useCases.map((uc, i) => (
          <button
            key={uc.key}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors duration-200",
              i === active
                ? "border-accent bg-accent/10 text-accent"
                : "border-border-warm text-muted-foreground hover:border-accent/30"
            )}
          >
            {uc.label}
          </button>
        ))}
      </div>

      <FlowFrame>{useCases[active].snippet}</FlowFrame>
    </div>
  );
}
