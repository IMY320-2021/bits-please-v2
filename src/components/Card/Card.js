import React from "react";
import PropTypes from "prop-types";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import "./Card.css";

class Card extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="card">
        <div className="card-header">
          <div className="card-image">
            <h1>IMG</h1>
          </div>
        </div>
        <div className="card-body">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <h2 className="price-heading">R {data.price}</h2>
          {/* <h5>Color</h5> */}
          <CustomRadioGroup data={data.options} />
          <button className="btn btn-primary" type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
