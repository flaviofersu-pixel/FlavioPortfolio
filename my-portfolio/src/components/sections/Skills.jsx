import { skillGroups } from "../../data/content";
import { SectionHeader } from "../SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-night">
      <div className="w-full px-6 py-20 lg:px-12">
        <SectionHeader index="04" kicker="Stack" title="Technical skills" />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-xl border border-grape-700 bg-grape-950 p-6 text-left"
            >
              <h3 className="font-pixel text-2xl text-white lg:text-3xl">{group.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-grape-900 px-3 py-1.5 text-sm text-grape-300 lg:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
