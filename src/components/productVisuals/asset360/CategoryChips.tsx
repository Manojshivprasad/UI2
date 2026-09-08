"use client";

import { useState } from "react";
import {
  Landmark,
  Factory,
  Armchair,
  Truck,
  Laptop,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";

const categories: { icon: LucideIcon; label: string; blurb: string }[] = [
  {
    icon: Landmark,
    label: "Land & Property",
    blurb: "Real estate holdings, branches, and owned facilities.",
  },
  {
    icon: Factory,
    label: "Plant & Machinery",
    blurb: "Production equipment and operational machinery.",
  },
  {
    icon: Armchair,
    label: "Furniture & Fixtures",
    blurb: "Office furniture, fittings, and branch fixtures.",
  },
  {
    icon: Truck,
    label: "Vehicles & Transportation",
    blurb: "Fleet vehicles and transportation assets.",
  },
  {
    icon: Laptop,
    label: "IT Assets",
    blurb: "Hardware, devices, and technology infrastructure.",
  },
  {
    icon: Sparkles,
    label: "Intangible Assets",
    blurb: "Software licenses, patents, and goodwill.",
  },
];

export function CategoryChips() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category, i) => (
          <button
            key={category.label}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={cn(
              "flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
              i === active
                ? "border-accent bg-accent text-on-accent"
                : "border-border-warm bg-white/60 text-foreground hover:border-accent/40"
            )}
          >
            <category.icon className="size-4" aria-hidden="true" />
            {category.label}
          </button>
        ))}
      </div>
      <p className="mx-auto mt-5 max-w-md text-center text-sm text-muted-foreground">
        {categories[active].blurb}
      </p>
    </div>
  );
}
