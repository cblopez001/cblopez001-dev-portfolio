import React from 'react';
import { Link } from 'react-router-dom';

/* =========================================
   WEB DEVELOPMENT PROJECTS
========================================= */

const webProjects = [
  {
    id: 1,
    title: 'PERSONAL PORTFOLIO + BLOG',
    coverPhoto: '/path/to/project1.jpg',
    description:
      'A personal portfolio and blog showcasing my development work, experience, projects, and interests.',
    tools: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 2,
    title: 'OHARA PROJECT',
    coverPhoto: '/path/to/project2.jpg',
    description:
      'A web development project focused on creating an interactive and engaging user experience.',
    tools: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 3,
    title: 'FILM FLOWERS',
    coverPhoto: '/path/to/project3.jpg',
    description:
      'A project exploring film, visual design, and interactive web development.',
    tools: ['React', 'JavaScript', 'CSS'],
  },
  {
    id: 4,
    title: 'EVENT BUDGET + PLANNER',
    coverPhoto: '/path/to/project4.jpg',
    description:
      'An application designed to help users organize events, manage expenses, and plan budgets.',
    tools: ['React', 'JavaScript', 'CSS'],
  },
];


/* =========================================
   SOCIAL MEDIA + CREATIVE ASSETS
========================================= */

const socialMediaProjects = [
  {
    id: 1,
    title: 'SOCIAL MEDIA PLANNING',
    coverPhoto: '/path/to/social-planning.jpg',
    description:
      'Social media planning, content calendars, scheduling, and campaign organization created for professional roles.',
    tools: ['Content Strategy', 'Social Media', 'Planning'],
  },
  {
    id: 2,
    title: 'SOCIAL MEDIA ASSETS',
    coverPhoto: '/path/to/social-assets.jpg',
    description:
      'Visual and written assets created for social media campaigns and organizational communication.',
    tools: ['Content Creation', 'Graphic Design', 'Branding'],
  },
  {
    id: 3,
    title: 'PROFESSIONAL CREATIVE ASSETS',
    coverPhoto: '/path/to/creative-assets.jpg',
    description:
      'Creative materials developed for different professional roles, projects, and organizational needs.',
    tools: ['Design', 'Communication', 'Creative Strategy'],
  },
];


/* =========================================
   DATA ANALYTICS PROJECTS
========================================= */

const analyticsProjects = [
  {
    id: 1,
    title: 'DATA ANALYSIS PROJECT',
    coverPhoto: '/path/to/data-analysis.jpg',
    description:
      'A data analysis project involving data cleaning, exploration, analysis, and visualization.',
    tools: ['Excel', 'SQL', 'Data Analysis'],
  },
  {
    id: 2,
    title: 'DATA DASHBOARD',
    coverPhoto: '/path/to/dashboard.jpg',
    description:
      'A dashboard designed to communicate trends, patterns, and key findings from a dataset.',
    tools: ['Excel', 'Tableau', 'Data Visualization'],
  },
  {
    id: 3,
    title: 'DATA VISUALIZATION PROJECT',
    coverPhoto: '/path/to/data-visualization.jpg',
    description:
      'A project focused on transforming data into clear and accessible visualizations.',
    tools: ['Data Visualization', 'Reporting', 'Analysis'],
  },
];


/* =========================================
   PROJECT CARD
========================================= */

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <img
        src={project.coverPhoto}
        alt={`${project.title} cover`}
        className="project-card-image"
      />

      <div className="project-card-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tools.map((tool) => (
            <span key={tool}>
              {tool}
            </span>
          ))}
        </div>

      </div>

    </article>
  );
}


/* =========================================
   PROJECTS PAGE
========================================= */

export default function ProjectsPage() {
  return (
    <main className="projects-page">

      {/* =====================================
          PAGE HEADER
      ===================================== */}

      <header className="projects-page-header">

        <Link to="/" className="back-home">
          ← Back to Portfolio
        </Link>

        <h1>Projects & Work</h1>

        <p>
          A collection of my web development projects,
          social media work, creative assets, and data
          analytics projects.
        </p>

      </header>


      {/* =====================================
          WEB DEVELOPMENT
      ===================================== */}

      <section className="project-category">

        <div className="project-category-header">

          <h2>Web Development</h2>

          <p>
            Websites, applications, and interactive
            projects I've developed.
          </p>

        </div>

        <div className="projects-page-grid">

          {webProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>


      {/* =====================================
          SOCIAL MEDIA + CREATIVE ASSETS
      ===================================== */}

      <section className="project-category">

        <div className="project-category-header">

          <h2>Social Media & Creative Assets</h2>

          <p>
            Social media planning, content creation,
            campaign materials, and creative assets
            from my professional work.
          </p>

        </div>

        <div className="projects-page-grid">

          {socialMediaProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>


      {/* =====================================
          DATA ANALYTICS
      ===================================== */}

      <section className="project-category">

        <div className="project-category-header">

          <h2>Data Analytics</h2>

          <p>
            Data analysis, dashboards, visualization,
            reporting, and other analytics projects.
          </p>

        </div>

        <div className="projects-page-grid">

          {analyticsProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>


      {/* =====================================
          FOOTER
      ===================================== */}

      <div className="projects-page-footer">

        <Link to="/" className="view-all-btn">
          ← Back to Portfolio
        </Link>

      </div>

    </main>
  );
}