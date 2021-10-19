import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <div>
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
