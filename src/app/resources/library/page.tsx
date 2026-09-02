import { ScrollReveal } from "@/components/ScrollReveal";
import { ResourceLibraryGrid } from "@/components/resourcesLibrary/ResourceLibraryGrid";
import { CtaBand } from "@/components/CtaBand";

export default function ResourceLibraryPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center lg:px-10 lg:pt-24">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Resources
          </p>
          <h1 className="mx-auto mt-4 max-w-2xl font-heading text-4xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            [Placeholder] Resource Library
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            [Placeholder] Guides, playbooks, whitepapers, and templates for
            banking teams navigating modernization.
          </p>
        </ScrollReveal>
      </section>

      <ResourceLibraryGrid />
      <CtaBand />
    </>
  );
}
