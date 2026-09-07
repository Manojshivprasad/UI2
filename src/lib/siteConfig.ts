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
    blurb: "Purpose-built for auditing banking transactions and static data.",
    icon: "ShieldCheck",
  },
  {
    label: "TestNova",
    href: "/products/testnova",
    blurb: "End-to-end business process testing for banking — not just code.",
    icon: "FlaskConical",
  },
  {
    label: "FinLink",
    href: "/products/finlink",
    blurb: "The enterprise service bus connecting your banking ecosystem.",
    icon: "Link2",
  },
  {
    label: "Asset360",
    href: "/products/asset360",
    blurb: "Manage the full lifecycle of fixed assets, acquisition to disposal.",
    icon: "PieChart",
  },
];

export const services: NavChild[] = [
  {
    label: "Core Banking",
    href: "/services/core-banking",
    blurb: "End-to-end Finastra Fusion Essence implementation and modernization.",
    icon: "Landmark",
  },
  {
    label: "Workflow Automation",
    href: "/services/workflow-automation",
    blurb: "Automating manual, multi-system banking operations with Newgen.",
    icon: "Workflow",
  },
  {
    label: "Data Migration",
    href: "/services/data-migration",
    blurb: "Move data between core systems with accuracy and confidence.",
    icon: "Database",
  },
  {
    label: "Custom Software",
    href: "/services/custom-software",
    blurb: "Banking-grade custom software, secure by design, owned by you.",
    icon: "Code2",
  },
  {
    label: "AI & ML",
    href: "/services/ai-ml",
    blurb: "Applied AI/ML for fraud, risk, document intelligence, and agents.",
    icon: "BrainCircuit",
  },
];

export const resources: NavChild[] = [
  {
    label: "Insights",
    href: "/resources/insights",
    blurb: "Analysis and perspectives from our banking consultants.",
    icon: "Lightbulb",
  },
  {
    label: "Blog",
    href: "/resources/blog",
    blurb: "News and updates from the ThoughtsCrest team.",
    icon: "Newspaper",
  },
  {
    label: "Resource Library",
    href: "/resources/library",
    blurb: "Guides, whitepapers, and playbooks for banking transformation.",
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
