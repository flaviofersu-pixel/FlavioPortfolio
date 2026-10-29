import { GraduationCap } from "lucide-react";
import { education, languages, profile } from "../../data/content";
import { SectionHeader } from "../SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-grape-950">
      <div className="w-full px-6 py-20 lg:px-12">
        <SectionHeader index="01" kicker="Profile" title="About me" />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div className="min-w-0 text-left">
            <p className="text-lg leading-relaxed text-grape-300 lg:text-xl">{profile}</p>
            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold lg:text-sm">
                Languages
              </p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="rounded-full border border-grape-700 bg-grape-900 px-4 py-2 text-sm text-white lg:text-base"
                  >
                    {language.name}
                    <span className="ml-2 text-gold">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <article className="min-w-0 rounded-xl border border-grape-700 bg-grape-900 p-6 text-left shadow-card">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-gold lg:text-sm">
              <GraduationCap size={16} aria-hidden="true" />
              Education
            </p>
            <h3 className="mt-4 break-words font-pixel text-2xl text-white lg:text-3xl">
              {education.school}
            </h3>
            <p className="mt-2 text-grape-300 lg:text-lg">{education.degree}</p>
            <p className="mt-1 font-mono text-sm text-gold lg:text-base">{education.dates}</p>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm text-grape-300 lg:text-base">
              {education.detail}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
