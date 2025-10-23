import React from 'react';

const experiences = [
  {
    title: "Software Engineering Teaching Assistant",
    company: "Institute of Data @ Virginia Commonwealth University",
    duration: "04/2024 - Present",
    description: [
      "Assist students with software engineering coursework, providing guidance on frontend and backend technologies.",
      "Support instructors in creating course materials and grading assignments.",
      "Facilitate workshops and help students troubleshoot coding challenges.",
    ],
  },
  {
    title: "Personal Portfolio Website",
    tech: "HTML, CSS, JavaScript, React.js",
    description: [
      "Designed and developed a responsive portfolio website to showcase personal projects, skills, and career transition.",
      "Integrated dynamic features like interactive project sliders and a contact form.",
      "Optimized the site for mobile and desktop devices using responsive design principles."
    ]
  },
  {
    title: "Podcast Website",
    tech: "HTML, CSS, JavaScript, React.js",
    description: [
      "Built a podcast website featuring episode listings, audio playback, and subscription options.",
      "Created a clean and modern user interface, focusing on user-friendly navigation and accessibility.",
      "Integrated an RSS feed to automatically update the website with new episodes."
    ]
  },
  {
    title: "Kanban Board App",
    tech: "React.js, Node.js, Express.js, MongoDB",
    description: [
      "Developed a Kanban-style project management app where users can create, update, and manage tasks.",
      "Implemented user authentication and session management using JWT.",
      "Utilized MongoDB to store task data, allowing for persistent storage across sessions."
    ]
  }
];

export default function Experience() {
  return (
    <section className="experience-section">
      <h2>Experience & Projects</h2>
      <div className="experience-container">
        {experiences.map(({ title, company, duration, tech, description }, idx) => (
          <div key={idx} className="experience-card">
            <h3>{title}</h3>
            {company && <p className="company">{company}</p>}
            {duration && <p className="duration">{duration}</p>}
            {tech && <p className="tech-stack"><strong>Technologies Used:</strong> {tech}</p>}
            <ul>
              {description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
