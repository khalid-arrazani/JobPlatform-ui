import API from "../config/axios";

export const getMe = async (
  
) => {
  const response = await API.get(
    "/jobseeker/me",
     { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

