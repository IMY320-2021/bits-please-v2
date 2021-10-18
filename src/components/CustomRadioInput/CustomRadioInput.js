/* eslint-disable react/prop-types */
import React from "react";
import "./CustomRadioInput.css";

class CustomRadioInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="custom-radio-input">
          <button>{this.props.title}</button>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomRadioInput;
