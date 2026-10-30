import { useEffect, useRef, useState } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const SWING_DEGREES = 35;
const SWING_SECONDS = 12; // one full left, right and back cycle
const RESUME_AFTER_MS = 3000;
const PITCH = "80deg";

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

// Swings the camera left and right around the front so the screen stays in view.
// A sine wave slows down at both ends by itself, which gives the easing.
// Dragging pauses it; a few seconds later it glides back the short way round.
function useSwing(ref, enabled) {
  useEffect(() => {
    const viewer = ref.current;
    if (!enabled || !viewer || !("IntersectionObserver" in window)) return undefined;

    let frame = 0;
    let last = 0;
    let elapsed = 0;
    let visible = false;
    let dragging = false;
    let pausedUntil = 0;
    let paused = false;
    let turns = 0;

    // Pointer and key events, because the camera-change event can't tell our own updates from a drag.
    const pauseFor = () => {
      pausedUntil = performance.now() + RESUME_AFTER_MS;
    };
    const onPointerDown = () => {
      dragging = true;
    };
    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      pauseFor();
    };
    const onKeyDown = (event) => {
      if (event.key.startsWith("Arrow")) pauseFor();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });

    const tick = (now) => {
      frame = requestAnimationFrame(tick);
      const delta = last ? Math.min(now - last, 100) : 0;
      last = now;
      if (!visible || !viewer.loaded) return;
      if (dragging || now < pausedUntil) {
        paused = true;
        return;
      }
      if (paused) {
        // Restart from the front, on whichever full turn is closest to where the user left it.
        paused = false;
        elapsed = 0;
        turns = Math.round(viewer.getCameraOrbit().theta / (2 * Math.PI));
      }
      elapsed += delta;
      const angle = SWING_DEGREES * Math.sin((2 * Math.PI * elapsed) / (SWING_SECONDS * 1000));
      viewer.cameraOrbit = `${angle + turns * 360}deg ${PITCH} auto`;
    };

    viewer.addEventListener("pointerdown", onPointerDown);
    viewer.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    observer.observe(viewer);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      viewer.removeEventListener("pointerdown", onPointerDown);
      viewer.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [ref, enabled]);
}

// Loads Google's <model-viewer> web component only when a 3D model is on the
// page, so the three.js bundle stays out of the main JavaScript file.
// The model starts facing the front and swings gently, unless reduced motion is on.
export function ModelViewer({ src, alt, className }) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  useSwing(ref, !reducedMotion);

  useEffect(() => {
    import("@google/model-viewer").catch(() => {});
  }, []);

  return (
    <model-viewer
      ref={ref}
      src={src}
      alt={alt}
      camera-controls
      disable-zoom
      touch-action="pan-y"
      interaction-prompt="none"
      camera-orbit={`0deg ${PITCH} auto`}
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
