import React from "react";

import Layout from "../components/Layout/Layout";
import SignupForm from "../components/SignupForm/SignupForm";
import SocialIcon from "../components/SocialIcon/SocialIcon";
import Title from "../components/Title/Title";

const socialLinks = {
  social: [
    {
      name: "GitHub",
      icon: "github",
      link: "https://github.com/IMY320-2021/bits-please-v2",
    },
    {
      name: "Email",
      icon: "gmail",
      link: "mailto:info.bitsplease@gmail.com",
    },
  ],
};

export default function ContactUs() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "Contact Us", colour: "color-white" }} />
        <SignupForm />
        <br />
        <h4>Our Links</h4>
        <div className="social-link-container">
          {socialLinks.social.map((social) => (
            <SocialIcon key={social.name} data={social} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
