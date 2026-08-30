// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
import { LabScene } from "../sections/Skills";   // capital S — matches Skills.tsx
import { labObjects } from "../data/skills";     // lowercase — matches skills.ts

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arcane Lab — Interactive Glassware Map" },
      {
        name: "description",
        content:
          "Hover the pixel-art alchemy laboratory to reveal details on eight flasks, bottles and glass vessels.",
      },
      { property: "og:title", content: "Arcane Lab — Interactive Glassware Map" },
      {
        property: "og:description",
        content:
          "Hover the pixel-art alchemy laboratory to reveal details on eight flasks, bottles and glass vessels.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 text-center">
          <h1 className="glow-text text-2xl font-bold tracking-[0.2em] text-primary uppercase sm:text-3xl">
            The Arcane Lab
          </h1>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
            Hover a vessel in the scene to reveal its details.
          </p>
        </header>
        <LabScene />
        <section className="mt-10">
          <h2 className="mb-4 text-sm font-bold tracking-[0.18em] text-accent uppercase">
            The eight vessels
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {labObjects.map((obj) => (
              <article key={obj.id} className="panel-arcane rounded-lg p-3 text-center">
                <img
                  src={obj.image}
                  alt={obj.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="pixelated mx-auto h-24 w-24"
                />
                <p className="mt-2 text-xs font-bold text-primary uppercase">{obj.name}</p>
                <p className="text-[0.65rem] text-muted-foreground">{obj.kind}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}