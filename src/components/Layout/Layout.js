import React from "react";
import PropTypes from "prop-types";

import "../../App.css";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper ">
      <div className="nes-container is-dark full-width">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
