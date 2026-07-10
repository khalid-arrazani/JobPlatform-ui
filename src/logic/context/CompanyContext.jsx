import {
  createContext,
  useReducer,
  useContext
} from "react";


import { companyReducer } from "./reducer/companyReducer"; 



export const CompanyContext = createContext();


const initialState = {
  Company: null,
  isLoading: false,
};

export default function CompanyProvider({
  children,
}) {

  const [state, dispatch] =
    useReducer(
      companyReducer,
      initialState
    );

    



  return (
    <CompanyContext.Provider
      value={{
        ...state,
        dispatch,

      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export const useCompany = () => {
  return useContext(
    CompanyContext
  );
};