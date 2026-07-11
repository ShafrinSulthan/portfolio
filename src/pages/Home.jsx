import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Certifications from '../components/sections/Certifications';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
