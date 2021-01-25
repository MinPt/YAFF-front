import React, { Component } from "react";
import api from "../../gateways/CRADops/apiGet";
import { withRouter } from "react-router-dom";
import Like from "../common/like";
import Avatar from "../common/avatar";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  state = {
    post: {},
    isLoaded: false,
  };

  async componentDidMount() {
    try {
      const data = await api.getSinglePost(this.props.match.params.id);
      const isLoaded = true;
      this.setState({ post: data });
      console.log(this.state);
      this.setState({ isLoaded });
    } catch (error) {
      this.props.history.replace("/not-found");
    }
  }

  render() {
    const { title, body, author, likesCount, datePosted, id } = this.state.post;

    return (
      (this.state.isLoaded && (
        <React.Fragment>
          <div className="border mt-2">
            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h3>{title}</h3>
                  <p>{datePosted}</p>
                  <Avatar {...author} />
                </div>
                <p>{author.nickName}</p>
              </div>
              <div>
                <ReactMarkdown>{body}</ReactMarkdown>
                <Like count={likesCount} />
              </div>
            </li>
          </div>
        </React.Fragment>
      )) || <div>Loading</div>
    );
  }
}

export default withRouter(Post);
