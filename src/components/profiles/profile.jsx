import React, { Component } from "react";
import api from "../../gateways/CRADops/apiGet";
import Posts from "../posts/posts";
import { domain } from "../../config.json";
import { parseToken } from "../../utilities/parseToken";

class UserProfile extends Component {
  state = {
    isLoaded: false,
    profile: {},
  };

  async componentDidMount() {
    try {
      const data = await api.getUser(this.props.match.params.id);
      const isLoaded = true;
      this.setState({ profile: data });
      this.setState({ isLoaded });
    } catch (error) {
      this.props.history.replace("/not-found");
    }
  }

  render() {
    let userId = "";
    if (parseToken() !== undefined) {
      const decoded = parseToken();
      userId = decoded.Id;
    } else {
      userId = undefined;
    }

    const {
      userName,
      userStatus,
      bio,
      registrationDate,
      lastLoginDate,
      avatar,
    } = this.state.profile;

    const regDate = new Date(registrationDate).toUTCString();

    return (
      (this.state.isLoaded && (
        <div className="">
          <div className="d-flex ">
            <img src={domain + avatar} alt="avatar" className="img-thumbnail" />

            <div className="d-flex flex-column mx-4 w-100">
              <div className="d-flex justify-content-between ">
                <p className="font-weight-bold">{userName}</p>
                <p className="ml-2">
                  <strong>registration date:</strong> <em>{regDate}</em>
                </p>
                {userId === this.props.match.params.id && (
                  <span
                    className="material-icons"
                    style={{ cursor: "pointer" }}
                  >
                    settings
                  </span>
                )}
              </div>
              <div>
                <p className="font-italic">{userStatus}</p>
              </div>
            </div>
          </div>
          <div>{bio}</div>
          <div>
            <Posts
              getData={(pageSize = 10, page = 1) =>
                api.getUserPosts(this.props.match.params.id, pageSize, page)
              }
            />
          </div>
        </div>
      )) || <div className="display-4">Loading</div>
    );
  }
}

export default UserProfile;
