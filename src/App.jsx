import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BlogPreview from './components/BlogPreview';

import BlogPage from './BlogPage';

import './index.css';

function Portfolio() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);

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
      case 'blog':
        blogRef.current?.scrollIntoView({ behavior: 'smooth' });
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
      
      <section ref={heroRef} id="hero" style={{ minHeight: '100vh', padding: '0rem', backgroundColor: '#eee' }}>
        <Hero />
      </section>
      
      <section ref={aboutRef} id="about" style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#ddd' }}>
        <About />
      </section>
            
      <section ref={experienceRef} id="experience" style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#bbb' }}>
        <Experience />
      </section>
      
      <section ref={projectsRef} id="projects" style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#ccc' }}>
        <Projects />
      </section>

      <section ref={blogRef} id="blog" style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#f7f7f7' }}>
        <BlogPreview />
      </section>

      <section ref={contactRef} id="contact" style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#aaa' }}>
        <Contact />
      </section>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path= "/blog" element={<BlogPage />} />
    </Routes>
    </BrowserRouter>
  );
}