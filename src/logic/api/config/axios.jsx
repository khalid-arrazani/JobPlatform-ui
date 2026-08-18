import axios from "axios";

const API = axios.create({
  baseURL: "https://job-platform.fly.dev/api",
  withCredentials: true,
});

let refreshPromise = null;



API.interceptors.response.use(

  function (response) {
    return response;
  },


  async function (error) {

    const originalRequest =
      error.config;


    const message =
      error.response?.data?.message;

    if (
      message ===
        "Access token missing" ||
      message ===
        "Invalid or expired token"
    ) {

      if (
        originalRequest._retry
      ) {
        return Promise.reject(
          error
        );
      }

      originalRequest._retry =
        true;

        

      try {

        if (
          !refreshPromise
        ) {

          refreshPromise =
            API.post(
              "/auth/refresh-token"
            );

        }

        await refreshPromise;

        refreshPromise =
          null;

        return API(
          originalRequest
        );

      } catch (
        refreshError
      ) {

        refreshPromise =
          null;

        localStorage.clear();

        window.location.href =
          "/login";

        return Promise.reject(
          refreshError
        );
      }
    }

    if (
      message ===
      "No refresh token"
    ) {

      localStorage.clear();

      window.location.href =
        "/login";
    }

    return Promise.reject(
      error
    );
  }

);

export default API;
