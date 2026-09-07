import { Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

type Field = {
  id: string;
  label: string;
  type: "text" | "email" | "date" | "textarea";
  placeholder?: string;
};

export function SimpleForm({
  eyebrow,
  title,
  description,
  fields,
  submitLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  fields: Field[];
  submitLabel: string;
}) {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 lg:px-10">
      <ScrollReveal className="mb-10 flex flex-col items-center gap-5 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-surface-alt text-accent">
          <Mail className="size-7" aria-hidden="true" />
        </span>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <h1 className="font-heading text-4xl font-extrabold text-foreground">
          {title}
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <form className="flex flex-col gap-5 rounded-3xl border border-border-warm bg-surface-alt/60 p-8">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label
                htmlFor={field.id}
                className="text-sm font-semibold text-foreground"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  rows={4}
                  placeholder={field.placeholder}
                  className="rounded-xl border border-border-warm bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="rounded-xl border border-border-warm bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover"
          >
            {submitLabel}
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Form submission is not yet connected.
          </p>
        </form>
      </ScrollReveal>
    </section>
  );
}
