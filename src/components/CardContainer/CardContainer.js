import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

const StoreData = {
  data: [
    {
      id: "mg-01",
      title: "Mug",
      description: "For coffee addicts, the perfect mug",
      price: 59.95,
      image_url: [
        "/media/images/shop/mug.jpg",
        "../../../public/media/images/shop/mug.jpg",
      ],
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
      image_url: [
        "/media/images/shop/hoodie.jpg",
        "../../../public/media/images/shop/hoodie.jpg",
      ],
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
      image_url: [
        "/media/images/shop/short-tshirt.jpg",
        "../../../public/media/images/shop/short-tshirt.jpg",
      ],
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
      image_url: [
        "/media/images/shop/long-tshirt.jpg",
        "../../../public/media/images/shop/long-tshirt.jpg",
      ],
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
    console.log(StoreData);
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
