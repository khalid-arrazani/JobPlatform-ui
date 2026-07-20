import API from "../config/axios";


export const ApplyForAJob = async ({JobId,frontdata}) => {

  console.log(frontdata);

  const response = await API.post(
    `/applications/${JobId}`,
   frontdata,
    { withCredentials: true }
  );
  return response.data;
};