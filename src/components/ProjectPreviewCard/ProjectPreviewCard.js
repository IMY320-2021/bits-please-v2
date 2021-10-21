import React from "react";
import PropTypes from "prop-types";

import "./ProjectPreviewCard.css";

const ProjectPreviewCard = ({ ...props }) => {
  return (
    <div className="project-preview-card" onClick={props.viewProject}>
      <h4 className="color-salmon">{props.title}</h4>
      <img src={props.image_url} alt={"undefined"} />
    </div>
  );
};

ProjectPreviewCard.propTypes = {
  title: PropTypes.string,
  image_url: PropTypes.string,
  viewProject: PropTypes.any,
};

export default ProjectPreviewCard;
