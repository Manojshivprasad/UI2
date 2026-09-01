export type NavChild = {
  label: string;
  href: string;
  blurb: string;
  icon: IconName;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type IconName =
  | "ShieldCheck"
  | "FlaskConical"
  | "Link2"
  | "PieChart"
  | "Landmark"
  | "Workflow"
  | "Database"
  | "Code2"
  | "BrainCircuit"
  | "Bot"
  | "FileText"
  | "Building2"
  | "Lightbulb"
  | "Newspaper"
  | "BookOpen"
  | "Mail"
  | "CalendarCheck";

export const products: NavChild[] = [
  {
    label: "AuditOne",
    href: "/products/auditone",
    blurb: "Continuous audit & compliance for core banking.",
    icon: "ShieldCheck",
  },
  {
    label: "TestNova",
    href: "/products/testnova",
    blurb: "Automated test orchestration for banking releases.",
    icon: "FlaskConical",
  },
  {
    label: "FinLink",
    href: "/products/finlink",
    blurb: "Integration layer connecting core banking to fintech rails.",
    icon: "Link2",
  },
  {
    label: "Asset360",
    href: "/products/asset360",
    blurb: "Unified view of assets across banking portfolios.",
    icon: "PieChart",
  },
];

export const services: NavChild[] = [
  {
    label: "Core Banking",
    href: "/services/core-banking",
    blurb: "Placeholder: end-to-end core banking implementation.",
    icon: "Landmark",
  },
  {
    label: "Workflow Automation",
    href: "/services/workflow-automation",
    blurb: "Placeholder: automating manual banking operations.",
    icon: "Workflow",
  },
  {
    label: "Data Migration",
    href: "/services/data-migration",
    blurb: "Placeholder: audit-ready migration between core systems.",
    icon: "Database",
  },
  {
    label: "Custom Software",
    href: "/services/custom-software",
    blurb: "Placeholder: bespoke software built around your workflows.",
    icon: "Code2",
  },
  {
    label: "AI & ML",
    href: "/services/ai-ml",
    blurb: "Placeholder: applied AI/ML for banking operations.",
    icon: "BrainCircuit",
  },
];

export const resources: NavChild[] = [
  {
    label: "Insights",
    href: "/resources/insights",
    blurb: "Placeholder: analysis and perspectives from our consultants.",
    icon: "Lightbulb",
  },
  {
    label: "Blog",
    href: "/resources/blog",
    blurb: "Placeholder: news and updates from the team.",
    icon: "Newspaper",
  },
  {
    label: "Resource Library",
    href: "/resources/library",
    blurb: "Placeholder: guides, whitepapers, and playbooks.",
    icon: "BookOpen",
  },
];

export const primaryNav: NavItem[] = [
  { label: "Products", href: "/products", children: products },
  { label: "Services", href: "/services", children: services },
  { label: "Agentic AI", href: "/agentic-ai" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources", children: resources },
];

export const footerColumns = [
  {
    heading: "Products",
    links: products.map((p) => ({ label: p.label, href: p.href })),
  },
  {
    heading: "Services",
    links: services.map((s) => ({ label: s.label, href: s.href })),
  },
  {
    heading: "Company",
    links: [
      { label: "Agentic AI", href: "/agentic-ai" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "About Us", href: "/about" },
    ],
  },
  {
    heading: "Resources",
    links: resources.map((r) => ({ label: r.label, href: r.href })),
  },
  {
    heading: "Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Consultation", href: "/contact/book-a-consultation" },
    ],
  },
];
