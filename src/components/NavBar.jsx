import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ setSection }) {
  return (
    <nav>
      <button onClick={() => setSection('hero')} style={{ marginRight: '1rem' }}>Home</button>
      <button onClick={() => setSection('about')} style={{ marginRight: '1rem' }}>About</button>
      <button onClick={() => setSection('experience')} style={{ marginRight: '1rem' }}>Experience</button>
      <button onClick={() => setSection('projects')} style={{ marginRight: '1rem' }}>Projects</button>
      <button onClick={ () => setSection('blog')} style={{marginRight: '1rem'}}>Blog</button>
      <button onClick={() => setSection('contact')}>Contact</button>
    </nav>
  );
}

