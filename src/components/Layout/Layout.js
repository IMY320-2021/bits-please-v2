/* eslint-disable react/prop-types */
import React from "react";

import "../../App.css";
import "./Layout.css";

const Layout = ({ children }) => {
  return <div className="global-wrapper">{children}</div>;
};

export default Layout;
