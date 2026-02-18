import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'MONSTER MANSION PODCAST',
    coverPhoto: '/path/to/project1.jpg',
    description: 'Short description of Project One.',
  },
  {
    id: 2,
    title: 'OHARA PROJECT',
    coverPhoto: '/path/to/project2.jpg',
    description: 'Short description of Project Two.',
  },
  {
    id: 3,
    title: 'GALAGA CLONE',
    coverPhoto: '/path/to/project4.jpg',
    description: 'Short description of Project Four.',
  },
  {
    id: 4,
    title: 'BUG OUT',
    coverPhoto: '/path/to/project5.jpg',
    description: 'Short description of Project Five.',
  },
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        {projectsData.map(({ id, title, coverPhoto, description }) => {
          const isExpanded = expandedProject === id;
          return (
            <div
              key={id}
              className={`project-panel ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleExpand(id)}
            >
              <h3>{title}</h3>
              {isExpanded && (
                <div className="project-details">
                  <img
                    src={coverPhoto}
                    alt={`${title} cover`}
                    className="project-image"
                  />
                  <p>{description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
