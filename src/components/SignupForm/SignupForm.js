import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./SignupForm.css";

// const CustomTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const CustomTextAreaInput = ({label})

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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <Field name="name" type="text" className="form-input" />
        <ErrorMessage name="name" />

        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <Field name="email" type="email" className="form-input" />
        <ErrorMessage name="email" />

        <label htmlFor="message" className="form-label">
          Message
        </label>
        <Field name="message" as="textarea" className="form-input" />
        <ErrorMessage name="message" />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
};

export default SignupForm;
