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
      <a className="social-icon" href={`${data.link}`}>
        <i className={`nes-icon is-medium ${data.icon}`} />
        <span>{data.name}</span>
      </a>
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
