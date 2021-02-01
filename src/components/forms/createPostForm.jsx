import React from "react";
import GlobalForm from "../common/globalForm";
import api from "../../gateways/CRADops/apiPost";
import * as Showdown from "showdown";
import * as yup from "yup";
import Input from "../common/input";
import MDE from "../common/mde";

class CreatePostForm extends GlobalForm {
  constructor(params) {
    super(params);
    this.state = {
      data: {
        body: "",
        title: "",
        tags: [],
      },

      converter: new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
      }),
      selectedTab: "write",
    };

    this.state.inputFields = [
      <Input type="text" name="email" label="Email" />,
      <Input type="text" name="title" label="Title" />,
      <MDE
        name="body"
        selectedTab={this.handleTabChange}
        onTabChange={this.handleTabChange}
      />,
    ];
  }

  schema = yup.object().shape({
    title: yup.string().required().min(15),
    body: yup.string().required().min(100),
  });

  handleTabChange = (tab) => {
    return tab === "write" ? "preview" : "write";
  };

  async handleSubmit(e) {
    e.preventDefault();
    const model = { ...this.state.data };
    try {
      const data = await api.createPost(model);
    } catch (error) {}
  }
}

export default CreatePostForm;
