"use client";

import { useState, type ReactNode } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { TsdCalculator } from "./console/TsdCalculator";

function Card({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("w-full max-w-md overflow-hidden rounded-3xl border border-border-warm bg-white shadow-xl shadow-black/5", className)}>
      {title && (
        <div className="border-b border-border-warm bg-surface-alt/70 px-5 py-3 text-xs font-semibold text-foreground">{title}</div>
      )}
      <div className="p-5">{children}</div>
    </div>
  );
}

function Toggle<T extends string>({
  value, options, onChange, label,
}: {
  value: T;
  options: T[];
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <div role="group" aria-label={label} className="flex rounded-full border border-border-warm bg-surface-alt/60 p-0.5">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={cn(
              "flex-1 rounded-full px-2 py-1.5 text-[11px] font-semibold transition-colors",
              value === o ? "bg-accent text-on-accent" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

// ---------- Scenario → Business Process → Test Run → Execution → Results ----------

const structure = [
  { name: "Scenario", body: "A reusable test definition TestNova can execute — code, name, description, automation script, timeout, system and input schema." },
  { name: "Business Process", body: "Groups related Scenarios that together represent a process to be tested, and defines the order they execute in." },
  { name: "Test Run", body: "Selects the Business Processes to execute and is where test data, execution dates, server and user are prepared before running or scheduling." },
  { name: "Execution", body: "Runs the configured Scenarios using the applicable test data, system and execution settings." },
  { name: "Results", body: "Records the outcome of every execution for review through the Dashboard and Reports & Results — down to individual test cases." },
];

export function WorkingStructure() {
  const [i, setI] = useState(0);
  return (
    <Card title="How TestNova is organised" className="max-w-lg">
      <ol className="flex flex-wrap items-center gap-1.5">
        {structure.map((s, idx) => (
          <li key={s.name} className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setI(idx)}
              aria-pressed={i === idx}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                i === idx ? "border-accent bg-accent text-on-accent" : "border-border-warm bg-background text-foreground hover:border-accent/40"
              )}
            >
              {s.name}
            </button>
            {idx < structure.length - 1 && <ArrowRight className="size-3 text-muted-foreground/60" aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <p className="mt-4 min-h-16 text-sm leading-relaxed text-muted-foreground" aria-live="polite">{structure[i].body}</p>
      <p className="mt-3 rounded-xl bg-surface-alt/70 px-3 py-2 text-[11px] leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">Key distinction: </span>
        Scenarios and Business Processes are reusable test content; a Test Run brings the required content together for one specific execution.
      </p>
    </Card>
  );
}

// ---------- TSD / BD expressions ----------

export function DateExpressionsCard() {
  return (
    <Card title="TSD & Business Date expressions">
      <TsdCalculator />
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
        Dates are written relative to the Test Start Date or Business Date, so the same test case stays valid on any execution day.
      </p>
    </Card>
  );
}

// ---------- chained scenario outputs ----------

const outputs = [
  { field: "CustomerNumber", sample: "PTY0005" },
  { field: "AccountNumber", sample: "ACC-100234" },
];

export function ChainedOutputs() {
  const [o, setO] = useState(0);
  const ref = `$0101_0073_TC1:${outputs[o].field}`;
  return (
    <Card title="Linking scenarios">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Scenario 0101 · output</p>
      <div className="mt-1.5 flex gap-2">
        {outputs.map((x, idx) => (
          <button
            key={x.field}
            type="button"
            aria-pressed={o === idx}
            onClick={() => setO(idx)}
            className={cn(
              "rounded-lg border px-2.5 py-1.5 font-mono text-[11px] transition-colors",
              o === idx ? "border-accent bg-accent/10 text-accent" : "border-border-warm bg-background text-foreground hover:border-accent/40"
            )}
          >
            {x.field}
          </button>
        ))}
      </div>
      <div className="my-3 flex justify-center"><ArrowRight className="size-4 rotate-90 text-accent" aria-hidden="true" /></div>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Next scenario · input template</p>
      <div className="mt-1.5 rounded-lg border border-border-warm bg-background px-3 py-2 font-mono text-[11px] text-foreground">{ref}</div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        At run time this resolves to <span className="font-mono font-semibold text-foreground">{outputs[o].sample}</span> — no manual look-up or re-entry.
      </p>
    </Card>
  );
}

// ---------- test data preparation ----------

export function TestDataModes() {
  const [mode, setMode] = useState<"User Defined" | "Auto Generated">("User Defined");
  const [validation, setValidation] = useState<"Functional Behaviour" | "Migration Integrity">("Functional Behaviour");
  const modeText =
    mode === "User Defined"
      ? "Upload your prepared Test Suite (an Excel sheet). TestNova validates it against the scenario's expected fields and confirms “Validation Passed and Uploaded Successfully” — or tells you exactly why it failed."
      : "TestNova runs the SQL script attached to the scenario against the configured database and builds the test data from the query results.";
  const valText =
    validation === "Migration Integrity"
      ? "Data fetched from the server is used as-is, without modification."
      : "For user-defined suites, or server data that has been edited before use.";
  return (
    <Card title="Prepare test data">
      <div className="flex flex-col gap-4">
        <Toggle label="Data Preparation Mode" value={mode} options={["User Defined", "Auto Generated"]} onChange={setMode} />
        <p className="text-xs leading-relaxed text-muted-foreground" aria-live="polite">{modeText}</p>
        <Toggle label="Validation Type" value={validation} options={["Functional Behaviour", "Migration Integrity"]} onChange={setValidation} />
        <p className="text-xs leading-relaxed text-muted-foreground" aria-live="polite">{valText}</p>
      </div>
    </Card>
  );
}

// ---------- TestNova Studio ----------

const studio = [
  { name: "Capture", body: "A companion browser extension records your actions on the target application during a live session." },
  { name: "Generate", body: "TestNova Studio converts the recorded session into a ready-to-use scenario script. Nothing is saved until you decide." },
  { name: "Review", body: "See the script beside Scenario Code, Name, Description, Timeout, System, Version and Target Folder — regenerate as often as you like." },
  { name: "Save", body: "Copy, Download, or Upload / Create Scenario to store it in the folder you choose." },
];

export function StudioFlow() {
  const [i, setI] = useState(0);
  return (
    <Card title="TestNova Studio">
      <ol className="grid grid-cols-4 gap-1.5">
        {studio.map((s, idx) => (
          <li key={s.name}>
            <button
              type="button"
              onClick={() => setI(idx)}
              aria-pressed={i === idx}
              className={cn(
                "flex w-full flex-col items-center gap-1 rounded-xl border px-1 py-2 text-[11px] font-semibold transition-colors",
                i === idx ? "border-accent bg-accent/10 text-accent" : "border-border-warm bg-background text-foreground hover:border-accent/40"
              )}
            >
              <span className="font-heading text-sm">{idx + 1}</span>
              {s.name}
            </button>
          </li>
        ))}
      </ol>
      <p className="mt-4 min-h-14 text-sm leading-relaxed text-muted-foreground" aria-live="polite">{studio[i].body}</p>
    </Card>
  );
}

// ---------- Test Run lifecycle ----------

const lifecycle = [
  { name: "Draft", body: "The initial stage. Configure the Test Run, add or modify business processes, edit details and clone existing runs.", edit: true, run: false },
  { name: "Ready for Execution", body: "Fully configured and finalized. It can be executed or viewed read-only. Once marked ready it cannot be reverted to Draft.", edit: false, run: true },
  { name: "Obsolete", body: "Marks a Test Run as deprecated or replaced by a newer version. View-only.", edit: false, run: false },
  { name: "Archived", body: "Stored for historical reference and record-keeping. View-only and not part of the active execution cycle.", edit: false, run: false },
  { name: "Cancelled", body: "Intentionally terminated during setup or maintenance. View-only and cannot be resumed.", edit: false, run: false },
];

function Flag({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold", ok ? "bg-emerald-100 text-emerald-700" : "bg-stone-200 text-stone-600")}>
      {ok ? <Check className="size-3.5" aria-hidden="true" /> : <X className="size-3.5" aria-hidden="true" />}
      {label}
    </span>
  );
}

export function RunLifecycle() {
  const [i, setI] = useState(0);
  const s = lifecycle[i];
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-14">
      <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {lifecycle.map((l, idx) => (
          <button
            key={l.name}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={i === idx}
            className={cn(
              "shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors duration-200",
              i === idx ? "border-accent bg-accent/10 text-accent" : "border-border-warm text-muted-foreground hover:border-accent/30"
            )}
          >
            {l.name}
          </button>
        ))}
      </div>
      <div className="flex min-h-[220px] w-full flex-col justify-center gap-5 rounded-3xl border border-border-warm bg-white/60 p-8 shadow-sm sm:p-10">
        <p className="font-heading text-2xl font-bold text-foreground">{s.name}</p>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base" aria-live="polite">{s.body}</p>
        <div className="flex flex-wrap gap-2">
          <Flag ok={s.edit} label="Editable" />
          <Flag ok={s.run} label="Can be executed" />
        </div>
      </div>
    </div>
  );
}
