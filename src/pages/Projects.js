import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="App">
      <Layout>
        <div style={{ display: "flex" }}>
          <Link
            className="nes-btn is-primary"
            to="/Home"
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              width: "10%",
              height: "5%",
            }}
          >
            {"< Back"}
          </Link>
          <h1
            style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: "30%" }}
            className="color-blue"
          >
            Project Page
          </h1>
        </div>
      </Layout>
    </div>
  );
}
