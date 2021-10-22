import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

import MugShot from "../../assets/images/store/mug.jpg";
import Hoodie from "../../assets/images/store/hoodie.jpg";
import LongTShirt from "../../assets/images/store/long-tshirt.jpg";
import ShortTShirt from "../../assets/images/store/short-tshirt.jpg";

const StoreData = {
  data: [
    {
      id: "mg-01",
      title: "Mug",
      description: "For coffee addicts, the perfect mug",
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
      description: "A comfortable hoodie",
      price: 359.95,
      image_url: [`${Hoodie}`],
      options: [
        { id: "hd-01-xs", stock: true, option: "XS" },
        { id: "hd-01-s", stock: true, option: "S" },
        { id: "hd-01-m", stock: true, option: "M" },
        { id: "hd-01-l", stock: true, option: "L" },
        { id: "hd-01-xl", stock: true, option: "XL" },
      ],
    },
    {
      id: "s-ts-01",
      title: "Short Sleeve T-Shirt",
      description: "100% pure cotton short sleeve T-Shirt with printed graphic",
      price: 129.95,
      image_url: [`${ShortTShirt}`],
      options: [
        { id: "s-ts-01-xs", stock: true, option: "XS" },
        { id: "s-ts-01-s", stock: true, option: "S" },
        { id: "s-ts-01-m", stock: true, option: "M" },
        { id: "s-ts-01-l", stock: true, option: "L" },
        { id: "s-ts-01-xl", stock: true, option: "XL" },
      ],
    },
    {
      id: "l-ts-01",
      title: "Long Sleeve T-Shirt",
      description: "100% pure cotton long sleeve T-Shirt with printed graphic",
      price: 159.95,
      image_url: [`${LongTShirt}`],
      options: [
        { id: "ls-ts-01-s", stock: true, option: "S" },
        { id: "ls-ts-01-m", stock: true, option: "M" },
        { id: "ls-ts-01-l", stock: true, option: "L" },
        { id: "ls-ts-01-xl", stock: true, option: "XL" },
      ],
    },
  ],
};

class CardContainer extends React.Component {
  render() {
    return (
      <div className="card-container">
        {StoreData.data.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

export default CardContainer;
