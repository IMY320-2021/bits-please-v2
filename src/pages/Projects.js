import React from "react";
import Layout from "../components/Layout/Layout";
import ProjectContainer from "../components/ProjectContainer/ProjectContainer";

export default function Projects() {
  return (
    <div className="App">
      <Layout>
        <h1 className="color-blue">Project Page</h1>
        <ProjectContainer />
      </Layout>
    </div>
  );
}
