import { useEffect, useRef, useState } from "react";
import { withTodos } from "./Prose";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// A muted looping video that only autoplays without reduced motion, with a visible pause button.
function LoopingVideo({ src, poster, alt }) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(!reducedMotion);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (playing) video.play().catch(() => setPlaying(false));
    else video.pause();
  }, [playing]);

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
        className="block w-full border-2 border-ink"
      />
      <button
        type="button"
        onClick={() => setPlaying((value) => !value)}
        className="mt-2 text-base underline-offset-4 hover:underline"
      >
        {playing ? "Pause video" : "Play video"}
      </button>
    </>
  );
}

// A photo, screenshot or video, or a highlighted placeholder until the file exists.
export function MediaSlot({ media, className = "" }) {
  if (!media.src) {
    return (
      <div className={`grid aspect-video place-items-center border-2 border-dashed border-rule p-6 text-center ${className}`}>
        <p>{withTodos(media.placeholder)}</p>
      </div>
    );
  }

  return (
    <figure className={className}>
      {media.type === "video" ? (
        <LoopingVideo src={media.src} poster={media.poster} alt={media.alt} />
      ) : (
        <img src={media.src} alt={media.alt} loading="lazy" className="block w-full border-2 border-ink" />
      )}
      {media.caption ? <figcaption className="mt-2 text-base text-ink-soft">{media.caption}</figcaption> : null}
    </figure>
  );
}
