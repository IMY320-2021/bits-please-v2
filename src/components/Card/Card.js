import React from "react";
import PropTypes from "prop-types";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import "./Card.css";

// class Card extends React.Component {
export default function Card({ data }) {
  // render() {

  const product = data;

  return (
    <div className="card">
      {/* <div className="card nes-container is-dark"> */}
      <div className="card-header">
        <div className="card-image">
          <img
            className="object-fit_cover"
            src={product.image_url}
            alt={product.description}
          />
        </div>
      </div>
      <div className="card-body">
        <h3 className="color-salmon">{product.title}</h3>
        <p>{product.description}</p>
        <h2 className="price-heading color-green">R {product.price}</h2>
        <CustomRadioGroup data={product.options} />
        <button className="nes-btn is-primary" type="button">
          ADD TO CART
        </button>
      </div>
    </div>
  );
  //   }
}

Card.propTypes = {
  data: PropTypes.object,
};
