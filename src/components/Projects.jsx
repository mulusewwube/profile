import React from "react";
import "../assets/Projects.css";

function Projects() {
  const projectData = [
    {
      title: "Optima",
      description: "Combines habit tracking and project management.",
      image: "/assets/images/optima.jpg",
      link: "#",
    },
    {
      title: "Union",
      description: "personalized support to meet your academic, professionals.",
      image: "/assets/images/union.png",
      link: "#",
    },
    {
      title: "Digital Storefront",
      description: "A sleek e-commerce platform for selling digital products worldwide.",
      image: "/assets/images/e-commerce.jpg",
      link: "#",
      
    },
  ];

  return (
    <section className="projects amazing-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <hr className="horizontal-line" />

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          >
            <div className="project-overlay">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
