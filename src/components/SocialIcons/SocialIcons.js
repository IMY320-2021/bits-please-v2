import React from "react";
import PropTypes from "prop-types";

export default function SocialIcons({ marginLeft }, socialLinks) {
  console.log("socials are...." + JSON.stringify(socialLinks));
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
        <a
          href={socialLinks.linkedin}
          className="nes-icon linkedin is-medium"
        ></a>
        <a href={socialLinks.email} className="nes-icon gmail is-medium"></a>
        <a href={socialLinks.github} className="nes-icon github is-medium"></a>
      </div>
    </div>
  );
}
SocialIcons.propTypes = {
  marginLeft: PropTypes.string,
  socialLinks: PropTypes.shape({
    linkedin: PropTypes.string,
    github: PropTypes.string,
    email: PropTypes.string,
  }),
};
