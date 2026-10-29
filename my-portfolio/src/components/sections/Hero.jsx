import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { person } from "../../data/content";
import { LinkedInIcon } from "../LinkedInIcon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-pixel-grid scroll-mt-24"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-grape-700/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="grid w-full items-center gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,32rem)] lg:gap-16 lg:px-12 lg:py-24">
        <div className="text-left">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold lg:text-sm">
            Hi there, I&apos;m
          </p>
          <h1 className="mt-3 font-pixel text-4xl leading-tight text-white sm:text-6xl lg:text-[4.25rem]">
            {person.fullName}
          </h1>
          <p className="mt-4 font-pixel text-xl text-grape-400 sm:text-2xl lg:text-3xl">
            {person.role}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-grape-300 sm:text-lg lg:text-xl">
            Looking for an internship where I can contribute to real features,
            work in a team, and grow as a full stack developer.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-grape-300 lg:text-base">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-gold" aria-hidden="true" />
              {person.location}
            </li>
            <li>
              <a
                href={person.phoneHref}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Phone size={16} className="text-gold" aria-hidden="true" />
                {person.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 transition hover:text-white"
              >
                <Mail size={16} className="text-gold" aria-hidden="true" />
                {person.email}
              </a>
            </li>
            <li>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <LinkedInIcon size={16} className="text-gold" />
                LinkedIn
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-medium text-night transition hover:bg-gold-dim lg:text-lg"
            >
              View projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-grape-400/40 px-5 py-3 font-medium text-white transition hover:border-gold hover:text-gold lg:text-lg"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="w-full justify-self-center no-print lg:justify-self-end">
          <div className="overflow-hidden rounded-2xl border border-grape-700 shadow-card">
            <img
              src="/flavio.png"
              alt="Flavio Fernandez Suarez"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
