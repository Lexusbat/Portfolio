const Navbar = () => {
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SKILLS", href: "#skills" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className="
        absolute
        left-1/2
        fixed
        z-50
        w-[100%]
        -translate-x-1/2

        
        bg-black/35
        backdrop-blur-[1px]

        text-white
      "
    >
      <div className="flex h-[60px] items-center">

        {/* Main navigation */}
        <div className="flex h-full flex-1 items-center justify-evenly">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group
                relative
                flex
                h-full
                items-center
                px-5

                font-serif
                text-[15px]
                tracking-wide

                text-white
                transition-colors
                duration-300
                hover:text-[#E39F4D]

              
              "
            >
              {item.name}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[1px]
                  w-0
                  -translate-x-1/2

                  

                  transition-all
                  duration-300

                  group-hover:w-full
                  
                "
              />
            </a>
          ))}

        </div>

        {/* Start a project */}
        <a
          href="#contact"
          className="
            flex
            h-full
            items-center
            justify-center

          

            px-20

            font-serif
            text-[15px]
            tracking-wide

            text-white

            transition-all
            duration-300

           
            hover:text-[#E39F4D]
          "
        >
          START A PROJECT
        </a>

      </div>
    </nav>
  );
};

export default Navbar;