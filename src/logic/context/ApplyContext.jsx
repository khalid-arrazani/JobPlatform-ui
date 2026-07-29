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

export const useApply = () => {
  return useContext(ApplyContext);
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

  const location = useLocation();

  const ApplyJobs = async (felterData) => {
    setisLoading(true);
    try {
      const user = await getMeUser();
      let Apply;
      user?.role == "jobSeeker"
        ? (Apply = await GetMyApply(felterData))
        : user?.role == "recruiter"
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
    if (location.pathname !== "/Dashboard/My_Jobs") return;
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
