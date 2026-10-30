// Shows [TODO: ...] placeholders as inverted text so they are easy to spot.
export function withTodos(text) {
  return text.split(/(\[TODO:[^\]]*\])/).map((part, index) =>
    part.startsWith("[TODO:") ? (
      <mark key={index} className="bg-ink px-1 text-lcd">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export function Prose({ paragraphs, className = "" }) {
  return (
    <div className={`max-w-[68ch] space-y-4 ${className}`}>
      {/* Keyed by position, so a language switch updates the text in place. */}
      {paragraphs.map((text, index) => (
        <p key={index}>{withTodos(text)}</p>
      ))}
    </div>
  );
}
