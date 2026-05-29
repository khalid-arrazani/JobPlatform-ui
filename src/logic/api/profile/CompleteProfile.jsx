import API from "../config/axios";

export const CompleteProfileJS = async (
  formData
) => {
  const response = await API.post(
    "/jobseeker",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const CompleteProfileR = async (
  formData
) => {
  const response = await API.post(
    "/recuiter",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};