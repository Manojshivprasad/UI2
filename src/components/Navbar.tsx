"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav } from "@/lib/siteConfig";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWithClear = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(label);
  };

  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border-warm)]"
          : "bg-background/0"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          aria-label="ThoughtsCrest home"
          className="flex shrink-0 items-center"
        >
          <Logo priority className="h-8 sm:h-9" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && openWithClear(item.label)}
              onMouseLeave={() => item.children && scheduleClose()}
            >
              <Link
                href={item.href}
                aria-haspopup={item.children ? "true" : undefined}
                aria-expanded={item.children ? openMenu === item.label : undefined}
                onFocus={() => item.children && openWithClear(item.label)}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:bg-surface-alt hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      openMenu === item.label && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                )}
              </Link>

              {item.children && (
                <div
                  role="menu"
                  className={cn(
                    "absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-3 transition-all duration-150",
                    openMenu === item.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                  onMouseEnter={() => openWithClear(item.label)}
                  onMouseLeave={() => scheduleClose()}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border-warm bg-background p-3 shadow-xl shadow-black/5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-alt"
                      >
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-accent">
                          <Icon name={child.icon} className="size-4.5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground">
                            {child.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                            {child.blurb}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Contact
          </Link>
          <Button href="/contact/book-a-consultation" className="text-sm">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border-warm bg-background px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-border-warm pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-border-warm pt-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Button href="/contact/book-a-consultation" className="w-full">
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
