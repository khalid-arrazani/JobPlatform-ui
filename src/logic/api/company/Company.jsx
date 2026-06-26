import API from "../config/axios";

// create company 

export const create_company = async (
  formData
) => {
  const response = await API.post(
    "/company",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

