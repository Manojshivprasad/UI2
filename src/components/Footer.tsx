import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerColumns } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border-warm bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-lg font-bold text-foreground"
            >
              ThoughtsCrest
            </Link>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
              Global technology partner for banks and financial institutions.
              Core banking, automation, and AI.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:info@thoughtscrest.com" className="hover:text-accent">
                  info@thoughtscrest.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="max-w-[24ch]">
                  2nd Floor, Rahul Arcade, #53, 12th Main Road, Sector 6, HSR
                  Layout, Bangalore, Karnataka 560102, India
                </span>
              </li>
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {col.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border-warm pt-8 sm:flex-row sm:items-center sm:justify-between">
          <form className="flex w-full max-w-sm items-center gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@bank.com"
              className="w-full rounded-full border border-border-warm bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ThoughtsCrest. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
