import React from "react";
import { Form, Formik } from "formik";
import api from "../../gateways/CRADops/apiPost";
import * as yup from "yup";
import Input from "../common/input";
import { withRouter } from "react-router-dom";

const Register = (props) => {
  const schema = yup.object().shape({
    username: yup.string().min(5).max(55).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password should have: 1 lower character, 1 upper character, 1 numeric character, 1 special symbol and be at least 8 characters long"
      )
      .required(),
  });

  return (
    <div>
      <h1>Plese, concider to Register</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={async (values) => {
          const model = { ...values };
          const data = await api.registerUser(model);
          toast("You successfully registrated. Please consider to login.");
          this.props.history.push("/login");
        }}
      >
        {(props) => (
          <Form>
            <Input
              type="text"
              name="username"
              placeholder="email"
              className="form-control mt-3"
            />
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

export default withRouter(Register);
