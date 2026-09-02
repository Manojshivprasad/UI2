import type { LucideIcon } from "lucide-react";
import { NodeChip } from "@/components/serviceVisuals/NodeChip";
import { FlowLine } from "@/components/serviceVisuals/FlowLine";

type FlowNode = { icon: LucideIcon; label: string; filled?: boolean };

export function VerticalFlow({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex flex-col items-center">
          <NodeChip
            icon={node.icon}
            label={node.label}
            filled={node.filled}
            size="md"
          />
          {i < nodes.length - 1 && (
            <FlowLine
              orientation="vertical"
              duration={1.8}
              dotCount={2}
              className="h-8 w-px flex-none"
            />
          )}
        </div>
      ))}
    </div>
  );
}
