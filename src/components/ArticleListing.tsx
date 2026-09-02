"use client";

import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TagFilter } from "@/components/TagFilter";
import { ArticleCard, type Article } from "@/components/ArticleCard";
import { CtaBand } from "@/components/CtaBand";

export function ArticleListing({
  eyebrow,
  heading,
  subtext,
  categories,
  articles,
}: {
  eyebrow: string;
  heading: string;
  subtext: string;
  categories: string[];
  articles: (Article & { tag: string })[];
}) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.tag === active)),
    [active, articles]
  );

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            {heading}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {subtext}
          </p>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <ScrollReveal className="mb-12">
          <TagFilter tags={categories} active={active} onChange={setActive} />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article, i) => (
            <ScrollReveal key={article.title} delay={i * 0.06}>
              <ArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No items match this filter yet.
          </p>
        )}
      </section>

      <CtaBand />
    </>
  );
}
