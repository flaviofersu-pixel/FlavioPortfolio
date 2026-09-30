import { useState } from "react";
import { House, User, Presentation, Briefcase, Send, Menu, X } from "lucide-react";
import { navLinks } from "../../data/content";

const icons = {
  Home: House,
  About: User,
  Projects: Presentation,
  Experience: Briefcase,
  Contact: Send,
};

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-grape-900">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-night"
      >
        Skip to content
      </a>
      <nav className="flex w-full items-center px-6 py-4 lg:px-12">
        <a
          href="#home"
          className="shrink-0 font-pixel text-[36px] font-semibold leading-none text-white transition hover:opacity-85 lg:text-[42px]"
          onClick={() => setOpen(false)}
        >
          Ff<span className="text-gold">.</span>
        </a>

        <ul className="hidden flex-1 items-center justify-evenly lg:flex">
          {navLinks.map((link) => {
            const Icon = icons[link.label];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 font-pixel text-[25px] text-white transition hover:opacity-85 lg:text-[28px]"
                >
                  {Icon ? <Icon size={24} aria-hidden="true" /> : null}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="ml-auto rounded-md p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open ? (
        <ul
          id="mobile-nav"
          className="space-y-1 border-t border-white/10 bg-grape-900 px-6 py-4 lg:hidden"
        >
          {navLinks.map((link) => {
            const Icon = icons[link.label];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-3 rounded-md px-3 py-3 font-pixel text-[25px] text-white hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {Icon ? <Icon size={24} aria-hidden="true" /> : null}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}
