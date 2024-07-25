import React, { useEffect, useState } from "react";
import "../styles/Projects.scss";
import ProjectCard from "../components/ProjectCard";
import { client } from "../utils/fetchClient";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "post",
          order: "-sys.updatedAt",
        });
        setProjects(entries.items);
        console.log(entries.items);
      } catch (error) {
        console.log("error", error);
      }
    };
    getAllEntries();
  }, []);
  const filteredProjects = projects.filter((post) => post.fields.isProject);

  return (
    <div className="Projects">
      <div className="Page-Title">
        <h1>
          <i>Pro</i>jects
        </h1>
      </div>
      {filteredProjects.length > 0 ? (
        <div className="Project-Container">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.sys.id}
              title={project.fields.title}
              link={`projects/${project.fields.slug}`}
              imgPath={project.fields.coverImage.fields.file.url}
              imgAlt={project.fields.coverImage.fields.file.title}
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
