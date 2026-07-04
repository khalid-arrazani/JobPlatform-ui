import API from "../config/axios";

// create company 
export const create_company = async (
  formData
) => {
  const response = await API.post(
    "/company",
    formData, { withCredentials: true }
  );
  return response.data;
};



// Get my Company
export const getmyCompany = async (
) => {
  const response = await API.get(
    "/company/my-company",
     { withCredentials: true }
  );

  return response.data;
};


// Get my Company
export const getCompanyById = async ( ) => {
  const response = await API.get(
   `/company/6a42d392ef9e67e39f882ace`,
     { withCredentials: true }
  );

  return response.data;
};

// create company 
export const uptadeCompanyBanner = async (
  formData
) => {
  const response = await API.post(
    "/company/banner",
    formData, { withCredentials: true }
  );
  console.log(response.data);
  return response.data;
};

