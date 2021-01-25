import React, { Component } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";

class GlobalForm extends Component {
  state = {
    data: {},
    errors: {},
    inputFields: [],
  };

  schema = yup.object().shape({});

  handleSubmit(value, actions) {
    console.log(value);
    console.log(actions);
  }

  render() {
    const { data, inputFields } = this.state;

    return (
      <Formik
        initialValues={data}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        {(props) => (
          <Form>
            {inputFields.map((item, i) => {
              return item;
            })}
            <button
              disabled={!props.isValid}
              className="btn btn-success"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default GlobalForm;
