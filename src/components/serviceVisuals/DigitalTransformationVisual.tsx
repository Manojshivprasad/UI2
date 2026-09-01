"use client";

import { HardDrive, Layers, Sparkles } from "lucide-react";
import { useLoopStep } from "@/lib/useLoopStep";
import { VisualFrame } from "./VisualFrame";
import { NodeChip } from "./NodeChip";
import { FlowLine } from "./FlowLine";

const stages = [
  { icon: HardDrive, label: "Legacy System", dashed: true },
  { icon: Layers, label: "API Layer", dashed: false },
  { icon: Sparkles, label: "Modern Platform", dashed: false },
];

export function DigitalTransformationVisual() {
  const step = useLoopStep(stages.length - 1, 1100);
  const activeIndex = Math.min(step, stages.length - 1);

  return (
    <VisualFrame>
      <div className="flex w-full items-center">
        {stages.map((stage, i) => (
          <div
            key={stage.label}
            className="flex items-center"
            style={{ flex: i < stages.length - 1 ? "1 1 0%" : "0 0 auto" }}
          >
            <NodeChip
              icon={stage.icon}
              label={stage.label}
              active={i === activeIndex}
              filled={i === activeIndex && i === stages.length - 1}
              dashed={stage.dashed}
            />
            {i < stages.length - 1 && <FlowLine duration={2.6} dotCount={1} />}
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
