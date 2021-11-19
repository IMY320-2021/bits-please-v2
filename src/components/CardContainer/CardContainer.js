import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

import MugShot from "../../assets/images/store/mug.jpg";
import Hoodie from "../../assets/images/store/hoodie.jpg";
import LongTShirt from "../../assets/images/store/long-tshirt.jpg";
import ShortTShirt from "../../assets/images/store/short-tshirt.jpg";
import Arcade from "../../assets/images/store/arcade.jpg";
import Usb from "../../assets/images/store/usb.jpg";

const StoreData = {
  data: [
    {
      id: "usb-01",
      title: "Flash Drive",
      description: "For coffee addicts, the perfect mug (coffee not included)",
      price: 79.95,
      image_url: [`${Usb}`],
      options: [
        { id: "mg-01-550", stock: true, option: "64Gb" },
        { id: "mg-01-550", stock: true, option: "256Gb" },
      ],
    },
    {
      id: "hd-01",
      title: "Mini Arcade",
      description: "A Mini Arcade action figure collectable for your desk",
      price: 199.95,
      image_url: [`${Arcade}`],
      options: [{ id: "arcade-sm", stock: true, option: "Small" }],
    },
    {
      id: "mg-01",
      title: "Mug",
      description: "For coffee addicts, the perfect mug (coffee not included)",
      price: 59.95,
      image_url: [`${MugShot}`],
      options: [
        { id: "mg-01-330", stock: true, option: "330ml" },
        { id: "mg-01-550", stock: true, option: "500ml" },
      ],
    },
    {
      id: "hd-01",
      title: "Hoodie",
      description: "A comfortable hoodie with a drawstring and front pocket",
      price: 359.95,
      image_url: [`${Hoodie}`],
      options: [
        { id: "hd-01-xs", stock: true, option: "XS" },
        { id: "hd-01-s", stock: true, option: "S" },
        { id: "hd-01-m", stock: true, option: "M" },
        { id: "hd-01-l", stock: true, option: "L" },
      ],
    },
    {
      id: "s-ts-01",
      title: "T-Shirt",
      description: "100% pure cotton short sleeve T-Shirt with printed graphic",
      price: 129.95,
      image_url: [`${ShortTShirt}`],
      options: [
        { id: "s-ts-01-xs", stock: true, option: "XS" },
        { id: "s-ts-01-s", stock: true, option: "S" },
        { id: "s-ts-01-m", stock: true, option: "M" },
        { id: "s-ts-01-l", stock: true, option: "L" },
      ],
    },
    {
      id: "l-ts-01",
      title: "Sweatshirt",
      description: "100% pure cotton long sleeve T-Shirt with printed graphic",
      price: 159.95,
      image_url: [`${LongTShirt}`],
      options: [
        { id: "ls-ts-01-s", stock: true, option: "S" },
        { id: "ls-ts-01-m", stock: true, option: "M" },
        { id: "ls-ts-01-l", stock: true, option: "L" },
      ],
    },
  ],
};

export default function CardContainer() {
  return (
    <div className="card-container">
      {StoreData.data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
}
