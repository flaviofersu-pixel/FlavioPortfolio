import { useLanguage } from "../../i18n";
import { withTodos } from "../Prose";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="border-t-2 border-ink">
      <div className="page grid gap-x-12 gap-y-10 pb-20 pt-14 md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)] lg:gap-x-20 lg:pb-28 lg:pt-20">
        <h2 id="about-title" className="font-pixel text-4xl font-medium leading-none md:col-span-2 lg:text-6xl">
          {t("about.heading")}
        </h2>

        <img
          src="/flavio.png"
          alt={t("about.photoAlt")}
          width="1024"
          height="1024"
          loading="lazy"
          className="w-full max-w-[16rem] md:max-w-none"
        />

        <div className="min-w-0">
          <p className="max-w-[38ch] text-xl leading-relaxed lg:text-2xl">{withTodos(t("about.lead"))}</p>

          <ol className="mt-12 max-w-[68ch] border-t border-rule">
            {t("about.timeline").map((item, index) => (
              <li key={index} className="grid gap-1 border-b border-rule py-6 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6">
                <p className="font-semibold text-accent">{item.when}</p>
                <div>
                  <h3 className="font-pixel text-2xl font-medium leading-tight">{item.title}</h3>
                  <p className="mt-1 text-ink-soft">{item.detail}</p>
                  {item.text ? <p className="mt-4">{item.text}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
