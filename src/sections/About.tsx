// sections/About.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutMap from "../assets/images/About.webp";

/* ============================================================
   About — Pixelated Map Journey
   A character walks a path across a gothic pixel-art map,
   revealing checkpoints as popups. Content clearly marked
   for replacement.
   ============================================================ */

/* ─── Types ─────────────────────────────────────────────── */
interface Checkpoint {
  id: string;
  index: number; // display number
  heading: string;
  body: string;
  year?: string;
  marker: string; // pixel symbol
  accent: "amber" | "turquoise" | "magenta";
  x: number; // % position on map, left→right
  y: number; // % position on map, top→bottom
}

/* ─── Data ───────────────────────────────────────────────── */
/*  ← REPLACE ALL TEXT/YEAR VALUES WITH YOUR OWN CONTENT →  */
const checkpoints: Checkpoint[] = [
  {
    id: "origin",
    index: 1,
    heading: "Where It Started",
    body: "Replace this with your background — where you grew up, what first drew you to technology, or how you came to be interested in development and design. Keep it brief and personal.",
    year: "——",
    marker: "◆",
    accent: "amber",
    x: 18,
    y: 13,
  },
  {
    id: "education",
    index: 2,
    heading: "The Study Hall",
    body: "Replace with your educational background — qualifications, institutions, or relevant coursework. If self-taught, describe how you built your knowledge base independently.",
    year: "——",
    marker: "△",
    accent: "turquoise",
    x: 76,
    y: 18,
  },
  {
    id: "interests",
    index: 3,
    heading: "What Pulls Me In",
    body: "Replace with the things that genuinely interest you — not just professionally, but personally. The intersection between your interests and your work often says more than a skills list.",
    year: "——",
    marker: "◇",
    accent: "amber",
    x: 30,
    y: 45,
  },
  {
    id: "craft",
    index: 4,
    heading: "How I Build",
    body: "Replace with your approach to development and design. Do you start with design or code? What does your process look like? What do you care about when building something?",
    year: "——",
    marker: "◈",
    accent: "turquoise",
    x: 70,
    y: 63,
  },
  {
    id: "now",
    index: 5,
    heading: "Right Now",
    body: "Replace with what you are working on, learning, or exploring at the moment. This is the most immediate and human thing on the page — be specific and honest.",
    year: "2025",
    marker: "★",
    accent: "magenta",
    x: 47,
    y: 80,
  },
  {
    id: "next",
    index: 6,
    heading: "Where I'm Headed",
    body: "Replace with where you want to go — the kind of work you want to do, the kind of problems you want to solve, or the kind of collaborations you are looking for.",
    year: "→",
    marker: "▷",
    accent: "amber",
    x: 84,
    y: 73,
  },
];

const START = { x: 47, y: 94 }; // just below the gate — character's resting spot

/* ─── Accent helpers ─────────────────────────────────────── */
const ACCENT_COLOR = {
  amber: "#F5A94E",
  turquoise: "#4DD9C0",
  magenta: "#E0339E",
};

const ACCENT_BORDER = {
  amber: "rgba(245,169,78,0.35)",
  turquoise: "rgba(77,217,192,0.30)",
  magenta: "rgba(224,51,158,0.32)",
};

const ACCENT_BG = {
  amber: "rgba(245,169,78,0.08)",
  turquoise: "rgba(77,217,192,0.08)",
  magenta: "rgba(224,51,158,0.09)",
};

/* ─────────────────────────────────────────────
   Tiny pixel-art traveler (8x8 grid, hooded
   figure + lantern glow). Swap for a sprite
   image later if you want something richer.
───────────────────────────────────────────── */
function PixelCharacter() {
  const cells = [
    "00111000",
    "01111100",
    "01221030",
    "01111033",
    "00110003",
    "00110000",
    "01111000",
    "11001100",
  ];
  const colors: Record<string, string> = {
    "1": "#1A3B52",
    "2": "#E9E4F2",
    "3": "#F5A94E",
  };

  return (
    <svg viewBox="0 0 8 8" width={28} height={28} shapeRendering="crispEdges">
      {cells.map((row, y) =>
        row
          .split("")
          .map((cell, x) =>
            cell === "0" ? null : (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={colors[cell]} />
            )
          )
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   About section
───────────────────────────────────────────── */
const About = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [popupId, setPopupId] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(new Set());

  const activePoint = checkpoints.find((p) => p.id === activeId);
  const pos = activePoint ? { x: activePoint.x, y: activePoint.y } : START;

  const visitedFraction =
    checkpoints.length > 1 ? visited.size / (checkpoints.length - 1) : 0;

  function goTo(point: Checkpoint) {
    setPopupId(null); // close whatever's open, let the character walk first
    setActiveId(point.id);
  }

  function handleArrival() {
    if (activeId) {
      setPopupId(activeId);
      setVisited((prev) => new Set(prev).add(activeId));
    }
  }

  const currentIndex = checkpoints.findIndex((p) => p.id === activeId);
  const nextPoint =
    currentIndex >= 0 && currentIndex < checkpoints.length - 1
      ? checkpoints[currentIndex + 1]
      : null;

  const popupPoint = checkpoints.find((p) => p.id === popupId);

  // Dashed path connecting every checkpoint, in order.
  const pathD = checkpoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="about-section relative section-pad"
      style={{
        backgroundImage: `linear-gradient(rgba(22, 28, 48, 0.58), rgba(22, 28, 48, 0.72)), url(${aboutMap})`,
      }}
    >
      <div className="about-section__wash" aria-hidden="true" />
      <div className="container-grid">
        {/* ── Section header ── */}
        <div className="grid-8 mb-12">
          <div className="col-span-8 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                id="about-heading"
                className="text-display-xl text-[#EDE8DC]"
                style={{ fontFamily: "Namesake, serif" }}
              >
                The
                <br />
                Journey
              </h2>

              <p
                className="text-gulzar-md text-[#8A96A8] max-w-[40ch] sm:text-right pb-1"
                style={{ fontFamily: "Gulzar, serif" }}
              >
                A map of the path so far — origin, education, craft, and the road ahead.
                Tap a landmark to follow it.
              </p>
            </div>
          </div>
        </div>

        {/* ── Map + character + pins ── */}
        <div
          className="about-map relative w-full overflow-visible rounded-sm border border-[rgba(77,217,192,0.22)]"
          aria-label="Interactive map of a personal journey"
        >
          <img
            src={aboutMap}
            alt="Pixel-art gothic map illustrating a personal journey"
            className="pixelated pointer-events-none absolute inset-0 block h-full w-full select-none object-cover"
            draggable={false}
          />

          {/* Dashed route */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke="rgba(156,152,179,0.35)"
              strokeWidth={0.4}
              strokeDasharray="1.2 1.2"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={pathD}
              fill="none"
              stroke="#4DD9C0"
              strokeWidth={0.4}
              strokeDasharray="1.2 1.2"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: visitedFraction }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </svg>

          {/* Pinpoints */}
          {checkpoints.map((cp) => {
            const color = ACCENT_COLOR[cp.accent];
            const isVisited = visited.has(cp.id);
            const isActive = activeId === cp.id;

            return (
              <button
                key={cp.id}
                type="button"
                aria-label={`View: ${cp.heading}`}
                onClick={() => goTo(cp)}
                className="absolute -translate-x-1/2 -translate-y-1/2 p-3"
                style={{ left: `${cp.x}%`, top: `${cp.y}%` }}
              >
                <span
                  className="
                    relative flex items-center justify-center
                    w-5 h-5 border-2 text-[0.6rem] font-bold
                    transition-all duration-200
                  "
                  style={{
                    color,
                    borderColor: color,
                    backgroundColor: "#161C30",
                    boxShadow: isActive
                      ? `0 0 0 6px ${color}33`
                      : isVisited
                      ? `0 0 10px ${color}88`
                      : `0 0 6px ${color}55`,
                    opacity: isVisited || isActive ? 1 : 0.75,
                  }}
                >
                  {cp.marker}
                </span>
              </button>
            );
          })}

          {/* Traveling character */}
          <motion.div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${START.x}%`, top: `${START.y}%` }}
            animate={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={handleArrival}
          >
            <PixelCharacter />
          </motion.div>

          {/* Popup */}
          <AnimatePresence>
            {popupPoint && (
              <motion.div
                key={popupPoint.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute z-20 w-[15rem] sm:w-[20rem] p-5 text-left"
                style={{
                  left: `${popupPoint.x}%`,
                  top: `${popupPoint.y}%`,
                  transform: `translate(${
                    popupPoint.x > 55 ? "calc(-100% - 14px)" : "14px"
                  }, ${popupPoint.y > 60 ? "calc(-100% - 14px)" : "14px"})`,
                  backgroundColor: ACCENT_BG[popupPoint.accent],
                  border: `1px solid ${ACCENT_BORDER[popupPoint.accent]}`,
                  backdropFilter: "blur(6px)",
                }}
                role="dialog"
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setPopupId(null)}
                  className="absolute top-2 right-2 text-[#9C98B3] hover:text-[#EDE8DC] text-xs"
                >
                  ✕
                </button>

                {/* Index + year */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-label tracking-[0.2em]"
                    style={{ color: ACCENT_COLOR[popupPoint.accent] }}
                  >
                    {String(popupPoint.index).padStart(2, "0")}
                  </span>
                  {popupPoint.year && (
                    <span className="text-label text-[#8A96A8]">{popupPoint.year}</span>
                  )}
                </div>

                <h3
                  className="text-display-md text-[#EDE8DC] mb-2"
                  style={{ fontFamily: "Namesake, serif" }}
                >
                  {popupPoint.heading}
                </h3>

                <p className="text-body-sm text-[#C4BCAA] leading-relaxed mb-3">
                  {popupPoint.body}
                </p>

                {nextPoint && popupPoint.id === activeId && (
                  <button
                    type="button"
                    onClick={() => goTo(nextPoint)}
                    className="text-body-sm transition-colors"
                    style={{ color: ACCENT_COLOR[popupPoint.accent] }}
                  >
                    Continue the journey →
                  </button>
                )}

                {/* Corner brackets */}
                <span
                  className="absolute top-[6px] left-[6px] w-[8px] h-[8px] border-t border-l"
                  style={{ borderColor: ACCENT_BORDER[popupPoint.accent] }}
                />
                <span
                  className="absolute bottom-[6px] right-[6px] w-[8px] h-[8px] border-b border-r"
                  style={{ borderColor: ACCENT_BORDER[popupPoint.accent] }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center mt-16">
          <a href="#contact" className="btn-ghost">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;