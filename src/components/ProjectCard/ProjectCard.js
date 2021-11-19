import React from "react";
import PropTypes, { shape } from "prop-types";
import { object } from "prop-types";

import "./ProjectCard.css";
import BadgeContainer from "../BadgeContainer/BadgeContainer";

const ProjectCard = ({ ...props }) => {
  const data = props.data;

  return (
    <>
      <div className="project-card" onClick={props.viewProject}>
        <div className="project-card-header">
          <h2 className="color-salmon">{data.title}</h2>{" "}
          <button type="button" className="nes-btn">
            <i className="nes-icon close"></i>{" "}
          </button>
        </div>
        <BadgeContainer data={data.tags} />
        <div className="project-card-body">
          <div>
            <h5>The Project</h5>
            <p>{data.description}</p>
            <h5>Tech Stack</h5>
            {data.tech.map((tech, index) => {
              return (
                <React.Fragment key={index}>
                  <h6 className="color-yellow">{tech.name}</h6>
                  <p>{tech.description}</p>
                </React.Fragment>
              );
            })}
          </div>
          <img src={data.image_url} alt={"undefined"} />
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      shape({
        type: PropTypes.string,
        title: PropTypes.string,
      })
    ).isRequired,
    summary: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(object).isRequired,
  }).isRequired,
  viewProject: PropTypes.func.isRequired,
};

export default ProjectCard;
