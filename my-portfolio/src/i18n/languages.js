// Plain JavaScript (no React, no DOM), so vite.config.mjs can use it at build time too.
import en from "./en.js";
import es from "./es.js";
import nl from "./nl.js";

// Order is the order of the switch in the nav.
export const languages = [
  { code: "nl", short: "NL", name: "Nederlands", locale: "nl_NL" },
  { code: "en", short: "EN", name: "English", locale: "en_GB" },
  { code: "es", short: "ES", name: "Español", locale: "es_ES" },
];

export const codes = languages.map((language) => language.code);

const dictionaries = { en, nl, es };

const lookup = (dictionary, key) => key.split(".").reduce((node, part) => node?.[part], dictionary);

// Falls back to English when a key is missing, with a warning in development only.
export function translate(lang, key, params) {
  let value = lookup(dictionaries[lang], key);
  if (value === undefined) {
    if (import.meta.env?.DEV && lang !== "en") console.warn(`[i18n] "${key}" is missing in ${lang}, using English.`);
    value = lookup(en, key);
  }
  if (params && typeof value === "string") {
    value = value.replace(/\{(\w+)\}/g, (match, name) => params[name] ?? match);
  }
  return value;
}

// "/nl/" or "/nl/anything" -> "nl"; "/" -> null.
export function languageFromPath(pathname) {
  return pathname.match(/^\/(en|nl|es)(\/|$)/)?.[1] ?? null;
}

const escape = (text) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const setContent = (html, attribute, name, value) =>
  html.replace(new RegExp(`(<meta ${attribute}="${name}" content=")[^"]*(")`), `$1${escape(value)}$2`);

// Writes the translated head into an HTML string. `path` is "/" for the auto page, "/nl/" etc. otherwise.
export function localizeHead(html, lang, siteUrl, path) {
  const t = (key) => translate(lang, key);
  const locale = languages.find((language) => language.code === lang).locale;
  let out = html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(t("meta.title"))}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${siteUrl}${path}$2`);
  out = setContent(out, "name", "description", t("meta.description"));
  out = setContent(out, "property", "og:title", t("meta.title"));
  out = setContent(out, "property", "og:description", t("meta.ogDescription"));
  out = setContent(out, "property", "og:image:alt", t("meta.ogImageAlt"));
  out = setContent(out, "property", "og:locale", locale);
  out = setContent(out, "property", "og:url", `${siteUrl}${path}`);
  out = setContent(out, "property", "og:image", `${siteUrl}/og-image.png`);
  for (const code of [...codes, "x-default"]) {
    const href = code === "x-default" ? `${siteUrl}/` : `${siteUrl}/${code}/`;
    out = out.replace(new RegExp(`(<link rel="alternate" hreflang="${code}" href=")[^"]*(")`), `$1${href}$2`);
  }
  return out;
}
