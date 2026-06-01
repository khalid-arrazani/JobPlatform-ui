import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

API.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (
      error.response?.data?.message === "Access token missing" ||
      error.response?.data?.message === "Invalid or expired token"
    ) {
      console.log(123456789);
      await API.post("/auth/refresh-token");
      return API(error.config);
    } else if (error.response?.data?.message === "No refresh token") {
      localStorage.clear();
      window.location.href =
        "/login"
    }
    return Promise.reject(error);
  },
);

export default API;
