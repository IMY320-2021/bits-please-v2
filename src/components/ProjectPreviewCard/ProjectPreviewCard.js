import React from "react";
import PropTypes from "prop-types";

import "./ProjectPreviewCard.css";

const ProjectPreviewCard = ({ ...props }) => {
  return (
    <div className="project-preview-card" onClick={props.viewProject}>
      <h4 className="color-salmon">{props.title}</h4>
      <p>{props.summary}</p>
      <img src={props.image_url} alt={"undefined"} />
    </div>
  );
};

ProjectPreviewCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    tech: PropTypes.array.isRequired,
  }),
  title: PropTypes.string,
  image_url: PropTypes.string,
  summary: PropTypes.string,
  viewProject: PropTypes.any,
};

export default ProjectPreviewCard;
