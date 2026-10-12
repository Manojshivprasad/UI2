"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowUpDown, ArrowUp, ArrowDown, CircleHelp, X } from "lucide-react";
import { cn } from "@/lib/cn";

export function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Passed" || status === "Ready for Execution"
      ? "bg-emerald-100 text-emerald-700"
      : status === "Failed"
        ? "bg-red-100 text-red-700"
        : status === "Running" || status === "Pending"
          ? "bg-accent/15 text-accent"
          : status === "Draft"
            ? "bg-sky-100 text-sky-700"
            : "bg-stone-200 text-stone-600";
  return (
    <span className={cn("inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold", tone)}>
      {status}
    </span>
  );
}

export type SortState<K extends string> = { key: K; dir: "asc" | "desc" } | null;

/** Click cycles ascending → descending → cleared, as described in the guide. */
export function nextSort<K extends string>(cur: SortState<K>, key: K): SortState<K> {
  if (!cur || cur.key !== key) return { key, dir: "asc" };
  if (cur.dir === "asc") return { key, dir: "desc" };
  return null;
}

export function sortRows<T, K extends string>(
  rows: T[],
  sort: SortState<K>,
  get: (row: T, key: K) => string | number
) {
  if (!sort) return rows;
  const m = sort.dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    const x = get(a, sort.key);
    const y = get(b, sort.key);
    return (typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y))) * m;
  });
}

export function Th<K extends string>({
  label,
  k,
  sort,
  onSort,
  className,
}: {
  label: string;
  k?: K;
  sort?: SortState<K>;
  onSort?: (k: K) => void;
  className?: string;
}) {
  const active = !!k && sort?.key === k;
  const Arrow = !active ? ArrowUpDown : sort!.dir === "asc" ? ArrowUp : ArrowDown;
  return (
    <th
      scope="col"
      className={cn("whitespace-nowrap px-2.5 py-2 text-left text-[10px] font-semibold text-foreground", className)}
      aria-sort={active ? (sort!.dir === "asc" ? "ascending" : "descending") : undefined}
    >
      {k && onSort ? (
        <button
          type="button"
          onClick={() => onSort(k)}
          className="inline-flex items-center gap-1 hover:text-accent"
        >
          {label}
          <Arrow className={cn("size-3", active ? "text-accent" : "text-muted-foreground/50")} aria-hidden="true" />
        </button>
      ) : (
        label
      )}
    </th>
  );
}

export function TableShell({ children, footer }: { children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-warm bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-[11px]">{children}</table>
      </div>
      {footer && (
        <div className="border-t border-border-warm px-3 py-2 text-right text-[10px] text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  );
}

export const trCls = "border-t border-border-warm";
export const tdCls = "px-2.5 py-2 align-middle text-foreground";
export const clickRow = "cursor-pointer transition-colors hover:bg-surface-alt/60";

export function IdChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border-warm bg-surface-alt/70 px-1.5 py-0.5 font-mono text-[10px] text-foreground">
      {children}
    </span>
  );
}

export function ViewHeader({
  title,
  tour,
  actions,
  back,
}: {
  title: string;
  tour: { title: string; body: string }[];
  actions?: ReactNode;
  back?: { label: string; onClick: () => void };
}) {
  return (
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-1.5">
        {back && (
          <>
            <button type="button" onClick={back.onClick} className="text-[11px] font-semibold text-accent hover:underline">
              {back.label}
            </button>
            <span className="text-muted-foreground/50">/</span>
          </>
        )}
        <h3 className="font-heading text-base font-bold text-foreground">{title}</h3>
        <HelpTour steps={tour} />
      </div>
      {actions && <div className="ml-auto flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

/** Guided tour popover opened from the (?) icon, as in the real application. */
export function HelpTour({ steps }: { steps: { title: string; body: string }[] }) {
  const [step, setStep] = useState<number | null>(null);
  const open = step !== null;
  const last = open && step === steps.length - 1;
  return (
    <span className="relative inline-flex">
      <button
        type="button"
        aria-label="Open guided tour"
        aria-expanded={open}
        onClick={() => setStep(open ? null : 0)}
        className="text-muted-foreground transition-colors hover:text-accent"
      >
        <CircleHelp className="size-4" aria-hidden="true" />
      </button>
      {open && (
        <div
          role="dialog"
          className="absolute left-0 top-6 z-30 w-60 rounded-xl border border-accent/40 bg-white p-3 text-left shadow-xl shadow-black/10"
        >
          <div className="flex items-start justify-between gap-2">
            <p className="font-heading text-xs font-bold text-foreground">{steps[step!].title}</p>
            <button type="button" aria-label="Close tour" onClick={() => setStep(null)} className="text-muted-foreground hover:text-foreground">
              <X className="size-3.5" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-1.5 text-[11px] font-normal leading-relaxed text-muted-foreground">{steps[step!].body}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[10px] text-muted-foreground">
              {step! + 1} / {steps.length}
            </span>
            <button
              type="button"
              onClick={() => setStep(last ? null : step! + 1)}
              className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-on-accent hover:bg-accent-hover"
            >
              {last ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </span>
  );
}

export function SmallButton({
  children,
  onClick,
  variant = "solid",
  disabled,
  title,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "danger";
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40",
        variant === "solid" && "bg-accent text-on-accent hover:bg-accent-hover",
        variant === "ghost" && "border border-border-warm bg-white text-foreground hover:border-accent hover:text-accent",
        variant === "danger" && "border border-red-200 bg-white text-red-600 hover:bg-red-50"
      )}
    >
      {children}
    </button>
  );
}

export const inputCls =
  "rounded-lg border border-border-warm bg-white px-2.5 py-1.5 text-[11px] text-foreground placeholder:text-muted-foreground/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-[10px] font-semibold text-muted-foreground">
      {label}
      {children}
    </label>
  );
}

/** Modals portal into the non-scrolling console pane so they stay in view while the content scrolls. */
export const ModalHostContext = createContext<HTMLElement | null>(null);

export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const host = useContext(ModalHostContext);
  const node = (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/25 p-4">
      <div role="dialog" aria-label={title} className="max-h-full w-full max-w-sm overflow-y-auto rounded-2xl border border-border-warm bg-white p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-heading text-sm font-bold text-foreground">{title}</h4>
          <button type="button" aria-label="Close" onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
  return host ? createPortal(node, host) : node;
}

export function Kv({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-[11px] text-foreground">{value}</p>
    </div>
  );
}
