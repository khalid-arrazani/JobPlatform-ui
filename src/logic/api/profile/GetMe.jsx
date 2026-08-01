import API from "../config/axios";

export const getMeJS = async (
) => {
  const response = await API.get(
    "/jobseeker/me",
     { withCredentials: true }
  );

  return response.data;
};

export const getMeR = async (
) => {
  const response = await API.get(
    "/recuiter/me",
     { withCredentials: true }
  );

  return response.data;
};

export const updateProfileJS = async (
  formData
) => {
  const response = await API.put(
    "/jobseeker/me",
    formData, { withCredentials: true }
  );

  return response.data;
};



export const updateProfileR = async (
  formData
) => {
  const response = await API.put(
    "/recuiter/me",
    formData, { withCredentials: true }
  );
  return response.data;
};


export const updateProfilePhotoJS = async (
  formData
) => {
  const response = await API.put(
    "/jobseeker/update-ProfilePhoto",
    formData, { withCredentials: true }
  );

  return response.data;
};

export const updateProfilePhotoR = async (
  formData
) => {
  const response = await API.put(
    "/recuiter/update-ProfilePhoto",
    formData, { withCredentials: true }
  );

  return response.data;
};





export const BringProfileById = async (JobId) => {
  const response = await API.get(
     `/jobs/Jobs/${JobId}`,
    { withCredentials: true }
  );

  return response.data;
};









