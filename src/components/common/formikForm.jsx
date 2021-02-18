import React, { Component } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";

const FormikForm = (props) => {
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ name: "jared", file: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            <input
              type="file"
              onChange={(e) =>
                props.setFieldValue("file", e.currentTarget.files[0])
              }
              onBlur={props.handleBlur}
              name="file"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
