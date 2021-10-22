import React from "react";
import PropTypes from "prop-types";
import CustomRadioInput from "../CustomRadioInput/CustomRadioInput";
import "./CustomRadioGroup.css";

class CustomRadioGroup extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="custom-radio-group">
        <h5>Options</h5>
        <div className="custom-radio-items">
          {data.map((option) => {
            return <CustomRadioInput key={option.id} data={option} />;
          })}
        </div>
      </div>
    );
  }
}

CustomRadioGroup.propTypes = {
  data: PropTypes.array,
};

export default CustomRadioGroup;
