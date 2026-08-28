import heroImage from '../assets/images/Hero.png'


const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#05050a]"
    >
      {/* Background image — swap the path for your local asset */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Dark overlay so text stays legible over the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <p className="font-sans text-[0.7rem] tracking-[0.35em] uppercase text-[#c99a3f] mb-6">
          Portfolio / 001
        </p>

        <h1 className="font-sans font-black leading-[0.95] text-[#fbfaf6] text-5xl sm:text-7xl lg:text-8xl mb-6 [text-shadow:0_0_40px_rgba(160,130,255,0.35)]">
          Skye
          <br />
          Lexus
        </h1>

        <p className="font-serif2 italic text-lg sm:text-xl text-[#e8e6f0] mb-3">
          Developer. Designer. Problem solver.
        </p>

        <p className="font-body text-sm sm:text-base text-[#9793ab] max-w-sm mx-auto mb-10 leading-relaxed">
          Building strange things with code, design and an unreasonable
          number of tabs.
        </p>

         <a
          href="#projects"
          className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-[#c99a3f] border-b border-[#c99a3f] pb-1 transition-colors hover:text-[#fbfaf6] hover:border-[#fbfaf6]"
        >
          Explore my work
        </a>
      </div>
    </section>
  )
}

export default Hero