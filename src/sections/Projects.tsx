import { useState, useId } from 'react'
import { projects, type Project, type CollaborationKind } from '../data/projects'

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

const STATUS_CLASS: Record<Project['status'], string> = {
  'Completed':   'status-badge--complete',
  'In Progress': 'status-badge--progress',
  'Concept':     'status-badge--concept',
}

const COLLAB_ICON: Record<CollaborationKind, string> = {
  'Solo':        '◆',
  'Collaborative':'◈',
  'Client':      '◇',
  'Academic':    '△',
  'Open Source': '○',
}

/* Metadata row: label + list of tags */
function MetaRow({
  label,
  items,
  variant = 'default',
}: {
  label: string
  items: string[]
  variant?: 'default' | 'tech' | 'amber'
}) {
  if (!items.length) return null
  const tagClass =
    variant === 'tech'  ? 'meta-tag--tech' :
    variant === 'amber' ? 'meta-tag--amber' :
    ''
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-label text-[#8A96A8]">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className={`meta-tag ${tagClass}`}>{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Individual project record
───────────────────────────────────────────── */

function ProjectRecord({ project}: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()



  return (
    <article
      className="
        group p-6 relative
        border-b border-[rgba(77,217,192,0.12)]
        transition-colors duration-300
        hover:border-[rgba(77,217,192,0.22)]
      "
    >
      {/* ── Collapsed row ── */}
      <div className="grid-8 items-start gap-y-5">

        {/* Index + status — col 1 */}
        <div className="col-span-1 flex flex-col gap-2 pt-1">
          
          <span className={`status-badge ${STATUS_CLASS[project.status]} text-[0.6rem]`}>
            {project.status}
          </span>
        </div>

        {/* Image — col 2–3 */}
        <div className="col-span-2 sm:col-span-2">
          <div
            className="
              bracket-corner bracket-corner-tech
              relative overflow-hidden
              aspect-video
            "
          >
            <img
              src={project.image}
              alt={`${project.title} project mockup`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title + description — col 4–7 */}
        <div className="col-span-5 sm:col-span-4 flex flex-col gap-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3
              className="text-display-md text-[#EDE8DC] leading-tight"
              style={{ fontFamily: 'Namesake, serif' }}
            >
              {project.title}
            </h3>
            <span className="text-label text-[#8A96A8]">
              {project.category} · {project.year}
            </span>
          </div>

          <p className="text-body text-[#8A96A8] max-w-[55ch] leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Collapsed-state tech preview */}
          {!open && (
            <div className="flex flex-wrap gap-1.5">
              {project.languages.slice(0, 3).map((l) => (
                <span key={l} className="meta-tag">{l}</span>
              ))}
              {project.tools.slice(0, 3).map((t) => (
                <span key={t} className="meta-tag meta-tag--tech">{t}</span>
              ))}
            </div>
          )}
        </div>

        {/* Toggle — col 8 */}
        <div className="col-span-8 sm:col-span-1 flex sm:justify-end items-start pt-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="
              flex items-center gap-2
              text-label text-[#4DD9C0]/60
              hover:text-[#4DD9C0]
            
              cursor-pointer
            "
          >
            <span>{open ? 'Close' : 'Open'}</span>
            <span
              className={`
                block w-[7px] h-[7px]
                border-r-[1.5px] border-b-[1.5px]
                border-current
                transition-transform duration-300
                ${open ? '-rotate-135 translate-y-[2px]' : 'rotate-45'}
              `}
              aria-hidden="true"
            />
          </button>
        </div>

      </div>

      {/* ── Expanded record ── */}
      <div
        id={detailsId}
        className={`project-details ${open ? 'open' : ''}`}
        aria-hidden={!open}
      >
        <div
          className="
            mx-0 mb-7
            
            pt-6 pb-2
          "
        >
          {/* Archive file header */}
          <div className="flex items-center gap-3 mb-6 mt-6">
            
         

          <div className="grid-8 gap-y-8">

            {/* Long description — col 1–5 */}
            <div className="col-span-8 md:col-span-5">
              <p className="text-body-lg text-[#C4BCAA] leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Metadata panel — col 6–8 */}
            <div className="col-span-8 md:col-span-3 flex flex-col gap-5">

              <MetaRow
                label="Languages"
                items={project.languages}
              />
              <MetaRow
                label="Tools"
                items={project.tools}
                variant="tech"
              />
              {project.apis.length > 0 && (
                <MetaRow
                  label="APIs"
                  items={project.apis}
                  variant="amber"
                />
              )}
              {project.deployment.length > 0 && (
                <MetaRow
                  label="Deployment"
                  items={project.deployment}
                  variant="amber"
                />
              )}

              {/* Collaboration */}
              <div className="flex flex-col gap-1.5">
                <span className="text-label text-[#8A96A8]">Collaboration</span>
                <span className="flex items-center gap-2 text-body-sm text-[#EDE8DC]">
                  <span className="text-[#F5A94E] text-xs" aria-hidden="true">
                    {COLLAB_ICON[project.collaboration]}
                  </span>
                  {project.collaboration}
                </span>
              </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

/* ─────────────────────────────────────────────
   Projects section
───────────────────────────────────────────── */

const Projects = () => (
  <section
    id="projects"
    aria-labelledby="projects-heading"
    className="relative section-pad bg-[#161C30]"
  >
    <div className="container-grid">

      {/* ── Section header — asymmetric ── */}
      <div className="grid-8 mb-14">

        {/* Eyebrow left-aligned col 1–2 */}
        <div className="col-span-8 flex flex-col gap-5">
         

          {/* Heading spans left, metadata floats right */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              id="projects-heading"
              className="text-display-xl text-[#EDE8DC]"
              style={{ fontFamily: 'Namesake, serif' }}
            >
              Selected<br />Work
            </h2>

            <p
              className="text-gulzar-md text-[#8A96A8] max-w-[38ch] sm:text-right pb-1"
              style={{ fontFamily: 'Gulzar, serif' }}
            >
              Four entries from the archive.
              Each record can be opened to reveal
              the full technical specification.
            </p>
          </div>
        </div>

      </div>

      {/* ── Project list ── */}
      <div
        className="border-t border-[rgba(77,217,192,0.12)] pt-6"
        role="list"
        aria-label="Project records"
      >
        {projects.map((project, i) => (
          <div role="listitem" key={project.id}>
            <ProjectRecord project={project} index={i} />
          </div>
        ))}
      </div>

    </div>

  </section>
)

export default Projects
