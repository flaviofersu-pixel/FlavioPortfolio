import { person } from "../../data/content";

export function Footer() {
  return (
    <footer className="page">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-rule py-6 text-base text-ink-soft">
        <p>
          © {new Date().getFullYear()} {person.fullName}
        </p>
        <a href="#top" className="underline-offset-4 hover:text-ink hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
