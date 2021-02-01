import axios from "axios";
import { toast } from "react-toastify";

export const apiEndpoint = "https://localhost:5001/api/v1/";
const domain = "https://localhost:5001/";

export default class ForumApi {
  constructor(apiEndpoint) {
    this.api = axios.create({
      baseURL: apiEndpoint,
    });

    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("jwt");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.api.interceptors.response.use(null, (error) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
      toast.error(error?.response?.data.message);
      if (!expectedError) {
        toast.error("Unexpected error occurs");
      }

      return Promise.reject(error);
    });
  }
}
