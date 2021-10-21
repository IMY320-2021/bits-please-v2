import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

export default function AboutUs() {
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
            className="color-green"
            style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: "30%" }}
          >
            Our Team
          </h1>
        </div>
      </Layout>
    </div>
  );
}
