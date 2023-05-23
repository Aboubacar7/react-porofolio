import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import { ProjectData } from "./ProjectData";
// import { Link } from "react-router-dom";

function Projects() {
  const [hoveredCard, sethoveredCard] = useState(null);

  const handleCardHover = (projectId) => {
    sethoveredCard(projectId);
  };

  console.log(ProjectData);
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="cards-container">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className={`card ${hoveredCard === project.id ? "hovered" : " "}`}
            onMouseEnter={() => handleCardHover(project.id)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <a href={project.link} target="blank"> 
            {/*replace with {project.url}*/}
            <img src={project.img} alt={project.name}  />
            <div className="card-text">
              {hoveredCard === project.id && (
                <>
                  <h2>
                    {project.name}
                    <Link className="" to ={project.link}>
                      <i class=" fa-brands fa-github fa-bounce"></i>
                    </Link>
                  </h2>
                  <p>{project.description}</p>
                </>
              )}
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
