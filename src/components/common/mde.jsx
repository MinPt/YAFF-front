import React from "react";
import { useField } from "formik";

const MDE = (props) => {
  const { name, value, onChange } = props;
  const [field, meta] = useField(props.name);
  const foo = (e) => {
    const value = e.currentTarget.value;
    onChange(value);
    field.onChange(e);
  };
  return (
    <React.Fragment>
      <textarea
        {...field}
        value={value}
        onChange={(e) => foo(e)}
        className="form-control"
        name={name}
        id={name}
        cols="3"
        rows="6"
      >
        {value}
      </textarea>
      {meta.touched && meta.error ? (
        <div className="alert text-danger p-0 ml-2 w-">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

export default MDE;
