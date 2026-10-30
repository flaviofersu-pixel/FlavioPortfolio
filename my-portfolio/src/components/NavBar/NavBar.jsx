import { navLinks, person } from "../../data/content";
import { languages, useLanguage } from "../../i18n";

function LanguageSwitch() {
  const { lang, setLanguage, t } = useLanguage();

  return (
    <ul aria-label={t("nav.language")} className="flex items-center">
      {languages.map((option, index) => {
        const active = option.code === lang;
        return (
          <li key={option.code} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="px-1.5 text-ink-soft sm:px-0">
                |
              </span>
            ) : null}
            <button
              type="button"
              lang={option.code}
              aria-label={option.name}
              aria-current={active ? "true" : undefined}
              onClick={() => setLanguage(option.code)}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center px-1.5 underline-offset-4 decoration-2 sm:min-h-0 sm:min-w-0 sm:py-1 ${
                active ? "font-semibold underline decoration-accent" : "text-ink-soft hover:text-ink hover:underline"
              }`}
            >
              {option.short}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function NavBar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-lcd">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-lcd"
      >
        {t("nav.skip")}
      </a>
      {/* On phones: name and language switch on the first row, links on the second. */}
      <nav aria-label={t("nav.label")} className="page flex flex-wrap items-center justify-between gap-x-8 gap-y-1 py-2 sm:py-3">
        <a href="#top" className="font-pixel text-2xl leading-none">
          {person.firstName}
        </a>
        <ul className="order-last flex w-full gap-5 pb-1 sm:order-none sm:ml-auto sm:w-auto sm:gap-8 sm:pb-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-offset-4 decoration-2 hover:underline hover:decoration-accent"
              >
                {t(`nav.${link.key}`)}
              </a>
            </li>
          ))}
        </ul>
        <LanguageSwitch />
      </nav>
    </header>
  );
}
