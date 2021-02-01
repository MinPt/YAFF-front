import React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import { useField, useFormikContext } from "formik";

const MDE = (props) => {
  const [field, meta] = useField(props.name);
  const { setFieldValue, values } = useFormikContext();
  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });
  return (
    <div className="form-group">
      <ReactMde
        onTabChange={(value) => {
          props.onTabChange(value);
        }}
        {...field}
        onChange={(value, e) => {
          values[field.name] = value;
          setFieldValue(value);
        }}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
};

export default MDE;
