import API from "../config/axios";

export const createJob = async (
) => {
  const response = await API.get(
    "/jobs/PostJob",
     { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};


