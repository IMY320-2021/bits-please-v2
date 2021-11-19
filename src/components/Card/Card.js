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
  const notify = () => toast.success("Added to Cart!");

  return (
    <div className="card">
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
