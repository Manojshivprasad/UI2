"use client";

import { Newspaper, Rocket, Users, Handshake } from "lucide-react";
import { ArticleListing } from "@/components/ArticleListing";

const articles = [
  {
    category: "Product Updates",
    tag: "Product Updates",
    icon: Rocket,
    title: "Inside AuditOne: how continuous audit works",
    excerpt: "A look at how AuditOne turns transaction and static-data review into a repeatable, trackable workflow.",
    date: "4 min read",
  },
  {
    category: "Company News",
    tag: "Company News",
    icon: Newspaper,
    title: "Behind the scenes of a core banking go-live",
    excerpt: "What it actually takes to get a bank from cutover planning to a stable production launch.",
    date: "6 min read",
  },
  {
    category: "Events",
    tag: "Events",
    icon: Users,
    title: "Where to find our team",
    excerpt: "Industry events and banking technology forums our consultants attend across our markets.",
    date: "3 min read",
  },
  {
    category: "Partnerships",
    tag: "Partnerships",
    icon: Handshake,
    title: "Our platform partner ecosystem",
    excerpt: "How our work with Finastra, Newgen, and Lyzr AI shapes what we deliver for clients.",
    date: "5 min read",
  },
  {
    category: "Company News",
    tag: "Company News",
    icon: Newspaper,
    title: "Growing our delivery bench",
    excerpt: "How we structure and scale our consulting teams across the markets we serve.",
    date: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <ArticleListing
      eyebrow="Resources"
      heading="Blog"
      subtext="News, product updates, and what's happening at ThoughtsCrest."
      categories={["Product Updates", "Company News", "Events", "Partnerships"]}
      articles={articles}
    />
  );
}
