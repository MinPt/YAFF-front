import React, { Component } from "react";
import List from "./common/list";

class Posts extends Component {
  state = {
    posts: [
      { id: "1", title: "My title", body: "Hello i am noob" },
      { id: "2", title: "My title 2", body: "Hello i am noob 2" },
      { id: "3", title: "My title 3", body: "Hello i am noob 3" },
    ],
  };
  render() {
    const { posts } = this.state;

    return <List items={posts} />;
  }
}

export default Posts;
