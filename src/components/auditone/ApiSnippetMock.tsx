"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const endpoints = [
  {
    method: "GET",
    path: "/v1/audit/findings",
    lines: [
      ["status", "\"ok\"", "string"],
      ["findings_open", "2", "number"],
      ["compliance_score", "100", "number"],
      ["latency_ms", "42", "number"],
    ],
  },
  {
    method: "POST",
    path: "/v1/audit/reconcile",
    lines: [
      ["status", "\"queued\"", "string"],
      ["batch_id", "\"rc_8841\"", "string"],
      ["records", "12482", "number"],
      ["eta_seconds", "9", "number"],
    ],
  },
] as const;

export function ApiSnippetMock({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const endpoint = endpoints[active];

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-3xl border border-border-warm bg-foreground shadow-xl shadow-black/10 transition-shadow duration-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-1 border-b border-white/10 px-2.5 py-2.5">
        {endpoints.map((ep, i) => (
          <button
            key={ep.path}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={cn(
              "rounded-lg px-3 py-1.5 text-[11px] font-medium transition-colors duration-200",
              active === i
                ? "bg-white/10 text-white"
                : "text-white/40 hover:text-white/70"
            )}
          >
            <span className="text-accent">{ep.method}</span>{" "}
            <span className="font-mono">{ep.path}</span>
          </button>
        ))}
      </div>

      <pre className="overflow-x-auto px-5 py-5 text-[12px] leading-relaxed">
        <code className="font-mono">
          <span className="text-white/40">{"{"}</span>
          {"\n"}
          {endpoint.lines.map(([key, value, type], i) => (
            <span key={key}>
              {"  "}
              <span className="text-accent">&quot;{key}&quot;</span>
              <span className="text-white/40">: </span>
              <span className={type === "string" ? "text-emerald-400" : "text-white/80"}>
                {value}
              </span>
              {i < endpoint.lines.length - 1 && (
                <span className="text-white/40">,</span>
              )}
              {"\n"}
            </span>
          ))}
          <span className="text-white/40">{"}"}</span>
        </code>
      </pre>
    </div>
  );
}
