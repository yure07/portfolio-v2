import { useRef } from "react";
import { Header } from "./components/Header"
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const certificatesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null)

  return (
    <div className="mx-auto max-w-[1200px]">
      <Header sectionsRefs={{ homeRef, aboutRef, projectsRef, certificatesRef, contactRef, }}/>
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef}/>
      <Contact ref={contactRef}/>
    </div>
  )
}

export default App
