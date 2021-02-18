import React from "react";
import { useField } from "formik";
import { Field } from "formik";

const FileInput = ({ label, classes, type, ...props }) => {
  const [field, meta] = useField(props.name);
  let inputClasses = "";
  if (classes) {
    inputClasses = classes;
  }
  const { values } = props.props;

  return (
    <div className="form-group">
      <label htmlFor={props.name}>{label}</label>
      <Field
        classes="custom-file-input"
        type="file"
        name="previewImage"
        label="Preview image"
        setFieldValue={props.props.setFieldValue}
      />
      {values.previewImage
        ? JSON.stringify(
            {
              fileName: values.previewImage.name,
              type: values.previewImage.type,
              size: `${values.previewImage.size} bytes`,
            },
            null,
            2
          )
        : null}
      {meta.touched && meta.error ? (
        <div className="alert text-danger p-0 ml-2 w-">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FileInput;
