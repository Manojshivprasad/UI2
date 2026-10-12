"use client";

import { useState } from "react";
import { fmtDateTime, type Scheduled } from "./data";
import {
  Field, IdChip, Kv, SmallButton, StatusPill, TableShell, Th, ViewHeader, clickRow, inputCls, tdCls, trCls,
} from "./ui";

export function ScheduledView({
  items,
  setItems,
  toast,
}: {
  items: Scheduled[];
  setItems: (fn: (prev: Scheduled[]) => Scheduled[]) => void;
  toast: (m: string) => void;
}) {
  const [selId, setSelId] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);
  const sel = items.find((i) => i.id === selId);
  const [draft, setDraft] = useState<Scheduled | null>(null);

  if (sel) {
    const cur = editing && draft ? draft : sel;
    const upd = (patch: Partial<Scheduled>) => setDraft({ ...cur, ...patch });
    return (
      <>
        <ViewHeader
          title="Schedule Execution Details"
          back={{ label: "Scheduled Executions", onClick: () => { setSelId(null); setEditing(false); } }}
          tour={[{ title: "Scheduled item", body: "Review a scheduled run, edit it in place without going back to the Test Run, or cancel it entirely." }]}
        />
        <div className="rounded-xl border border-border-warm bg-white p-4">
          {editing ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Field label="Description">
                <input className={inputCls} value={cur.description} onChange={(e) => upd({ description: e.target.value })} />
              </Field>
              <Field label="Schedule Date">
                <input type="datetime-local" className={inputCls} value={cur.scheduledAt} onChange={(e) => upd({ scheduledAt: e.target.value })} />
              </Field>
              <Field label="TSD">
                <input type="date" className={inputCls} value={cur.tsd} onChange={(e) => upd({ tsd: e.target.value })} />
              </Field>
              <Field label="Retry Frequency">
                <input type="number" min={0} className={inputCls} value={cur.retryFrequency} onChange={(e) => upd({ retryFrequency: Number(e.target.value) })} />
              </Field>
              <Field label="Retry Interval (sec)">
                <input type="number" min={0} className={inputCls} value={cur.retryInterval} onChange={(e) => upd({ retryInterval: Number(e.target.value) })} />
              </Field>
              <Field label="Browser">
                <select className={inputCls} value={cur.browser} onChange={(e) => upd({ browser: e.target.value })}>
                  <option>Google Chrome</option>
                  <option>Microsoft Edge</option>
                </select>
              </Field>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Kv label="Test Run ID" value={<IdChip>{sel.runId}</IdChip>} />
              <Kv label="Description" value={sel.description} />
              <Kv label="Status" value={<StatusPill status={sel.status} />} />
              <Kv label="Schedule Date" value={fmtDateTime(sel.scheduledAt)} />
              <Kv label="Scheduled By" value={sel.by} />
              <Kv label="Retry Frequency" value={sel.retryFrequency} />
              <Kv label="Retry Interval" value={`${sel.retryInterval}s`} />
              <Kv label="TSD" value={sel.tsd.split("-").reverse().join("-")} />
              <Kv label="Browser" value={sel.browser} />
            </div>
          )}
          <div className="mt-4 flex gap-2">
            {editing ? (
              <>
                <SmallButton
                  onClick={() => {
                    setItems((p) => p.map((i) => (i.id === cur.id ? cur : i)));
                    setEditing(false);
                    toast("Scheduled Execution updated successfully");
                  }}
                >
                  Save
                </SmallButton>
                <SmallButton variant="ghost" onClick={() => setEditing(false)}>Cancel</SmallButton>
              </>
            ) : (
              <>
                <SmallButton variant="ghost" disabled={sel.status === "Cancelled"} onClick={() => { setDraft(sel); setEditing(true); }}>Edit</SmallButton>
                <SmallButton
                  variant="danger"
                  disabled={sel.status === "Cancelled"}
                  onClick={() => {
                    setItems((p) => p.map((i) => (i.id === sel.id ? { ...i, status: "Cancelled" } : i)));
                    toast("Scheduled execution cancelled");
                  }}
                >
                  Cancel Execution
                </SmallButton>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ViewHeader
        title="Scheduled Executions"
        tour={[
          { title: "Scheduled Executions", body: "All Test Runs scheduled from the Test Runs tab. Select one to review, edit or cancel it." },
          { title: "Schedule from a Test Run", body: "Open a Ready for Execution Test Run, choose Start New Execution and switch on “Schedule Test Run for later execution”." },
        ]}
      />
      <TableShell>
        <thead>
          <tr>
            <Th label="Test Run ID" />
            <Th label="Status" />
            <Th label="Description" />
            <Th label="Browser" />
            <Th label="Scheduled Time" />
            <Th label="Scheduled By" />
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && (
            <tr className={trCls}><td colSpan={6} className="px-3 py-8 text-center text-muted-foreground">Nothing scheduled yet — schedule a run from Test Runs.</td></tr>
          )}
          {items.map((i) => (
            <tr key={i.id} className={`${trCls} ${clickRow}`} onClick={() => setSelId(i.id)}>
              <td className={tdCls}><IdChip>{i.runId}</IdChip></td>
              <td className={tdCls}><StatusPill status={i.status} /></td>
              <td className={tdCls}>{i.description}</td>
              <td className={tdCls}>{i.browser}</td>
              <td className={tdCls}>{fmtDateTime(i.scheduledAt)}</td>
              <td className={tdCls}>{i.by}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}
