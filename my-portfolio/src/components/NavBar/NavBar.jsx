import { navLinks, person } from "../../data/content";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-lcd">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-lcd"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="page flex items-center justify-between gap-6 py-3">
        <a href="#top" className="font-pixel text-2xl leading-none">
          {person.firstName}
        </a>
        <ul className="flex gap-5 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-offset-4 decoration-2 hover:underline hover:decoration-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
