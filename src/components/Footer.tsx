/* ============================================================
   Footer — minimal, personal, on-brand.
   ============================================================ */

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative bg-[#161C30] border-t border-[rgba(77,217,192,0.10)]"
      aria-label="Site footer"
    >
      <div className="container-grid">
        <div className="grid-8 items-center py-8 gap-y-6">

          {/* Left — wordmark + credit */}
          <div className="col-span-8 sm:col-span-4 flex flex-col gap-2">
            <span
              style={{ fontFamily: 'Namesake, serif' }}
              className="text-[1rem] text-[#EDE8DC]/70 tracking-[0.04em]"
            >
              Skye Lexus
            </span>
            <p className="text-body-sm text-[#8A96A8]/55">
              Built with React, TypeScript &amp; questionable decisions.
            </p>
          </div>

          {/* Right — copyright + back to top */}
          <div className="col-span-8 sm:col-span-4 flex sm:justify-end items-center gap-6">
            <span className="text-label text-[#8A96A8]/40">
              © {year}
            </span>

            <a
              href="#home"
              className="
                flex items-center gap-2
                text-label text-[#4DD9C0]/50
                hover:text-[#4DD9C0]
                transition-colors duration-200
                outline-none focus-visible:outline-2
                focus-visible:outline-[#4DD9C0]
                focus-visible:outline-offset-3
              "
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <span
                aria-hidden="true"
                className="block w-[6px] h-[6px] border-t-[1.5px] border-r-[1.5px] border-current -rotate-45"
              />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="h-[2px]"
        style={{
          background: `linear-gradient(
            to right,
            transparent 0%,
            rgba(245,169,78,0.35) 20%,
            rgba(77,217,192,0.25) 50%,
            rgba(224,51,158,0.20) 80%,
            transparent 100%
          )`,
        }}
      />
    </footer>
  )
}

export default Footer
