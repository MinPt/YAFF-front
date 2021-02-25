import React from "react";
import { Form, Formik, Field } from "formik";
import MDEPanel from "../common/mdePanel";
import api from "../../gateways/CRADops/apiPost";
import * as yup from "yup";

const FormikForm = (props) => {
  const schema = yup.object().shape({
    title: yup.string().min(5).max(256).required(),
    previewBody: yup.string().min(100).max(256).required(),
    body: yup.string().min(256).required(),
    previewImage: yup.mixed().required("file is required"),
  });

  const lamda = (props) => {
    return (
      <input
        type="file"
        onChange={(e) =>
          props.form.setFieldValue("previewImage", e.currentTarget.files[0])
        }
        onBlur={props.handleBlur}
        name="previewImage"
      />
    );
  };

  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{
          title: "title",
          previewImage: "",
          previewBody:
            "previewBody previewBody previewBody previewBodypreviewBodypreviewBody previewBody previewBody previewBody",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          <Form>
            <Field
              type="text"
              name="title"
              placeholder="title"
              className="form-control"
            />
            <Field
              type="text"
              name="previewBody"
              placeholder="previewBody"
              className="form-control"
            />
            <Field
              onSubmit={(value) => {
                onSubmit(value);
              }}
              render={lamda}
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
