import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";
import Cart from "../components/Cart/Cart";
import { CartProvider } from "react-use-cart";

export default function Shop() {
  return (
    <Layout>
      <Title data={{ title: "Merch Shop", colour: "color-salmon" }} />
      <CartProvider>
        <Cart />
        <CardContainer />
      </CartProvider>
    </Layout>
  );
}
