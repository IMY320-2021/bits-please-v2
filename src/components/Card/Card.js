/* eslint-disable react/prop-types */
import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-image"></div>
        </div>
        <div className="card-body">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <h2 className="price-heading">R {data.price}</h2>
          <h3>Color</h3>
          <button className="btn btn-primary" type="button">
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
