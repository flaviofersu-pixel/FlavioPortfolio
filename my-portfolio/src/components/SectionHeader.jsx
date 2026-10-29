export function SectionHeader({ index, kicker, title }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold lg:text-sm">
        {`${index} // ${kicker}`}
      </p>
      <h2 className="mt-2 font-pixel text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h2>
    </div>
  );
}
