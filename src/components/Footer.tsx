const Footer = () => {
  return (
    <footer  className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        overflow-hidden
        bg-[#161C30]
      ">
      <p>© {new Date().getFullYear()} Skye Lexus</p>

      <p>Built with React, TypeScript & questionable decisions.</p>
    </footer>
  )
}

export default Footer