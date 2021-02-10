import React from "react";
import GlobalForm from "../common/globalForm";
import api from "../../gateways/CRADops/apiPost";
import * as Showdown from "showdown";
import * as yup from "yup";
import Input from "../common/input";
import MDEPanel from "../common/mdePanel";

class CreatePostForm extends GlobalForm {
  constructor(params) {
    super(params);
    this.state = {
      data: {
        body: "",
        title: "",
        tags: [],
      },
    };

    this.state.inputFields = [
      <Input type="text" name="title" label="Title" />,
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

   handleSubmit = async(value) => {
    const model = { ...value };
    try {
      const data = await api.createPost(model);
    } catch (error) {}
  }
}

export default CreatePostForm;
