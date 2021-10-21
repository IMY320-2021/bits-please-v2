import React from "react";
import PropTypes from "prop-types";

import "./ProjectCard.css";

const ProjectCard = ({ ...props }) => {
  return (
    <div className="project-card" onClick={props.viewProject}>
      <h4 className="color-salmon">{props.title}</h4>
      <img src={props.image_url} alt={"undefined"} />
      <p>{props.description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string,
  viewProject: PropTypes.any,
};

export default ProjectCard;
