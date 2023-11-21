import Nav from './sections/Nav.tsx'
import Greet from './sections/Greet.tsx'
import About from './sections/About.tsx'
import Achievements from './sections/Achievements.tsx'
import Projects from './sections/Projects.tsx'
import Contact from './sections/Contacts.tsx'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="bg-stone-800 text-gray-50">
      <Nav />
      <Greet />
      <About />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  )
}
