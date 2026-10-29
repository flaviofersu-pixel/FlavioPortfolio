import { projects } from "../../data/content";
import { LucaStarsDemo } from "../LucaStarsDemo/LucaStarsDemo";
import { ModelViewer } from "../ModelViewer";
import { SectionHeader } from "../SectionHeader";

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="scroll-mt-24 bg-night">
      <div className="w-full px-6 py-20 lg:px-12">
        <SectionHeader index="02" kicker="Work" title="Projects" />

        <article className="overflow-hidden rounded-2xl border border-grape-700 bg-grape-950 shadow-card">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-w-0 bg-grape-900 lg:min-h-[560px]">
              <LucaStarsDemo />
            </div>

            <div className="min-w-0 p-6 text-left sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
                {featured.tag}
              </p>
              <h3 className="mt-2 font-pixel text-3xl text-white lg:text-4xl">{featured.name}</h3>
              <p className="mt-4 leading-relaxed text-grape-300 lg:text-lg">{featured.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-grape-300 lg:text-base">
                {featured.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              {featured.hint ? (
                <p className="mt-6 rounded-lg border border-gold/30 bg-gold/5 p-4 text-sm text-grape-300 lg:text-base">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
                    Try it
                  </span>
                  <br />
                  {featured.hint}
                </p>
              ) : null}
            </div>
          </div>
        </article>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl border border-grape-700 bg-grape-950 text-left"
            >
              {project.model ? (
                <ModelViewer
                  src={project.model.src}
                  alt={project.model.alt}
                  className="block h-80 w-full bg-grape-900"
                />
              ) : project.image ? (
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className="aspect-video w-full bg-grape-900 object-cover"
                />
              ) : null}
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
                  {project.tag}
                </p>
                <h3 className="mt-2 font-pixel text-2xl text-white lg:text-3xl">{project.name}</h3>
                {project.dates ? (
                  <p className="mt-1 font-mono text-sm text-grape-400">{project.dates}</p>
                ) : null}
                <p className="mt-3 text-grape-300 lg:text-lg">{project.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-grape-900 px-3 py-1 text-xs text-grape-300 lg:text-sm"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
