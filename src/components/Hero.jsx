import React from 'react';
import bannerImage from '../assets/HeroImage.png';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <img src={bannerImage} alt="Website banner" />
    </section>
  );
}
