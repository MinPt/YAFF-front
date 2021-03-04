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

  async createPost(post) {
    const { data } = await this.api.post("posts", post);
    return data;
  }

  async createComment(comment) {
    const { data } = await this.api.post("comments", comment);
    return data;
  }
}

export default new ApiPost(apiEndpoint);
