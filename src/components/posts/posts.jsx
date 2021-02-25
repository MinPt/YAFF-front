import React, { Component } from "react";
import api from "../../gateways/CRADops/apiGet";
import { withRouter } from "react-router-dom";
import PostPreview from "./postPrewiew";
class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const data = await this.props.getData(20);
    this.setState({ posts: data.items });
  }

  render() {
    const { posts } = this.state;

    return posts.map((item) => <PostPreview key={item.id} {...item} />);
  }
}

export default withRouter(Posts);
