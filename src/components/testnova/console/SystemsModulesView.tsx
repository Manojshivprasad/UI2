"use client";

import { useState } from "react";
import { Boxes, Server } from "lucide-react";
import { businessProcesses, modules, systems } from "./data";
import { IdChip, Kv, TableShell, Th, ViewHeader, clickRow, tdCls, trCls } from "./ui";

export function SystemsView() {
  const [sel, setSel] = useState<string | null>(null);
  const s = systems.find((x) => x.name === sel);

  if (s) {
    return (
      <>
        <ViewHeader
          title={s.name}
          back={{ label: "Systems", onClick: () => setSel(null) }}
          tour={[{ title: "System Overview", body: "View and manage System Name, Description, System Type, Version Name, Users Info and Server Info." }]}
        />
        <div className="grid grid-cols-2 gap-3 rounded-xl border border-border-warm bg-white p-3.5 sm:grid-cols-3">
          <Kv label="System Name" value={s.name} />
          <Kv label="System Type" value={s.type} />
          <Kv label="Description" value={s.description} />
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border-warm bg-white p-3">
            <p className="text-xs font-bold text-foreground">Versions</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">{s.versions.map((v) => <li key={v}><IdChip>{v}</IdChip></li>)}</ul>
          </div>
          <div className="rounded-xl border border-border-warm bg-white p-3">
            <p className="text-xs font-bold text-foreground">Users Info</p>
            <ul className="mt-2 flex flex-col gap-1 text-[11px]">
              {s.users.map((u) => (
                <li key={u.name} className="flex items-center justify-between">
                  <span className="font-mono">{u.name}</span>
                  {u.isDefault && <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[9px] font-semibold text-accent">Default</span>}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[10px] text-muted-foreground">Credentials are stored per system user and used during execution.</p>
          </div>
          <div className="rounded-xl border border-border-warm bg-white p-3">
            <p className="text-xs font-bold text-foreground">Server Info</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-[11px]">
              {s.servers.map((sv) => (
                <li key={sv.name} className="flex items-center gap-2">
                  <Server className="size-3.5 text-accent" aria-hidden="true" />
                  <span className="font-mono">{sv.name}</span>
                  <span className="text-muted-foreground">{sv.env}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ViewHeader
        title="Systems"
        tour={[{ title: "Systems", body: "Maintains the applications and execution endpoints used by TestNova — name, type, versions, users and servers." }]}
      />
      <TableShell>
        <thead>
          <tr><Th label="System Name" /><Th label="System Type" /><Th label="Versions" /><Th label="Users" /><Th label="Servers" /></tr>
        </thead>
        <tbody>
          {systems.map((x) => (
            <tr key={x.name} className={`${trCls} ${clickRow}`} onClick={() => setSel(x.name)}>
              <td className={`${tdCls} font-semibold`}>{x.name}</td>
              <td className={tdCls}>{x.type}</td>
              <td className={tdCls}>{x.versions.join(", ")}</td>
              <td className={tdCls}>{x.users.length}</td>
              <td className={tdCls}>{x.servers.length}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}

export function ModulesView({ onOpenModule }: { onOpenModule: (m: string) => void }) {
  return (
    <>
      <ViewHeader
        title="Modules"
        tour={[{ title: "Modules", body: "A Module classifies business functionality. Business Processes can be associated with a Module, and Test Run screens show the relevant Module." }]}
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {modules.map((m) => {
          const n = businessProcesses.filter((b) => b.module === m).length;
          return (
            <li key={m}>
              <button
                type="button"
                onClick={() => onOpenModule(m)}
                className="flex w-full items-center gap-3 rounded-xl border border-border-warm bg-white p-3.5 text-left transition-colors hover:border-accent"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-surface-alt text-accent"><Boxes className="size-4" aria-hidden="true" /></span>
                <span>
                  <span className="block text-xs font-bold text-foreground">{m}</span>
                  <span className="block text-[10px] text-muted-foreground">{n} business {n === 1 ? "process" : "processes"} · open filtered list</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
