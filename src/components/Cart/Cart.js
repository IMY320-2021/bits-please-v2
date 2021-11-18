import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../Cart/Cart.css";

export default function Cart() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  return (
    <>
      <div>
        <button onClick={onOpenModal}>Cart</button>
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <h1>Cart ({totalUniqueItems})</h1>
          {isEmpty && <p>Your cart is empty</p>}
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.title} &mdash;{" "}
                {"R" + item.price + " Each "}
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </>
  );
}
