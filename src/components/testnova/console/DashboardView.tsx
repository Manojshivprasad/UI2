"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { fmtDateTime, type Execution } from "./data";
import {
  IdChip, StatusPill, TableShell, Th, ViewHeader, clickRow, inputCls, nextSort, sortRows, tdCls, trCls,
  type SortState,
} from "./ui";

type Key = "id" | "runName" | "description" | "status" | "startedAt" | "by";
type Field = "Test Run Name" | "Triggered By" | "Date Range";

const PAGE = 5;

export function matchesFilter(e: Execution, field: Field, q: string, from: string, to: string) {
  void to; // the guide notes only the start date is considered when filtering
  if (field === "Date Range") return !from || e.startedAt.slice(0, 10) >= from;
  const v = field === "Test Run Name" ? e.runName : e.by;
  return v.toLowerCase().includes(q.trim().toLowerCase());
}

export function DashboardView({
  executions,
  onOpen,
}: {
  executions: Execution[];
  onOpen: (e: Execution) => void;
}) {
  const [field, setField] = useState<Field>("Test Run Name");
  const [q, setQ] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setSort] = useState<SortState<Key>>(null);
  const [page, setPage] = useState(0);

  const rows = useMemo(() => {
    const filtered = executions.filter((e) => matchesFilter(e, field, q, from, to));
    return sortRows(filtered, sort, (e, k) => (k === "startedAt" ? e.startedAt : e[k]));
  }, [executions, field, q, from, to, sort]);

  const pages = Math.max(1, Math.ceil(rows.length / PAGE));
  const cur = Math.min(page, pages - 1);
  const visible = rows.slice(cur * PAGE, cur * PAGE + PAGE);
  const onSort = (k: Key) => setSort((s) => nextSort(s, k));

  return (
    <>
      <ViewHeader
        title="Dashboard"
        tour={[
          { title: "Dashboard", body: "An at-a-glance view of executions: Execution ID, Test Run Name, Status, Browser, Duration, Started At and Triggered By." },
          { title: "Search and filter", body: "Pick Test Run Name, Triggered By or Date Range in the field selector, then type to narrow the list." },
          { title: "Sorting", body: "Select a column's arrows to sort ascending, again for descending, and a third time to cancel. Browser and Duration are not sortable." },
        ]}
        actions={
          <>
            <select
              value={field}
              onChange={(e) => { setField(e.target.value as Field); setPage(0); }}
              aria-label="Filter field"
              className={inputCls}
            >
              <option>Test Run Name</option>
              <option>Triggered By</option>
              <option>Date Range</option>
            </select>
            {field === "Date Range" ? (
              <span className="flex items-center gap-1.5">
                <input type="date" value={from} onChange={(e) => { setFrom(e.target.value); setPage(0); }} aria-label="Start date" className={inputCls} />
                <input type="date" value={to} onChange={(e) => setTo(e.target.value)} aria-label="End date" className={inputCls} />
                <span title="Filtering is based only on the test run's start date; the end date is not considered." className="text-muted-foreground">
                  <Info className="size-3.5" aria-hidden="true" />
                </span>
              </span>
            ) : (
              <input
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(0); }}
                placeholder="Search by name..."
                aria-label="Search executions"
                className={`${inputCls} w-36`}
              />
            )}
          </>
        }
      />

      <TableShell
        footer={
          <span className="inline-flex items-center gap-3">
            Showing {visible.length} of {rows.length} records
            <span className="inline-flex items-center gap-1">
              <button type="button" aria-label="Previous page" disabled={cur === 0} onClick={() => setPage(cur - 1)} className="rounded p-0.5 hover:bg-surface-alt disabled:opacity-30">
                <ChevronLeft className="size-3.5" />
              </button>
              {cur + 1}/{pages}
              <button type="button" aria-label="Next page" disabled={cur >= pages - 1} onClick={() => setPage(cur + 1)} className="rounded p-0.5 hover:bg-surface-alt disabled:opacity-30">
                <ChevronRight className="size-3.5" />
              </button>
            </span>
          </span>
        }
      >
        <thead>
          <tr>
            <Th label="Execution ID" k="id" sort={sort} onSort={onSort} />
            <Th label="Test Run Name" k="runName" sort={sort} onSort={onSort} />
            <Th label="Description" k="description" sort={sort} onSort={onSort} />
            <Th label="Status" k="status" sort={sort} onSort={onSort} />
            <Th label="Browser" />
            <Th label="Duration" />
            <Th label="Started At" k="startedAt" sort={sort} onSort={onSort} />
            <Th label="Triggered By" k="by" sort={sort} onSort={onSort} />
          </tr>
        </thead>
        <tbody>
          {visible.length === 0 && (
            <tr className={trCls}>
              <td colSpan={8} className="px-3 py-8 text-center text-muted-foreground">No executions match this filter.</td>
            </tr>
          )}
          {visible.map((e) => (
            <tr key={e.id} className={`${trCls} ${clickRow}`} onClick={() => onOpen(e)}>
              <td className={tdCls}><IdChip>{e.id}</IdChip></td>
              <td className={`${tdCls} min-w-28`}>{e.runName}</td>
              <td className={tdCls}>{e.description}</td>
              <td className={tdCls}><StatusPill status={e.status} /></td>
              <td className={`${tdCls} whitespace-nowrap`}>
                <span className="rounded bg-sky-50 px-1.5 py-0.5 text-[10px] text-sky-700">{e.browser}</span>
              </td>
              <td className={`${tdCls} font-mono text-[10px]`}>{e.duration}</td>
              <td className={`${tdCls} min-w-28`}>{fmtDateTime(e.startedAt)}</td>
              <td className={tdCls}>{e.by}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
      <p className="mt-2 text-[10px] text-muted-foreground">Select a row to open its execution details in Reports &amp; Results.</p>
    </>
  );
}
