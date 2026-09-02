"use client";

import {
  Zap,
  CheckCircle2,
  GitBranch,
  Play,
  FlagTriangleRight,
  Database,
  BarChart3,
  Lightbulb,
  ArrowRightCircle,
  Users,
  MonitorSmartphone,
  Share2,
  Server,
  Landmark,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/cn";
import { DashboardMock } from "./DashboardMock";
import { HorizontalFlow } from "@/components/flow/HorizontalFlow";
import { VerticalFlow } from "@/components/flow/VerticalFlow";
import { FlowFrame } from "@/components/flow/FlowFrame";

const workflowNodes = [
  { icon: FlagTriangleRight, label: "Trigger" },
  { icon: CheckCircle2, label: "Validation" },
  { icon: GitBranch, label: "Decision" },
  { icon: Play, label: "Action" },
  { icon: Zap, label: "Completed" },
];

const dataNodes = [
  { icon: Database, label: "Raw Data" },
  { icon: BarChart3, label: "Analysis" },
  { icon: Lightbulb, label: "Insights" },
  { icon: ArrowRightCircle, label: "Action" },
];

const architectureNodes = [
  { icon: Users, label: "Users" },
  { icon: MonitorSmartphone, label: "Application" },
  { icon: Share2, label: "API Layer" },
  { icon: Server, label: "Platform" },
  { icon: Landmark, label: "Banking Systems", filled: true },
];

const capabilities = [
  {
    title: "See everything in real time",
    description:
      "Monitor critical banking operations from a single intelligent workspace.",
    visual: <DashboardMock />,
  },
  {
    title: "Automate what slows your team down",
    description:
      "Replace repetitive operational workflows with intelligent automation.",
    visual: (
      <FlowFrame>
        <HorizontalFlow nodes={workflowNodes} stepped size="sm" />
      </FlowFrame>
    ),
  },
  {
    title: "Turn banking data into decisions",
    description: "Surface actionable insights from complex operational data.",
    visual: (
      <FlowFrame>
        <HorizontalFlow nodes={dataNodes} size="md" />
      </FlowFrame>
    ),
  },
  {
    title: "Built for enterprise scale",
    description:
      "Secure, resilient infrastructure designed for demanding banking environments.",
    visual: (
      <FlowFrame>
        <VerticalFlow nodes={architectureNodes} />
      </FlowFrame>
    ),
  },
];

export function Capabilities() {
  return (
    <section id="platform" className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center sm:mb-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Capabilities
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            One workspace, every control your team needs
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-20 sm:gap-28">
          {capabilities.map((cap, i) => {
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal
                key={cap.title}
                direction={isEven ? "left" : "right"}
                className={cn(
                  "flex flex-col items-center gap-8 sm:flex-row sm:gap-12 lg:gap-16",
                  !isEven && "sm:flex-row-reverse"
                )}
              >
                <div className="w-full sm:w-[52%]">{cap.visual}</div>
                <div className="w-full sm:w-[38%]">
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {cap.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
