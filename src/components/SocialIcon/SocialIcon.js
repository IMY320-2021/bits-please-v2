import React from "react";
import PropTypes from "prop-types";

const SocialIcon = ({ ...props }) => {
  const data = props.data;

  return (
    <div
      style={{
        marginLeft: props.margin,
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <a href={`${data.link}`}>
        <i className={`nes-icon is-medium ${data.icon}`} />
      </a>
      <span>{data.name}</span>
    </div>
  );
};

export default SocialIcon;

SocialIcon.propTypes = {
  margin: PropTypes.string,
  icon: PropTypes.string,
  data: PropTypes.any,
  name: PropTypes.string,
};
