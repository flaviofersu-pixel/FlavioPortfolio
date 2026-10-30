import { projects } from "../../data/content";
import { LucaStarsDemo } from "../LucaStarsDemo/LucaStarsDemo";
import { ModelGallery } from "../ModelViewer";
import { Prose, withTodos } from "../Prose";
import { RemoteScreen } from "../RemoteScreen";

function Tech({ text, className = "" }) {
  return (
    <p className={`text-ink-soft ${className}`}>
      <span className="font-semibold text-ink">Built with:</span> {withTodos(text)}
    </p>
  );
}

function LucaStars({ project }) {
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="page pb-20 pt-14 lg:pb-28 lg:pt-20">
      <div className="grid gap-x-12 gap-y-8 xl:grid-cols-[minmax(0,1fr)_19rem]">
        <header className="xl:col-span-2">
          <h3
            id={`${project.id}-title`}
            className="font-pixel text-[clamp(3.25rem,11vw,8.5rem)] font-medium leading-[0.9]"
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
          <h3 id={`${project.id}-title`} className="font-pixel text-[clamp(2.5rem,7vw,4.5rem)] font-medium leading-none">
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
          <figure className="mt-12">
            <RemoteScreen />
            <figcaption className="mt-4 max-w-xs text-base text-ink-soft">{project.screenCaption}</figcaption>
          </figure>
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
