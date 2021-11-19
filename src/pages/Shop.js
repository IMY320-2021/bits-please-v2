import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import Layout from "../components/Layout/Layout";
import Cart from "../components/Cart/Cart";
import { CartProvider } from "react-use-cart";

export default function Shop() {
  return (
    <Layout>
      <CartProvider>
        <Cart data={{ title: "Merch Shop", colour: "color-salmon" }} />
        <CardContainer />
      </CartProvider>
    </Layout>
  );
}
