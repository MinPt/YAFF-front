import ForumApi, { apiEndpoint } from "../forumApi";

class ApiGet extends ForumApi {
  constructor(props) {
    super(props);
  }

  async getPosts(pageSize = 10, page = 1) {
    const { data } = await this.api.get(
      `posts?PageSize=${pageSize}&Page=${page}`
    );
    return data;
  }

  async getSinglePost(postId) {
    const { data } = await this.api.get(`Posts/${postId}`);
    return data;
  }

  async getComments(postId) {
    const { data } = await this.api.get(`posts/${postId}/comments`);
    return data;
  }

  async getUser(userId) {
    const { data } = await this.api.get(`profiles/${userId}`);
    return data;
  }
}

export default new ApiGet(apiEndpoint);
