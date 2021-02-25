import ForumApi, { apiEndpoint } from "../forumApi";

class ApiDelete extends ForumApi {
  constructor(props) {
    super(props);
  }

  async deletePost(postId) {
    const { data } = await this.api.delete(`posts/${postId}`);
    return data;
  }
}

export default new ApiDelete(apiEndpoint);
