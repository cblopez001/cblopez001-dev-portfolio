import React from 'react';

import howlsMovingCastle from '../assets/HowlsMovingCastle.png';
import neverLetMeGo from '../assets/NeverLetMeGo.png';
import silmarillion from '../assets/Silmarillion.png';

const books = [
  {
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    rating: 5,
    image: neverLetMeGo,
    review: 'One of the most practical books on continuous improvement.'
  },
  {
    title: "Howl's Moving Castle",
    author: 'Diana Wynn Jones',
    rating: 4,
    image: howlsMovingCastle,
    review: 'A masterpiece of politics, culture, and world building.'
  },
  {
    title: 'Silmarillion',
    author: 'J.R. Tolkien',
    rating: 5,
    image: silmarillion,
    review: 'Currently reading and enjoying every chapter.'
  },
   {
    title: 'Current Read',
    author: 'Robin Sharma',
    rating: 5,
    image: currentBook,
    review: 'Currently reading and enjoying every chapter.'
  },
   {
    title: 'Current Read',
    author: 'Robin Sharma',
    rating: 5,
    image: currentBook,
    review: 'Currently reading and enjoying every chapter.'
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a software engineer, lifelong learner, and problem solver who enjoys turning ideas into reality. After graduating from the Institute of Data at Virginia Commonwealth University, I've had the opportunity to balance two worlds: teaching software engineering concepts to aspiring developers while leading operational teams as a Supply Chain Supervisor at VCU.
What I love most about coding is its ability to create meaningful change. Whether I'm building an application, streamlining a process, or solving a real-world problem, software gives me a creative outlet and a way to actively contribute to the world around me.
          </p>
        </div>

        <div className="fun-facts">
          <div className="fact-card">
            <span className="fact-icon">🐶</span>
            <h3>Animal Lover</h3>
            <p>Proud pet parent to a cat and a dog.</p>
          </div>

          <div className="fact-card">
            <span className="fact-icon">🍪</span>
            <h3>Signature Recipe</h3>
            <p>Known for making dangerously good sugar cookies.</p>
          </div>

          <div className="fact-card">
            <span className="fact-icon">🌎</span>
            <h3>Language Learner</h3>
            <p>English, Spanish, French, and Japanese in progress.</p>
          </div>

          <div className="fact-card">
            <span className="fact-icon">✈️</span>
            <h3>Next Adventure</h3>
            <p>Japan for English teaching and language immersion.</p>
          </div>
        </div>

        <p>When I'm not building software, you'll usually find me with a good book, experimenting with recipes for my ever-growing cookbook, spending time with my cat and dog, learning a new language, or planning my next adventure abroad. Curiosity tends to be the theme that connects all of my hobbies.

I don't believe in judging books or people by their covers, but I do believe a bookshelf can tell you a lot about its owner. If you want a shortcut to understanding how I think, the books below are a good place to start. They've shaped my perspective, influenced how I solve problems, and occasionally sent me down a rabbit hole of ideas I wasn't expecting.</p>

        <div
          id="reading_recommendations"
          class="carousel carousel--scroll-markers carousel--inert"
        >
          {books.map((book, index) => (
            <div
              key={index}
              class="carousel__slide"
              data-label={book.title}
              style={{
                '--book-cover': `url(${book.image})`
              }}
            >
              <div className="book-card">
                <div className="book-glow"></div>

                {book.image}

                <div className="book-info">
                  <h3>{book.title}</h3>

                  <p className="book-author">
                    {book.author}
                  </p>

                  <div className="book-rating">
                    {'★'.repeat(book.rating)}
                    {'☆'.repeat(5 - book.rating)}
                  </div>

                  <p className="book-review">
                    {book.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
