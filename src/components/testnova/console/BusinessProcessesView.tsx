"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Plus } from "lucide-react";
import { businessProcesses, modules, type BusinessProcess } from "./data";
import { TsdCalculator } from "./TsdCalculator";
import {
  Field, IdChip, Modal, SmallButton, TableShell, Th, ViewHeader, clickRow, inputCls, nextSort, sortRows, tdCls, trCls,
  type SortState,
} from "./ui";

type Key = "id" | "name" | "description" | "scenarios" | "module";

export function BusinessProcessesView({
  initialModule,
  toast,
}: {
  initialModule: string;
  toast: (m: string) => void;
}) {
  const [bps, setBps] = useState<BusinessProcess[]>(businessProcesses);
  const [module, setModule] = useState(initialModule);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortState<Key>>(null);
  const [selId, setSelId] = useState<string | null>(null);
  const [showTsd, setShowTsd] = useState(false);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState({ name: "", description: "", module: "Lending" });

  const rows = useMemo(() => {
    const f = bps.filter(
      (b) => (module === "All" || b.module === module) && b.name.toLowerCase().includes(q.trim().toLowerCase())
    );
    return sortRows(f, sort, (b, k) => (k === "scenarios" ? b.scenarios.length : b[k]));
  }, [bps, module, q, sort]);
  const onSort = (k: Key) => setSort((s) => nextSort(s, k));

  const sel = bps.find((b) => b.id === selId);

  const move = (idx: number, dir: -1 | 1) => {
    if (!sel) return;
    const j = idx + dir;
    if (j < 0 || j >= sel.scenarios.length) return;
    const next = [...sel.scenarios];
    [next[idx], next[j]] = [next[j], next[idx]];
    setBps((p) => p.map((b) => (b.id === sel.id ? { ...b, scenarios: next } : b)));
    toast("Execution order updated");
  };

  if (sel) {
    return (
      <>
        <ViewHeader
          title={sel.name}
          back={{ label: "Business Processes", onClick: () => { setSelId(null); setShowTsd(false); } }}
          tour={[
            { title: "Business Process details", body: "ID, Name, Description and Module, with the Scenarios that make up the process and the order they execute in." },
            { title: "Add and order scenarios", body: "Scenarios run in the order listed. Reorder them to mirror the real banking workflow." },
            { title: "TSD Reference", body: "Execution dates are written as expressions relative to the Test Start Date, such as #TSD, #TSD+1 or #TSD_ME." },
          ]}
          actions={<SmallButton variant="ghost" onClick={() => setShowTsd((v) => !v)}>TSD Reference</SmallButton>}
        />
        <div className="flex flex-wrap gap-x-6 gap-y-1 rounded-xl border border-border-warm bg-white px-3.5 py-2.5 text-[11px]">
          <span><span className="text-muted-foreground">ID </span><IdChip>{sel.id}</IdChip></span>
          <span><span className="text-muted-foreground">Module </span>{sel.module}</span>
          <span className="text-muted-foreground">{sel.description}</span>
        </div>

        <div className={showTsd ? "mt-3 grid gap-3 md:grid-cols-[1fr_260px]" : "mt-3"}>
          <TableShell>
            <thead>
              <tr>
                <Th label="Order" />
                <Th label="Code" />
                <Th label="Name" />
                <Th label="Scenario Execution Date" />
                <Th label="Reorder" />
              </tr>
            </thead>
            <tbody>
              {sel.scenarios.map((s, i) => (
                <tr key={s.code + i} className={trCls}>
                  <td className={tdCls}>{i + 1}</td>
                  <td className={`${tdCls} font-mono text-[10px]`}>{s.code}</td>
                  <td className={tdCls}>{s.name}</td>
                  <td className={tdCls}><code className="rounded bg-surface-alt px-1.5 py-0.5 font-mono text-[10px]">{s.dateExpr}</code></td>
                  <td className={tdCls}>
                    <span className="inline-flex gap-1">
                      <button type="button" aria-label={`Move ${s.name} up`} disabled={i === 0} onClick={() => move(i, -1)} className="rounded border border-border-warm p-1 hover:border-accent hover:text-accent disabled:opacity-30">
                        <ArrowUp className="size-3" />
                      </button>
                      <button type="button" aria-label={`Move ${s.name} down`} disabled={i === sel.scenarios.length - 1} onClick={() => move(i, 1)} className="rounded border border-border-warm p-1 hover:border-accent hover:text-accent disabled:opacity-30">
                        <ArrowDown className="size-3" />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
              {sel.scenarios.length === 0 && (
                <tr className={trCls}><td colSpan={5} className="px-3 py-6 text-center text-muted-foreground">No scenarios yet — use Add Scenarios to build the process.</td></tr>
              )}
            </tbody>
          </TableShell>
          {showTsd && (
            <div className="rounded-xl border border-border-warm bg-white p-3">
              <p className="mb-2 text-xs font-bold text-foreground">TSD Reference</p>
              <TsdCalculator compact expressions={["#TSD", "#TSD+1", "#TSD_M+1", "#TSD_ME"]} />
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <ViewHeader
        title="Business Processes"
        tour={[
          { title: "Business Processes", body: "A Business Process groups one or more Scenarios and defines their execution order for use in a Test Run." },
          { title: "Filter and search", body: "Select a Module (for example Teller, Standing Order, Lending or CASA) or search by name." },
        ]}
        actions={
          <>
            <select value={module} onChange={(e) => setModule(e.target.value)} aria-label="Select module" className={inputCls}>
              <option>All</option>
              {modules.map((m) => <option key={m}>{m}</option>)}
            </select>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search Business Process" aria-label="Search business process" className={`${inputCls} w-40`} />
            <SmallButton onClick={() => setAdding(true)}><Plus className="size-3.5" aria-hidden="true" /> Add Business Process</SmallButton>
          </>
        }
      />
      <TableShell footer={`Showing ${rows.length} of ${bps.length} records`}>
        <thead>
          <tr>
            <Th label="ID" k="id" sort={sort} onSort={onSort} />
            <Th label="Name" k="name" sort={sort} onSort={onSort} />
            <Th label="Description" k="description" sort={sort} onSort={onSort} />
            <Th label="Scenarios" k="scenarios" sort={sort} onSort={onSort} />
            <Th label="Module" k="module" sort={sort} onSort={onSort} />
          </tr>
        </thead>
        <tbody>
          {rows.map((b) => (
            <tr key={b.id} className={`${trCls} ${clickRow}`} onClick={() => setSelId(b.id)}>
              <td className={tdCls}><IdChip>{b.id}</IdChip></td>
              <td className={tdCls}>{b.name}</td>
              <td className={tdCls}>{b.description}</td>
              <td className={tdCls}>{b.scenarios.length}</td>
              <td className={tdCls}>{b.module}</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr className={trCls}><td colSpan={5} className="px-3 py-8 text-center text-muted-foreground">No business processes match this filter.</td></tr>
          )}
        </tbody>
      </TableShell>

      {adding && (
        <Modal title="Add Business Process" onClose={() => setAdding(false)}>
          <div className="flex flex-col gap-3">
            <Field label="Business Process Name">
              <input autoFocus className={inputCls} value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
            </Field>
            <Field label="Description (optional)">
              <input className={inputCls} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
            </Field>
            <Field label="Module">
              <select className={inputCls} value={draft.module} onChange={(e) => setDraft({ ...draft, module: e.target.value })}>
                {modules.map((m) => <option key={m}>{m}</option>)}
              </select>
            </Field>
          </div>
          <div className="mt-4 flex gap-2">
            <SmallButton
              disabled={!draft.name.trim()}
              onClick={() => {
                const id = `BP${String(bps.length + 1).padStart(3, "0")}`;
                setBps((p) => [...p, { id, name: draft.name.trim(), description: draft.description.trim() || "—", module: draft.module, scenarios: [] }]);
                setDraft({ name: "", description: "", module: "Lending" });
                setAdding(false);
                toast("Business process created");
              }}
            >
              Save
            </SmallButton>
            <SmallButton variant="ghost" onClick={() => setAdding(false)}>Cancel</SmallButton>
          </div>
        </Modal>
      )}
    </>
  );
}
