import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { codes, languageFromPath, languages, translate } from "./languages.js";

export { languages };

const STORAGE_KEY = "lang";
const SITE_URL = import.meta.env.VITE_SITE_URL ?? "";

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return codes.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function store(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Private mode or blocked storage: the URL still carries the language.
  }
}

function fromBrowser() {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const code = tag?.slice(0, 2).toLowerCase();
    if (code === "nl" || code === "es") return code;
    if (code === "en") return "en";
  }
  return "en";
}

// URL first, then the visitor's earlier choice, then the browser, then English.
function initialLanguage() {
  return languageFromPath(window.location.pathname) ?? readStored() ?? fromBrowser();
}

function setMeta(selector, value) {
  document.head.querySelector(selector)?.setAttribute("content", value);
}

// Keeps <html lang>, the title and the social tags in step with the chosen language.
function updateHead(lang) {
  const t = (key) => translate(lang, key);
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  setMeta('meta[name="description"]', t("meta.description"));
  setMeta('meta[property="og:title"]', t("meta.title"));
  setMeta('meta[property="og:description"]', t("meta.ogDescription"));
  setMeta('meta[property="og:image:alt"]', t("meta.ogImageAlt"));
  setMeta('meta[property="og:locale"]', languages.find((language) => language.code === lang).locale);
  if (languageFromPath(window.location.pathname)) {
    setMeta('meta[property="og:url"]', `${SITE_URL}/${lang}/`);
    document.head.querySelector('link[rel="canonical"]')?.setAttribute("href", `${SITE_URL}/${lang}/`);
  }
}

// The element just below the sticky header, and where it is on screen.
function findScrollAnchor() {
  const y = (document.querySelector("header")?.getBoundingClientRect().bottom ?? 0) + 8;
  const element = document.elementFromPoint?.(window.innerWidth / 2, y);
  if (!element || element === document.body || element === document.documentElement) return null;
  return { element, top: element.getBoundingClientRect().top };
}

const LanguageContext = createContext({
  lang: "en",
  setLanguage: () => {},
  t: (key, params) => translate("en", key, params),
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);
  const scrollAnchor = useRef(null);

  useEffect(() => {
    updateHead(lang);
  }, [lang]);

  // Translations change the height of text above the viewport. Before the browser paints,
  // scroll by however much the element under the header moved, so the view stays put.
  useLayoutEffect(() => {
    const anchor = scrollAnchor.current;
    scrollAnchor.current = null;
    if (!anchor?.element.isConnected) return;
    const moved = anchor.element.getBoundingClientRect().top - anchor.top;
    if (moved) window.scrollBy({ top: moved, behavior: "instant" });
  }, [lang]);

  // No reload: swap the path in place and keep the hash, so component state stays put.
  const setLanguage = useCallback((next) => {
    scrollAnchor.current = findScrollAnchor();
    setLang(next);
    store(next);
    const { search, hash } = window.location;
    window.history.replaceState(window.history.state, "", `/${next}/${search}${hash}`);
  }, []);

  const value = useMemo(
    () => ({ lang, setLanguage, t: (key, params) => translate(lang, key, params) }),
    [lang, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
