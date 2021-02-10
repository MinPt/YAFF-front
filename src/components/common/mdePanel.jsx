import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import MDE from "./mde";

class MDEPanel extends Component {
  state = {
    isPrewiewMode: true,
    markdown: "# header",
  };

  handleToggleMode = () => {
    const mode = !this.state.isPrewiewMode;
    this.setState({ isPrewiewMode: mode });
  };

  handleMmarkdownChange = (value) => {
    const markdown = value;
    this.setState({ markdown });
  };

  render() {
    return (
      <div className="container p-0">
        <div className="mb-3">
          
            <span onClick={() => this.handleToggleMode()} class="material-icons" style={{"cursor": "pointer"}}>preview</span>
       
        </div>
        <div>
          {this.state.isPrewiewMode ? (
            <div className="border p-5">
              <ReactMarkdown children={this.state.markdown} />
            </div>
          ) : (
            <MDE
              name={this.props.name}
              value={this.state.markdown}
              onChange={this.handleMmarkdownChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MDEPanel;
