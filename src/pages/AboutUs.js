import React from "react";
import Layout from "../components/Layout/Layout";
import Title from "../components/Title/Title";

import AboutUsCard from "../components/AboutUsCard/AboutUsCard";

const aboutUsData = [
  {
    title: "Web",
    colour: "green",
    description: `Our web design and development team builds dynamic and modern web
      experiences with technologies such as React. We ensure our websites
      are performant on all devices and networks, whilst looking great.`,
    media: {
      images: [
        {
          alt: "",
          url: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589735894/web_1_xqjqjy.png",
        },
      ],
      links: [{ title: "", url: "" }],
    },
  },
  {
    title: "3D",
    colour: "yellow",
    description: `Using the power of Unreal Engine, we design, test, and build products
    for various platforms. These platforms include PC, Linux, Mac, and VR.
    The authoring of 3D models for use in games, animations, or short
    films is another service we provide.`,
    media: {
      images: [
        {
          alt: "",
          url: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589735894/web_1_xqjqjy.png",
        },
      ],
      links: [{ title: "", url: "" }],
    },
  },
  {
    title: "UI/UX",
    colour: "blue",
    description: `Designing of interfaces that provides exceptional User Experience, be
    it on desktop or mobile. Our designs are thoroughly tested and
    meticulously crafted to best suit the needs of our clients and the
    users.`,
    media: {
      images: [
        {
          alt: "",
          url: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589735894/web_1_xqjqjy.png",
        },
      ],
      links: [{ title: "", url: "" }],
    },
  },
  {
    title: "Video",
    colour: "red",
    description: `We provide video editing services for short films, animations, and
      games. We can also provide video production services for short films
      and animations.`,
    media: {
      images: [
        {
          alt: "",
          url: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589735894/web_1_xqjqjy.png",
        },
      ],
      links: [{ title: "", url: "" }],
    },
  },
];

export default function AboutUs() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "About Us", colour: "color-green" }} />
        <h2 className="color-salmon">What We Do</h2>
        <div className="about-us-container">
          {aboutUsData.map((data) => (
            <AboutUsCard key={data.title} data={data} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
