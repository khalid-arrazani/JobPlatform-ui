import {
  createContext,
  useReducer,
  useContext
} from "react";


import { JobReducer } from "./reducer/jobReducer";



export const JobContext = createContext();


const initialState = {
  user: null,
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



  return (
    <JobContext.Provider
      value={{
        ...state,
        dispatch,

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