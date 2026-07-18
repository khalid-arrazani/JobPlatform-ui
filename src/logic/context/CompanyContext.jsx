import {
  createContext,
  useReducer,
  useContext,
  useState
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

 const [openCompanyInfoEdite, setOpenCompanyInfoEdite] = useState(false);
  const [part, setPart] = useState("Company Information");



  return (
    <CompanyContext.Provider
      value={{
        ...state,
        dispatch,
        openCompanyInfoEdite,
        setOpenCompanyInfoEdite,
        part, setPart

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