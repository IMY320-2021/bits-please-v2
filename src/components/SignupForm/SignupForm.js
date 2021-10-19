import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string()
          .max(512, "Must be 512 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="message">Message</label>
          <input
            id="message"
            type="text"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <div>{formik.errors.message}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
