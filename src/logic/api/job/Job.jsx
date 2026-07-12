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



export const GetMyJobs = async () => {
  const response = await API.get(
     `/jobs/My-Jobs`,
    { withCredentials: true }
  );

  return response.data;
};

export const DeleteMyJobs = async (JobId) => {
  const response = await API.delete(
     `/jobs/Delete_My-Jobs/${JobId}`,
    { withCredentials: true }
  );
  return response.data;
};


//this for save jobds part 
export const toggleSaveJob  = async (jobData) => {
  const response = await API.post(
    "savedJob/jobs/save",
    jobData,
    { withCredentials: true }
  );
  return response.data;
};


export const getSavedJobs  = async (page) => {
  const response = await API.get(
    `savedJob/jobs/save/${page}`, 
    { withCredentials: true }
  );
  return response.data;
};