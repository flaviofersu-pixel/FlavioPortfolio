import { useEffect, useState } from "react";
import { contact, person } from "../../data/content";
import { withTodos } from "../Prose";

function CopyEmail() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return undefined;
    const timer = setTimeout(() => setStatus(""), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setStatus("Copied");
    } catch {
      setStatus("Couldn’t copy, select the address instead");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="border-2 border-accent bg-accent px-4 py-2 text-base font-semibold text-lcd hover:border-ink hover:bg-ink"
      >
        Copy email
      </button>
      <p role="status" className="basis-full text-base text-ink-soft sm:basis-auto">
        {status}
      </p>
    </>
  );
}

const links = [
  { href: person.phoneHref, label: person.phone },
  { href: person.linkedin, label: "LinkedIn" },
  { href: person.github, label: "GitHub" },
  { href: "/cv-flavio-fernandez.pdf", label: "CV (PDF)" },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t-2 border-ink">
      <div className="page pb-24 pt-16 lg:pb-32 lg:pt-24">
        <h2
          id="contact-title"
          className="max-w-[20ch] font-pixel text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[1.05]"
        >
          {contact.heading}
        </h2>
        <p className="mt-6 max-w-[60ch]">{withTodos(contact.text)}</p>

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
                className="underline decoration-rule decoration-2 underline-offset-4 hover:decoration-accent"
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
