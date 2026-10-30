// Spotify's official iFrame API: https://developer.spotify.com/documentation/embeds/references/iframe-api
const API_SRC = "https://open.spotify.com/embed/iframe-api/v1";
const LOAD_TIMEOUT_MS = 8000;

let apiPromise = null;

// Loads the API script once, on first use. Rejects if it fails or takes too long, so the remote can fall back.
export function loadSpotifyApi() {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Spotify iFrame API timed out")), LOAD_TIMEOUT_MS);
    window.onSpotifyIframeApiReady = (api) => {
      clearTimeout(timer);
      resolve(api);
    };
    const script = document.createElement("script");
    script.src = API_SRC;
    script.async = true;
    script.onerror = () => {
      clearTimeout(timer);
      reject(new Error("Spotify iFrame API failed to load"));
    };
    document.body.appendChild(script);
  });
  // Let a later button press try again.
  apiPromise.catch(() => {
    apiPromise = null;
  });
  return apiPromise;
}

// Creates the compact embed inside `host` and resolves once it's ready for commands.
// theme "dark" is Spotify's own dark theme (theme=0), instead of colors taken from the album cover.
// Spotify replaces the element it's given, so it gets a fresh child that React never renders.
export function createSpotifyController(api, host, uri) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Spotify embed timed out")), LOAD_TIMEOUT_MS);
    const target = document.createElement("div");
    host.appendChild(target);
    api.createController(target, { uri, width: "100%", height: 80, theme: "dark" }, (controller) => {
      controller.addListener("ready", () => {
        clearTimeout(timer);
        resolve(controller);
      });
    });
  });
}

// "https://open.spotify.com/track/ID?si=..." or "spotify:track:ID" -> "spotify:track:ID"; anything else -> null.
export function toSpotifyUri(link) {
  const id = link?.match(/open\.spotify\.com\/(?:intl-[a-z-]+\/)?track\/([A-Za-z0-9]+)/)?.[1];
  if (id) return `spotify:track:${id}`;
  return /^spotify:track:[A-Za-z0-9]+$/.test(link ?? "") ? link : null;
}
