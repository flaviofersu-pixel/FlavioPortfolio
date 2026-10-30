import { person } from "../../data/content";
import { useLanguage } from "../../i18n";
import { withTodos } from "../Prose";
import { RemoteScreen } from "../RemoteScreen";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="page grid gap-14 pb-20 pt-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24"
    >
      <div>
        <h1
          id="hero-title"
          className="font-pixel text-[clamp(3rem,11vw,7rem)] font-medium leading-[0.95]"
        >
          <span className="block">{person.firstName}</span>{" "}
          <span className="block">{person.lastName}</span>
        </h1>
        <p className="mt-8 max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-tight">
          {t("hero.sentence")}
        </p>
        <p className="mt-5 max-w-[60ch] text-ink-soft">{t("hero.intro")}</p>
        <a href="#contact" className="text-link mt-3 inline-block">
          {t("hero.internship")}
          <span aria-hidden="true"> →</span>
        </a>
        <p className="mt-3 max-w-[60ch] text-ink-soft">
          <span className="font-semibold text-ink">{t("hero.workbenchLabel")}</span> {withTodos(t("hero.workbench"))}
        </p>
        {/* Hidden on phones, where the demo opens as a preview with its own button. */}
        <a href="#lucastars" className="text-link mt-8 hidden sm:inline-block">
          {t("hero.demoLink")}
          <span aria-hidden="true"> ↓</span>
        </a>
      </div>

      <figure className="lg:justify-self-end">
        <RemoteScreen />
        <figcaption className="mt-4 max-w-xs text-base text-ink-soft">
          {t("hero.screenCaption")}{" "}
          <a href="#spotify-remote" className="text-link font-normal">
            {t("hero.screenLink")}
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
