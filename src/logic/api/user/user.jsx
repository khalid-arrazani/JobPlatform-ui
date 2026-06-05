import API from "../config/axios";



export const getMeUser = async (
) => {
  const response = await API.get(
    "/users/me",
     { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};