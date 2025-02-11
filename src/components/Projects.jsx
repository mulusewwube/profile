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
      image: "/assets/images/unionnewweeb.png",
      link: "https://www.uniongeneralservice.com/",
    },
    {
      title: "Medlink",
      description: "Bridging Global Medical Innovation to Ethiopia.",
      image: "/assets/images/medlinkweb.png",
      link: "#",
      
    },

        {
      title: "utopia home",
      description: "Diverse Homes, One Seamless System.",
      image: "/assets/images/utopiahomeweb.png",
      link: "#",
      
    },

            {
      title: "Business card",
      description: "Habtamu Tesfaw business card",
      image: "/assets/images/habtamub.png",
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
{/*             style={{
              backgroundImage: `url(${project.image})`,
            }} */}

  style={{
  backgroundImage: `url(${project.image})`,
  backgroundSize: 'cover',   // or 'contain' based on your need
  backgroundPosition: 'center', 
  height: '50%',           // Customize the height
  width: '50%',             // Customize the width (or set a specific value like '500px')
  borderRadius: '10px',      // Optional: Add rounded corners
  overflow: 'hidden'         // Ensures the image doesn't overflow
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
