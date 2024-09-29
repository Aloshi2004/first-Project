// src/Projects.js
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Project One",
      imageUrl: "path/to/project-one-image.jpg", 
    },
    {
      title: "Project Two",
      imageUrl: "path/to/project-two-image.jpg", 
    },
    {
      title: "Project Three",
      imageUrl: "path/to/project-three-image.jpg", 
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
