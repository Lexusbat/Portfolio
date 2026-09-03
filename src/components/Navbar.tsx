import { useState, useEffect, useCallback } from 'react'

const NAV_ITEMS = [
  { id: 'home',     label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills' },
  { id: 'about',    label: 'About' },
  { id: 'contact',  label: 'Contact' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)

  /* ── Active section tracking ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Lock body scroll when menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = useCallback((href: string) => {
    setMenuOpen(false)
    // small delay so mobile menu closes before scroll
    setTimeout(() => {
      document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }, [])

  return (
    <>
      {/* ── Main bar ── */}
      <header
        role="banner"
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'bg-[#161C30]/92 backdrop-blur-md border-b border-[rgba(77,217,192,0.10)] shadow-[0_4px_24px_rgba(0,0,0,0.40)]'
            : 'bg-transparent'
          }
        `}
      >
        <div className="container-grid">
          <div className="flex items-center justify-between h-[60px]">

            {/* Wordmark */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNav('home') }}
              className="flex items-center gap-2 group outline-none focus-visible:outline-2 focus-visible:outline-[#4DD9C0] focus-visible:outline-offset-4"
              aria-label="Skye Lexus — back to top"
            >
              {/* Pixel diamond marker */}
              <span
                className="block w-[6px] h-[6px] rotate-45 bg-[#F5A94E] transition-transform duration-300 group-hover:scale-125"
                aria-hidden="true"
              />
              <span
                style={{ fontFamily: 'Namesake, serif' }}
                className="text-[1.05rem] text-[#EDE8DC] tracking-[0.04em] leading-none"
              >
                Skye Lexus
              </span>
            </a>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
              {NAV_ITEMS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); handleNav(id) }}
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  aria-current={activeSection === id ? 'page' : undefined}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* CTA — desktop */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('contact') }}
              className="hidden md:inline-flex btn-primary text-[0.6875rem] px-5 py-[0.5rem]"
            >
              Start a Project
            </a>

            {/* Hamburger — mobile */}
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] outline-none focus-visible:outline-2 focus-visible:outline-[#4DD9C0] focus-visible:outline-offset-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block h-[1.5px] w-5 bg-[#EDE8DC] origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[#EDE8DC] transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-[#EDE8DC] origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* ── Mobile menu overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`mobile-menu ${menuOpen ? 'open' : ''} md:hidden`}
      >
        {/* Close on backdrop click */}
        <button
          type="button"
          className="absolute inset-0 w-full h-full cursor-default outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
        />

        <nav
          className="relative z-10 flex flex-col items-center gap-8"
          aria-label="Mobile navigation links"
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); handleNav(id) }}
              tabIndex={menuOpen ? 0 : -1}
              className={`nav-link text-[1.125rem] tracking-[0.22em] ${activeSection === id ? 'active' : ''}`}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav('contact') }}
            tabIndex={menuOpen ? 0 : -1}
            className="btn-primary mt-4"
          >
            Start a Project
          </a>

        </nav>
      </div>
    </>
  )
}

export default Navbar
