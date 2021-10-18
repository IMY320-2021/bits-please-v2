import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div className="App">
      <Layout>
        <h1 className="neonText">Bits Please</h1>
        <ul>
          <li>
            <Link to="/Projects">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Shop">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/AboutUs">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/OurTeam">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/ContactUs">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Contact Us
            </Link>
          </li>
        </ul>
      </Layout>
    </div>
  );
}
