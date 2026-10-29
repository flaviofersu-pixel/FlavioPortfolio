import { Send } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-grape-900 px-6 py-5 text-white lg:px-12">
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <p className="text-center font-mono text-[17px] tracking-[0.08em] md:justify-self-start md:text-left lg:text-[19px]">
          Designed and Developed by Flavio Fernandez
        </p>
        <p className="text-center font-mono text-[17px] tracking-[0.08em] md:justify-self-center lg:text-[19px]">
          Copyright <span className="text-[1.15em] leading-none">©</span> {year} FF
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 font-mono text-[17px] tracking-[0.08em] transition hover:opacity-70 md:justify-self-end lg:text-[19px]"
        >
          <Send size={20} aria-hidden="true" />
          Contact me
        </a>
      </div>
    </footer>
  );
}
