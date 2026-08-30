import heroImage from '../assets/images/Hero.png'
import { LucideMoveDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        overflow-hidden
        bg-[#05050a]
      "
    >

      {/* Background image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/70
          via-black/50
          to-black/80
        "
      />

      {/* Content */}
      <div className="relative z-10 ">

        
       
        <h1
          className="
            font-sans
            font-black
            leading-[0.95]
            text-[#fbfaf6]
            text-5xl
            sm:text-7xl
            lg:text-8xl
            mb-12
            [text-shadow:0_0_40px_rgba(160,130,255,0.35)]
          "
        >
        FULL STACK DEVELOPER
        </h1>

        <p
          className="
            font-serif2
            italic
            text-lg
            sm:text-xl
            text-[#e8e6f0]
            mb-6
          "
        >
          Welcome
        </p>


        {/* Explore button */}
        <a
          href="#projects"
          className="
            inline-block
            font-sans
            text-xs
            tracking-[0.2em]
            uppercase
            text-[#c99a3f]
            border-b
            border-[#c99a3f]
            pb-1
            transition-colors
            hover:text-[#fbfaf6]
            hover:border-[#fbfaf6]
          "
        >
          Explore my work
        </a>

      </div>

      {/* Scroll arrow */}
      <a
        href="#projects"
        className="
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          z-10
          text-[#c99a3f]
          transition-all
          duration-300
          hover:text-[#fbfaf6]
          hover:translate-y-1
        "
        aria-label="Scroll to projects"
      >
        <LucideMoveDown
          size={20}
          strokeWidth={1.5}
        />
      </a>

    </section>
  )
}

export default Hero