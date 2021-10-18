/* eslint-disable react/prop-types */
import React from "react";
import "./CustomRadioInput.css";

class CustomRadioInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="custom-radio-input">
          <div>{this.props.data.option}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomRadioInput;
