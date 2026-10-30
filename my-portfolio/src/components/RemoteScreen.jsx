import { useCallback, useEffect, useRef, useState } from "react";
import { remoteTracks } from "../data/content";
import { useLanguage } from "../i18n";
import { createSpotifyController, loadSpotifyApi, toSpotifyUri } from "./spotifyEmbed";

const PLAY_TIMEOUT_MS = 5000; // how long Spotify gets to really start before the screen goes on alone
const NOMINAL_SECONDS = 180; // progress bar length for tracks without a known length, visual mode only
const TRACK_COUNT = remoteTracks.length;

const uriOf = (index) => toSpotifyUri(remoteTracks[index].url);

const clock = (seconds) =>
  seconds == null ? "-:--" : `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

// Button glyphs are drawn as SVG so they never render as emoji.
const glyphs = {
  previous: (
    <>
      <rect x="2" y="3" width="2" height="10" />
      <path d="M13 3v10L5 8z" />
    </>
  ),
  play: <path d="M4 2v12l10-6z" />,
  pause: (
    <>
      <rect x="3" y="3" width="4" height="10" />
      <rect x="9" y="3" width="4" height="10" />
    </>
  ),
  next: (
    <>
      <path d="M3 3v10l8-5z" />
      <rect x="12" y="3" width="2" height="10" />
    </>
  ),
};

function RemoteButton({ glyph, label, onClick, main = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`grid h-14 w-14 place-items-center rounded-full border-2 ${
        main
          ? "border-accent bg-accent text-lcd hover:border-ink hover:bg-ink"
          : "border-ink bg-lcd-deep hover:bg-ink hover:text-lcd"
      }`}
    >
      <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true" shapeRendering="crispEdges">
        {glyphs[glyph]}
      </svg>
    </button>
  );
}

// The remote's now-playing screen, laid out like the 3D render. The screen's own text stays
// Spanish like the real device; buttons and announcements follow the page language.
//
// With Spotify links in content.js, the first button press loads Spotify's iFrame API and shows
// the official embed below the remote. The screen then mirrors what Spotify reports. If Spotify
// can't load or doesn't start playing, the screen runs on its own and links to the track instead.
export function RemoteScreen() {
  const { t } = useLanguage();
  // Always start on the first track.
  const [position, setPosition] = useState({ index: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(false);
  const [source, setSourceState] = useState("local"); // "spotify" once Spotify really plays
  const [duration, setDuration] = useState(null); // seconds, as reported by Spotify
  const [pending, setPendingState] = useState(false); // waiting for Spotify to start
  const [embed, setEmbed] = useState("none"); // none | loading | ready | failed
  const [showLink, setShowLink] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const host = useRef(null);
  const controller = useRef(null);
  const loading = useRef(null);
  const sourceRef = useRef("local");
  const pendingRef = useRef(false);
  const attempts = useRef(0); // each press bumps this, so stale loads and timers do nothing
  const watchdog = useRef(0);
  const loadedIndex = useRef(0);
  const interacted = useRef(false);
  const announced = useRef({ playing: false, index: 0 });

  const track = remoteTracks[position.index];

  const setSource = (value) => {
    sourceRef.current = value;
    setSourceState(value);
  };
  const setPending = (value) => {
    pendingRef.current = value;
    setPendingState(value);
  };

  // Mirrors Spotify's real state. Only takes over the screen once audio actually plays.
  const onPlaybackUpdate = useCallback(({ data }) => {
    if (!data.isPaused && !data.isBuffering) {
      clearTimeout(watchdog.current);
      pendingRef.current = false;
      setPendingState(false);
      setShowLink(false);
      sourceRef.current = "spotify";
      setSourceState("spotify");
    }
    if (sourceRef.current !== "spotify") return;
    setPlaying(!data.isPaused);
    setDuration(data.duration ? data.duration / 1000 : null);
    setPosition((current) => ({ ...current, elapsed: data.position / 1000 }));
  }, []);

  const ensureController = (index) => {
    if (controller.current) return Promise.resolve(controller.current);
    if (!loading.current) {
      setEmbed("loading");
      loading.current = loadSpotifyApi()
        .then((api) => createSpotifyController(api, host.current, uriOf(index)))
        .then((created) => {
          created.addListener("playback_update", onPlaybackUpdate);
          controller.current = created;
          loadedIndex.current = index;
          setEmbed("ready");
          return created;
        })
        .catch(() => {
          loading.current = null;
          host.current?.replaceChildren();
          setEmbed("failed");
          setShowLink(true);
          return null;
        });
    }
    return loading.current;
  };

  // If Spotify hasn't really started in time, keep the screen going on its own and offer the link.
  const startWatchdog = (attempt) => {
    clearTimeout(watchdog.current);
    watchdog.current = setTimeout(() => {
      if (attempt !== attempts.current) return;
      setPending(false);
      setSource("local");
      setPlaying(true);
      setShowLink(true);
    }, PLAY_TIMEOUT_MS);
  };

  const requestPlay = async (index) => {
    const attempt = ++attempts.current;
    const uri = uriOf(index);
    setPending(true);
    const embedController = await ensureController(index);
    if (attempt !== attempts.current) return;
    if (!embedController) {
      setPending(false);
      setSource("local");
      setPlaying(true);
      return;
    }
    if (loadedIndex.current !== index) {
      embedController.loadUri(uri);
      loadedIndex.current = index;
    }
    embedController.play();
    startWatchdog(attempt);
  };

  const onPlayPause = () => {
    interacted.current = true;
    if (pendingRef.current) {
      // Pressed again while Spotify was still starting: treat it as stop.
      attempts.current += 1;
      clearTimeout(watchdog.current);
      setPending(false);
      setPlaying(false);
      controller.current?.pause();
      return;
    }
    if (sourceRef.current === "spotify") {
      // Spotify decides; playback_update brings the screen along.
      if (!playing) {
        const attempt = ++attempts.current;
        setPending(true);
        startWatchdog(attempt);
      }
      controller.current.togglePlay();
      return;
    }
    if (playing) {
      setPlaying(false);
      controller.current?.pause();
      return;
    }
    if (uriOf(position.index)) requestPlay(position.index);
    else setPlaying(true);
  };

  const skip = (step) => {
    interacted.current = true;
    const index = (position.index + step + TRACK_COUNT) % TRACK_COUNT;
    setPosition({ index, elapsed: 0 });
    setDuration(null);
    if (uriOf(index)) {
      requestPlay(index);
    } else if (sourceRef.current === "spotify") {
      // No link for this track: stop Spotify and carry on visually.
      attempts.current += 1;
      controller.current.pause();
      setSource("local");
    }
  };

  // Visual playback when Spotify isn't driving the screen.
  useEffect(() => {
    if (source !== "local" || !playing) return undefined;
    const timer = setInterval(() => {
      setPosition(({ index, elapsed }) => {
        const length = remoteTracks[index].seconds ?? NOMINAL_SECONDS;
        return elapsed + 1 >= length ? { index: (index + 1) % TRACK_COUNT, elapsed: 0 } : { index, elapsed: elapsed + 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [source, playing]);

  // Keep the embed on the same track as the screen (load only, never play on its own).
  useEffect(() => {
    const uri = uriOf(position.index);
    if (!controller.current || sourceRef.current !== "local" || pendingRef.current || !uri) return;
    if (loadedIndex.current === position.index) return;
    controller.current.loadUri(uri);
    loadedIndex.current = position.index;
  }, [position.index]);

  // Screen reader announcements on real changes only, so switching language doesn't repeat them.
  useEffect(() => {
    if (!interacted.current) return;
    const before = announced.current;
    announced.current = { playing, index: position.index };
    const { title, artist } = remoteTracks[position.index];
    if (playing && (!before.playing || before.index !== position.index)) {
      setAnnouncement(t("remote.announcePlaying", { title, artist }));
    } else if (!playing && before.playing) {
      setAnnouncement(t("remote.announcePaused"));
    } else if (!playing && before.index !== position.index) {
      setAnnouncement(t("remote.announceTrack", { title, artist }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, position.index]);

  useEffect(() => () => clearTimeout(watchdog.current), []);

  const length = source === "spotify" ? duration : track.seconds ?? null;
  const progress = Math.min(100, (position.elapsed / (length || NOMINAL_SECONDS)) * 100);
  const trackLink = /^https:\/\/open\.spotify\.com\//.test(track.url) ? track.url : null;

  return (
    <div className="w-full max-w-xs">
      <div className="border-[10px] border-ink bg-lcd p-4 font-pixel">
        {/* The real screen is in Spanish. TODO: check the paused text on the device. */}
        <p lang="es" className="flex items-center gap-2 border-b-2 border-ink pb-2 text-base uppercase">
          <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor" aria-hidden="true" shapeRendering="crispEdges">
            {playing ? glyphs.play : glyphs.pause}
          </svg>
          {playing ? "Sonando" : "Pausado"}
        </p>
        <p className="mt-4 truncate text-2xl font-semibold leading-tight">{track.title}</p>
        <p className="mt-3 truncate text-base">{track.artist}</p>
        <div className="mt-5 h-3 border-2 border-ink" aria-hidden="true">
          <div className="h-full bg-ink" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 flex justify-between text-base">
          <span>{clock(position.elapsed)}</span>
          <span>{clock(length)}</span>
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4" aria-busy={pending}>
        <RemoteButton glyph="previous" label={t("remote.previous")} onClick={() => skip(-1)} />
        <RemoteButton
          main
          glyph={playing || pending ? "pause" : "play"}
          label={playing || pending ? t("remote.pause") : t("remote.play")}
          onClick={onPlayPause}
        />
        <RemoteButton glyph="next" label={t("remote.next")} onClick={() => skip(1)} />
      </div>

      {/* Spotify's embed goes in here, shown as Spotify draws it. React renders no children here on purpose. */}
      <div ref={host} className="mt-4 empty:hidden" />
      {showLink && trackLink ? (
        <a href={trackLink} className="text-link mt-2 inline-block text-base font-normal">
          {t("remote.listenOnSpotify")}
        </a>
      ) : null}

      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
