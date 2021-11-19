import React from "react";
import PropTypes from "prop-types";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import "./Card.css";
import { useCart } from "react-use-cart";
import toast, { Toaster } from "react-hot-toast";
export default function Card({ data }) {
  const product = data;
  const { addItem, inCart } = useCart();
  const alreadyAdded = inCart(product.id);
  const notify = () => toast.success("Added " + product.title + " to Cart!");

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-image">
          <img
            className="object-fit_fill"
            src={product.image_url}
            alt={product.description}
          />
        </div>
      </div>
      <div className="card-body">
        <h3 className="color-salmon">{product.title}</h3>
        <div className="product-description">
          <p>{product.description}</p>
        </div>
        <h2 className="price-heading color-green">R {product.price}</h2>
        {product.options && <CustomRadioGroup data={product.options} />}
        <button
          className="nes-btn is-primary"
          type="button"
          onClick={() => {
            addItem(product);
            notify();
          }}
        >
          {alreadyAdded ? "Add again" : "Add to Cart"}
          <Toaster />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};
