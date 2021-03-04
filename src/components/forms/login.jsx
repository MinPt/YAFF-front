import React from "react";
import { Form, Formik } from "formik";
import api from "../../gateways/CRADops/apiPost";
import * as yup from "yup";
import Input from "../common/input";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
  return (
    <div>
      <h1>Plese, concider to login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const model = { ...values };
          const data = await api.loginUser(model);
          localStorage.setItem("jwt", data.jwtToken);
          props.history.replace("/posts");
          props.onLogin();
        }}
      >
        {(props) => (
          <Form>
            <Input
              type="text"
              name="email"
              placeholder="email"
              className="form-control mt-3"
            />
            <Input
              type="password"
              name="password"
              placeholder="password"
              className="form-control mt-3"
            />

            <button className="btn btn-success mt-3" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(Login);
