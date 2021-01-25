import React, { Component } from "react";
import Form from "../common/form";
import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";

class CreatePostForm extends Form {
  state = {
    data: {
      markdown: "",
      title: "",
      tags: [],
    },
  };

  render() {
    const { title, markdown } = this.state.data;

    return (
      <div className="row">
        <div className="col-6">
          <form>
            {this.createInput("Title", "title")}
            <ReactMde
              value={markdown}
              onChange={(value) => this.handleChange("markdown", value)}
            />
            {this.createButton("Submit")}
          </form>
        </div>
        <div className="col-6">
          <h3>{title}</h3>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default CreatePostForm;
