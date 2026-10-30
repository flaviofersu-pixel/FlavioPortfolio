import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import { withTodos } from "./Prose";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// A muted looping video that only autoplays without reduced motion, with a visible pause button.
function LoopingVideo({ src, poster, alt }) {
  const { t } = useLanguage();
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
        {playing ? t("media.pause") : t("media.play")}
      </button>
    </>
  );
}

// A photo, screenshot or video, or a highlighted placeholder until the file exists.
export function MediaSlot({ media, alt, placeholder, className = "" }) {
  if (!media.src) {
    return (
      <div className={`grid aspect-video place-items-center border-2 border-dashed border-rule p-6 text-center ${className}`}>
        <p>{withTodos(placeholder)}</p>
      </div>
    );
  }

  return (
    <figure className={className}>
      {media.type === "video" ? (
        <LoopingVideo src={media.src} poster={media.poster} alt={alt} />
      ) : (
        <img src={media.src} alt={alt} loading="lazy" className="block w-full border-2 border-ink" />
      )}
    </figure>
  );
}
