import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch(section) {
      case 'hero':
        heroRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar setSection={scrollToSection} />
      
      <section ref={heroRef} id="hero" style={{ height: '100vh', padding: '0rem', backgroundColor: '#eee' }}>
        <Hero />
      </section>
      
      <section ref={aboutRef} id="about" style={{ height: '100vh', padding: '2rem', backgroundColor: '#ddd' }}>
        <About />
      </section>
            
      <section ref={experienceRef} id="experience" style={{ height: '100vh', padding: '2rem', backgroundColor: '#bbb' }}>
        <Experience />
      </section>
      
      <section ref={projectsRef} id="projects" style={{ height: '100vh', padding: '2rem', backgroundColor: '#ccc' }}>
        <Projects />
      </section>

      <section ref={contactRef} id="contact" style={{ height: '100vh', padding: '2rem', backgroundColor: '#aaa' }}>
        <Contact />
      </section>
    </>
  );
}
