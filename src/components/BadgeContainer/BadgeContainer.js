import React from "react";
import PropTypes from "prop-types";

import "./BadgeContainer.css";

const BadgeContainer = ({ ...props }) => {
  const data = props.data;

  return (
    <div className="badge-container">
      {data.map((tag, index) => {
        return (
          <a href={undefined} className="nes-badge" key={index}>
            <span className={`${tag.type}`}>{tag.title}</span>
          </a>
        );
      })}
    </div>
  );
};

export default BadgeContainer;

BadgeContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};
