// sections/Skills.tsx
// Core lab hover interaction PRESERVED — only visual integration improved.

import { useState } from 'react'
import labBg from '../assets/images/lab-bg.webp'
import { labObjects, type LabObject } from '../data/skills'

/* ─────────────────────────────────────────────
   Knowledge Archive — additional tools/familiarity
   listed below the lab scene.
   Structured as tiers so familiarity is honest.
───────────────────────────────────────────── */

type KnowledgeTier = 'Experienced' | 'Familiar' | 'Exploring'

interface KnowledgeEntry {
  name: string
  tier: KnowledgeTier
  note?: string
}

interface KnowledgeGroup {
  category: string
  items: KnowledgeEntry[]
}

const TIER_COLOR: Record<KnowledgeTier, string> = {
  'Experienced': '#F5A94E',
  'Familiar':    '#4DD9C0',
  'Exploring':   '#8A96A8',
}

const TIER_DOT: Record<KnowledgeTier, string> = {
  'Experienced': '◆',
  'Familiar':    '◇',
  'Exploring':   '·',
}

const knowledgeArchive: KnowledgeGroup[] = [
  {
    category: 'Design & Prototyping',
    items: [
      { name: 'Figma',           tier: 'Experienced', note: 'UI design, prototyping, design systems' },
      { name: 'Canva',           tier: 'Familiar',    note: 'Visual assets & graphics' },
      { name: 'Blender',         tier: 'Exploring',   note: '3D modelling & rendering' },
      { name: 'UI/UX Process',   tier: 'Experienced', note: 'Wireframing, user flows, accessibility' },
    ],
  },
  {
    category: 'AI & Development Tools',
    items: [
      { name: 'Kiro',            tier: 'Familiar',    note: 'AI-powered development environment' },
      { name: 'ChatGPT',         tier: 'Experienced', note: 'Research, ideation, debugging assistance' },
      { name: 'Lovable',         tier: 'Familiar',    note: 'AI-assisted UI generation' },
      { name: 'Git / GitHub',    tier: 'Experienced', note: 'Version control, branching, collaboration' },
      { name: 'VS Code',         tier: 'Experienced', note: 'Primary development environment' },
    ],
  },
  {
    category: 'Motion & Interaction',
    items: [
      { name: 'GSAP',            tier: 'Familiar',    note: 'Scroll animations, timelines' },
      { name: 'Lenis',           tier: 'Familiar',    note: 'Smooth scroll implementation' },
      { name: 'CSS Animation',   tier: 'Experienced', note: 'Transitions, keyframes, transforms' },
    ],
  },
  {
    category: 'Practice',
    items: [
      { name: 'Responsive Design',  tier: 'Experienced', note: 'Mobile-first layouts, adaptive systems' },
      { name: 'Design Systems',     tier: 'Familiar',    note: 'Tokens, component libraries, consistency' },
      { name: 'Accessibility',      tier: 'Familiar',    note: 'Semantic HTML, ARIA, keyboard nav' },
      { name: 'Web Scraping',       tier: 'Familiar',    note: 'Python-based data extraction' },
    ],
  },
]

/* ─────────────────────────────────────────────
   Knowledge archive grid
───────────────────────────────────────────── */
function KnowledgeArchive() {
  return (
    <div className="mt-16">

      {/* Sub-heading */}
      <div className="flex flex-col gap-3 mb-8">
        <p className="section-eyebrow">Knowledge Archive</p>
        <p
          className="text-gulzar-md text-[#8A96A8] max-w-[52ch]"
          style={{ fontFamily: 'Gulzar, serif' }}
        >
          Additional tools, disciplines and territories — categorised
          honestly by depth of familiarity.
        </p>

        {/* Tier legend */}
        <div className="flex flex-wrap gap-5 mt-1">
          {(['Experienced', 'Familiar', 'Exploring'] as KnowledgeTier[]).map((tier) => (
            <span key={tier} className="flex items-center gap-1.5 text-body-sm">
              <span style={{ color: TIER_COLOR[tier] }} aria-hidden="true">
                {TIER_DOT[tier]}
              </span>
              <span style={{ color: TIER_COLOR[tier] }}>{tier}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Groups */}
      <div className="grid-8 gap-y-10">
        {knowledgeArchive.map((group) => (
          <div
            key={group.category}
            className="col-span-8 sm:col-span-4 lg:col-span-2"
          >
            {/* Category label */}
            <p className="text-label text-[#4DD9C0] mb-4 pb-2 border-b border-[rgba(77,217,192,0.15)]">
              {group.category}
            </p>

            <ul className="flex flex-col gap-3" role="list">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="
                    knowledge-item group/item
                    flex items-start justify-between gap-3
                    border-l-[2px]
                    transition-all duration-200
                  "
                  style={{ borderLeftColor: TIER_COLOR[item.tier] + '40' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderLeftColor =
                      TIER_COLOR[item.tier]
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderLeftColor =
                      TIER_COLOR[item.tier] + '40'
                  }}
                >
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-body-sm text-[#EDE8DC] font-medium">
                      {item.name}
                    </span>
                    {item.note && (
                      <span className="text-body-sm text-[#8A96A8] text-[0.75rem] leading-snug">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[0.65rem] mt-0.5 shrink-0"
                    style={{ color: TIER_COLOR[item.tier] }}
                    aria-label={item.tier}
                    title={item.tier}
                  >
                    {TIER_DOT[item.tier]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Lab Scene — original hover interaction
   preserved exactly; visual integration only
───────────────────────────────────────────── */
function LabScene() {
  const [active, setActive] = useState<LabObject | null>(null)

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ background: 'rgba(22,28,48,0.60)' }}
    >
      {/* Touch instruction (mobile only) */}
      <p className="sm:hidden text-label text-[#8A96A8] text-center py-2 px-4">
        Tap each object to inspect its contents
      </p>

      <img
        src={labBg}
        alt="Pixel-art alchemy laboratory at night with glowing arcane glassware"
        className="pixelated block w-full select-none"
        draggable={false}
      />

      {labObjects.map((obj) => {
        const isActive = active?.id === obj.id
        const onRight  = obj.area.left > 55

        return (
          <button
            key={obj.id}
            type="button"
            aria-label={`Inspect: ${obj.name}`}
            aria-pressed={isActive}
            /* ── Hover / focus — exactly as before ── */
            onMouseEnter={() => setActive(obj)}
            onMouseLeave={() => setActive((c) => (c?.id === obj.id ? null : c))}
            onFocus={()      => setActive(obj)}
            onBlur={()       => setActive((c) => (c?.id === obj.id ? null : c))}
            /* Touch: tap toggles */
            onClick={() => setActive((c) => (c?.id === obj.id ? null : obj))}
            className={`
              absolute rounded-none transition-all duration-200 outline-none
              ${isActive ? 'hotspot-ring' : 'border border-transparent'}
            `}
            style={{
              left:   `${obj.area.left}%`,
              top:    `${obj.area.top}%`,
              width:  `${obj.area.width}%`,
              height: `${obj.area.height}%`,
            }}
          >
            {isActive && (
              <div
                className="
                  panel-arcane pointer-events-none
                  absolute z-20
                  w-[15rem] sm:w-[19rem]
                  p-3 text-left
                "
                style={{
                  top: '50%',
                  transform: 'translateY(-50%)',
                  ...(onRight ? { right: '105%' } : { left: '105%' }),
                }}
                role="tooltip"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={obj.image}
                    alt={obj.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="pixelated h-14 w-14 sm:h-18 sm:w-18 shrink-0"
                  />
                  <div className="min-w-0">
                    <p
                      className="text-label-md text-[#F5A94E] mb-0.5"
                      style={{ textShadow: '0 0 16px rgba(245,169,78,0.45)' }}
                    >
                      {obj.name}
                    </p>
                    <p className="text-body-sm text-[#8A96A8]">{obj.kind}</p>
                    <p className="text-body-sm text-[#4DD9C0] mt-1 leading-snug">
                      {obj.contents}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-body-sm text-[#C4BCAA] leading-relaxed">
                  {obj.detail}
                </p>

                {/* Corner brackets */}
                <span
                  aria-hidden="true"
                  className="absolute top-[6px] left-[6px] w-[8px] h-[8px] border-t border-l border-[rgba(77,217,192,0.55)]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-[6px] right-[6px] w-[8px] h-[8px] border-b border-r border-[rgba(77,217,192,0.55)]"
                />
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Skills section wrapper
───────────────────────────────────────────── */
export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative bg-[#1A3B52]"
      style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}
    >
      <div className="container-grid">

        {/* ── Section heading ── */}
        <div className="mb-10">
          <div className="flex flex-col gap-5">

            <p className="section-eyebrow">03 · Skills</p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2
                id="skills-heading"
                className="text-display-xl text-[#EDE8DC]"
                style={{ fontFamily: 'Namesake, serif' }}
              >
                The<br />Workshop
              </h2>

              <p
                className="text-gulzar-md text-[#8A96A8] max-w-[42ch] sm:text-right pb-1"
                style={{ fontFamily: 'Gulzar, serif' }}
              >
                Hover over each object in the laboratory
                to reveal what it contains.
                Every vessel holds a different part of the stack.
              </p>
            </div>

          </div>
        </div>

        {/* ── Pixel divider above lab ── */}
        <div
          aria-hidden="true"
          className="mb-4"
          style={{
            height: '2px',
            backgroundImage: `repeating-linear-gradient(90deg, rgba(77,217,192,0.30) 0px, rgba(77,217,192,0.30) 4px, transparent 4px, transparent 8px)`,
          }}
        />

        {/* ── Lab scene ── */}
        <div className="bracket-corner bracket-corner-tech">
          <LabScene />
        </div>

        {/* ── Knowledge archive ── */}
        <KnowledgeArchive />

      </div>

      {/* Bottom pixel divider */}
      <div
        aria-hidden="true"
        className="mt-16"
        style={{
          height: '2px',
          backgroundImage: `repeating-linear-gradient(90deg, rgba(77,217,192,0.20) 0px, rgba(77,217,192,0.20) 4px, transparent 4px, transparent 8px)`,
        }}
      />
    </section>
  )
}

// Keep named export for existing App.tsx import
export { Skills as LabScene }
