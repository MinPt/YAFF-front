import ForumApi, { apiEndpoint } from "../forumApi";

class ApiPost extends ForumApi {
  constructor(props) {
    super(props);
  }

  async loginUser(user) {
    const { data } = await this.api.post("auth/login", user);
    return data;
  }

  async registerUser(user) {
    const { data } = await this.api.post("auth/register", user);
    return data;
  }
}

export default new ApiPost(apiEndpoint);
