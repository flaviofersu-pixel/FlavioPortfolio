import { useEffect, useState } from "react";

// True while the media query matches. False where matchMedia doesn't exist (tests).
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => Boolean(window.matchMedia?.(query).matches));

  useEffect(() => {
    const list = window.matchMedia?.(query);
    if (!list) return undefined;
    const onChange = () => setMatches(list.matches);
    onChange();
    list.addEventListener("change", onChange);
    return () => list.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
