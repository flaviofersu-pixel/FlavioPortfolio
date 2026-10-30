import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { codes, localizeHead } from "./src/i18n/languages.js";

// Fills the head from src/i18n and writes build/en/, build/nl/ and build/es/index.html,
// so links like /nl/ work on any static host and link previews show the right language.
function localizedPages() {
  let outDir;
  let siteUrl = "";

  return {
    name: "localized-pages",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
      siteUrl = loadEnv(config.mode, config.root, "VITE_").VITE_SITE_URL ?? "";
    },
    transformIndexHtml(html) {
      return localizeHead(html, "en", siteUrl, "/");
    },
    closeBundle() {
      const html = readFileSync(join(outDir, "index.html"), "utf8");
      for (const code of codes) {
        mkdirSync(join(outDir, code), { recursive: true });
        writeFileSync(join(outDir, code, "index.html"), localizeHead(html, code, siteUrl, `/${code}/`));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), localizedPages()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
    // model-viewer (three.js) is ~1 MB but lazy-loaded in its own chunk.
    chunkSizeWarningLimit: 1100,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
