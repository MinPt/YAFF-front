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
    console.log("RERENDERED");
    return (
      <Formik
        initialValues={data}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
      >
        {(props) => (
          <Form>
            {inputFields.map((item, i) => {
              let newItem = { ...item, key: i };
              newItem = React.cloneElement(newItem, { props: { ...props } });
              return newItem;
            })}
            <button
              disabled={!props.isValid}
              className="btn btn-success mt-5"
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
