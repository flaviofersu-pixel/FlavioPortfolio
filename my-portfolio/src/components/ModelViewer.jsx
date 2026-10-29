import { useEffect, useState } from "react";

// Loads Google's <model-viewer> web component only when a 3D model is on the
// page, so the three.js bundle stays out of the main JavaScript file.
export function ModelViewer({ src, alt, className }) {
  useEffect(() => {
    import("@google/model-viewer").catch(() => {});
  }, []);

  return (
    <model-viewer
      src={src}
      alt={alt}
      camera-controls
      auto-rotate
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

// Several models of the same project, with tabs to switch between them.
export function ModelGallery({ models }) {
  const [active, setActive] = useState(0);
  const model = models[active];

  return (
    <div className="relative bg-grape-900">
      <ModelViewer src={model.src} alt={model.alt} className="block h-80 w-full" />
      {models.length > 1 ? (
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap justify-center gap-2 p-3">
          {models.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition ${
                index === active
                  ? "border-gold bg-gold text-night"
                  : "border-grape-700 bg-night/70 text-grape-300 hover:border-gold hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
