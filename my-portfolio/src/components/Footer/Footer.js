import { Send } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-grape-900 px-6 py-5 text-white lg:px-12">
      <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-3">
        <p className="text-center font-mono text-[13px] tracking-[0.06em] md:justify-self-start md:text-left lg:text-[14px]">
          Designed and Developed by Flavio Fernandez
        </p>
        <p className="text-center font-mono text-[13px] tracking-[0.06em] md:justify-self-center lg:text-[14px]">
          Copyright <span className="text-[1.15em] leading-none">©</span> {year} FF
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 font-mono text-[13px] tracking-[0.06em] transition hover:opacity-70 md:justify-self-end lg:text-[14px]"
        >
          <Send size={15} aria-hidden="true" />
          Contact me
        </a>
      </div>
    </footer>
  );
}
