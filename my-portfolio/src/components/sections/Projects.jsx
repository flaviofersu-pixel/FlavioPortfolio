import { projects } from "../../data/content";
import { LucaStarsDemo } from "../LucaStarsDemo/LucaStarsDemo";
import { MediaSlot } from "../MediaSlot";
import { ModelGallery } from "../ModelViewer";
import { Prose, withTodos } from "../Prose";

function Tech({ text, className = "" }) {
  return (
    <p className={`text-ink-soft ${className}`}>
      <span className="font-semibold text-ink">Built with:</span> {withTodos(text)}
    </p>
  );
}

// Real links become links; [TODO: ...] placeholders stay visible; entries without href are plain notes.
function ProjectLinks({ links, className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {links.map((link) => (
        <li key={link.label}>
          {!link.href ? (
            <span className="text-ink-soft">{link.label}</span>
          ) : link.href.startsWith("[TODO") ? (
            <>
              {link.label} {withTodos(link.href)}
            </>
          ) : (
            <a href={link.href} className="text-link">
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

function LucaStars({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="page pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="grid gap-x-12 gap-y-8 xl:grid-cols-[minmax(0,1fr)_19rem]">
        <header className="xl:col-span-2">
          <h3
            id={`${project.id}-title`}
            className="font-pixel text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[0.95]"
          >
            {project.name}
          </h3>
          <p className="mt-3 text-ink-soft">{project.kind}</p>
        </header>

        <div className="relative min-w-0">
          <LucaStarsDemo wide />
        </div>

        <div className="max-w-[68ch] xl:pt-1">
          <p>{project.tryIt}</p>
          <Tech text={project.tech} className="mt-6" />
          <ProjectLinks links={project.links} className="mt-4" />
        </div>

        <Prose paragraphs={project.story} className="xl:mt-6" />
      </div>
    </article>
  );
}

function SpotifyRemote({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="page">
      <div className="grid gap-x-16 gap-y-10 border-t border-rule py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:py-24">
        <header className="lg:col-start-1 lg:row-start-1">
          <h3 id={`${project.id}-title`} className="font-pixel text-[clamp(2.125rem,6vw,4rem)] font-medium leading-none">
            {project.name}
          </h3>
          <p className="mt-3 text-ink-soft">{project.kind}</p>
        </header>

        <ModelGallery
          models={project.models}
          className="min-w-0 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
        />

        <div className="lg:col-start-1 lg:row-start-2">
          <Prose paragraphs={project.story} />
          <Tech text={project.tech} className="mt-6" />
          <ProjectLinks links={project.links} className="mt-4" />
          <MediaSlot media={project.media} className="mt-12 max-w-[68ch]" />
        </div>
      </div>
    </article>
  );
}

function SmallProject({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="min-w-0">
      <h3 id={`${project.id}-title`} className="font-pixel text-3xl font-medium leading-tight lg:text-4xl">
        {project.name}
      </h3>
      <p className="mt-2 text-ink-soft">{project.kind}</p>
      <Prose paragraphs={project.story} className="mt-6" />
      <Tech text={project.tech} className="mt-6" />
      <ProjectLinks links={project.links} className="mt-4" />
      {project.media ? <MediaSlot media={project.media} className="mt-10" /> : null}
    </article>
  );
}

export function Projects() {
  const [lucaStars, spotifyRemote, ...smaller] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t-2 border-ink">
      <h2 id="projects-title" className="sr-only">
        Projects
      </h2>
      <LucaStars project={lucaStars} />
      <SpotifyRemote project={spotifyRemote} />
      <div className="page">
        <div className="grid gap-14 border-t border-rule pb-24 pt-14 lg:grid-cols-[7fr_5fr] lg:gap-20 lg:pb-28 lg:pt-16">
          {smaller.map((project) => (
            <SmallProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
