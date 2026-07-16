import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";

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

  const [myJobsLoading, setMyJobsLoading] = useState(false);

  const [felterData, setFelterData] = useState({
    status: "",
    search: "",
    sort: "Newest First",
    page: 1,
  });

  const fetchCompany = async () => {
    setMyJobsLoading(true);

    try {
      const data = await GetMyJobs(felterData);
      dispatch({
        type: "SETMYJOBS",
        payload: data,
      });
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      setMyJobsLoading(false);
    }
  };

  const fetchCompanyWitoutReload = async () => {
    try {
      const data = await GetMyJobs(felterData);
      dispatch({
        type: "SETMYJOBS",
        payload: data,
      });
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    
    fetchCompany();

  }, [felterData]);

  return (
    <JobContext.Provider
      value={{
        ...state,
        dispatch,
        openModal,
        setOpenModal,
        fetchCompany,
        felterData,
        setFelterData,
        myJobsLoading,
        fetchCompanyWitoutReload,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export const useJob = () => {
  return useContext(JobContext);
};
