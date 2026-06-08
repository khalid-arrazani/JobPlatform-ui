import API from "../config/axios";

export const createJob = async (jobData) => {
  const response = await API.post(
    "/jobs/PostJob",
    jobData,
    { withCredentials: true }
  );

  return response.data;
};


export const getJobList = async () => {
  const response = await API.get(
    "/jobs/Jobs",
    { withCredentials: true }
  );

  return response.data;
};