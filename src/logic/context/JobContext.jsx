import { createContext, useReducer, useContext, useState, useEffect } from "react";

import { JobReducer } from "./reducer/jobReducer";
import { GetMyJobs } from "../api/job/Job";

export const JobContext = createContext();

const initialState = {
  JobInfo: null,
  isLoading: false,
  MyJobs: null,
};

export default function JobProvider({ children }) {
  const [state, dispatch] = useReducer(JobReducer, initialState);
  const [openModal, setOpenModal] = useState(false);

  const [felterData,setFelterData] = useState({
      status: "active",
      search: "",
      sort: "Newest First",
      page: 1,
    });

   
  const fetchCompany = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });

    try {
      const data = await GetMyJobs(felterData);
      dispatch({
        type: "SETMYJOBS",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };


  useEffect(()=>{
    fetchCompany()
  },[felterData])

  return (
    <JobContext.Provider
      value={{
        ...state,
        dispatch,
        openModal,
        setOpenModal,
        fetchCompany,felterData,setFelterData
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export const useJob = () => {
  return useContext(JobContext);
};
