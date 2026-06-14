import API from "../config/axios";



export const getMeUser = async (
) => {
  const response = await API.get(
    "/users/me",
     { withCredentials: true }
  );
  return response.data;
};