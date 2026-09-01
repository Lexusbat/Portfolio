import { useEffect, useRef } from 'react'
import heroImage from '../assets/images/Hero.png'

/* ─────────────────────────────────────────────
   Pixel-particle canvas
   Small amber + turquoise squares drift upward
   and fade — subtle, never chaotic.
───────────────────────────────────────────── */
interface Particle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  color: string
  drift: number
}

function initCanvas(canvas: HTMLCanvasElement) {
  const ctxOrNull = canvas.getContext('2d')
  if (!ctxOrNull) return () => {}
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const ctx = ctxOrNull!

  const colors = [
    'rgba(245,169,78,',   // amber
    'rgba(77,217,192,',   // turquoise
    'rgba(237,232,220,',  // off-white
  ]

  let particles: Particle[] = []
  let animId = 0
  let W = 0
  let H = 0

  function resize() {
    W = canvas.offsetWidth
    H = canvas.offsetHeight
    canvas.width  = W
    canvas.height = H
  }

  function spawn(): Particle {
    const color = colors[Math.floor(Math.random() * colors.length)]
    return {
      x:       Math.random() * W,
      y:       H + 8,
      size:    Math.random() < 0.6 ? 2 : 4,   // pixel sizes: 2px or 4px
      speed:   0.18 + Math.random() * 0.28,
      opacity: 0,
      color,
      drift:   (Math.random() - 0.5) * 0.25,
    }
  }

  function seed() {
    particles = Array.from({ length: 38 }, () => {
      const p = spawn()
      p.y = Math.random() * H  // distribute on first frame
      p.opacity = Math.random() * 0.45
      return p
    })
  }

  resize()
  seed()

  const resizeObserver = new ResizeObserver(() => { resize(); seed() })
  resizeObserver.observe(canvas)

  let last = performance.now()
  function tick(now: number) {
    const dt = Math.min(now - last, 50)
    last = now
    ctx.clearRect(0, 0, W, H)

    // Occasionally spawn a new particle
    if (particles.length < 45 && Math.random() < 0.04) {
      particles.push(spawn())
    }

    particles = particles.filter((p) => p.y > -10)

    for (const p of particles) {
      p.y      -= p.speed * dt * 0.06
      p.x      += p.drift * dt * 0.06
      p.opacity = p.y < H * 0.15
        ? p.opacity - 0.004
        : Math.min(p.opacity + 0.006, 0.55)

      if (p.opacity <= 0) continue
      ctx.fillStyle = p.color + p.opacity.toFixed(3) + ')'
      ctx.fillRect(
        Math.round(p.x),
        Math.round(p.y),
        p.size,
        p.size
      )
    }

    animId = requestAnimationFrame(tick)
  }

  animId = requestAnimationFrame(tick)

  return () => {
    cancelAnimationFrame(animId)
    resizeObserver.disconnect()
  }
}

/* ─────────────────────────────────────────────
   Hero component
───────────────────────────────────────────── */
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    // Respect reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    return initCanvas(canvasRef.current)
  }, [])

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="
        relative min-h-screen flex flex-col
        items-start justify-end
        overflow-hidden
        pb-20 pt-[60px]
      "
    >
      {/* ── Background image ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* ── Layered overlays: depth + vignette ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(22,28,48,0.55) 0%,
              rgba(22,28,48,0.30) 35%,
              rgba(22,28,48,0.62) 65%,
              rgba(22,28,48,0.92) 100%
            )
          `,
        }}
      />
      {/* Side vignettes */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 100% at 50% 100%,
              rgba(74,38,105,0.30) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* ── Pixel particle canvas ── */}
      <canvas
        ref={canvasRef}
        id="hero-canvas"
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="container-grid relative z-10 w-full">
        <div className="grid-8">
          <div className="col-span-8 lg:col-span-6 flex flex-col gap-7">

            {/* Eyebrow */}
            <p className="section-eyebrow reveal-up">
              <span
                aria-hidden="true"
                className="block w-[6px] h-[6px] rotate-45 bg-[#F5A94E] mr-1"
              />
              Archive Entry 001
            </p>

            {/* Main heading */}
            <h1
              className="text-display-hero text-[#EDE8DC] reveal-up"
              style={{ fontFamily: 'Namesake, serif' }}
            >
              Full Stack
              <br />
              <span
                className="text-[#F5A94E]"
                style={{ textShadow: '0 0 48px rgba(245,169,78,0.35)' }}
              >
                Developer
              </span>
              <br />
              &amp; Designer
            </h1>

            {/* Supporting statement */}
            <p
              className="text-gulzar-lg text-[#8A96A8] max-w-[42ch] reveal-up"
              style={{ fontFamily: 'Gulzar, serif' }}
            >
              I build web experiences at the intersection of design,
              code and imagination — from the first wireframe to the
              final deployed artefact.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 reveal-up">
              <a href="#projects" className="btn-primary">
                Explore the Archive
              </a>
              <a href="#contact" className="btn-ghost">
                Start a Project
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Pixel corner marks on the section ── */}
      <span
        aria-hidden="true"
        className="absolute top-[72px] left-4 md:left-8 text-[#F5A94E]/30 font-mono text-[10px] tracking-widest"
      >
        [ 001 ]
      </span>
      <span
        aria-hidden="true"
        className="absolute top-[72px] right-4 md:right-8 text-[#4DD9C0]/25 font-mono text-[10px] tracking-widest"
      >
        HOME
      </span>

      {/* ── Scroll indicator ── */}
      <a
        href="#projects"
        aria-label="Scroll to Projects"
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2 z-10
          flex flex-col items-center gap-2
          text-[#F5A94E]/60 hover:text-[#F5A94E]
          transition-colors duration-300
          group
        "
      >
        <span className="text-label text-[0.6rem] tracking-[0.22em] text-[#8A96A8] group-hover:text-[#F5A94E] transition-colors">
          scroll
        </span>
        {/* Animated pixel chevron */}
        <span
          aria-hidden="true"
          className="flex flex-col items-center gap-[3px] animate-bounce"
          style={{ animationDuration: '1.8s' }}
        >
          <span className="block w-[6px] h-[6px] border-r-[1.5px] border-b-[1.5px] border-current rotate-45" />
          <span className="block w-[6px] h-[6px] border-r-[1.5px] border-b-[1.5px] border-current rotate-45 opacity-40" />
        </span>
      </a>

      {/* ── Bottom pixel divider ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 pixel-divider opacity-30"
      />
    </section>
  )
}

export default Hero
