import React from "react";
import PropTypes from "prop-types";
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

CustomRadioInput.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
  stock: PropTypes.bool,
  option: PropTypes.string,
};

export default CustomRadioInput;
