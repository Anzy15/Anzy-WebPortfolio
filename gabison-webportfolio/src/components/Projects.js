import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Brief description of the project and technologies used',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'Brief description of the project and technologies used',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      link: '#'
    },
    {
      id: 3,
      title: 'Project Title 3',
      description: 'Brief description of the project and technologies used',
      technologies: ['JavaScript', 'Express', 'React'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
