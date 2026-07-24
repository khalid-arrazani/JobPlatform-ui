import { createContext, useReducer, useContext, useState, useEffect } from "react";
import { applyReducer } from "./reducer/applyReducer";
import { GetMyApply } from "../api/apply/Apply";

export const ApplyContext = createContext();

const initialState = {
  ListApply: null,
};

export const useApply = () => {
  return useContext(ApplyContext);
};

export default function ApplyProvider({ children }) {
  const [state, dispatch] = useReducer(applyReducer, initialState);

  const [felterData, setFelterData] = useState({
    status: "",
    search: "",
    sort: "Newest First",
    page: 1,
  });


  const ApplyJobs = async (felterData) => {
    try {
      const MyApply = await GetMyApply(felterData);

      dispatch({
        type: "ListApply",
        payload: MyApply,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
    useEffect(() => {
    ApplyJobs(felterData);
  }, [felterData]);

  return (
    <ApplyContext.Provider
      value={{
        ...state,
        dispatch,
        ApplyJobs,felterData, setFelterData
      }}
    >
      {children}
    </ApplyContext.Provider>
  );
}
