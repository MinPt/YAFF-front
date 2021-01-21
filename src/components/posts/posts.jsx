import React, { Component } from "react";
import api from "../../gateways/api";
import { withRouter } from "react-router-dom";
import PostPreview from "./postPrewiew";

class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data } = await api.get(`posts`);

    console.log(data.posts);
    this.setState({ posts: data.posts });
  }

  render() {
    const { posts } = this.state;

    return posts.map((item) => <PostPreview key={item.id} {...item} />);
  }
}

export default withRouter(Posts);
