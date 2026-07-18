import {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect
  
} from "react";

import { authReducer } from "./reducer/authReducer";
import { useLocation } from "react-router-dom";




export const AuthContext = createContext();


const initialState = {
  user: null,
};

export default function AuthProvider({
  children,
}) {
 const [snackBar, setSnackBar] = useState({
  open: false,
  message: "",
  severity: "success",
});



  const [state, dispatch] =
    useReducer(
      authReducer,
      initialState
    );




 const [sign, setSign] = useState("Sign In");
  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        snackBar,
         setSnackBar,
         sign, 
         setSign
      }}


    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(
    AuthContext
  );
};