import React from "react";
import { Form, Formik } from "formik";
import MDEPanel from "../common/mdePanel";
import api from "../../gateways/CRADops/apiPost";
import Input from "../common/input";
import * as yup from "yup";

const FormikForm = (props) => {
  const schema = yup.object().shape({
    title: yup.string().min(5).max(256).required(),
    previewBody: yup.string().min(100).max(256).required(),
    body: yup.string().min(256).required(),
    previewImage: yup.mixed().required("file is required"),
  });

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{
          title: "title",
          previewImage: "",
          previewBody: "previewBody",
          body: "# BIDY",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const model = { ...values };
          let formData = new FormData();
          for (let key in model) {
            if (key === "tags" && model[key].length === 0) {
              continue;
            }
            formData.append(key, model[key]);
          }
          try {
            const data = await api.createPost(formData);
          } catch (error) {}
        }}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.title}
              name="title"
            />
            <Input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.previewBody}
              name="previewBody"
            />
            
            <MDEPanel name="body" id="mdegovno" value={props.values.body} />
            <button className="btn btn-success mt-3" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
