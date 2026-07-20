import API from "../config/axios";


export const ApplyForAJob = async ({JobId,frontdata}) => {

  console.log(frontdata);
 const data = JSON.stringify(frontdata)
  const response = await API.post(
    `/applications/${JobId}`,
   data,
    { withCredentials: true }
  );
  return response.data;
};