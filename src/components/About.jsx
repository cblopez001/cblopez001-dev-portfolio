import React from 'react';
import currentBook from '../assets/CurrentBook.jpeg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2> About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate software engineer recently graduated from the Institute of Data at Virginia Commonwealth University.
            Currently, I work as a Software Engineering Teaching Assistant while also managing operations as a Supply Chain Supervisor at VCU.
            When I'm not coding or managing supply chains, you’ll find me buried in a good book, constantly expanding my horizons.
          </p>
        </div>

        <div id="Reading Recommendations" class="carousel carousel--scroll-markers carousel--inert">
          <div class="carousel__slide" data-label="Slide 1">…</div>
          <div class="carousel__slide" data-label="Slide 2">…</div>
          <div class="carousel__slide" data-label="Slide 3">…</div>
          <div class="carousel__slide" data-label="Slide 4">…</div>
          <div class="carousel__slide" data-label="Slide 5">…</div>
          <div class="carousel__slide" data-label="Slide 6">…</div>
        </div>
      </div>
    </section>
  );
}
