import React from "react";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";

export default function Projects() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "Projects", colour: "color-blue" }} />
      </Layout>
    </div>
  );
}
