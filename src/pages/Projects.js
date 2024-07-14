import React from "react";
import "../styles/Projects.scss";
import ProjectCard from "../components/ProjectCard";
import { constants } from "../constants";

function Projects() {
  return (
    <div className="Projects">
      <div className="Page-Title">
        <h1>
          <i>Pro</i>jects
        </h1>
      </div>
      {constants.projects.length > 0 ? (
        <div className="Project-Container">
          {constants.projects.map((project) => (
            <ProjectCard
              title={project.title}
              link={project.link}
              imgPath={project.imgPath}
              imgAlt={project.imgAlt}
            />
          ))}
        </div>
      ) : (
        <p className="None-Available">No projects available</p>
      )}
    </div>
  );
}

export default Projects;
