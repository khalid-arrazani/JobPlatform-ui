import { createContext, useReducer, useContext, useState } from "react";
import { applyReducer } from "./reducer/applyReducer";



export const ApplyContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  isLoadingUptadeProfile: false,
  reloadListJob: false,
  reloadCompany: 0,
  isLoadingCompany: false,
};

export const useApply = () => {
  return useContext(ApplyContext);
};






export default function ApplyProvider({ children }) {

  const [state, dispatch] = useReducer(applyReducer, initialState);
  

  return (
    <ApplyContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ApplyContext.Provider>
  );
}
