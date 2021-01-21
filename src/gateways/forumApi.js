import api from "./api";

export class ForumApi {
  constructor(_api) {
    this.api = api;
  }

  async getposts(pageSize = 10, page = 1) {
    const { data } = await this.api.get(
      `posts?pageSize=${pageSize}&page=${page}`
    );

    return data;
  }
}

export default new ForumApi(api);
