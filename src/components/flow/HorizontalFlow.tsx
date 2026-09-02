"use client";

import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NodeChip } from "@/components/serviceVisuals/NodeChip";
import { FlowLine } from "@/components/serviceVisuals/FlowLine";
import { useLoopStep } from "@/lib/useLoopStep";

type FlowNode = { icon: LucideIcon; label: string };

export function HorizontalFlow({
  nodes,
  stepped = false,
  size = "md",
}: {
  nodes: FlowNode[];
  stepped?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const step = useLoopStep(nodes.length, 850);
  const passed = stepped ? Math.min(step, nodes.length) : nodes.length;

  return (
    <div className="flex w-full items-start">
      {nodes.map((node, i) => {
        const isDone = i < passed;
        return (
          <div
            key={node.label}
            className="flex items-center"
            style={{ flex: i < nodes.length - 1 ? "1 1 0%" : "0 0 auto" }}
          >
            <div className="relative">
              <NodeChip icon={node.icon} label={node.label} active={isDone} size={size} />
              {stepped && isDone && (
                <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-emerald-500">
                  <Check className="size-2.5 text-white" strokeWidth={3} />
                </span>
              )}
            </div>
            {i < nodes.length - 1 && (
              <FlowLine dotCount={stepped ? 0 : 1} duration={2.2} />
            )}
          </div>
        );
      })}
    </div>
  );
}
