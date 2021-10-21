import React from "react";
import PropTypes from "prop-types";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import "./Card.css";

class Card extends React.Component {
  render() {
    const data = this.props.data;

    return (
      <div className="card">
        {/* <div className="card nes-container is-dark"> */}
        <div className="card-header">
          <div className="card-image">
            <img
              className="object-fit_cover"
              src={data.image_url}
              alt={data.description}
            />
          </div>
        </div>
        <div className="card-body">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <h2 className="price-heading">R {data.price}</h2>
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
