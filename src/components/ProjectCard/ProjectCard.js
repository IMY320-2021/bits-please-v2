import React from "react";
import PropTypes from "prop-types";

import "./ProjectCard.css";

const ProjectCard = ({ ...props }) => {
  console.log(props);
  return (
    <div className="project-card">
      <h2 className="color-salmon">{props.title}</h2>
      <img src={props.image_url} alt={"undefined"} />
      <p>{props.description}</p>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string,
};

export default ProjectCard;
