import { useEffect, useState } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => Boolean(window.matchMedia?.(REDUCED_MOTION).matches));

  useEffect(() => {
    const query = window.matchMedia?.(REDUCED_MOTION);
    if (!query) return undefined;
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

// Loads Google's <model-viewer> web component only when a 3D model is on the
// page, so the three.js bundle stays out of the main JavaScript file.
export function ModelViewer({ src, alt, className }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    import("@google/model-viewer").catch(() => {});
  }, []);

  return (
    <model-viewer
      src={src}
      alt={alt}
      camera-controls
      {...(reducedMotion ? {} : { "auto-rotate": true })}
      disable-zoom
      touch-action="pan-y"
      interaction-prompt="none"
      camera-orbit="25deg 75deg auto"
      shadow-intensity="1"
      exposure="1.2"
      loading="lazy"
      className={className}
    />
  );
}

// Several models of the same project, with text buttons to switch between them.
export function ModelGallery({ models, className = "" }) {
  const [active, setActive] = useState(0);
  const model = models[active];

  return (
    <div className={className}>
      <ModelViewer src={model.src} alt={model.alt} className="block h-80 w-full bg-lcd-deep sm:h-[28rem] lg:h-[34rem]" />
      {models.length > 1 ? (
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Choose a 3D render">
          {models.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className={
                index === active
                  ? "font-semibold underline decoration-accent decoration-2 underline-offset-4"
                  : "text-ink-soft underline-offset-4 hover:text-ink hover:underline"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
