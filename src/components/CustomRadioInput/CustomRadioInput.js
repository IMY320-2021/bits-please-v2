import React from "react";
import PropTypes from "prop-types";
import "./CustomRadioInput.css";

class CustomRadioInput extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label className="custom-radio-input">
          <input
            type="radio"
            className="nes-radio"
            name="answer-dark"
            checked
          />
          <span>{this.props.data.option}</span>
        </label>
      </React.Fragment>
    );
  }
}

CustomRadioInput.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
  stock: PropTypes.bool,
  option: PropTypes.string,
};

export default CustomRadioInput;
