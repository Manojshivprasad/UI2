"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, Download } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  countResults, deriveResults, fmtDate, type BpResult, type Execution, type TestCaseResult,
} from "./data";
import {
  IdChip, Kv, SmallButton, StatusPill, TableShell, Th, ViewHeader, clickRow, inputCls, nextSort, sortRows, tdCls, trCls,
  type SortState,
} from "./ui";

type Key = "id" | "runName" | "description" | "status" | "tc" | "by";

function tcCount(e: Execution) {
  return countResults(deriveResults(e)).tc;
}

export function ReportsView({
  executions,
  selectedId,
  onSelect,
  toast,
}: {
  executions: Execution[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  toast: (msg: string) => void;
}) {
  const selected = executions.find((e) => e.id === selectedId);
  if (selected) return <Detail exec={selected} onBack={() => onSelect(null)} toast={toast} />;
  return <List executions={executions} onSelect={onSelect} />;
}

function List({ executions, onSelect }: { executions: Execution[]; onSelect: (id: string) => void }) {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortState<Key>>(null);
  const rows = useMemo(() => {
    const f = executions.filter((e) => e.runName.toLowerCase().includes(q.trim().toLowerCase()));
    return sortRows(f, sort, (e, k) => (k === "tc" ? tcCount(e) : e[k]));
  }, [executions, q, sort]);
  const onSort = (k: Key) => setSort((s) => nextSort(s, k));

  return (
    <>
      <ViewHeader
        title="Reports & Results"
        tour={[
          { title: "Reports & Results", body: "Lists completed or attempted executions and gives access to execution-level details and downloadable reports." },
          { title: "Drill-down", body: "Select any row to open its detail view: Business Processes, then Scenarios, then individual Test Cases." },
        ]}
        actions={<input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by test run name..." aria-label="Search by test run name" className={`${inputCls} w-44`} />}
      />
      <TableShell footer={`Showing ${rows.length} of ${executions.length} records`}>
        <thead>
          <tr>
            <Th label="Execution ID" k="id" sort={sort} onSort={onSort} />
            <Th label="Test Run Name" k="runName" sort={sort} onSort={onSort} />
            <Th label="Description" k="description" sort={sort} onSort={onSort} />
            <Th label="Status" k="status" sort={sort} onSort={onSort} />
            <Th label="Test Cases" k="tc" sort={sort} onSort={onSort} />
            <Th label="Triggered By" k="by" sort={sort} onSort={onSort} />
          </tr>
        </thead>
        <tbody>
          {rows.map((e) => (
            <tr key={e.id} className={`${trCls} ${clickRow}`} onClick={() => onSelect(e.id)}>
              <td className={tdCls}><IdChip>{e.id}</IdChip></td>
              <td className={tdCls}>{e.runName}</td>
              <td className={tdCls}>{e.description}</td>
              <td className={tdCls}><StatusPill status={e.status} /></td>
              <td className={tdCls}>{tcCount(e)}</td>
              <td className={tdCls}>{e.by}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}

const reportOptions = ["Test Run Summary", "Module Level Summary", "Failed Business Processes", "Failed Scenarios"];

function Detail({ exec, onBack, toast }: { exec: Execution; onBack: () => void; toast: (m: string) => void }) {
  const results = useMemo(() => deriveResults(exec), [exec]);
  const counts = countResults(results);
  const [menu, setMenu] = useState(false);
  const [openBp, setOpenBp] = useState<string | null>(results[0]?.bp.id ?? null);
  const [openSc, setOpenSc] = useState<string | null>(null);
  const [tc, setTc] = useState<TestCaseResult | null>(null);

  const [y, m, d] = exec.tsd.split("-").map(Number);
  const tsd = fmtDate(new Date(Date.UTC(y, m - 1, d)));

  return (
    <>
      <ViewHeader
        title={`Execution ${exec.id}`}
        back={{ label: "Reports & Results", onClick: onBack }}
        tour={[
          { title: "Execution Details", body: "Test Run Name, Execution ID, TSD, Browser, who triggered it, the status and summary counts." },
          { title: "Drill-down", body: "Expand a Business Process to see its Scenarios, then select a Test Case ID to open its Testcase Summary and Execution Events log." },
          { title: "Reports", body: "Download Test Run Summary, Module Level Summary, Failed Business Processes or Failed Scenarios." },
        ]}
        actions={
          <span className="relative">
            <SmallButton variant="ghost" onClick={() => setMenu((v) => !v)}>
              <Download className="size-3.5" aria-hidden="true" /> Reports <ChevronDown className="size-3" aria-hidden="true" />
            </SmallButton>
            {menu && (
              <ul className="absolute right-0 top-8 z-30 w-48 overflow-hidden rounded-xl border border-border-warm bg-white py-1 text-[11px] shadow-xl">
                {reportOptions.map((o) => (
                  <li key={o}>
                    <button
                      type="button"
                      className="w-full px-3 py-1.5 text-left hover:bg-surface-alt"
                      onClick={() => { setMenu(false); toast("Report downloaded successfully"); }}
                    >
                      {o}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </span>
        }
      />

      <div className="grid grid-cols-2 gap-3 rounded-xl border border-border-warm bg-white p-3 sm:grid-cols-3">
        <Kv label="Test Run" value={exec.runName} />
        <Kv label="Execution Description" value={exec.description} />
        <Kv label="Status" value={<StatusPill status={exec.status} />} />
        <Kv label="TSD" value={tsd} />
        <Kv label="Browser" value={exec.browser} />
        <Kv label="Triggered By" value={exec.by} />
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {[
          ["Business Processes", counts.bps],
          ["Scenarios", counts.scenarios],
          ["Test Cases", counts.tc],
          ["Passed", counts.passed],
          ["Failed", counts.failed],
          ["Skipped", counts.skipped],
        ].map(([l, v]) => (
          <div key={l} className="rounded-xl border border-border-warm bg-white px-2.5 py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">{l}</p>
            <p className={cn("font-heading text-lg font-bold", l === "Failed" && counts.failed > 0 ? "text-red-600" : "text-foreground")}>{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {results.map((b) => (
          <BpRow
            key={b.bp.id}
            b={b}
            open={openBp === b.bp.id}
            onToggle={() => setOpenBp(openBp === b.bp.id ? null : b.bp.id)}
            openSc={openSc}
            onToggleSc={(id) => setOpenSc(openSc === id ? null : id)}
            onTc={setTc}
          />
        ))}
      </div>

      {tc && (
        <div className="mt-3 rounded-xl border border-accent/40 bg-white p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-foreground">Testcase Summary — <span className="font-mono">{tc.id}</span></p>
            <button type="button" onClick={() => setTc(null)} className="text-[10px] font-semibold text-accent hover:underline">Close</button>
          </div>
          <div className="mt-2 flex flex-wrap gap-4">
            <Kv label="Status" value={<StatusPill status={tc.status} />} />
            <Kv label="Start" value={tc.start} />
            <Kv label="End" value={tc.end} />
            <Kv label="Duration" value={tc.duration} />
          </div>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Execution Events</p>
          <ul className="mt-1 flex flex-col gap-1 font-mono text-[10px]">
            {tc.events.map((ev, i) => (
              <li key={i} className={cn("flex gap-3", ev.error ? "text-red-600" : "text-foreground")}>
                <span className="text-muted-foreground">{ev.time}</span>
                {ev.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

function BpRow({
  b, open, onToggle, openSc, onToggleSc, onTc,
}: {
  b: BpResult;
  open: boolean;
  onToggle: () => void;
  openSc: string | null;
  onToggleSc: (id: string) => void;
  onTc: (t: TestCaseResult) => void;
}) {
  const tcs = b.scenarios.flatMap((s) => s.testCases);
  const Chev = open ? ChevronDown : ChevronRight;
  return (
    <div className="overflow-hidden rounded-xl border border-border-warm bg-white">
      <button type="button" onClick={onToggle} aria-expanded={open} className="flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-surface-alt/60">
        <Chev className="size-3.5 text-muted-foreground" aria-hidden="true" />
        <span className="text-[11px] font-semibold text-foreground">{b.bp.name}</span>
        <IdChip>{b.bp.id}</IdChip>
        <span className="ml-auto text-[10px] text-muted-foreground">
          {tcs.length} test cases · {tcs.filter((t) => t.status === "Passed").length} passed · {tcs.filter((t) => t.status === "Failed").length} failed
        </span>
        <StatusPill status={b.status === "Skipped" ? "Cancelled" : b.status} />
      </button>
      {open && (
        <ul className="border-t border-border-warm bg-background/60">
          {b.scenarios.map((s) => {
            const key = `${b.bp.id}-${s.execId}`;
            const sOpen = openSc === key;
            return (
              <li key={key} className="border-b border-border-warm last:border-b-0">
                <button type="button" onClick={() => onToggleSc(key)} aria-expanded={sOpen} className="flex w-full items-center gap-2 px-6 py-2 text-left hover:bg-surface-alt/60">
                  {sOpen ? <ChevronDown className="size-3 text-muted-foreground" aria-hidden="true" /> : <ChevronRight className="size-3 text-muted-foreground" aria-hidden="true" />}
                  <span className="text-[11px] text-foreground">{s.scenario.name}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{s.scenario.code}</span>
                  <span className="ml-auto text-[10px] text-muted-foreground">{s.duration}</span>
                  <StatusPill status={s.status === "Skipped" ? "Cancelled" : s.status} />
                </button>
                {sOpen && (
                  <ul className="px-10 pb-2">
                    {s.testCases.map((t) => (
                      <li key={t.id} className="flex items-center gap-3 py-1 text-[10px]">
                        <button type="button" onClick={() => onTc(t)} className="font-mono text-accent underline-offset-2 hover:underline">
                          {t.id}
                        </button>
                        <span className="text-muted-foreground">{t.duration}</span>
                        <span className="ml-auto"><StatusPill status={t.status === "Skipped" ? "Cancelled" : t.status} /></span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
