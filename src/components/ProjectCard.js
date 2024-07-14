import React from "react";
import PropTypes from "prop-types";
import "../styles/ProjectCard.scss";

function ProjectCard({ title, link, imgPath, imgAlt }) {
  return (
    <div className="Card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="Project-Image">
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className="Project-Title">
          <h3>{title}</h3>
        </div>
      </a>
    </div>
  );
}
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  };
  
  ProjectCard.defaultProps = {
    imgAlt: "Project Image",
  };

export default ProjectCard;
