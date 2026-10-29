import { experience } from "../../data/content";
import { SectionHeader } from "../SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-grape-950">
      <div className="w-full px-6 py-20 lg:px-12">
        <SectionHeader index="03" kicker="Work" title="Experience" />
        <article className="rounded-2xl border border-grape-700 bg-grape-900 p-6 text-left shadow-card sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="font-pixel text-3xl text-white lg:text-4xl">{experience.title}</h3>
              <p className="mt-2 text-grape-300 lg:text-lg">{experience.org}</p>
              <p className="mt-1 text-sm italic text-grape-400 lg:text-base">{experience.orgNl}</p>
            </div>
            <p className="shrink-0 font-mono text-sm text-gold lg:text-base">{experience.dates}</p>
          </div>
          <p className="mt-4 text-sm text-grape-300 lg:text-base">
            {experience.company} · {experience.type}
          </p>
          <ul className="mt-6 space-y-3 text-grape-300 lg:text-lg">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
