/* ============================================================
   Contact — Focused communication interface.
   Two pathways: form (mailto) + WhatsApp direct link.
   Replace CONTACT_EMAIL and WHATSAPP_NUMBER with your own.
   ============================================================ */

import { useState, type FormEvent, type ChangeEvent } from 'react'

/* ─── CONFIG — replace with your own details ─────────────── */
const CONTACT_EMAIL    = 'your-email@example.com'
const WHATSAPP_NUMBER  = '27000000000'   // international format, no + or spaces

/* ─── Project type options ───────────────────────────────── */
const PROJECT_TYPES = [
  'Web Application',
  'Marketing Website',
  'E-commerce',
  'Design & Branding',
  'API / Backend',
  'Consultation',
  'Something Else',
]

/* ─── Form state type ────────────────────────────────────── */
interface FormData {
  name:        string
  email:       string
  projectType: string
  message:     string
  budget:      string
}

const INITIAL: FormData = {
  name:        '',
  email:       '',
  projectType: '',
  message:     '',
  budget:      '',
}

/* ─────────────────────────────────────────────
   Helper: build mailto href from form data
───────────────────────────────────────────── */
function buildMailto(data: FormData): string {
  const subject = encodeURIComponent(
    `[Portfolio] ${data.projectType || 'Project Enquiry'} — ${data.name}`
  )
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project type: ${data.projectType}`,
      data.budget ? `Budget: ${data.budget}` : '',
      '',
      data.message,
    ]
      .filter(Boolean)
      .join('\n')
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

/* ─────────────────────────────────────────────
   Helper: WhatsApp pre-filled link
───────────────────────────────────────────── */
function buildWhatsApp(data: FormData): string {
  const text = encodeURIComponent(
    `Hi, I found your portfolio and I'm interested in discussing a ${
      data.projectType || 'project'
    }${data.name ? ` — I'm ${data.name}` : ''}.`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

/* ─────────────────────────────────────────────
   Contact section
───────────────────────────────────────────── */
const Contact = () => {
  const [form, setForm]       = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /* On submit: open mailto in a new tab, mark submitted */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.location.href = buildMailto(form)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative section-pad bg-[#161C30]"
    >
      <div className="container-grid">
        <div className="grid-8 gap-y-12">

          {/* ── Left column: header + info ── col 1–3 */}
          <div className="col-span-8 lg:col-span-3 flex flex-col gap-8">

            <div className="flex flex-col gap-5">
              <p className="section-eyebrow">06 · Contact</p>

              <h2
                id="contact-heading"
                className="text-display-xl text-[#EDE8DC]"
                style={{ fontFamily: 'Namesake, serif' }}
              >
                Start a<br />Project
              </h2>

              <p
                className="text-gulzar-lg text-[#8A96A8]"
                style={{ fontFamily: 'Gulzar, serif' }}
              >
                Have a project, idea or a particularly stubborn
                software problem? Open a transmission.
              </p>
            </div>

            {/* Direct pathways */}
            <div className="flex flex-col gap-5">
              <p className="text-label text-[#4DD9C0]">Direct channels</p>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="
                  group flex items-center gap-3
                  text-body text-[#8A96A8]
                  hover:text-[#F5A94E]
                  transition-colors duration-200
                  outline-none focus-visible:outline-2
                  focus-visible:outline-[#F5A94E]
                  focus-visible:outline-offset-3
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    flex items-center justify-center
                    w-8 h-8 border border-[rgba(245,169,78,0.25)]
                    text-[#F5A94E] text-xs
                    group-hover:border-[rgba(245,169,78,0.60)]
                    group-hover:bg-[rgba(245,169,78,0.06)]
                    transition-all duration-200
                  "
                >
                  @
                </span>
                <span className="font-mono text-sm">{CONTACT_EMAIL}</span>
              </a>

              {/* WhatsApp */}
              <a
                href={buildWhatsApp(form)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-3
                  text-body text-[#8A96A8]
                  hover:text-[#4DD9C0]
                  transition-colors duration-200
                  outline-none focus-visible:outline-2
                  focus-visible:outline-[#4DD9C0]
                  focus-visible:outline-offset-3
                "
                aria-label="Open WhatsApp conversation"
              >
                <span
                  aria-hidden="true"
                  className="
                    flex items-center justify-center
                    w-8 h-8 border border-[rgba(77,217,192,0.25)]
                    text-[#4DD9C0] text-xs font-bold
                    group-hover:border-[rgba(77,217,192,0.60)]
                    group-hover:bg-[rgba(77,217,192,0.06)]
                    transition-all duration-200
                  "
                >
                  WA
                </span>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>

            {/* Archive stamp */}
            <div
              aria-hidden="true"
              className="
                hidden lg:flex items-center gap-3 mt-auto pt-8
                border-t border-[rgba(77,217,192,0.10)]
              "
            >
              <div
                className="
                  text-label text-[#8A96A8]/30
                  border border-[rgba(138,150,168,0.15)]
                  px-3 py-1.5
                  tracking-[0.22em]
                "
              >
                ARCHIVE · 06
              </div>
            </div>

          </div>

          {/* ── Right column: form ── col 5–8 */}
          <div className="col-span-8 lg:col-span-4">

            {submitted ? (
              /* ── Success state ── */
              <div
                className="
                  flex flex-col items-center justify-center
                  text-center gap-6
                  min-h-[400px]
                  border border-[rgba(77,217,192,0.18)]
                  bg-[rgba(26,59,82,0.35)]
                  p-10
                "
                role="alert"
              >
                <span
                  className="text-2xl text-[#F5A94E]"
                  aria-hidden="true"
                >
                  ◆
                </span>
                <h3
                  className="text-display-md text-[#EDE8DC]"
                  style={{ fontFamily: 'Namesake, serif' }}
                >
                  Transmission Sent
                </h3>
                <p className="text-body text-[#8A96A8] max-w-[38ch]">
                  Your email client should have opened with the message
                  pre-filled. I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Project enquiry form"
                className="flex flex-col gap-6"
              >

                {/* Row: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-field">
                    <label htmlFor="contact-name" className="form-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-email" className="form-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row: Project type + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="form-field">
                    <label htmlFor="contact-type" className="form-label">
                      Project type
                    </label>
                    <select
                      id="contact-type"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="form-select cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%234DD9C0' opacity='.6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.9rem center',
                        paddingRight: '2.5rem',
                      }}
                    >
                      <option value="" disabled>Select type…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-budget" className="form-label">
                      Budget <span className="text-[#8A96A8] normal-case tracking-normal font-normal">(optional)</span>
                    </label>
                    <input
                      id="contact-budget"
                      name="budget"
                      type="text"
                      placeholder="e.g. $1,000–$5,000"
                      value={form.budget}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-field">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell me about your project, problem or idea…"
                    value={form.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows={6}
                  />
                </div>

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                  <button type="submit" className="btn-primary">
                    Send Enquiry
                  </button>

                  <span className="text-body-sm text-[#8A96A8]">
                    or{' '}
                    <a
                      href={buildWhatsApp(form)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-amber"
                    >
                      message on WhatsApp
                    </a>
                  </span>
                </div>

                {/* Disclaimer */}
                <p className="text-body-sm text-[#8A96A8]/60 text-[0.73rem]">
                  Clicking "Send Enquiry" will open your email client
                  with the form pre-filled.
                </p>

              </form>
            )}

          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact
