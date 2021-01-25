import React, { Component } from "react";
import Form from "../common/form";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import api from "../../gateways/CRADops/apiPost";

class CreatePostForm extends Form {
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
  };

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

  render() {
    const { body: markdown } = this.state.data;

    return (
      <div className="">
        <form>
          {this.createInput("Title", "title")}
          <ReactMde
            value={markdown}
            onChange={(value) => this.handleMarkdownChange(value)}
            selectedTab={this.state.selectedTab}
            onTabChange={(tab) => this.handleTabChange(tab)}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(this.state.converter.makeHtml(markdown))
            }
          />
          {this.createButton("Submit")}
        </form>
      </div>
    );
  }
}

export default CreatePostForm;
