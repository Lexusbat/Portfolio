/* ============================================================
   Love — Visual interlude.
   Full-bleed background from love.webp.
   Typography and atmosphere only — no UI clutter.
   ============================================================ */

import loveBg from '../assets/images/love.webp'

/* ─── Things I love — minimal, honest list ─────────────────
   Replace with your own. Keep it personal, not exhaustive.
───────────────────────────────────────────────────────────── */
const lovedThings = [
  'Design that solves something',
  'Code that feels inevitable',
  'Finding the elegant path',
  'Building from nothing',
  'The moment something clicks',
  'Craft over speed',
]

const Love = () => (
  <section
    id="love"
    aria-labelledby="love-heading"
    className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    style={{
      backgroundImage: `url(${loveBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* ── Deep overlay — multiple layers for atmosphere ── */}
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(22,28,48,0.72) 0%,
            rgba(74,38,105,0.45) 40%,
            rgba(22,28,48,0.80) 100%
          )
        `,
      }}
    />
    {/* Radial depth from center */}
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        background: `radial-gradient(
          ellipse 80% 60% at 50% 50%,
          rgba(74,38,105,0.20) 0%,
          rgba(22,28,48,0.55) 100%
        )`,
      }}
    />

    {/* ── Content ── */}
    <div className="container-grid relative z-10 w-full">
      <div className="grid-8">

        {/* Heading block — centered, spanning full width */}
        <div className="col-span-8 flex flex-col items-center text-center gap-8">

          {/* Eyebrow */}
          <p className="section-eyebrow justify-center">
            05 · Love
          </p>

          {/* Main heading */}
          <h2
            id="love-heading"
            className="text-display-hero text-[#EDE8DC]"
            style={{
              fontFamily: 'Namesake, serif',
              textShadow: '0 0 60px rgba(74,38,105,0.80), 0 2px 40px rgba(0,0,0,0.60)',
            }}
          >
            Things I
            <br />
            <span
              className="text-[#E0339E]"
              style={{ textShadow: '0 0 48px rgba(224,51,158,0.50)' }}
            >
              Love
            </span>
          </h2>

          {/* Supporting line */}
          <p
            className="text-gulzar-xl text-[#C4BCAA]/80 max-w-[46ch]"
            style={{ fontFamily: 'Gulzar, serif' }}
          >
            The things that pull me forward — in work, in craft, and everywhere in between.
          </p>

          {/* Pixel divider */}
          <div className="pixel-divider w-24 opacity-40" aria-hidden="true" />

          {/* Loved things — horizontal flowing list */}
          <ul
            className="
              flex flex-wrap justify-center gap-x-8 gap-y-4
              max-w-[62ch]
            "
            aria-label="Things I love"
          >
            {lovedThings.map((thing, i) => (
              <li
                key={thing}
                className="flex items-center gap-2"
              >
                <span
                  aria-hidden="true"
                  className="block w-[4px] h-[4px] rotate-45 shrink-0"
                  style={{
                    backgroundColor: i % 2 === 0
                      ? 'rgba(245,169,78,0.70)'
                      : 'rgba(224,51,158,0.55)',
                  }}
                />
                <span
                  className="text-body text-[#EDE8DC]/75 hover:text-[#EDE8DC] transition-colors duration-300"
                  style={{ fontFamily: 'Gulzar, serif' }}
                >
                  {thing}
                </span>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>

    {/* ── Corner labels ── */}
    <span
      aria-hidden="true"
      className="absolute top-8 left-4 md:left-8 text-[#E0339E]/20 font-mono text-[10px] tracking-widest"
    >
      [ 005 ]
    </span>
    <span
      aria-hidden="true"
      className="absolute top-8 right-4 md:right-8 text-[#F5A94E]/20 font-mono text-[10px] tracking-widest"
    >
      LOVE
    </span>

    {/* ── Bottom fade into next section ── */}
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-32"
      style={{
        background: 'linear-gradient(to bottom, transparent, #161C30)',
      }}
    />

    {/* ── Pixel divider at base ── */}
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0"
      style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          rgba(224,51,158,0.25) 0px,
          rgba(224,51,158,0.25) 4px,
          transparent 4px,
          transparent 8px
        )`,
        height: '2px',
      }}
    />
  </section>
)

export default Love
