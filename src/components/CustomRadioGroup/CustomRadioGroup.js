/* eslint-disable react/prop-types */
import React from "react";
import CustomRadioInput from "../CustomRadioInput/CustomRadioInput";
import "./CustomRadioGroup.css";

class CustomRadioGroup extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="custom-radio-group">
        {data.map((option) => {
          return <CustomRadioInput key={option.id} data={option} />;
        })}
      </div>
    );
  }
}

export default CustomRadioGroup;
