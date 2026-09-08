import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BlogPreview from './components/BlogPreview';

import BlogPage from './BlogPage';
import ProjectsPage from './ProjectsPage';

import './index.css';

function Portfolio() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
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
      <NavBar setSection={scrollToSection} />

      <section
        ref={heroRef}
        id="hero"
        className="page-section hero-wrapper"
      >
        <Hero />
      </section>

      <section
        ref={aboutRef}
        id="about"
        className="page-section about-wrapper"
      >
        <About />
      </section>

      <section
        ref={experienceRef}
        id="experience"
        className="page-section experience-wrapper"
      >
        <Experience />
      </section>

      <section
        ref={projectsRef}
        id="projects"
        className="page-section projects-wrapper"
      >
        <Projects />
      </section>

      <section
        ref={blogRef}
        id="blog"
        className="page-section blog-wrapper"
      >
        <BlogPreview />
      </section>

      <section
        ref={contactRef}
        id="contact"
        className="page-section contact-wrapper"
      >
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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}