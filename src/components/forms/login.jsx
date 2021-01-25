import React, { Component } from "react";
import Form from "../common/form";
import api from "../../gateways/CRADops/apiPost";
import isLogged from "../../utilities/isAuntificated";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
    apiResponse: {},
  };

  async handleSubmit(e) {
    e.preventDefault();
    console.log(isLogged());
    const model = { ...this.state.data };
    try {
      const data = await api.loginUser(model);
      this.setState({ apiResponse: data });
      localStorage.setItem("jwt", data.jwtToken);
      this.props.history.push("/posts");
    } catch (error) {}
  }

  render() {
    return (
      <form>
        {this.createInput("Email", "email")}
        {this.createInput("Password", "password")}
        {this.createButton("Submit")}
      </form>
    );
  }
}

export default Login;
