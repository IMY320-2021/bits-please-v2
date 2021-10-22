import React from "react";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";

export default function AboutUs() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "About Us", colour: "color-green" }} />
        <h2 className="color-salmon">What We Do</h2>
        <h3 className="color-green">Web</h3>
        <p>
          Our web design and development team builds dynamic and modern web
          experiences with technologies such as React. We ensure our websites
          are performant on all devices and networks, whilst looking great.
        </p>
        <h3 className="color-yellow">3D</h3>
        <p>
          Using the power of Unreal Engine, we design, test, and build products
          for various platforms. These platforms include PC, Linux, Mac, and VR.
          The authoring of 3D models for use in games, animations, or short
          films is another service we provide.
        </p>
        <h3 className="color-blue">UX/UI</h3>
        <p>
          Designing of interfaces that provides exceptional User Experience, be
          it on desktop or mobile. Our designs are thoroughly tested and
          meticulously crafted to best suit the needs of our clients and the
          users.
        </p>
      </Layout>
    </div>
  );
}
