/* eslint-disable react/prop-types */
import React from "react";
import CustomRadioInput from "../CustomRadioInput/CustomRadioInput";
import "./CustomRadioGroup.css";

class CustomRadioGroup extends React.Component {
  render() {
    const data = this.props.data;

    console.log(data);

    return (
      <React.Fragment>
        <h5>Options</h5>
        <div className="custom-radio-group">
          {data.map((option) => {
            return <CustomRadioInput key={option.id} data={option} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default CustomRadioGroup;
