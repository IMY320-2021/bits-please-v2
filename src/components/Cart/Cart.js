import React, { useState } from "react";
import { useCart } from "react-use-cart";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "../Cart/Cart.css";

export default function Cart() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {
    isEmpty,
    totalItems,
    items,
    cartTotal,
    emptyCart,
    updateItemQuantity,
    removeItem,
  } = useCart();
  console.log(items);

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
          style={{
            width: "10%",
            height: "2%",
            position: "absolute",
            top: 30,
            right: 40,
            paddingBottom: 45,
          }}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADPElEQVRoge2YvYtdRRiHn3dXI5ugpFALhRDQxkZEtAoI/gE2agpRUBQUgs2CKAoWdkqCiILYBFKkthHEwmBtkRQuaBDBD/xI8CtZY7Le7N7H4pyFs2fnno975rgg94EL954z8/u9M3c+3hlYsGABAOpVdTPxua4+udfxtVIGOosv9jq+VloasKUe3usYU8T2F/U6cEND2Y+Ap0ePaCdGxKWmAtUGHANWKu9WgTvrgvli68zfwCsR8X7qZaQeAqgvAcfHiqonf0XELakXTQ1YAi4BN48VVQ+uAQciYtcIWJpVIyKmwCdjRtWDz1PBQ8M/AKDeAfwALFcefwm8mi+2HSwDp4H9lWcT4FBEXJxLUT1XW1In6ijDSj2ZWMJPDRV9NCGaXBEG+tyqbtR8Lqs35RC/UBP+NUPMdY/PEh31ei7xdxPiT2URL/Tvs8i7qvykNs7RPgYrib83W36kriU66Ilc+tsmZ2oGWfIj9XF1WtNeyxFz3ej+hNGHGXR/THTMgzliTpl9UzO7ojYlgG16ryWGzqd9NHpNEnUVeLv2+DjwQR+divc5oJrjDNu02lCX1PVEr+Wi96Y1MxdKUeZHZ/qadGQdeL5vpV4NsFiXx5hgAqsRMRlBu+Ki72UeMlP1ovrcvDF1nsTqIeBroJqbTIAjwB9z+v8eEZfnrNsP9WyiB0/8J+ZDUQ+7exP73ly5ygC6bkJH2TncBE4Cj+go5/wt4ONZp7AqXRtwofY7gDf6RtUDgYMUS2sjnYaAuo/igL/SVjYTAgcjorUBnfaBcn1+k725F8qH+qLF6WyznNRjfTbV5D1QnblWEYtz6v7WggOIiD+7lOudCpdL5z3APuBsRGz11ajpLQMPUFxerXVZeYaYvezObPSqWk+v++i9U2pss25xpZkf9VhiM9vmrTn0TszQmqovjNGAX2YYanEy65zZWpwrrjTo/dxVq5OpeiNwW0ORA8BdXU2Bu8s6s7i99Gyla69Nad8DrnXUAtjo4DdocdiFuw/0VXrf1Km/Neidzxp8afiwxcVunS31mTn0ni3r1pmo92ZvQGn6kHre4pbuH/Vb9bEBekfV78qgN9Sv1CM5Y16w4P/Ov3gQ9WlnJlGMAAAAAElFTkSuQmCC"></img>
          {"   "}
          <text
            style={{
              fontSize: 20,
            }}
          >
            ({totalItems})
          </text>
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
          {isEmpty ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <table>
                <thead>
                  <th>Item </th>
                  <th>Size </th>
                  <th>Price each</th>
                  <th>Quantity</th>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td> {item.title} </td>
                      <td> {item.options[0].option} </td>
                      <td> {"R" + item.price} </td>

                      <td>
                        <button
                          className="nes-btn is-primary"
                          type="button"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        {" " + item.quantity + " "}
                        <button
                          className="nes-btn is-primary"
                          type="button"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3 className="total">Total R{cartTotal}</h3>
              <button
                className="nes-btn is-success checkOut"
                type="button"
                onClick={() => {
                  emptyCart();
                  onCloseModal();
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
