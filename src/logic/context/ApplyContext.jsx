import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { applyReducer } from "./reducer/applyReducer";
import { GetApplitions, GetMyApply } from "../api/apply/Apply";
import { useLocation } from "react-router-dom";

import { useAuth } from "./AuthContext";
import { getMeUser } from "../api/user/user";

export const ApplyContext = createContext();

const initialState = {
  ListApply: null,
};



export default function ApplyProvider({ children }) {
  const [state, dispatch] = useReducer(applyReducer, initialState);

  const [isLoading, setisLoading] = useState(false);

  const [felterData, setFelterData] = useState({
    status: "",
    search: "",
    sort: "Newest First",
    page: 1,
  });

  const {checkRole} = useAuth()
  const location = useLocation();
  
  const ApplyJobs = async (felterData) => {
    setisLoading(true);
    try {
     
      let Apply;
      checkRole == "jobSeeker"
        ? (Apply = await GetMyApply(felterData))
        : checkRole == "recruiter"
          ? (Apply = await GetApplitions(felterData))
          : null;
      console.log(Apply);
      dispatch({
        type: "ListApply",
        payload: Apply,
      });
    } catch (err) {
      console.log(err?.response.data.message);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
   
    if (location.pathname !== "/Dashboard/Applications") return;

    ApplyJobs(felterData);

  }, [felterData]);

  return (
    <ApplyContext.Provider
      value={{
        ...state,
        dispatch,
        ApplyJobs,
        felterData,
        setFelterData,
        isLoading,
      }}
    >
      {children}
    </ApplyContext.Provider>
  );
}
export const useApply = () => {
  return useContext(ApplyContext);
};