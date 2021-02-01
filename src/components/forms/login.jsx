import React from "react";
import api from "../../gateways/CRADops/apiPost";
import GlobalForm from "../common/globalForm";
import * as yup from "yup";
import Input from "../common/input";
import { withRouter } from "react-router-dom";

class Login extends GlobalForm {
  state = {
    data: { email: "", password: "" },
    errors: {},
    inputFields: [
      <Input type="text" name="email" label="Email" />,
      <Input type="password" name="password" label="Password" />,
    ],
    apiResponse: {},
  };

  handleSubmit = async (value) => {
    const model = { ...value };

    const data = await api.loginUser(model);
    localStorage.setItem("jwt", data.jwtToken);
    console.log(this.props.history);
    this.props.history.push("/posts");
  };

  schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
}

export default withRouter(Login);
