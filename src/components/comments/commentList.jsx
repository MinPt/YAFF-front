import React, { Component } from "react";
import api from "../../gateways/CRADops/apiGet";
import CommentItem from "./comment";

class CommentList extends Component {
  state = {
    comments: [],
    isVisible: false,
  };

  async componentDidMount() {
    const data = await api.getComments(this.props.match.params.id);
    this.setState({ comments: data.comments });
    console.log(this.state.comments);
  }

  render() {
    const { comments, isVisible } = this.state;

    return (
      (isVisible &&
        comments.map((item) => {
          return <CommentItem key={item.id} {...item} />;
        })) || (
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ isVisible: true })}
        >
          See comments
        </button>
      )
    );
  }
}

export default CommentList;
