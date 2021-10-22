import React from "react";

import Layout from "../components/Layout/Layout";
import SignupForm from "../components/SignupForm/SignupForm";
import Title from "../components/Title/Title";

export default function ContactUs() {
  return (
    <div className="App">
      <Layout>
        <Title data={{ title: "Contact Us", colour: "color-white" }} />
        <SignupForm />
      </Layout>
    </div>
  );
}
