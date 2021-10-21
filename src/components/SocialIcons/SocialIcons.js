import React from "react";
import PropTypes from "prop-types";

export default function SocialIcons({ marginLeft }) {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "20%",
          paddingTop: 20,
          marginLeft: marginLeft,
        }}
      >
        <i className="nes-icon gmail is-medium"></i>
        <i className="nes-icon linkedin is-medium"></i>
        <i className="nes-icon github is-medium"></i>
      </div>
    </div>
  );
}
SocialIcons.propTypes = {
  marginLeft: PropTypes.string,
};
