import API from "../config/axios";

export const createJob = async (jobData) => {
  const response = await API.post(
    "/jobs/PostJob",
    jobData,
    { withCredentials: true }
  );

  return response.data;
};


export const UpdateJob = async (jobData , JobId) => {
  const response = await API.put(
    `/jobs/UpdateJob/${JobId}`,
    jobData,
    { withCredentials: true }
  );
  return response.data;
};


export const getJobList = async (filter) => {
   console.log(filter);
  const response = await API.get(
     `/jobs/Jobs?filter=${filter}`,
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



export const GetMyJobs = async (felterData) => {

  const response = await API.get(
     `/jobs/My-Jobs`,
    {params:felterData, withCredentials: true }
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



export const ToggleStatusJob = async (JobId) => {
  const response = await API.put(
     `/jobs/Status_My-Jobs/${JobId}`,
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