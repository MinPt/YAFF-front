import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="form-group">
      <label>{label}</label>
      <input className="form-control" {...field} {...props}></input>
      {meta.touched && meta.error ? (
        <div className="alert text-danger p-0 ml-2 w-">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
