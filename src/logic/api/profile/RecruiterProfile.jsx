import API from "../config/axios";

export const loginUser = async (
  formData
) => {
  const response = await API.post(
    "/auth/login",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

export const RegisterUser = async (
  formData
) => {
  const response = await API.post(
    "/auth/register",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};