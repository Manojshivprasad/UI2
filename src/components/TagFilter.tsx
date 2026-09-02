"use client";

import { cn } from "@/lib/cn";

export function TagFilter({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}) {
  const options = ["All", ...tags];

  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {options.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(tag)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200",
            active === tag
              ? "border-accent bg-accent text-on-accent"
              : "border-border-warm text-muted-foreground hover:border-accent/30 hover:text-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
