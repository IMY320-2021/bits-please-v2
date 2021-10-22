import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <div className="home-container">
          <section className="icon-list" style={{ textAlign: "left" }}>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
          <h1>Bits Please</h1>

          <ul style={{ paddingTop: 10, paddingRight: 10 }}>
            <li>
              <Link
                className="nes-btn is-primary"
                to="/Projects"
                style={{ width: "20%" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn is-error"
                to="/Shop"
                style={{ width: "20%" }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn is-success"
                to="/AboutUs"
                style={{ width: "20%" }}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn  is-warning"
                to="/OurTeam"
                style={{ width: "20%" }}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                className="nes-btn"
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
