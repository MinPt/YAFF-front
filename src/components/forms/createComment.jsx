import React from "react";
import { Form, Formik } from "formik";
import api from "../../gateways/CRADops/apiPost";
import * as yup from "yup";
import Input from "../common/input";

const CreateComment = (props) => {
  const schema = yup.object().shape({
    body: yup.string().min(20).max(255).required(),
  });

  return (
    <div className="border">
      <Formik
        initialValues={{
          body: "",
          postId: props.postId,
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const model = { ...values };
          const data = await api.createComment(model);
        }}
      >
        {(props) => (
          <Form>
            <Input
              type="text"
              name="body"
              placeholder="body"
              className="form-control mt-3"
            />
            <button className="btn btn-primary mt-3" type="submit">
              Post comment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateComment;
