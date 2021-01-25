import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit() {}

  createInput = (label, name, type = "text") => {
    return (
      <Input
        onChange={this.handleChange}
        label={label}
        value={this.state.data[name]}
        name={name}
        type={type}
      />
    );
  };

  createButton = (label) => {
    return (
      <button
        onClick={(e) => this.handleSubmit(e)}
        className="btn btn-success mt-3"
      >
        {label}
      </button>
    );
  };
}

export default Form;
