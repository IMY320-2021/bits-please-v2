import React from "react";
import PropTypes from "prop-types";

import "./ProjectCard.css";
import { object } from "prop-types";

const ProjectCard = ({ ...props }) => {
  const data = props.data;

  return (
    <React.Fragment>
      <div className="project-card" onClick={props.viewProject}>
        <h4 className="color-salmon">{data.title}</h4>
        <p>{data.summary}</p>
        <img src={data.image_url} alt={"undefined"} />
        <p>{data.description}</p>
        <h4 className="color-green">Tech Stack</h4>
        {data.tech.map((tech, index) => {
          return (
            <React.Fragment key={index}>
              <h6 className="color-yellow">{tech.name}</h6>
              <p>{tech.description}</p>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(object).isRequired,
  }).isRequired,
  viewProject: PropTypes.func.isRequired,
};

export default ProjectCard;
