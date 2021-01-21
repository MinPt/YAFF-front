import axios from "axios";
import { apiEndpoint } from "../config";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: apiEndpoint,
});

api.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  toast(error.toString());
  if (!expectedError) {
    console.log("Unexpected error");
    toast.success("Unexpected error occurs");
  }

  return Promise.reject(error);
});



export default api;
