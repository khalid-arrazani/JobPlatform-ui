import API from "../config/axios";

export const createJob = async (jobData) => {
  const response = await API.post(
    "/jobs/PostJob",
    jobData,
    { withCredentials: true }
  );

  return response.data;
};


