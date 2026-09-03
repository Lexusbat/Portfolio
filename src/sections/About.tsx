/* ============================================================
   About — RPG Progression Map
   A zigzagging journey through checkpoints.
   Content text is clearly marked for replacement.
   ============================================================ */

/* ─── Types ─────────────────────────────────────────────── */
interface Checkpoint {
  id: string
  index: number           // display number
  label: string           // eyebrow / location marker
  heading: string
  body: string
  year?: string
  marker: string          // pixel symbol
  side: 'left' | 'right' // which side of the track
  accent: 'amber' | 'turquoise' | 'magenta'
}

/* ─── Data ───────────────────────────────────────────────── */
/*  ← REPLACE ALL TEXT/YEAR VALUES WITH YOUR OWN CONTENT →  */
const checkpoints: Checkpoint[] = [
  {
    id: 'origin',
    index: 1,
    label: 'Origin',
    heading: 'Where It Started',
    body: 'Replace this with your background — where you grew up, what first drew you to technology, or how you came to be interested in development and design. Keep it brief and personal.',
    year: '——',
    marker: '◆',
    side: 'left',
    accent: 'amber',
  },
  {
    id: 'education',
    index: 2,
    label: 'Education',
    heading: 'The Study Hall',
    body: 'Replace with your educational background — qualifications, institutions, or relevant coursework. If self-taught, describe how you built your knowledge base independently.',
    year: '——',
    marker: '△',
    side: 'right',
    accent: 'turquoise',
  },
  {
    id: 'interests',
    index: 3,
    label: 'Interests',
    heading: 'What Pulls Me In',
    body: 'Replace with the things that genuinely interest you — not just professionally, but personally. The intersection between your interests and your work often says more than a skills list.',
    year: '——',
    marker: '◇',
    side: 'left',
    accent: 'amber',
  },
  {
    id: 'craft',
    index: 4,
    label: 'Craft',
    heading: 'How I Build',
    body: 'Replace with your approach to development and design. Do you start with design or code? What does your process look like? What do you care about when building something?',
    year: '——',
    marker: '◈',
    side: 'right',
    accent: 'turquoise',
  },
  {
    id: 'now',
    index: 5,
    label: 'Current Quest',
    heading: 'Right Now',
    body: 'Replace with what you are working on, learning, or exploring at the moment. This is the most immediate and human thing on the page — be specific and honest.',
    year: '2025',
    marker: '★',
    side: 'left',
    accent: 'magenta',
  },
  {
    id: 'next',
    index: 6,
    label: 'Next Destination',
    heading: 'Where I\'m Headed',
    body: 'Replace with where you want to go — the kind of work you want to do, the kind of problems you want to solve, or the kind of collaborations you are looking for.',
    year: '→',
    marker: '▷',
    side: 'right',
    accent: 'amber',
  },
]

/* ─── Accent helpers ─────────────────────────────────────── */
const ACCENT_COLOR = {
  amber:      '#F5A94E',
  turquoise:  '#4DD9C0',
  magenta:    '#E0339E',
}

const ACCENT_BORDER = {
  amber:      'rgba(245,169,78,0.25)',
  turquoise:  'rgba(77,217,192,0.20)',
  magenta:    'rgba(224,51,158,0.22)',
}

const ACCENT_BG = {
  amber:      'rgba(245,169,78,0.05)',
  turquoise:  'rgba(77,217,192,0.05)',
  magenta:    'rgba(224,51,158,0.06)',
}

/* ─────────────────────────────────────────────
   Single checkpoint card
───────────────────────────────────────────── */
function CheckpointCard({ cp }: { cp: Checkpoint }) {
  const color  = ACCENT_COLOR[cp.accent]
  const border = ACCENT_BORDER[cp.accent]
  const bg     = ACCENT_BG[cp.accent]
  const isLeft = cp.side === 'left'

  return (
    /* Outer row: 8-col grid for the zigzag */
    <div className="grid-8 items-center gap-y-0 relative">

      {/* ── Content block — left side ── */}
      {isLeft && (
        <div className="col-span-8 md:col-span-3 md:col-start-1 flex flex-col items-start md:items-end">
          <CardContent cp={cp} border={border} bg={bg} align="right" />
        </div>
      )}

      {/* ── Center track + node ── */}
      <div
        className={`
          hidden md:flex col-span-2
          ${isLeft ? 'md:col-start-4' : 'md:col-start-4'}
          flex-col items-center justify-center
          relative py-4
        `}
        aria-hidden="true"
      >
        {/* Node */}
        <div
          className="
            relative z-10
            w-5 h-5
            flex items-center justify-center
            text-[0.65rem] font-bold
            border-2
          "
          style={{
            color,
            borderColor: color,
            backgroundColor: '#161C30',
            boxShadow: `0 0 12px ${color}55`,
          }}
        >
          {cp.marker}
        </div>

        {/* Track connector lines */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent, ${color}45, transparent)`,
          }}
        />
      </div>

      {/* ── Content block — right side ── */}
      {!isLeft && (
        <div className="col-span-8 md:col-span-3 md:col-start-6 flex flex-col items-start">
          <CardContent cp={cp} border={border} bg={bg} align="left" />
        </div>
      )}

      {/* Mobile: always full width below the marker */}
      {isLeft && (
        <div className="col-span-8 md:hidden">
          <CardContent cp={cp} border={border} bg={bg} align="left" />
        </div>
      )}

    </div>
  )
}

/* ─────────────────────────────────────────────
   Card content — the actual text block
───────────────────────────────────────────── */
function CardContent({
  cp,
  border,
  bg,
  align,
}: {
  cp: Checkpoint
  border: string
  bg: string
  align: 'left' | 'right'
}) {
  return (
    <div
      className="
        w-full max-w-[340px]
        p-6
        mb-8
        border
        transition-colors duration-300
        hover:brightness-110
      "
      style={{
        borderColor: border,
        backgroundColor: bg,
        textAlign: align === 'right' ? 'right' : 'left',
      }}
    >
     

      {/* Heading */}
      <h3
        className="text-display-md text-[#EDE8DC] mb-2 "
        style={{ fontFamily: 'Namesake, serif' }}
      >
        {cp.heading}
      </h3>

      {/* Body */}
      <p className="text-body text-[#8A96A8] leading-relaxed">
        {cp.body}
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────
   About section
───────────────────────────────────────────── */
const About = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="relative section-pad bg-[#161C30]"
    style={{
      background: 'linear-gradient(to bottom, #161C30 0%, #1a1f38 50%, #161C30 100%)',
    }}
  >
    <div className="container-grid">

      {/* ── Section header ── */}
      <div className="grid-8 mb-16">
        <div className="col-span-8 flex flex-col gap-5">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              id="about-heading"
              className="text-display-xl text-[#EDE8DC]"
              style={{ fontFamily: 'Namesake, serif' }}
            >
              The<br />Journey
            </h2>

            <p
              className="text-gulzar-md text-[#8A96A8] max-w-[40ch] sm:text-right pb-1"
              style={{ fontFamily: 'Gulzar, serif' }}
            >
              A map of the path so far —
              origin, education, craft, and the road ahead.
            </p>
          </div>

        </div>
      </div>

      {/* ── Progression track ── */}
      {/*
        The track line is the CSS .timeline-track::before pseudo.
        On desktop it sits at the center of the 8-col grid (col 4-5).
        On mobile, content stacks vertically.
      */}
      <div className="timeline-track" role="list" aria-label="Journey checkpoints">

        {/* Track start marker */}
        <div
          className="hidden md:flex items-center justify-center mb-2"
          aria-hidden="true"
        >
          <div
            className="
              grid-8 w-full
            "
          >
            <div className="col-span-2 col-start-4 flex justify-center">
              <span className="text-label text-[#F5A94E]/40 tracking-[0.3em]">
                START
              </span>
            </div>
          </div>
        </div>

        {checkpoints.map((cp) => (
          <div role="listitem" key={cp.id}>
            <CheckpointCard cp={cp} />
          </div>
        ))}

        {/* Track end marker */}
        <div
          className="hidden md:flex items-center justify-center mt-2"
          aria-hidden="true"
        >
          <div className="grid-8 w-full">
            <div className="col-span-2 col-start-4 flex justify-center">
              <span className="text-label text-[#8A96A8]/40 tracking-[0.3em]">
                ∞
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center mt-16">
        <a href="#contact" className="btn-ghost">
          Start a conversation
        </a>
      </div>

    </div>

  </section>
)

export default About
