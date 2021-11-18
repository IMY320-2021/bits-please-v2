import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import backgroundIMG from "../assets/images/8bitBackgroundImage.gif";
export default function Home() {
  return (
    <div className="App">
      <Layout>
        <div
          className="home-container"
          style={{
            backgroundImage: `url(${backgroundIMG})`,

            /* Center and scale the image nicely */
            "background-position": "center",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          }}
        >
          <section className="icon-list" style={{ textAlign: "left" }}>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium heart"></i>
            <i className="nes-icon is-medium is-half heart"></i>
            <i className="nes-icon is-medium is-transparent heart"></i>
          </section>
          <h1 className="xl color-yellow">Bits Please</h1>

          <ul style={{ paddingTop: "10%", paddingBottom: "10%" }}>
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
        </div>
      </Layout>
    </div>
  );
}
