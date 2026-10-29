import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "../../data/content";
import { SectionHeader } from "../SectionHeader";

export function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);
  const [active, setActive] = useState(0);
  const dialog = useRef(null);
  const current = featured.images[active];

  const showPrev = () => {
    setActive((index) => (index === 0 ? featured.images.length - 1 : index - 1));
  };

  const showNext = () => {
    setActive((index) => (index === featured.images.length - 1 ? 0 : index + 1));
  };

  return (
    <section id="projects" className="scroll-mt-24 bg-night">
      <div className="w-full px-6 py-20 lg:px-12">
        <SectionHeader index="02" kicker="Work" title="Projects" />

        <article className="overflow-hidden rounded-2xl border border-grape-700 bg-grape-950 shadow-card">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-w-0 bg-grape-900">
              <button
                type="button"
                className="block w-full"
                onClick={() => dialog.current?.showModal()}
                aria-label={`Open larger view of ${current.label}`}
              >
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-full max-h-[520px] w-full object-cover object-top"
                />
              </button>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-night/80 to-transparent p-3">
                <button
                  type="button"
                  onClick={showPrev}
                  className="rounded-full bg-night/70 p-2 text-white hover:bg-gold hover:text-night"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <p className="font-mono text-xs uppercase tracking-widest text-white">
                  {current.label}
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  className="rounded-full bg-night/70 p-2 text-white hover:bg-gold hover:text-night"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
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
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/10 p-3 sm:grid-cols-6">
            {featured.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActive(index)}
                className={`overflow-hidden rounded-md border ${
                  index === active
                    ? "border-gold ring-1 ring-gold"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`Show ${image.label} screenshot`}
                aria-pressed={index === active}
              >
                <img src={image.src} alt="" className="h-16 w-full object-cover object-top sm:h-20" />
              </button>
            ))}
          </div>
        </article>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-grape-700 bg-grape-950 p-6 text-left"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
                {project.tag}
              </p>
              <h3 className="mt-2 font-pixel text-2xl text-white lg:text-3xl">{project.name}</h3>
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
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialog}
        className="w-[min(96vw,1100px)] max-h-[90vh] overflow-auto rounded-xl border-0 bg-night p-0 text-white"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between bg-night px-4 py-3">
          <p className="font-pixel text-lg">{featured.name} — {current.label}</p>
          <button
            type="button"
            className="rounded p-1 hover:text-gold"
            aria-label="Close screenshot"
            onClick={() => dialog.current?.close()}
          >
            <X size={22} />
          </button>
        </div>
        <img src={current.src} alt={current.alt} className="h-auto w-full" />
      </dialog>
    </section>
  );
}
