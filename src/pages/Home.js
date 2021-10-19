import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <section className="icon-list">
          <i className="nes-icon is-medium heart"></i>
          <i className="nes-icon is-medium heart"></i>
          <i className="nes-icon is-medium is-half heart"></i>
          <i className="nes-icon is-medium is-transparent heart"></i>
        </section>

        <div className="nes-container with-title  is-centered  is-dark">
          <p className="title">Bits Please</p>
          <ul>
            <li>
              <Link className="nes-btn" to="/Projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nes-btn" to="/Shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="nes-btn is-primary" to="/AboutUs">
                About Us
              </Link>
            </li>
            <li>
              <Link className="nes-btn  is-success" to="/OurTeam">
                Our Team
              </Link>
            </li>
            <li>
              <Link className="nes-btn is-error" to="/ContactUs">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
}
