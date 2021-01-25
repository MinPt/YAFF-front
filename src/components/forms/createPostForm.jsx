import React from "react";
import GlobalForm from "../common/globalForm";
import ReactMde from "react-mde";
import api from "../../gateways/CRADops/apiPost";
import * as Showdown from "showdown";
import * as yup from "yup";
import Input from "../common/input";

class CreatePostForm extends GlobalForm {
  state = {
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
    inputFields: [
      <Input type="text" name="title" label="Title" />,
      <ReactMde
        value={this.state.data.body}
        onChange={(value) => this.handleMarkdownChange(value)}
        selectedTab={this.state.selectedTab}
        onTabChange={(tab) => this.handleTabChange(tab)}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(this.state.converter.makeHtml(markdown))
        }
      />,
    ],
  };

  schema = yup.object().shape({
    body: yup.string().required().min(100),
    title: yup.string().required().min(15),
  });

  handleMarkdownChange(value) {
    const data = { ...this.state.data };
    data.body = value;
    this.setState({ data });
  }

  handleTabChange(tab) {
    const newtab = tab;
    this.setState({ selectedTab: newtab });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const model = { ...this.state.data };
    try {
      const data = await api.createPost(model);
    } catch (error) {}
  }
}

export default CreatePostForm;
