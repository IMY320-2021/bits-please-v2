import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Title extends React.Component {
  render() {
    const { title, colour, location } = this.props.data;
    const temp = location !== undefined ? location : "/";

    return (
      <div style={{ display: "flex" }}>
        <Link
          className="nes-btn is-primary"
          to={`${temp}`}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            width: "10%",
            height: "5%",
          }}
        >
          {"< Back"}
        </Link>
        <h1
          style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: "25%" }}
          className={colour}
        >
          {title}
        </h1>
      </div>
    );
  }
}

Title.propTypes = {
  data: PropTypes.object,
};

export default Title;
