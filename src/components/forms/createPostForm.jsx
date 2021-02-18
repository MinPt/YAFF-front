import React from "react";
import GlobalForm from "../common/globalForm";
import api from "../../gateways/CRADops/apiPost";
import * as yup from "yup";
import Input from "../common/input";
import FileInput from "../common/fileInput";
import MDEPanel from "../common/mdePanel";

class CreatePostForm extends GlobalForm {
  constructor(params) {
    super(params);
    this.state = {
      data: {
        body: "",
        title: "",
        tags: [],
        previewImage: "",
      },
    };

    this.state.inputFields = [
      <Input type="text" name="title" label="Title" />,
      <textarea
        className="form-control"
        name="previewBody"
        label="Preview body"
        cols="3"
        rows="6"
      />,
      <FileInput
        classes="custom-file-input"
        type="file"
        name="previewImage"
        label="Preview image"
      />,
      <MDEPanel name="body" id="mdegovno" />,
    ];
  }

  schema = yup.object().shape({
    title: yup.string().required().min(15),
    body: yup.string().required().min(100),
  });

  handleTabChange = (tab) => {
    return tab === "write" ? "preview" : "write";
  };

  handleSubmit = async (value) => {
    const model = { ...value };
    let formData = new FormData();
    for (let key in model) {
      if (key === "tags" && model[key].length === 0) {
        continue;
      }
      formData.append(key, model[key]);
    }
    try {
      const data = await api.createPost(formData);
    } catch (error) {}
  };
}

export default CreatePostForm;
