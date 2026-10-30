import { useEffect, useState } from "react";
import { remoteTracks } from "../data/content";

const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

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

// A browser version of the remote's now-playing screen, laid out like the 3D render.
export function RemoteScreen() {
  const [position, setPosition] = useState({ index: 0, elapsed: 0 });
  const [playing, setPlaying] = useState(false);
  const track = remoteTracks[position.index];

  useEffect(() => {
    if (!playing) return undefined;
    const timer = setInterval(() => {
      setPosition(({ index, elapsed }) =>
        elapsed + 1 >= remoteTracks[index].seconds
          ? { index: (index + 1) % remoteTracks.length, elapsed: 0 }
          : { index, elapsed: elapsed + 1 }
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [playing]);

  const skip = (step) =>
    setPosition(({ index }) => ({
      index: (index + step + remoteTracks.length) % remoteTracks.length,
      elapsed: 0,
    }));

  const progress = (position.elapsed / track.seconds) * 100;

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
          <span>{clock(track.seconds)}</span>
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <RemoteButton glyph="previous" label="Previous track" onClick={() => skip(-1)} />
        <RemoteButton
          main
          glyph={playing ? "pause" : "play"}
          label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying((value) => !value)}
        />
        <RemoteButton glyph="next" label="Next track" onClick={() => skip(1)} />
      </div>
      <p className="sr-only" aria-live="polite">
        {`${playing ? "Playing" : "Paused"}: ${track.title} by ${track.artist}`}
      </p>
    </div>
  );
}
