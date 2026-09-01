"use client";

import { Check, FileText, Cog, UserCheck, CheckCircle2 } from "lucide-react";
import { useLoopStep } from "@/lib/useLoopStep";
import { VisualFrame } from "./VisualFrame";
import { NodeChip } from "./NodeChip";
import { FlowLine } from "./FlowLine";

const stages = [
  { icon: FileText, label: "Manual Task" },
  { icon: Cog, label: "Automation" },
  { icon: UserCheck, label: "Approval" },
  { icon: CheckCircle2, label: "Completed" },
];

export function WorkflowAutomationVisual() {
  const step = useLoopStep(stages.length, 900);
  const passed = Math.min(step, stages.length);

  return (
    <VisualFrame>
      <div className="flex w-full flex-col items-center gap-6">
        <div className="flex w-full items-start">
          {stages.map((stage, i) => {
            const isDone = i < passed;
            return (
              <div
                key={stage.label}
                className="flex items-center"
                style={{ flex: i < stages.length - 1 ? "1 1 0%" : "0 0 auto" }}
              >
                <div className="relative">
                  <NodeChip icon={stage.icon} label={stage.label} active={isDone} />
                  {isDone && (
                    <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-emerald-500">
                      <Check className="size-2.5 text-white" strokeWidth={3} />
                    </span>
                  )}
                </div>
                {i < stages.length - 1 && (
                  <FlowLine dotCount={0} className="opacity-40" />
                )}
              </div>
            );
          })}
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-warm">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${(passed / stages.length) * 100}%` }}
          />
        </div>
      </div>
    </VisualFrame>
  );
}
