import './App.css'

import Navbar  from './components/Navbar'
import Footer  from './components/Footer'

import Hero     from './sections/Hero'
import Projects from './sections/Projects'
import { Skills } from './sections/Skills'
import About   from './sections/About'
import Love    from './sections/Love'
import Contact  from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Love />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
