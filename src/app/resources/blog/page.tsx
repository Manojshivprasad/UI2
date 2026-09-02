"use client";

import { Newspaper, Rocket, Users, Handshake } from "lucide-react";
import { ArticleListing } from "@/components/ArticleListing";

const articles = [
  {
    category: "Product Updates",
    tag: "Product Updates",
    icon: Rocket,
    title: "[Placeholder] What's new in AuditOne this quarter",
    excerpt: "[Placeholder] New checks, alerting improvements, and a refreshed console.",
    date: "[Placeholder date]",
  },
  {
    category: "Company News",
    tag: "Company News",
    icon: Newspaper,
    title: "[Placeholder] Notes from a live migration cutover",
    excerpt: "[Placeholder] Behind the scenes of a recent core banking go-live.",
    date: "[Placeholder date]",
  },
  {
    category: "Events",
    tag: "Events",
    icon: Users,
    title: "[Placeholder] Join us at [Placeholder Event Name]",
    excerpt: "[Placeholder] Where to find our team at upcoming industry events.",
    date: "[Placeholder date]",
  },
  {
    category: "Partnerships",
    tag: "Partnerships",
    icon: Handshake,
    title: "[Placeholder] Expanding our platform partnerships",
    excerpt: "[Placeholder] New integrations and technology partnerships in the works.",
    date: "[Placeholder date]",
  },
  {
    category: "Company News",
    tag: "Company News",
    icon: Newspaper,
    title: "[Placeholder] Welcoming new consultants to the team",
    excerpt: "[Placeholder] Growing our delivery bench across African and Indian markets.",
    date: "[Placeholder date]",
  },
];

export default function BlogPage() {
  return (
    <ArticleListing
      eyebrow="Resources"
      heading="[Placeholder] Blog"
      subtext="[Placeholder] News, product updates, and what's happening at the company."
      categories={["Product Updates", "Company News", "Events", "Partnerships"]}
      articles={articles}
    />
  );
}
