import API from "../config/axios";

export const getMeJS = async (
) => {
  const response = await API.get(
    "/jobseeker/me",
     { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const getMeR = async (
) => {
  const response = await API.get(
    "/recuiter/me",
     { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const updateProfileHeader = async (
  formData
) => {
  const response = await API.put(
    "/jobseeker/me",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};


export const updateProfilePhoto = async (
  formData
) => {
  const response = await API.put(
    "/jobseeker/update-ProfilePhoto",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};


