import React from "react";
import CardContainer from "../components/CardContainer/CardContainer";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";

export default function Shop() {
  return (
    <Layout>
      <Title data={{ title: "Merch Shop", colour: "color-salmon" }} />
      <CardContainer />
    </Layout>
  );
}
