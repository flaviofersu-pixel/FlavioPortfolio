import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n";
import { LoopingVideo } from "./MediaSlot";
import { ModelViewer } from "./ModelViewer";
import { withTodos } from "./Prose";
import { RemoteButton, glyphs } from "./RemoteScreen";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const pad = (number) => String(number).padStart(2, "0");

// An image that turns into a frame with the step name while the file doesn't exist yet.
// fit="contain" shows the whole image (letterboxed) instead of filling the frame.
function StepImage({ src, alt, label, fit = "cover", className = "" }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (!src || failed) {
    return (
      <span
        className={`grid h-full w-full place-items-center border-2 border-dashed border-rule p-2 text-center font-pixel text-ink-soft ${className}`}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        {label}
      </span>
    );
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={`h-full w-full ${fit === "contain" ? "bg-lcd object-contain" : "object-cover"} ${className}`} />;
}

// The finished remote with numbered dots on its parts. Dot positions are percentages of the photo.
function PartsPhoto({ step, base, activePart, onSelect }) {
  const { t } = useLanguage();
  return (
    <div className="relative mx-auto aspect-[3/4] h-full max-w-full">
      <StepImage src={step.src} alt={t(`${base}.steps.${step.key}.alt`)} label={t(`${base}.steps.${step.key}.title`)} />
      {step.parts.map((part, index) => {
        const active = index === activePart;
        return (
          <button
            key={part.key}
            type="button"
            onClick={() => onSelect(index)}
            aria-pressed={active}
            aria-label={`${index + 1}: ${t(`${base}.parts.${part.key}.name`)}`}
            style={{ left: `${part.x}%`, top: `${part.y}%` }}
            className={`absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-lcd font-pixel text-lg text-lcd shadow-[0_0_0_2px_theme(colors.ink)] ${
              active ? "bg-accent" : "bg-ink hover:bg-accent"
            }`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}

// What the big screen shows for each step. Only the current step is mounted, so the 3D model
// (and its large library) loads the first time step 01 opens, and leaving step 02 stops the video.
function StepMedia({ step, base, activePart, onSelectPart }) {
  const { t } = useLanguage();
  const alt = t(`${base}.steps.${step.key}.alt`);
  const label = t(`${base}.steps.${step.key}.title`);

  if (step.type === "model") {
    return <ModelViewer src={step.src} alt={alt} className="block h-full w-full focus-within:[outline-offset:-6px]" />;
  }
  if (step.type === "video") {
    return (
      <div className="relative mx-auto aspect-[9/16] h-full max-w-full">
        <LoopingVideo overlay src={step.src} poster={step.poster} alt={alt} />
      </div>
    );
  }
  if (step.parts) {
    return <PartsPhoto step={step} base={base} activePart={activePart} onSelect={onSelectPart} />;
  }
  return (
    <div className="mx-auto aspect-[3/4] h-full max-w-full">
      <StepImage src={step.src} alt={alt} label={label} />
    </div>
  );
}

function PartsList({ step, base, activePart, onSelect }) {
  const { t } = useLanguage();
  return (
    <div className="mt-8">
      <p className="text-base text-ink-soft">{t(`${base}.partsHint`)}</p>
      <ul className="mt-3 border-t border-rule">
        {step.parts.map((part, index) => {
          const active = index === activePart;
          return (
            <li key={part.key} className="border-b border-rule">
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-pressed={active}
                className="flex min-h-11 w-full items-center gap-3 py-2 text-left hover:text-accent"
              >
                <span
                  aria-hidden="true"
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-pixel text-base text-lcd ${
                    active ? "bg-accent" : "bg-ink"
                  }`}
                >
                  {index + 1}
                </span>
                <span className={active ? "font-semibold" : ""}>{t(`${base}.parts.${part.key}.name`)}</span>
              </button>
              {active && t(`${base}.parts.${part.key}.text`) ? <p className="pb-4 pl-10 motion-safe:animate-fade">{withTodos(t(`${base}.parts.${part.key}.text`))}</p> : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// The Spotify remote's build, step by step: a big "screen" like the remote's display,
// the log entry for the current step, and a row of step frames with a progress bar.
// Texts are in src/i18n under projects.<id>.buildLog, steps and files in src/data/content.js.
export function BuildLog({ projectId, steps }) {
  const { t } = useLanguage();
  const base = `projects.${projectId}.buildLog`;
  const last = steps.length - 1;
  const [current, setCurrent] = useState(last); // opens on the finished remote
  const finishedParts = steps.find((item) => item.parts)?.parts ?? [];
  const [activePart, setActivePart] = useState(Math.min(1, finishedParts.length - 1)); // the display
  const [announcement, setAnnouncement] = useState("");
  const reducedMotion = usePrefersReducedMotion();
  const scroller = useRef(null);
  const thumbs = useRef([]);
  const firstScroll = useRef(true);

  const step = steps[current];
  const titleOf = (index) => t(`${base}.steps.${steps[index].key}.title`);

  // Keeps the current frame visible in the scrolling row on phones, without moving the page.
  useEffect(() => {
    const row = scroller.current;
    const thumb = thumbs.current[current];
    if (!row || !thumb || row.scrollWidth <= row.clientWidth) return;
    const left = thumb.offsetLeft - (row.clientWidth - thumb.offsetWidth) / 2;
    row.scrollTo?.({ left, behavior: reducedMotion || firstScroll.current ? "auto" : "smooth" });
    firstScroll.current = false;
  }, [current, reducedMotion]);

  const goTo = (index, { focus = false } = {}) => {
    const next = Math.max(0, Math.min(last, index));
    if (focus) thumbs.current[next]?.focus();
    if (next === current) return;
    setCurrent(next);
    setAnnouncement(t(`${base}.announce`, { n: next + 1, total: steps.length, title: titleOf(next) }));
  };

  // Left/right (and Home/End) move between steps while focus is in the row.
  const onRowKeyDown = (event) => {
    const from = thumbs.current.indexOf(document.activeElement);
    if (from === -1) return;
    const target = { ArrowLeft: from - 1, ArrowRight: from + 1, Home: 0, End: last }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    goTo(target, { focus: true });
  };

  const date = withTodos(t(`${base}.steps.${step.key}.date`));

  return (
    <div
      role="region"
      aria-label={t(`${base}.label`)}
      className="grid grid-cols-2 gap-x-4 gap-y-6 [grid-template-areas:'screen_screen'_'steps_steps'_'entry_entry'_'prev_next'] sm:grid-cols-[3.5rem_minmax(0,1.3fr)_minmax(0,1fr)_3.5rem] sm:gap-x-6 sm:gap-y-10 sm:[grid-template-areas:'screen_screen_entry_entry'_'prev_steps_steps_next'] lg:gap-x-10"
    >
      {/* The screen, styled like the remote's display. */}
      <div className="min-w-0 rounded-[10px] border-[6px] border-ink bg-lcd [grid-area:screen]">
        <p className="flex items-center justify-between gap-4 border-b-2 border-ink px-3 py-2 font-pixel text-base uppercase">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor" aria-hidden="true" shapeRendering="crispEdges">
              {glyphs.play}
            </svg>
            {t(`${base}.label`)}
          </span>
          <span>
            {pad(current + 1)} / {pad(steps.length)}
          </span>
        </p>
        <div key={step.key} className="h-[22rem] p-3 motion-safe:animate-fade sm:h-[28rem] lg:h-[34rem]">
          <StepMedia step={step} base={base} activePart={activePart} onSelectPart={setActivePart} />
        </div>
      </div>

      {/* The step frames and progress bar. */}
      <div className="min-w-0 [grid-area:steps]">
        <ol
          ref={scroller}
          aria-label={t(`${base}.stepsLabel`)}
          onKeyDown={onRowKeyDown}
          className="relative -m-2 flex snap-x snap-mandatory gap-3 overflow-x-auto p-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible"
        >
          {steps.map((item, index) => {
            const active = index === current;
            const title = titleOf(index);
            return (
              <li key={item.key} className="shrink-0 snap-start">
                <button
                  ref={(node) => {
                    thumbs.current[index] = node;
                  }}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-current={active ? "step" : undefined}
                  className="group block w-[104px] text-left sm:w-full"
                >
                  <span
                    className={`block h-[78px] overflow-hidden border-2 border-ink bg-lcd-deep sm:h-[110px] ${
                      active ? "shadow-[0_0_0_2px_theme(colors.ink)]" : "group-hover:border-accent"
                    }`}
                  >
                    <StepImage src={item.thumb ?? item.poster ?? item.src} alt="" label={title} fit={item.thumbFit} />
                  </span>
                  <span className={`mt-2 block whitespace-nowrap font-pixel text-sm sm:text-base ${active ? "text-accent" : "group-hover:text-accent"}`}>
                    {pad(index + 1)} {title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        <div aria-hidden="true" className="mt-4">
          <div className="h-3 border-2 border-ink">
            <div
              className="h-full bg-ink motion-safe:transition-[width] motion-safe:duration-200"
              style={{ width: `${last ? (current / last) * 100 : 100}%` }}
            />
          </div>
          <p className="mt-2 flex justify-between gap-4 font-pixel text-sm text-ink-soft">
            <span>
              {pad(1)} {titleOf(0)}
            </span>
            <span>
              {pad(steps.length)} {titleOf(last)}
            </span>
          </p>
        </div>
      </div>

      {/* The log entry. */}
      <div key={step.key} className="min-w-0 motion-safe:animate-fade [grid-area:entry] sm:pt-1">
        <p className="font-pixel text-base uppercase text-accent">
          {t(`${base}.step`)} {pad(current + 1)}
          <span className="normal-case text-ink-soft sm:hidden"> · {date}</span>
        </p>
        <h4 className="mt-2 font-pixel text-[clamp(2rem,4vw,3.25rem)] font-medium leading-none">{titleOf(current)}</h4>
        <p className="mt-3 hidden text-ink-soft sm:block">{date}</p>
        <p className="mt-4 max-w-[52ch]">{withTodos(t(`${base}.steps.${step.key}.text`))}</p>
        {step.parts ? <PartsList step={step} base={base} activePart={activePart} onSelect={setActivePart} /> : null}
      </div>

      <RemoteButton
        glyph="previous"
        label={t(`${base}.previous`)}
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        className="justify-self-end [grid-area:prev] sm:mt-[27px] sm:self-start sm:justify-self-start"
      />
      <RemoteButton
        glyph="next"
        label={t(`${base}.next`)}
        onClick={() => goTo(current + 1)}
        disabled={current === last}
        className="justify-self-start [grid-area:next] sm:mt-[27px] sm:self-start sm:justify-self-end"
      />

      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
