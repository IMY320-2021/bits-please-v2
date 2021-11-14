import React from "react";
import PropTypes from "prop-types";

import "./ProjectPreviewCard.css";
import BadgeContainer from "../BadgeContainer/BadgeContainer";

const ProjectPreviewCard = ({ ...props }) => {
  const data = props.data;

  return (
    <div className="project-preview-card" onClick={props.viewProject}>
      <h4 className="">{data.title}</h4>
      <BadgeContainer data={data.tags} />
      <p>{props.summary}</p>
      <img src={data.image_url} alt={"undefined"} />
    </div>
  );
};

ProjectPreviewCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
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
