import { createContext, useReducer, useContext, useState } from "react";
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

  const [felterData, setFelterData] = useState("");


  const ApplyJobs = async (felterData) => {
    try {
      const MyApply = await GetMyApply({status:felterData});

      dispatch({
        type: "ListApply",
        payload: MyApply,
      });
    } catch (err) {
      console.log(err);
    }
  };
  

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
