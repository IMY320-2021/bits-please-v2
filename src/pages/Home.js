import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <div className="nes-container with-title  is-centered  is-dark">
          <section className="icon-list" style={{ "text-align": "left" }}>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
          <p className="title" style={{ fontSize: 40, marginTop: 0 }}>
            Bits Please
          </p>

          <ul style={{ paddingTop: 10, paddingRight: 10 }}>
            <li>
              <Link className="nes-btn" to="/Projects" style={{ width: "20%" }}>
                Projects
              </Link>
            </li>
            <li>
              <Link className="nes-btn" to="/Shop" style={{ width: "20%" }}>
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn is-primary"
                to="/AboutUs"
                style={{ width: "20%" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn  is-success"
                to="/OurTeam"
                style={{ width: "20%" }}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn is-error"
                to="/ContactUs"
                style={{ width: "20%" }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <p style={{ paddingTop: 10, paddingRight: 10 }}>
              insert coin to play
            </p>
            <i className="nes-icon coin is-medium"></i>
          </div>
        </div>
      </Layout>
    </div>
  );
}
