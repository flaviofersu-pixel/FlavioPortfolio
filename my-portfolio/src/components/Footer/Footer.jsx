import { person } from "../../data/content";
import { useLanguage } from "../../i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="page">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-rule py-6 text-base text-ink-soft">
        <p>
          © {new Date().getFullYear()} {person.fullName}
        </p>
        <a href="#top" className="underline-offset-4 hover:text-ink hover:underline">
          {t("footer.backToTop")}
        </a>
      </div>
    </footer>
  );
}
