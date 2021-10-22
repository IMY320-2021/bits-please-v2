import React from "react";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";

export default function AboutUs() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "About Us", colour: "color-green" }} />
      </Layout>
    </div>
  );
}
