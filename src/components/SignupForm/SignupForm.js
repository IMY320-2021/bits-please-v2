/* eslint-disable react/prop-types */
import React from "react";
import { Form, FormikProvider, useField, useFormik } from "formik";
import * as Yup from "yup";

import "./SignupForm.css";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "This looks good"}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
        {helpText}
      </div>
    </div>
  );
};

const TextAreaInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control  ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between ">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm "
          >
            {meta.error ? meta.error : "This looks good"}
          </div>
        ) : null}
      </div>
      <textarea
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
        {helpText}
      </div>
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Are you sure?")
        .max(15, "That's not quite right.")
        .required("Could you tell us your name?")
        .matches(
          /^[a-zA-Z\s]+$/,
          "Cannot contain special characters or numbers"
        ),
      email: Yup.string()
        .email("Invalid email address")
        .required("Looks like you left out your email?"),
      message: Yup.string()
        .max(1024, "Must be 1024 characters or less")
        .required("What would you like to ask us?"),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <TextInputLiveFeedback
          label="Name"
          id="name"
          name="name"
          helpText={undefined}
          type="text"
          className="nes-input"
        />
        <TextInputLiveFeedback
          label="Email"
          id="email"
          name="email"
          helpText={undefined}
          type="email"
          className="nes-input"
        />
        <TextAreaInputLiveFeedback
          label="Message"
          id="message"
          name="message"
          helpText={undefined}
          className="nes-input"
        />
        <div>
          <button type="submit" className="nes-btn is-primary">
            Submit
          </button>
          <button type="reset" className="nes-btn">
            Reset
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
