import API from "../config/axios";

export const LoginUser = async (
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


export const Logout = async (
) => {
  const response = await API.post( "/auth/logout" );
  console.log(response.data);
  return response.data;
};