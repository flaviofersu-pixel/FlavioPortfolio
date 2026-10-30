import { useEffect, useState } from "react";
import { person } from "../../data/content";
import { useLanguage } from "../../i18n";
import { withTodos } from "../Prose";

function CopyEmail() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return undefined;
    const timer = setTimeout(() => setStatus(""), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setStatus("copied");
    } catch {
      setStatus("copyFailed");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="border-2 border-accent bg-accent px-4 py-2 text-base font-semibold text-lcd hover:border-ink hover:bg-ink"
      >
        {t("contact.copy")}
      </button>
      <p role="status" className="basis-full text-base text-ink-soft sm:basis-auto">
        {status ? t(`contact.${status}`) : ""}
      </p>
    </>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const links = [
    { href: person.phoneHref, label: person.phone },
    { href: person.linkedin, label: "LinkedIn" },
    { href: person.github, label: "GitHub" },
    { href: person.cv, label: t("contact.cv") },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t-2 border-ink">
      <div className="page pb-24 pt-16 lg:pb-32 lg:pt-24">
        <h2
          id="contact-title"
          className="max-w-[20ch] font-pixel text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1.05]"
        >
          {t("contact.heading")}
        </h2>
        <p className="mt-6 max-w-[60ch]">{withTodos(t("contact.text"))}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href={`mailto:${person.email}`} className="text-link break-all text-[clamp(1.375rem,4.5vw,2.5rem)]">
            {person.email}
          </a>
          <CopyEmail />
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center underline decoration-rule decoration-2 underline-offset-4 hover:decoration-accent sm:min-h-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
