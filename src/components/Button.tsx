import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "onAccent";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  ghost:
    "border border-accent text-accent hover:bg-accent hover:text-on-accent",
  onAccent: "bg-white text-accent hover:bg-white/90",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
