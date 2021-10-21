import React from "react";

import Layout from "../components/Layout/Layout";
import SignupForm from "../components/SignupForm/SignupForm";

export default function ContactUs() {
  return (
    <div className="App">
      <Layout>
        <h1>Contact Us</h1>
        <SignupForm />
      </Layout>
    </div>
  );
}
