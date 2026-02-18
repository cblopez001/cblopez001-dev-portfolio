import React from 'react';

export default function Navbar({ setSection }) {
  return (
    <nav style={{ padding: '1rem', position: 'absolute', top: 0, backgroundColor: 'black', zIndex: 10 }}>
      <button onClick={() => setSection('hero')} style={{ marginRight: '1rem' }}>Home</button>
      <button onClick={() => setSection('about')} style={{ marginRight: '1rem' }}>About</button>
      <button onClick={() => setSection('experience')} style={{ marginRight: '1rem' }}>Experience</button>
      <button onClick={() => setSection('projects')} style={{ marginRight: '1rem' }}>Projects</button>
      <button onClick={() => setSection('contact')}>Contact</button>
    </nav>
  );
}

