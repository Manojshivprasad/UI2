"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BarChart3, CalendarClock, FileCode2, FlaskConical, GitBranch, LayoutDashboard, ListChecks, Server, Boxes,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import {
  seedExecutions, seedScheduled, testRuns as seedRuns, type Execution, type Scheduled, type TestRun,
} from "./data";
import { DashboardView } from "./DashboardView";
import { ReportsView } from "./ReportsView";
import { ScheduledView } from "./ScheduledView";
import { ScenariosView } from "./ScenariosView";
import { StudioView } from "./StudioView";
import { BusinessProcessesView } from "./BusinessProcessesView";
import { TestRunsView, type StartPayload } from "./TestRunsView";
import { ModulesView, SystemsView } from "./SystemsModulesView";
import { ModalHostContext } from "./ui";

type View =
  | "dashboard" | "reports" | "scheduled" | "scenarios" | "studio"
  | "bps" | "runs" | "systems" | "modules";

const nav: { id: View; label: string; icon: LucideIcon }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "reports", label: "Reports & Results", icon: BarChart3 },
  { id: "scheduled", label: "Scheduled Executions", icon: CalendarClock },
  { id: "scenarios", label: "Scenario Maintenance", icon: FileCode2 },
  { id: "studio", label: "TestNova Studio", icon: FlaskConical },
  { id: "bps", label: "Business Processes", icon: GitBranch },
  { id: "runs", label: "Test Runs", icon: ListChecks },
  { id: "systems", label: "Systems", icon: Server },
  { id: "modules", label: "Modules", icon: Boxes },
];

const pad = (n: number) => String(n).padStart(2, "0");
const nowIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

/**
 * An interactive replica of the TestNova application, built from the screens in the TestNova User
 * Guide. All data is illustrative sample data that lives in the browser only.
 */
export function TestNovaConsole({ className, paneHeight = "h-[540px]" }: { className?: string; paneHeight?: string }) {
  const [view, setView] = useState<View>("dashboard");
  const [executions, setExecutions] = useState<Execution[]>(seedExecutions);
  const [runs, setRuns] = useState<TestRun[]>(seedRuns);
  const [scheduled, setScheduled] = useState<Scheduled[]>(seedScheduled);
  const [reportId, setReportId] = useState<string | null>(null);
  const [moduleFilter, setModuleFilter] = useState("All");
  const [bpKey, setBpKey] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  const toast = useCallback((m: string) => {
    setMessage(m);
    timers.current.push(setTimeout(() => setMessage((cur) => (cur === m ? null : cur)), 2600));
  }, []);

  const go = (v: View) => {
    setView(v);
    if (v === "reports") setReportId(null);
    if (v === "bps") { setModuleFilter("All"); setBpKey((k) => k + 1); }
  };

  const openExecution = (id: string) => {
    setReportId(id);
    setView("reports");
  };

  const startExecution = (run: TestRun, p: StartPayload) => {
    if (p.schedule) {
      const id = `SCH-${scheduled.length + 1}`;
      setScheduled((prev) => [
        ...prev,
        {
          id, runId: run.id, status: "Pending", description: p.description, browser: p.browser,
          scheduledAt: p.schedule!.at, by: "you", retryFrequency: p.schedule!.retryFrequency,
          retryInterval: p.schedule!.retryInterval, tsd: p.tsd,
        },
      ]);
      toast("Execution scheduled successfully");
      setView("scheduled");
      return;
    }
    const n = Math.max(0, ...executions.filter((e) => e.runId === run.id).map((e) => Number(e.id.split("_")[1]))) + 1;
    const exec: Execution = {
      id: `${run.id}_${n}`, runId: run.id, runName: run.name, description: p.description, status: "Running",
      browser: p.browser, duration: "00:00:00", startedAt: nowIso(), by: "you", tsd: p.tsd, bpIds: [...run.bps],
    };
    setExecutions((prev) => [exec, ...prev]);
    setRuns((prev) => prev.map((r) => (r.id === run.id ? { ...r, lastExecutedAt: exec.startedAt } : r)));
    setView("dashboard");
    toast("Execution started");
    timers.current.push(
      setTimeout(() => {
        setExecutions((prev) => prev.map((e) => (e.id === exec.id ? { ...e, status: "Passed", duration: "00:00:24" } : e)));
        toast(`${exec.id} passed`);
      }, 2400)
    );
  };

  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-border-warm bg-white text-left shadow-xl shadow-black/5", className)}>
      <div className="flex items-center gap-3 border-b border-border-warm bg-white px-4 py-2.5">
        <Logo className="h-5 w-auto" />
        <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:inline">TestNova</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-600" /> Interactive preview
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          <span className="flex size-6 items-center justify-center rounded-full bg-surface-alt text-[10px] font-bold text-foreground">D</span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] font-semibold text-foreground">Demo user</span>
            <span className="text-[9px] text-muted-foreground">sample data</span>
          </span>
        </span>
      </div>

      <div className="flex flex-col md:flex-row">
        <nav aria-label="TestNova navigation" className="flex gap-1 overflow-x-auto border-b border-border-warm bg-white p-2 md:w-48 md:shrink-0 md:flex-col md:overflow-visible md:border-b-0 md:border-r">
          {nav.map((n) => {
            const active = view === n.id;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => go(n.id)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-2.5 py-2 text-left text-[11px] font-medium transition-colors",
                  active ? "bg-accent/10 text-accent" : "text-foreground/80 hover:bg-surface-alt"
                )}
              >
                <n.icon className="size-3.5" aria-hidden="true" />
                {n.label}
              </button>
            );
          })}
        </nav>

        <div ref={setHost} className={cn("relative min-w-0 flex-1 bg-background", paneHeight)}>
          <ModalHostContext.Provider value={host}>
          <div className="h-full overflow-y-auto p-4">
          {view === "dashboard" && <DashboardView executions={executions} onOpen={(e) => openExecution(e.id)} />}
          {view === "reports" && <ReportsView executions={executions} selectedId={reportId} onSelect={setReportId} toast={toast} />}
          {view === "scheduled" && <ScheduledView items={scheduled} setItems={setScheduled} toast={toast} />}
          {view === "scenarios" && <ScenariosView toast={toast} />}
          {view === "studio" && <StudioView toast={toast} />}
          {view === "bps" && <BusinessProcessesView key={bpKey} initialModule={moduleFilter} toast={toast} />}
          {view === "runs" && (
            <TestRunsView runs={runs} setRuns={setRuns} executions={executions} onStart={startExecution} onOpenExecution={openExecution} toast={toast} />
          )}
          {view === "systems" && <SystemsView />}
          {view === "modules" && (
            <ModulesView onOpenModule={(m) => { setModuleFilter(m); setBpKey((k) => k + 1); setView("bps"); }} />
          )}
          </div>
          </ModalHostContext.Provider>
        </div>
      </div>

      <div aria-live="polite" className="pointer-events-none absolute inset-x-0 bottom-4 z-50 flex justify-center px-4">
        {message && (
          <div className="rounded-full bg-foreground px-4 py-2 text-[11px] font-semibold text-white shadow-lg">{message}</div>
        )}
      </div>
    </div>
  );
}
