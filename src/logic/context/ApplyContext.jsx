import { createContext, useReducer, useContext, useState, useEffect } from "react";
import { applyReducer } from "./reducer/applyReducer";
import { GetMyApply } from "../api/apply/Apply";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ApplyContext = createContext();

const initialState = {
  ListApply: null,
};

export const useApply = () => {
  return useContext(ApplyContext);
};



export default function ApplyProvider({ children }) {
  const [state, dispatch] = useReducer(applyReducer, initialState);
  const {checkRole} = useAuth()

  const [felterData, setFelterData] = useState({
    status: "",
    search: "",
    sort: "Newest First",
    page: 1,
  });
  const [isLoading , setisLoading] = useState(false)
  const location = useLocation();

  const ApplyJobs = async (felterData) => {
    setisLoading(true)
    try {

      const MyApply = await GetMyApply(felterData);

      dispatch({
        type: "ListApply",
        payload: MyApply,
      });
    } catch (err) {
      console.log(err);
    }finally{
      setisLoading(false)
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
        ApplyJobs,felterData, setFelterData,isLoading
      }}
    >
      {children}
    </ApplyContext.Provider>
  );
}
