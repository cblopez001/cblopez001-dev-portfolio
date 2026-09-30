import React from 'react';

import atomicHabits from '../assets/HowlsMovingCastle.jpg';
import dune from '../assets/NeverLetMeGo.jpg';
import currentBook from '../assets/Silmarillion.jpeg';

const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 5,
    image: atomicHabits,
    review: 'One of the most practical books on continuous improvement.'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    rating: 4,
    image: dune,
    review: 'A masterpiece of politics, culture, and world building.'
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
            I am a passionate software engineer recently graduated from the
            Institute of Data at Virginia Commonwealth University. Currently,
            I work as a Software Engineering Teaching Assistant while also
            managing operations as a Supply Chain Supervisor at VCU.
            When I'm not coding or managing supply chains, you'll find me
            buried in a good book, constantly expanding my horizons.
          </p>
        </div>

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
