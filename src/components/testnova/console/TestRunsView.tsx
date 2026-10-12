"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Copy, Play, Plus, XCircle } from "lucide-react";
import {
  businessProcesses, fmtShort, resolveExpr, type Execution, type RunStatus, type TestRun,
} from "./data";
import {
  Field, IdChip, Kv, Modal, SmallButton, StatusPill, TableShell, Th, ViewHeader, clickRow, inputCls, nextSort, sortRows, tdCls, trCls,
  type SortState,
} from "./ui";

type Key = "id" | "name" | "module" | "bps" | "lastExecutedAt" | "createdBy";

const statusInfo: Record<RunStatus, string> = {
  Draft: "Initial stage while the Test Run is being set up. Configure it, add or modify business processes, edit details and clone.",
  "Ready for Execution": "Fully configured and finalized. Can be executed. Once marked ready it cannot be reverted to Draft.",
  Obsolete: "Deprecated or replaced by a newer version. View-only and can no longer be executed.",
  Archived: "Stored for historical reference. View-only — cannot be edited or executed.",
  Cancelled: "Intentionally terminated during setup or maintenance. View-only and cannot be resumed.",
};
const statuses = Object.keys(statusInfo) as RunStatus[];

export type StartPayload = { browser: string; description: string; tsd: string; schedule: null | { at: string; retryFrequency: number; retryInterval: number } };

export function TestRunsView({
  runs,
  setRuns,
  executions,
  onStart,
  onOpenExecution,
  toast,
}: {
  runs: TestRun[];
  setRuns: (fn: (p: TestRun[]) => TestRun[]) => void;
  executions: Execution[];
  onStart: (run: TestRun, p: StartPayload) => void;
  onOpenExecution: (id: string) => void;
  toast: (m: string) => void;
}) {
  const [field, setField] = useState<"Test Run Name" | "Test Run ID" | "Created By">("Test Run Name");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortState<Key>>(null);
  const [selId, setSelId] = useState<string | null>(null);
  const [dialog, setDialog] = useState<null | "status" | "bps" | "tsd" | "start" | "add" | "clone">(null);
  const [newName, setNewName] = useState("");

  const sel = runs.find((r) => r.id === selId);

  const rows = useMemo(() => {
    const f = runs.filter((r) => {
      const v = field === "Test Run Name" ? r.name : field === "Test Run ID" ? r.id : r.createdBy;
      return v.toLowerCase().includes(q.trim().toLowerCase());
    });
    return sortRows(f, sort, (r, k) => (k === "bps" ? r.bps.length : (r[k] ?? "")));
  }, [runs, field, q, sort]);
  const onSort = (k: Key) => setSort((s) => nextSort(s, k));
  const patch = (id: string, p: Partial<TestRun>) => setRuns((prev) => prev.map((r) => (r.id === id ? { ...r, ...p } : r)));

  if (sel) {
    const history = executions.filter((e) => e.runId === sel.id);
    const linked = sel.bps.map((id) => businessProcesses.find((b) => b.id === id)!).filter(Boolean);
    const editable = sel.status === "Draft";
    const cloneDisabled = sel.bps.length > 0 || history.length > 0;
    return (
      <>
        <ViewHeader
          title={`${sel.id} · ${sel.name}`}
          back={{ label: "Test Runs", onClick: () => setSelId(null) }}
          tour={[
            { title: "Test Run Status", body: "Shows the current status of the Test Run, for example Draft." },
            { title: "Execution Controls", body: "Start or cancel execution of the Test Run. Start New Execution is available once it is Ready for Execution." },
            { title: "Business Process Details", body: "Business Processes linked to the run with each scenario's execution order, date and test data." },
            { title: "Execution History", body: "Past executions of the Test Run, with counts of test cases run, passed, failed and skipped." },
          ]}
          actions={
            <>
              <StatusPill status={sel.status} />
              <SmallButton variant="ghost" onClick={() => setDialog("status")}>Change Status</SmallButton>
              <SmallButton onClick={() => setDialog("start")} disabled={sel.status !== "Ready for Execution" || sel.bps.length === 0} title={sel.status !== "Ready for Execution" ? "Mark the Test Run as Ready for Execution first" : sel.bps.length === 0 ? "Add a Business Process first" : undefined}>
                <Play className="size-3 fill-current" aria-hidden="true" /> Start New Execution
              </SmallButton>
            </>
          }
        />

        <div className="grid gap-3 lg:grid-cols-[1fr_210px]">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-border-warm bg-white p-3 sm:grid-cols-4">
              <Kv label="Test Run ID" value={<IdChip>{sel.id}</IdChip>} />
              <Kv label="Module" value={sel.module} />
              <Kv label="Created By" value={sel.createdBy} />
              <Kv label="Description" value={sel.description} />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <SmallButton variant="ghost" disabled={!editable} onClick={() => setDialog("bps")} title={editable ? undefined : "Only Draft Test Runs can be edited"}>
                <Plus className="size-3.5" aria-hidden="true" /> {sel.bps.length ? "Edit Business Process" : "Add Business Process"}
              </SmallButton>
              <SmallButton variant="ghost" disabled={sel.bps.length === 0} onClick={() => setDialog("tsd")}>TSD Calculation</SmallButton>
              <SmallButton
                variant="ghost"
                disabled={cloneDisabled}
                onClick={() => setDialog("clone")}
                title={cloneDisabled ? "A Test Run that is already linked or executed cannot be cloned" : undefined}
              >
                <Copy className="size-3.5" aria-hidden="true" /> Clone Test Run
              </SmallButton>
            </div>

            <TableShell>
              <thead>
                <tr>
                  <Th label="Order" />
                  <Th label="Module" />
                  <Th label="Business Process" />
                  <Th label="Scenario" />
                  <Th label="Execution Date" />
                  <Th label="Test Data" />
                </tr>
              </thead>
              <tbody>
                {linked.flatMap((b, bi) =>
                  b.scenarios.map((s, si) => (
                    <tr key={`${b.id}-${s.code}-${si}`} className={trCls}>
                      <td className={tdCls}>{bi + 1}.{si + 1}</td>
                      <td className={tdCls}>{b.module}</td>
                      <td className={tdCls}>{b.name}</td>
                      <td className={tdCls}>{s.name}</td>
                      <td className={tdCls}><code className="font-mono text-[10px]">{s.dateExpr}</code></td>
                      <td className={`${tdCls} text-muted-foreground`}>{history.length ? "Functional Behaviour" : "Not Available"}</td>
                    </tr>
                  ))
                )}
                {linked.length === 0 && (
                  <tr className={trCls}><td colSpan={6} className="px-3 py-6 text-center text-muted-foreground">No business processes yet. Add one, or clone an existing Test Run.</td></tr>
                )}
              </tbody>
            </TableShell>
          </div>

          <aside className="rounded-xl border border-border-warm bg-white p-3">
            <p className="text-xs font-bold text-foreground">Execution History</p>
            {history.length === 0 ? (
              <p className="mt-3 text-[11px] text-muted-foreground">No previous executions found.</p>
            ) : (
              <ul className="mt-2 flex flex-col gap-1.5">
                {history.map((e) => (
                  <li key={e.id}>
                    <button type="button" onClick={() => onOpenExecution(e.id)} className="flex w-full items-center gap-2 rounded-lg border border-border-warm px-2 py-1.5 text-left hover:border-accent">
                      {e.status === "Passed" ? <CheckCircle2 className="size-3.5 text-emerald-600" aria-hidden="true" /> : e.status === "Failed" ? <XCircle className="size-3.5 text-red-600" aria-hidden="true" /> : <span className="size-3.5 rounded-full border border-border-warm" />}
                      <span className="flex flex-col leading-tight">
                        <span className="text-[11px] font-semibold text-foreground">Execution {e.id.split("_")[1]}</span>
                        <span className="text-[10px] text-muted-foreground">{fmtShort(e.startedAt)}</span>
                      </span>
                      <span className="ml-auto"><StatusPill status={e.status} /></span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </div>

        {dialog === "status" && <StatusDialog run={sel} onClose={() => setDialog(null)} onSave={(s) => { patch(sel.id, { status: s }); setDialog(null); toast("Test Run Status updated successfully"); }} />}
        {dialog === "bps" && (
          <BpDialog
            selected={sel.bps}
            onClose={() => setDialog(null)}
            onSave={(ids) => {
              const first = businessProcesses.find((b) => b.id === ids[0]);
              patch(sel.id, { bps: ids, module: first?.module ?? "—" });
              setDialog(null);
              toast("Business process updated successfully");
            }}
          />
        )}
        {dialog === "tsd" && <TsdDialog run={sel} onClose={() => setDialog(null)} />}
        {dialog === "start" && (
          <StartDialog
            onClose={() => setDialog(null)}
            onStart={(p) => { onStart(sel, p); setDialog(null); }}
          />
        )}
        {dialog === "clone" && (
          <Modal title="Clone Test Run" onClose={() => setDialog(null)}>
            <p className="mb-2 text-[11px] text-muted-foreground">Pick a Test Run to inherit its Business Processes.</p>
            <ul className="flex flex-col gap-1.5">
              {runs.filter((r) => r.id !== sel.id && r.bps.length > 0).map((r) => (
                <li key={r.id} className="flex items-center justify-between rounded-lg border border-border-warm px-2.5 py-1.5 text-[11px]">
                  <span>{r.name} <span className="text-muted-foreground">· {r.bps.length} BP</span></span>
                  <SmallButton onClick={() => { patch(sel.id, { bps: [...r.bps], module: r.module }); setDialog(null); toast("Business Process cloned into this Test Run"); }}>Add</SmallButton>
                </li>
              ))}
            </ul>
          </Modal>
        )}
      </>
    );
  }

  return (
    <>
      <ViewHeader
        title="Test Runs"
        tour={[
          { title: "Test Runs", body: "A Test Run brings the required Business Processes together for execution." },
          { title: "Search", body: "Search by Test Run Name, Test Run ID or Created By, and sort any column with its arrows." },
          { title: "Try it", body: "Open TR006, add or review its Business Processes, mark it Ready for Execution, then Start New Execution." },
        ]}
        actions={
          <>
            <select value={field} onChange={(e) => setField(e.target.value as typeof field)} aria-label="Search field" className={inputCls}>
              <option>Test Run Name</option>
              <option>Test Run ID</option>
              <option>Created By</option>
            </select>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." aria-label="Search test runs" className={`${inputCls} w-32`} />
            <SmallButton onClick={() => { setNewName(""); setDialog("add"); }}><Plus className="size-3.5" aria-hidden="true" /> Add Test Run</SmallButton>
          </>
        }
      />
      <TableShell footer={`Showing ${rows.length} of ${runs.length} records`}>
        <thead>
          <tr>
            <Th label="ID" k="id" sort={sort} onSort={onSort} />
            <Th label="Name" k="name" sort={sort} onSort={onSort} />
            <Th label="Module" k="module" sort={sort} onSort={onSort} />
            <Th label="Business Processes" k="bps" sort={sort} onSort={onSort} />
            <Th label="Last Executed At" k="lastExecutedAt" sort={sort} onSort={onSort} />
            <Th label="Created By" k="createdBy" sort={sort} onSort={onSort} />
            <Th label="Status" />
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className={`${trCls} ${clickRow}`} onClick={() => setSelId(r.id)}>
              <td className={tdCls}><IdChip>{r.id}</IdChip></td>
              <td className={tdCls}>{r.name}</td>
              <td className={tdCls}>{r.module}</td>
              <td className={tdCls}>{r.bps.length}</td>
              <td className={tdCls}>{fmtShort(r.lastExecutedAt)}</td>
              <td className={tdCls}>{r.createdBy}</td>
              <td className={tdCls}><StatusPill status={r.status} /></td>
            </tr>
          ))}
        </tbody>
      </TableShell>

      {dialog === "add" && (
        <Modal title="Add Test Run" onClose={() => setDialog(null)}>
          <Field label="Test Run Name">
            <input autoFocus className={inputCls} value={newName} onChange={(e) => setNewName(e.target.value)} />
          </Field>
          <div className="mt-4 flex gap-2">
            <SmallButton
              disabled={!newName.trim()}
              onClick={() => {
                const id = `TR${String(runs.length + 1).padStart(3, "0")}`;
                setRuns((p) => [...p, { id, name: newName.trim(), description: "—", module: "—", bps: [], lastExecutedAt: null, createdBy: "you", status: "Draft" }]);
                setDialog(null);
                setSelId(id);
                toast("Test Run created");
              }}
            >
              Save
            </SmallButton>
            <SmallButton variant="ghost" onClick={() => setDialog(null)}>Cancel</SmallButton>
          </div>
        </Modal>
      )}
    </>
  );
}

function StatusDialog({ run, onClose, onSave }: { run: TestRun; onClose: () => void; onSave: (s: RunStatus) => void }) {
  const [s, setS] = useState<RunStatus>(run.status);
  const locked = run.status !== "Draft";
  return (
    <Modal title="Change Test Run Status" onClose={onClose}>
      <Field label="Status">
        <select className={inputCls} value={s} onChange={(e) => setS(e.target.value as RunStatus)}>
          {statuses.map((x) => (
            <option key={x} disabled={x === "Draft" && run.status !== "Draft"}>{x}</option>
          ))}
        </select>
      </Field>
      <p className="mt-3 rounded-lg bg-surface-alt/70 p-2.5 text-[11px] leading-relaxed text-muted-foreground">{statusInfo[s]}</p>
      {locked && <p className="mt-2 text-[10px] text-muted-foreground">Draft is unavailable once a Test Run has been marked ready.</p>}
      <div className="mt-4 flex gap-2">
        <SmallButton onClick={() => onSave(s)}>Save</SmallButton>
        <SmallButton variant="ghost" onClick={onClose}>Cancel</SmallButton>
      </div>
    </Modal>
  );
}

function BpDialog({ selected, onClose, onSave }: { selected: string[]; onClose: () => void; onSave: (ids: string[]) => void }) {
  const [ids, setIds] = useState<string[]>(selected);
  return (
    <Modal title="Add Business Process" onClose={onClose}>
      <ul className="flex flex-col gap-1.5">
        {businessProcesses.map((b) => (
          <li key={b.id} className="flex items-center justify-between rounded-lg border border-border-warm px-2.5 py-1.5 text-[11px]">
            <span><IdChip>{b.id}</IdChip> {b.name} <span className="text-muted-foreground">· {b.scenarios.length} scenarios</span></span>
            {ids.includes(b.id) ? (
              <SmallButton variant="danger" onClick={() => setIds(ids.filter((i) => i !== b.id))}>Remove</SmallButton>
            ) : (
              <SmallButton onClick={() => setIds([...ids, b.id])}>Add</SmallButton>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Selected (execution order)</p>
      <ol className="mt-1 list-inside list-decimal text-[11px] text-foreground">
        {ids.map((id) => <li key={id}>{businessProcesses.find((b) => b.id === id)?.name}</li>)}
        {ids.length === 0 && <li className="list-none text-muted-foreground">None selected</li>}
      </ol>
      <div className="mt-4 flex gap-2">
        <SmallButton onClick={() => onSave(ids)}>Save</SmallButton>
        <SmallButton variant="ghost" onClick={onClose}>Cancel</SmallButton>
      </div>
    </Modal>
  );
}

function TsdDialog({ run, onClose }: { run: TestRun; onClose: () => void }) {
  const [tsd, setTsd] = useState("2026-09-22");
  const rows = run.bps.flatMap((id) => businessProcesses.find((b) => b.id === id)?.scenarios ?? []);
  return (
    <Modal title="TSD Calculation" onClose={onClose}>
      <Field label="Test Start Date (TSD)">
        <input type="date" className={inputCls} value={tsd} onChange={(e) => setTsd(e.target.value)} />
      </Field>
      <table className="mt-3 w-full text-[10px]">
        <thead className="text-left text-muted-foreground">
          <tr><th className="py-1">#</th><th>Scenario</th><th>Expression</th><th>Result</th></tr>
        </thead>
        <tbody>
          {rows.map((s, i) => (
            <tr key={i} className="border-t border-border-warm">
              <td className="py-1">{i + 1}</td>
              <td>{s.name}</td>
              <td className="font-mono">{s.dateExpr}</td>
              <td className="font-semibold">{resolveExpr(s.dateExpr, tsd) ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-[10px] text-muted-foreground">Preview only — the TSD used for the real run is entered in Start New Execution.</p>
    </Modal>
  );
}

function StartDialog({ onClose, onStart }: { onClose: () => void; onStart: (p: StartPayload) => void }) {
  const [schedule, setSchedule] = useState(false);
  const [browser, setBrowser] = useState("Google Chrome");
  const [description, setDescription] = useState("");
  const [tsd, setTsd] = useState("2026-09-22");
  const [at, setAt] = useState("2026-09-23T22:00");
  const [rf, setRf] = useState(1);
  const [ri, setRi] = useState(60);
  const ok = description.trim().length > 0 && !!tsd;
  return (
    <Modal title="Add Execution Description" onClose={onClose}>
      <label className="mb-3 flex items-center gap-2 text-[11px] font-semibold text-foreground">
        <input type="checkbox" checked={schedule} onChange={(e) => setSchedule(e.target.checked)} className="accent-[var(--accent)]" />
        Schedule Test Run for later execution
      </label>
      <div className="grid grid-cols-2 gap-3">
        {schedule && (
          <>
            <Field label="Schedule Date"><input type="datetime-local" className={inputCls} value={at} onChange={(e) => setAt(e.target.value)} /></Field>
            <Field label="Retry Frequency"><input type="number" min={0} className={inputCls} value={rf} onChange={(e) => setRf(Number(e.target.value))} /></Field>
            <Field label="Retry Interval (sec)"><input type="number" min={0} className={inputCls} value={ri} onChange={(e) => setRi(Number(e.target.value))} /></Field>
          </>
        )}
        <Field label="Browser">
          <select className={inputCls} value={browser} onChange={(e) => setBrowser(e.target.value)}>
            <option>Google Chrome</option>
            <option>Microsoft Edge</option>
          </select>
        </Field>
        <Field label="TSD (Test Start Date)"><input type="date" className={inputCls} value={tsd} onChange={(e) => setTsd(e.target.value)} /></Field>
        <div className="col-span-2">
          <Field label="Description"><input autoFocus className={inputCls} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Required" /></Field>
        </div>
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground">The TSD must match the current business date of the system under test.</p>
      <div className="mt-4 flex gap-2">
        <SmallButton disabled={!ok} onClick={() => onStart({ browser, description: description.trim(), tsd, schedule: schedule ? { at, retryFrequency: rf, retryInterval: ri } : null })}>
          {schedule ? "Schedule" : "Start"}
        </SmallButton>
        <SmallButton variant="ghost" onClick={onClose}>Cancel</SmallButton>
      </div>
    </Modal>
  );
}
