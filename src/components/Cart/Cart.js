import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../Cart/Cart.css";

export default function Cart() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { isEmpty, totalItems, items, updateItemQuantity, removeItem } =
    useCart();

  const closeIcon = (
    <button type="button" className="nes-btn">
      <i className="nes-icon close is-small"></i>
    </button>
  );

  return (
    <>
      <div>
        <button
          className="nes-btn is-primary"
          type="button"
          onClick={onOpenModal}
        >
          Cart ({totalItems})
        </button>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          closeIcon={closeIcon}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <h1>Cart ({totalItems})</h1>
          {isEmpty && <p>Your cart is empty</p>}
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title} &mdash; {"R" + item.price + " Each "}
                <button
                  className="nes-btn is-primary"
                  type="button"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                {" " + item.quantity + " "}
                <button
                  className="nes-btn is-primary"
                  type="button"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="nes-btn is-error"
                  type="button"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </>
  );
}
