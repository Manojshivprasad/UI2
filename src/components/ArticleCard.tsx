import { ArrowRight, type LucideIcon } from "lucide-react";

export type Article = {
  category: string;
  icon: LucideIcon;
  title: string;
  excerpt: string;
  date: string;
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border-warm bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl bg-surface-alt">
        <article.icon className="size-8 text-accent" aria-hidden="true" />
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <span>{article.category}</span>
        <span aria-hidden="true">&middot;</span>
        <span>{article.date}</span>
      </div>
      <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-foreground">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {article.excerpt}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Read more
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}
