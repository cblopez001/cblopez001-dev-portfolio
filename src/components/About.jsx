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

        <div className="currently-reading">
          <h3>📚 Currently Reading</h3>
          <img 
            src={currentBook}
            alt="Current Book" 
          />
          <p><em>Vampires of El Norte by Isabel Cañas</em></p>
        </div>
      </div>
    </section>
  );
}
