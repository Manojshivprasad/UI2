import {
  ShieldCheck,
  FlaskConical,
  Link2,
  PieChart,
  Landmark,
  Workflow,
  Database,
  Code2,
  BrainCircuit,
  Bot,
  FileText,
  Building2,
  Lightbulb,
  Newspaper,
  BookOpen,
  Mail,
  CalendarCheck,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/siteConfig";

const registry: Record<IconName, React.ComponentType<LucideProps>> = {
  ShieldCheck,
  FlaskConical,
  Link2,
  PieChart,
  Landmark,
  Workflow,
  Database,
  Code2,
  BrainCircuit,
  Bot,
  FileText,
  Building2,
  Lightbulb,
  Newspaper,
  BookOpen,
  Mail,
  CalendarCheck,
};

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = registry[name];
  return <Component {...props} />;
}
