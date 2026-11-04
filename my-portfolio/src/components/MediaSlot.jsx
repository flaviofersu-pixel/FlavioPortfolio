import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import { withTodos } from "./Prose";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

// A muted looping video that only autoplays without reduced motion, with a visible pause button.
// With overlay, the video fills its (relative) parent and the button sits on top of it.
export function LoopingVideo({ src, poster, alt, overlay = false }) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [playing, setPlaying] = useState(!reducedMotion);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // play() returns a promise in modern browsers, but nothing in some older ones and in jsdom.
    if (playing) Promise.resolve(video.play()).catch(() => setPlaying(false));
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
        className={overlay ? "absolute inset-0 h-full w-full object-cover" : "block w-full border-2 border-ink"}
      />
      <button
        type="button"
        onClick={() => setPlaying((value) => !value)}
        className={
          overlay
            ? "absolute bottom-3 left-3 min-h-11 bg-ink px-3 text-base text-lcd hover:bg-accent"
            : "mt-2 text-base underline-offset-4 hover:underline"
        }
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
