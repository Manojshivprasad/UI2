"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, FileCode2, Folder as FolderIcon, FolderPlus } from "lucide-react";
import { cn } from "@/lib/cn";
import { scenarioTree, type Folder, type ScenarioDef, type SchemaField } from "./data";
import { Modal, Field, SmallButton, ViewHeader, inputCls } from "./ui";

function SchemaTable({ title, rows }: { title: string; rows: SchemaField[] }) {
  return (
    <div className="mt-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      <div className="mt-1 overflow-x-auto rounded-lg border border-border-warm">
        <table className="w-full min-w-[320px] text-[10px]">
          <thead className="bg-surface-alt/60 text-left">
            <tr>
              {["Name", "Type", "Description", "Required"].map((h) => (
                <th key={h} className="px-2 py-1.5 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-t border-border-warm">
                <td className="px-2 py-1.5 font-mono">{r.name}</td>
                <td className="px-2 py-1.5">{r.type}</td>
                <td className="px-2 py-1.5 text-muted-foreground">{r.description}</td>
                <td className="px-2 py-1.5">{r.required ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Tree({
  folders, depth, openSet, toggle, selected, onSelect,
}: {
  folders: Folder[];
  depth: number;
  openSet: Set<string>;
  toggle: (k: string) => void;
  selected: string | null;
  onSelect: (s: ScenarioDef) => void;
}) {
  return (
    <ul>
      {folders.map((f) => {
        const open = openSet.has(f.name);
        return (
          <li key={f.name}>
            <button
              type="button"
              onClick={() => toggle(f.name)}
              aria-expanded={open}
              style={{ paddingLeft: 8 + depth * 14 }}
              className="flex w-full items-center gap-1.5 rounded-md py-1.5 pr-2 text-left text-[11px] font-semibold text-foreground hover:bg-surface-alt"
            >
              {open ? <ChevronDown className="size-3" aria-hidden="true" /> : <ChevronRight className="size-3" aria-hidden="true" />}
              <FolderIcon className="size-3.5 text-accent" aria-hidden="true" />
              {f.name}
            </button>
            {open && (
              <>
                <ul>
                  {f.scenarios.map((s) => (
                    <li key={s.code}>
                      <button
                        type="button"
                        onClick={() => onSelect(s)}
                        style={{ paddingLeft: 28 + depth * 14 }}
                        className={cn(
                          "flex w-full items-center gap-1.5 rounded-md py-1.5 pr-2 text-left text-[11px] hover:bg-surface-alt",
                          selected === s.code ? "bg-accent/10 font-semibold text-accent" : "text-foreground"
                        )}
                      >
                        <FileCode2 className="size-3.5" aria-hidden="true" />
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
                {f.children && (
                  <Tree folders={f.children} depth={depth + 1} openSet={openSet} toggle={toggle} selected={selected} onSelect={onSelect} />
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ScenariosView({ toast }: { toast: (m: string) => void }) {
  const [folders, setFolders] = useState<Folder[]>(scenarioTree);
  const [open, setOpen] = useState<Set<string>>(new Set(["Lending", "Loan Origination"]));
  const [sel, setSel] = useState<ScenarioDef | null>(scenarioTree[0].children![0].scenarios[0]);
  const [dialog, setDialog] = useState<null | "project" | "patch">(null);
  const [name, setName] = useState("");

  const toggle = (k: string) =>
    setOpen((p) => {
      const n = new Set(p);
      if (n.has(k)) n.delete(k);
      else n.add(k);
      return n;
    });

  return (
    <>
      <ViewHeader
        title="Scenario Maintenance"
        tour={[
          { title: "Scenario Maintenance", body: "Organise scenarios in a hierarchy of projects, folders and sub-folders and view or maintain their definitions." },
          { title: "Create Project / New Patch", body: "Create a project by hand, or upload a ZIP with New Patch and let TestNova build the folders and scenarios for you." },
          { title: "Test case template", body: "Download Test Case Template gives an Excel file with one column per input parameter, ready for test data." },
        ]}
        actions={
          <>
            <SmallButton variant="ghost" onClick={() => setDialog("patch")}>New Patch</SmallButton>
            <SmallButton onClick={() => { setName(""); setDialog("project"); }}>
              <FolderPlus className="size-3.5" aria-hidden="true" /> Create Project
            </SmallButton>
          </>
        }
      />

      <div className="grid gap-3 md:grid-cols-[210px_1fr]">
        <div className="max-h-72 overflow-y-auto rounded-xl border border-border-warm bg-white p-1.5 md:max-h-none">
          <Tree folders={folders} depth={0} openSet={open} toggle={toggle} selected={sel?.code ?? null} onSelect={setSel} />
        </div>

        <div className="rounded-xl border border-border-warm bg-white p-3.5">
          {sel ? (
            <>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{sel.name}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{sel.description}</p>
                </div>
                <SmallButton variant="ghost" onClick={() => toast("Test case template downloaded")}>Download Test Case Template</SmallButton>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] sm:grid-cols-3">
                {[
                  ["Code", sel.code],
                  ["Script Path", sel.scriptPath],
                  ["Timeout Limit", `${sel.timeout}s`],
                  ["System", sel.system],
                  ["System Type", sel.systemType],
                  ["Version", sel.version],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{k}</dt>
                    <dd className="mt-0.5 break-all font-mono text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <SchemaTable title="Input Schema" rows={sel.input} />
              <SchemaTable title="Output Schema" rows={sel.output} />
            </>
          ) : (
            <p className="py-10 text-center text-[11px] text-muted-foreground">Select a scenario to see its definition.</p>
          )}
        </div>
      </div>

      {dialog === "project" && (
        <Modal title="Create Project" onClose={() => setDialog(null)}>
          <Field label="Name">
            <input autoFocus className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Trade Finance" />
          </Field>
          <div className="mt-4 flex gap-2">
            <SmallButton
              disabled={!name.trim()}
              onClick={() => {
                setFolders((p) => [...p, { name: name.trim(), scenarios: [] }]);
                setOpen((p) => new Set(p).add(name.trim()));
                setDialog(null);
                toast("Folder added to the hierarchy");
              }}
            >
              Save Folder
            </SmallButton>
            <SmallButton variant="ghost" onClick={() => setDialog(null)}>Cancel</SmallButton>
          </div>
        </Modal>
      )}
      {dialog === "patch" && (
        <Modal title="Upload Patch File" onClose={() => setDialog(null)}>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Select a ZIP file containing multiple scenarios. TestNova creates the required folders, sub-folders and scenarios automatically, so you don&apos;t build each one by hand.
          </p>
          <div className="mt-3 rounded-lg border border-dashed border-border-warm bg-surface-alt/50 px-3 py-5 text-center text-[11px] text-muted-foreground">
            Select a zip file
          </div>
          <div className="mt-4 flex gap-2">
            <SmallButton onClick={() => { setDialog(null); toast("Patch processed — folders and scenarios created"); }}>Upload</SmallButton>
            <SmallButton variant="ghost" onClick={() => setDialog(null)}>Cancel</SmallButton>
          </div>
        </Modal>
      )}
    </>
  );
}
