import React, { Component } from "react";
import apiGet from "../../gateways/CRADops/apiGet";
import apiDelete from "../../gateways/CRADops/apiDelete";
import { withRouter } from "react-router-dom";
import Like from "../common/like";
import Avatar from "../common/avatar";
import ReactMarkdown from "react-markdown";
import normalizeDate from "../../utilities/toHumanFriendlyDate";
import { parseToken } from "../../utilities/parseToken";
class Post extends Component {
  state = {
    post: {},
    isLoaded: false,
  };

  async componentDidMount() {
    try {
      const data = await apiGet.getSinglePost(this.props.match.params.id);
      const isLoaded = true;
      this.setState({ post: data });
      console.log(this.state);
      this.setState({ isLoaded });
    } catch (error) {
      this.props.history.replace("/not-found");
    }
  }

  render() {
    const { title, body, author, likesCount, dateAdded, id } = this.state.post;

    let UserId = "";
    if (parseToken() !== undefined) {
      const decoded = parseToken();
      UserId = decoded.Id;
    } else {
      UserId = undefined;
    }

    return (
      (this.state.isLoaded && (
        <React.Fragment>
          <div className="border mt-2">
            <li className="list-group-item">
              <div className="d-flex flex-column mb-3">
                <div className="d-flex align-items-end mb-2  ">
                  <p className="m-0">
                    posted by <strong>{author.userName}</strong>
                  </p>
                  <Avatar {...author} />
                  <p className="m-0">
                    <em>{normalizeDate(dateAdded)}</em>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <h1 className="font-weight-light text-center">{title}</h1>
                </div>
              </div>
              <div>
                <ReactMarkdown>{body}</ReactMarkdown>
                <Like count={likesCount} />
                {UserId == author.id && (
                  <React.Fragment>
                    <span
                      className="material-icons"
                      style={{ cursor: "pointer" }}
                    >
                      settings
                    </span>
                    <span
                      className="material-icons"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        apiDelete.deletePost(id);
                        this.props.history.replace("/posts");
                      }}
                    >
                      delete
                    </span>
                  </React.Fragment>
                )}
              </div>
            </li>
          </div>
        </React.Fragment>
      )) || <div>Loading</div>
    );
  }
}

export default withRouter(Post);
