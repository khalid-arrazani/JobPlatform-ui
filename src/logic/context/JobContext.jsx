import {
  createContext,
  useReducer,
  useContext,
  useState
} from "react";


import { JobReducer } from "./reducer/jobReducer";



export const JobContext = createContext();


const initialState = {
  JobInfo: null,
  isLoading: false,
};

export default function JobProvider({
  children,
}) {

  const [state, dispatch] =
    useReducer(
      JobReducer,
      initialState
    );
  const [openModal, setOpenModal] = useState(false);



  return (
    <JobContext.Provider
      value={{
        ...state,
        dispatch,openModal, setOpenModal

      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export const useJob = () => {
  return useContext(
    JobContext
  );
};