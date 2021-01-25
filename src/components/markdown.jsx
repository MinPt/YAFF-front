import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import ReactMde from "react-mde";
import * as Showdown from "showdown";

import "react-mde/lib/styles/css/react-mde-all.css";

class Markdown extends Component {
  state = {
    markdown: "",
    selectedTab: "write",
    converter: new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true,
    }),
  };

  handleMarkdownChange(value) {
    const markdown = value;
    this.setState({ markdown });
  }

  handleTabChange(tab) {
    const newtab = tab;
    this.setState({ selectedTab: newtab });
  }

  handleClick() {
    console.log(this.state.markdown);
  }

  render() {
    return (
      <div>
        <ReactMde
          value={this.state.markdown}
          onChange={(value) => this.handleMarkdownChange(value)}
          selectedTab={this.state.selectedTab}
          onTabChange={(tab) => this.handleTabChange(tab)}
          generateMarkdownPreview={(markdown) =>
            Promise.resolve(this.state.converter.makeHtml(markdown))
          }
        />
        <button className="btn btn-primary" onClick={() => this.handleClick()}>
          Click
        </button>
      </div>
    );
  }
}

export default Markdown;
