import React, { Component } from "react";
import api from "../../gateways/CRADops/apiGet";
import CommentItem from "./comment";

class CommentList extends Component {
  state = {
    comments: [],
    isLoaded: false,
  };

  async componentDidMount() {
    const data = await api.getComments(this.props.match.params.id);
    this.setState({ comments: data.items, isLoaded: true });
  }

  render() {
    const { comments, isLoaded } = this.state;

    return (
      (isLoaded &&
        comments.map((item) => {
          return <CommentItem key={item.id} {...item} />;
        })) || <div></div>
    );
  }
}

export default CommentList;
