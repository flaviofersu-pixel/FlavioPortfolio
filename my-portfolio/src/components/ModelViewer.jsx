import { useEffect } from "react";

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
