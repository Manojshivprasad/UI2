// Illustrative demo data for the interactive TestNova console. Shapes mirror the
// screens in the TestNova User Guide; names, IDs and counts are sample values.

export type ExecStatus = "Passed" | "Failed" | "Cancelled" | "Running";
export type RunStatus =
  | "Draft"
  | "Ready for Execution"
  | "Obsolete"
  | "Archived"
  | "Cancelled";

export type Execution = {
  id: string;
  runId: string;
  runName: string;
  description: string;
  status: ExecStatus;
  browser: string;
  duration: string;
  startedAt: string; // ISO "YYYY-MM-DDTHH:mm"
  by: string;
  tsd: string; // ISO date
  bpIds?: string[]; // business processes captured when the run was started
};

export type Scenario = { code: string; name: string; dateExpr: string };
export type BusinessProcess = {
  id: string;
  name: string;
  description: string;
  module: string;
  scenarios: Scenario[];
};

export type TestRun = {
  id: string;
  name: string;
  description: string;
  module: string;
  bps: string[];
  lastExecutedAt: string | null;
  createdBy: string;
  status: RunStatus;
};

export type Scheduled = {
  id: string;
  runId: string;
  status: "Pending" | "Cancelled";
  description: string;
  browser: string;
  scheduledAt: string; // ISO "YYYY-MM-DDTHH:mm"
  by: string;
  retryFrequency: number;
  retryInterval: number;
  tsd: string;
};

export const modules = ["Teller", "Standing Order", "Lending", "CASA"] as const;

export const businessProcesses: BusinessProcess[] = [
  {
    id: "BP001",
    name: "Party Interaction Management",
    description: "Loan restructure and renegotiation journeys",
    module: "Lending",
    scenarios: [
      { code: "LRS001", name: "Loan Restructure - collateral secured", dateExpr: "#TSD" },
      { code: "LRN001", name: "Loan Renegotiation - secured", dateExpr: "#TSD+1" },
    ],
  },
  {
    id: "BP002",
    name: "Loan Origination",
    description: "Customer creation through disbursement",
    module: "Lending",
    scenarios: [
      { code: "CUS001", name: "Customer Creation", dateExpr: "#TSD" },
      { code: "LAP001", name: "Loan Application", dateExpr: "#TSD" },
      { code: "DLE0002", name: "Multi-Disbursement Loan", dateExpr: "#TSD+1" },
    ],
  },
  {
    id: "BP003",
    name: "Account Opening",
    description: "Customer and account set-up",
    module: "CASA",
    scenarios: [
      { code: "CUS001", name: "Customer Creation", dateExpr: "#TSD" },
      { code: "CAS001", name: "Current Account Opening", dateExpr: "#TSD" },
      { code: "CAS002", name: "Savings Account Opening", dateExpr: "#TSD" },
    ],
  },
  {
    id: "BP004",
    name: "Standing Order Setup",
    description: "Create and execute a recurring payment instruction",
    module: "Standing Order",
    scenarios: [
      { code: "SOR001", name: "Create Standing Order", dateExpr: "#TSD" },
      { code: "SOR002", name: "Execute Standing Order", dateExpr: "#TSD_M+1" },
    ],
  },
  {
    id: "BP005",
    name: "Cash Handling",
    description: "Teller deposits and withdrawals",
    module: "Teller",
    scenarios: [
      { code: "TEL001", name: "Teller Cash Deposit", dateExpr: "#TSD" },
      { code: "TEL002", name: "Teller Cash Withdrawal", dateExpr: "#TSD" },
    ],
  },
  {
    id: "BP006",
    name: "Month-End Processing",
    description: "Interest accrual and capitalisation across the month end",
    module: "CASA",
    scenarios: [
      { code: "INT001", name: "Interest Accrual", dateExpr: "#TSD" },
      { code: "INT002", name: "Interest Capitalisation", dateExpr: "#TSD_ME" },
    ],
  },
];

export const testRuns: TestRun[] = [
  { id: "TR001", name: "Party Interaction Management", description: "Restructure and renegotiation regression", module: "Lending", bps: ["BP001"], lastExecutedAt: "2026-09-02T09:40", createdBy: "qa.lead", status: "Ready for Execution" },
  { id: "TR002", name: "Loan Origination Regression", description: "End-to-end loan origination", module: "Lending", bps: ["BP002", "BP001"], lastExecutedAt: "2026-09-01T07:23", createdBy: "tester1", status: "Ready for Execution" },
  { id: "TR003", name: "CASA Account Opening", description: "Current and savings account opening", module: "CASA", bps: ["BP003"], lastExecutedAt: "2026-08-31T16:41", createdBy: "tester2", status: "Ready for Execution" },
  { id: "TR004", name: "Standing Order Setup", description: "Standing order create and execute", module: "Standing Order", bps: ["BP004"], lastExecutedAt: "2026-08-28T11:05", createdBy: "tester1", status: "Ready for Execution" },
  { id: "TR005", name: "Teller Operations", description: "Teller cash handling", module: "Teller", bps: ["BP005"], lastExecutedAt: "2026-08-27T14:12", createdBy: "analyst1", status: "Ready for Execution" },
  { id: "TR006", name: "Month-End Cycle", description: "Month-end interest processing", module: "CASA", bps: ["BP006"], lastExecutedAt: null, createdBy: "qa.lead", status: "Draft" },
  { id: "TR007", name: "New Test Run", description: "Empty draft — add business processes", module: "—", bps: [], lastExecutedAt: null, createdBy: "tester2", status: "Draft" },
];

const ex = (
  runId: string,
  n: number,
  description: string,
  status: ExecStatus,
  duration: string,
  startedAt: string,
  by: string,
  tsd: string
): Execution => ({
  id: `${runId}_${n}`,
  runId,
  runName: testRuns.find((r) => r.id === runId)!.name,
  description,
  status,
  browser: "Google Chrome",
  duration,
  startedAt,
  by,
  tsd,
});

export const seedExecutions: Execution[] = [
  ex("TR001", 3, "Release 4.2 regression", "Passed", "00:03:09", "2026-09-02T09:40", "qa.lead", "2026-09-02"),
  ex("TR002", 2, "Sprint 14 smoke", "Passed", "00:05:52", "2026-09-01T07:23", "tester1", "2026-09-01"),
  ex("TR003", 4, "Account opening retest", "Passed", "00:03:52", "2026-08-31T16:41", "tester2", "2026-08-31"),
  ex("TR004", 2, "Standing order UAT", "Failed", "00:02:18", "2026-08-28T11:05", "tester1", "2026-08-28"),
  ex("TR005", 5, "Teller regression", "Passed", "00:01:47", "2026-08-27T14:12", "analyst1", "2026-08-27"),
  ex("TR002", 1, "Initial run", "Cancelled", "00:00:41", "2026-08-26T10:30", "tester1", "2026-08-26"),
  ex("TR001", 2, "Post-patch check", "Passed", "00:03:21", "2026-08-25T15:02", "qa.lead", "2026-08-25"),
  ex("TR003", 3, "Weekly regression", "Passed", "00:04:05", "2026-08-24T09:15", "tester2", "2026-08-24"),
  ex("TR004", 1, "Standing order smoke", "Passed", "00:02:09", "2026-08-21T12:48", "tester1", "2026-08-21"),
  ex("TR005", 4, "Teller UAT", "Failed", "00:01:58", "2026-08-20T17:20", "analyst1", "2026-08-20"),
  ex("TR001", 1, "Initial run", "Passed", "00:03:14", "2026-08-19T10:10", "qa.lead", "2026-08-19"),
  ex("TR003", 2, "Account opening regression", "Passed", "00:03:47", "2026-08-18T08:55", "tester2", "2026-08-18"),
];

export const seedScheduled: Scheduled[] = [
  { id: "SCH-1", runId: "TR002", status: "Pending", description: "Nightly loan regression", browser: "Google Chrome", scheduledAt: "2026-09-22T22:00", by: "tester1", retryFrequency: 2, retryInterval: 60, tsd: "2026-09-22" },
  { id: "SCH-2", runId: "TR004", status: "Pending", description: "Pre-release standing order check", browser: "Google Chrome", scheduledAt: "2026-09-24T06:30", by: "qa.lead", retryFrequency: 1, retryInterval: 120, tsd: "2026-09-24" },
];

// ---------- scenario maintenance ----------

export type SchemaField = { name: string; type: string; description: string; required: boolean };
export type ScenarioDef = {
  code: string;
  name: string;
  description: string;
  scriptPath: string;
  timeout: number;
  system: string;
  systemType: string;
  version: string;
  input: SchemaField[];
  output: SchemaField[];
};
export type Folder = { name: string; scenarios: ScenarioDef[]; children?: Folder[] };

const sys = { system: "Essence", systemType: "Core Banking", version: "v4.2" };

export const scenarioTree: Folder[] = [
  {
    name: "Lending",
    scenarios: [],
    children: [
      {
        name: "Loan Origination",
        scenarios: [
          {
            code: "DLE0002",
            name: "Multi-Disbursement Loan",
            description: "Creates a loan and disburses it across several instalments.",
            scriptPath: "lending/loan_origination/dle0002.py",
            timeout: 300,
            ...sys,
            input: [
              { name: "CustomerId", type: "String", description: "Customer receiving the loan", required: true },
              { name: "Currency", type: "String", description: "Loan currency", required: true },
              { name: "TotalCost", type: "Number", description: "Total loan amount", required: true },
              { name: "DisbursementDate", type: "Date", description: "BD-relative date, e.g. #BD+2", required: true },
            ],
            output: [
              { name: "LoanAccountNumber", type: "String", description: "Account created for the loan", required: true },
              { name: "OutstandingBalance", type: "Number", description: "Balance after final disbursement", required: false },
            ],
          },
          {
            code: "LAP001",
            name: "Loan Application",
            description: "Captures and submits a loan application for approval.",
            scriptPath: "lending/loan_origination/lap001.py",
            timeout: 180,
            ...sys,
            input: [
              { name: "CustomerId", type: "String", description: "Applicant", required: true },
              { name: "ProductCode", type: "String", description: "Loan sub-product", required: true },
              { name: "Term", type: "String", description: "Loan term, e.g. 12 Months", required: true },
            ],
            output: [{ name: "ApplicationId", type: "String", description: "Reference for the application", required: true }],
          },
        ],
      },
      {
        name: "Restructure",
        scenarios: [
          {
            code: "LRS001",
            name: "Loan Restructure - collateral secured",
            description: "Restructures a secured loan and validates the revised schedule.",
            scriptPath: "lending/restructure/lrs001.py",
            timeout: 240,
            ...sys,
            input: [
              { name: "LoanAccountNumber", type: "String", description: "Loan to restructure", required: true },
              { name: "NewTerm", type: "String", description: "Revised term", required: true },
            ],
            output: [{ name: "RevisedSchedule", type: "JSON", description: "New repayment schedule", required: true }],
          },
        ],
      },
    ],
  },
  {
    name: "CASA",
    scenarios: [
      {
        code: "CAS001",
        name: "Current Account Opening",
        description: "Opens a current account for an existing customer.",
        scriptPath: "casa/cas001.py",
        timeout: 120,
        ...sys,
        input: [
          { name: "CustomerId", type: "String", description: "Account holder", required: true },
          { name: "Currency", type: "String", description: "Account currency", required: true },
          { name: "Branch", type: "String", description: "Opening branch", required: false },
        ],
        output: [{ name: "AccountNumber", type: "String", description: "New account number", required: true }],
      },
    ],
  },
  {
    name: "Teller",
    scenarios: [
      {
        code: "TEL001",
        name: "Teller Cash Deposit",
        description: "Posts a cash deposit through the teller module.",
        scriptPath: "teller/tel001.py",
        timeout: 90,
        ...sys,
        input: [
          { name: "AccountNumber", type: "String", description: "Credit account", required: true },
          { name: "Amount", type: "Number", description: "Deposit amount", required: true },
        ],
        output: [{ name: "TransactionReference", type: "String", description: "Posting reference", required: true }],
      },
    ],
  },
];

// ---------- systems ----------

export type SystemRec = {
  name: string;
  type: string;
  description: string;
  versions: string[];
  users: { name: string; isDefault: boolean }[];
  servers: { name: string; env: string }[];
};

export const systems: SystemRec[] = [
  {
    name: "Essence",
    type: "Core Banking",
    description: "Core banking application under test",
    versions: ["v4.1", "v4.2"],
    users: [
      { name: "test.user1", isDefault: true },
      { name: "test.user2", isDefault: false },
    ],
    servers: [
      { name: "SIT-01", env: "System integration" },
      { name: "UAT-01", env: "User acceptance" },
    ],
  },
  {
    name: "Internet Banking",
    type: "Web Application",
    description: "Customer-facing digital channel",
    versions: ["v2.8"],
    users: [{ name: "web.user1", isDefault: true }],
    servers: [{ name: "UAT-WEB", env: "User acceptance" }],
  },
];

// ---------- date helpers (UTC, deterministic across server/client) ----------

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const parseIso = (iso: string) => {
  const [d, t = "00:00"] = iso.split("T");
  const [y, m, day] = d.split("-").map(Number);
  const [hh, mm] = t.split(":").map(Number);
  return { y, m, day, hh, mm };
};

export function fmtDate(date: Date) {
  const d = String(date.getUTCDate()).padStart(2, "0");
  return `${d}-${MONTHS[date.getUTCMonth()]}-${date.getUTCFullYear()}`;
}

export function fmtDateTime(iso: string) {
  const { y, m, day, hh, mm } = parseIso(iso);
  const dow = DAYS[new Date(Date.UTC(y, m - 1, day)).getUTCDay()];
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  return `${dow}, ${String(day).padStart(2, "0")} ${MONTHS[m - 1]} ${y}, ${h12}:${String(mm).padStart(2, "0")} ${hh >= 12 ? "PM" : "AM"}`;
}

export function fmtShort(iso: string | null) {
  if (!iso) return "—";
  const { y, m, day } = parseIso(iso);
  return `${String(day).padStart(2, "0")} ${MONTHS[m - 1]} ${y}`;
}

/** Resolve TSD/BD expressions such as #TSD, TSD+1, #BD-2, TSD_M+1, TSD_ME, BD_M+12. */
export function resolveExpr(expr: string, baseIso: string): string | null {
  const m = expr.trim().replace(/^#/, "").match(/^(TSD|BD)(?:(_ME)|(?:(_M))?([+-]\d+)?)$/i);
  if (!m || !baseIso) return null;
  const { y, m: mo, day } = parseIso(baseIso);
  if (!y) return null;
  const n = m[4] ? parseInt(m[4], 10) : 0;
  if (m[2]) {
    return fmtDate(new Date(Date.UTC(y, mo, 0)));
  }
  if (m[3]) {
    const target = new Date(Date.UTC(y, mo - 1 + n, 1));
    const lastDay = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
    target.setUTCDate(Math.min(day, lastDay));
    return fmtDate(target);
  }
  return fmtDate(new Date(Date.UTC(y, mo - 1, day + n)));
}

// ---------- execution detail derivation ----------

export type TestCaseResult = {
  id: string;
  status: "Passed" | "Failed" | "Skipped";
  start: string;
  end: string;
  duration: string;
  events: { time: string; text: string; error?: boolean }[];
};
export type ScenarioResult = {
  scenario: Scenario;
  execId: string;
  status: "Passed" | "Failed" | "Skipped";
  duration: string;
  testCases: TestCaseResult[];
};
export type BpResult = {
  bp: BusinessProcess;
  status: "Passed" | "Failed" | "Skipped";
  scenarios: ScenarioResult[];
};

export function deriveResults(exec: Execution): BpResult[] {
  const run = testRuns.find((r) => r.id === exec.runId);
  const bps = (exec.bpIds ?? run?.bps ?? []).map((id) => businessProcesses.find((b) => b.id === id)!).filter(Boolean);
  const totalScenarios = bps.reduce((n, b) => n + b.scenarios.length, 0);
  let si = 0;
  return bps.map((bp, bi) => {
    const scenarios: ScenarioResult[] = bp.scenarios.map((scenario) => {
      si += 1;
      const isLast = si === totalScenarios;
      const execId = `${String(bi + 1).padStart(2, "0")}${String(si).padStart(2, "0")}`;
      const testCases: TestCaseResult[] = [1, 2].map((tc) => {
        let status: TestCaseResult["status"] = "Passed";
        if (exec.status === "Failed" && isLast && tc === 2) status = "Failed";
        if (exec.status === "Cancelled" && isLast) status = "Skipped";
        const id = `${execId}_${scenario.code}_TC${tc}`;
        const events: TestCaseResult["events"] = [
          { time: "00:00:01", text: "Test case started" },
          { time: "00:00:04", text: `Resolved ${scenario.dateExpr} against the business date` },
          { time: "00:00:09", text: "Scenario inputs submitted to the application" },
        ];
        if (status === "Passed") events.push({ time: "00:00:15", text: "Outcome verified — balances, accounting and statuses match expected" });
        if (status === "Failed") events.push({ time: "00:00:15", text: "Verification failed: actual status did not match expected status", error: true });
        if (status === "Skipped") events.splice(1, 2);
        return {
          id,
          status,
          start: "00:00:00",
          end: status === "Skipped" ? "00:00:00" : "00:00:16",
          duration: status === "Skipped" ? "—" : "16s",
          events,
        };
      });
      const sStatus = testCases.some((t) => t.status === "Failed")
        ? "Failed"
        : testCases.every((t) => t.status === "Skipped")
          ? "Skipped"
          : "Passed";
      return { scenario, execId, status: sStatus, duration: sStatus === "Skipped" ? "—" : "32s", testCases };
    });
    const status = scenarios.some((s) => s.status === "Failed")
      ? "Failed"
      : scenarios.every((s) => s.status === "Skipped")
        ? "Skipped"
        : "Passed";
    return { bp, status, scenarios };
  });
}

export function countResults(results: BpResult[]) {
  let tc = 0, passed = 0, failed = 0, skipped = 0, scenarios = 0;
  for (const b of results) {
    scenarios += b.scenarios.length;
    for (const s of b.scenarios) {
      for (const t of s.testCases) {
        tc += 1;
        if (t.status === "Passed") passed += 1;
        else if (t.status === "Failed") failed += 1;
        else skipped += 1;
      }
    }
  }
  return { bps: results.length, scenarios, tc, passed, failed, skipped };
}
