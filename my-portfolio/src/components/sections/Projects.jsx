import { projects } from "../../data/content";
import { useLanguage } from "../../i18n";
import { LucaStarsDemo } from "../LucaStarsDemo/LucaStarsDemo";
import { MediaSlot } from "../MediaSlot";
import { ModelGallery } from "../ModelViewer";
import { Prose, withTodos } from "../Prose";

function Tech({ text, className = "" }) {
  const { t } = useLanguage();
  return (
    <p className={`text-ink-soft ${className}`}>
      <span className="font-semibold text-ink">{t("projects.builtWith")}</span> {withTodos(text)}
    </p>
  );
}

// Real links become links; [TODO: ...] placeholders stay visible; entries without href are plain notes.
function ProjectLinks({ links, className = "" }) {
  const { t } = useLanguage();
  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-2 ${className}`}>
      {links.map((link) => {
        const label = t(`projects.links.${link.type}`);
        return (
          <li key={link.type}>
            {!link.href ? (
              <span className="text-ink-soft">{label}</span>
            ) : link.href.startsWith("[TODO") ? (
              <>
                {label} {withTodos(link.href)}
              </>
            ) : (
              <a href={link.href} className="text-link inline-flex min-h-11 items-center sm:min-h-0">
                {label}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ProjectMedia({ project, className }) {
  const { t } = useLanguage();
  return (
    <MediaSlot
      media={project.media}
      alt={t(`projects.${project.id}.media.alt`)}
      placeholder={t(`projects.${project.id}.media.placeholder`)}
      className={className}
    />
  );
}

function LucaStars({ project }) {
  const { t } = useLanguage();
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
          <p className="mt-3 text-ink-soft">{t(`projects.${project.id}.kind`)}</p>
        </header>

        <div className="relative min-w-0">
          <LucaStarsDemo wide />
        </div>

        <div className="max-w-[68ch] xl:pt-1">
          <p>{t(`projects.${project.id}.tryIt`)}</p>
          <Tech text={project.tech} className="mt-6" />
          <ProjectLinks links={project.links} className="mt-4" />
        </div>

        <Prose paragraphs={t(`projects.${project.id}.story`)} className="xl:mt-6" />
      </div>
    </article>
  );
}

function SpotifyRemote({ project }) {
  const { t } = useLanguage();
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="page">
      <div className="grid gap-x-16 gap-y-10 border-t border-rule py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:py-24">
        <header className="lg:col-start-1 lg:row-start-1">
          <h3 id={`${project.id}-title`} className="font-pixel text-[clamp(2.125rem,6vw,4rem)] font-medium leading-none">
            {project.name}
          </h3>
          <p className="mt-3 text-ink-soft">{t(`projects.${project.id}.kind`)}</p>
        </header>

        <ModelGallery
          models={project.models}
          className="min-w-0 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-start"
        />

        <div className="lg:col-start-1 lg:row-start-2">
          <Prose paragraphs={t(`projects.${project.id}.story`)} />
          <Tech text={project.tech} className="mt-6" />
          <ProjectLinks links={project.links} className="mt-4" />
          <ProjectMedia project={project} className="mt-12 max-w-[68ch]" />
        </div>
      </div>
    </article>
  );
}

function SmallProject({ project }) {
  const { t } = useLanguage();
  return (
    <article id={project.id} aria-labelledby={`${project.id}-title`} className="min-w-0">
      <h3 id={`${project.id}-title`} className="font-pixel text-3xl font-medium leading-tight lg:text-4xl">
        {project.name}
      </h3>
      <p className="mt-2 text-ink-soft">{t(`projects.${project.id}.kind`)}</p>
      <Prose paragraphs={t(`projects.${project.id}.story`)} className="mt-6" />
      <Tech text={project.tech} className="mt-6" />
      <ProjectLinks links={project.links} className="mt-4" />
      {project.media ? <ProjectMedia project={project} className="mt-10" /> : null}
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const [lucaStars, spotifyRemote, ...smaller] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t-2 border-ink">
      <h2 id="projects-title" className="sr-only">
        {t("projects.heading")}
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
