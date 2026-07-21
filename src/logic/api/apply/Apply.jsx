import API from "../config/axios";


export const ApplyForAJob = async ({JobId,frontdata}) => {
  const response = await API.post(
    `/applications/${JobId}`,
   frontdata,
    { withCredentials: true }
  );
  return response.data;
};



export const CancelApplyForAJob = async (JobId) => {

  const response = await API.delete(
    `/applications/${JobId}`,
    { withCredentials: true }
  );
  return response.data;
};