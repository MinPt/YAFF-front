import React, { Component } from "react";
import NavBar from "./navbar";
import Posts from "./posts";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <Posts />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
