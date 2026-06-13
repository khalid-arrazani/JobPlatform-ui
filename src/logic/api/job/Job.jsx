import API from "../config/axios";

export const createJob = async (jobData) => {
  const response = await API.post(
    "/jobs/PostJob",
    jobData,
    { withCredentials: true }
  );

  return response.data;
};


export const getJobList = async (page) => {
  const response = await API.get(
     `/jobs/Jobs?page=${page}`,
    { withCredentials: true }
  );

  return response.data;
};

export const getJobID = async (JobId) => {
  const response = await API.get(
     `/jobs/Jobs/${JobId}`,
    { withCredentials: true }
  );

  return response.data;
};

export const toggleSaveJob  = async (jobData) => {
  const response = await API.post(
    "savedJob/jobs/save",
    jobData,
    { withCredentials: true }
  );
  return response.data;
};