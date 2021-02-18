import React from "react";
import { useField } from "formik";

const Input = ({ label, classes, type, ...props }) => {
  const [field, meta] = useField(props.name);
  let inputClasses = "";
  if (classes) {
    inputClasses = classes;
  }

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{label}</label>
      <input
        className={"form-control" + " " + inputClasses}
        id={props.name}
        type={type}
        {...field}
        {...props}
      ></input>
      {meta.touched && meta.error ? (
        <div className="alert text-danger p-0 ml-2 w-">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
