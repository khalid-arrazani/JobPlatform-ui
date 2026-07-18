import {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect
  
} from "react";

import { authReducer } from "./reducer/authReducer";
import { useLocation } from "react-router-dom";
import { GetMe } from "../api/auth/auth";



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

console.count("AuthProvider");

  const [state, dispatch] =
    useReducer(
      authReducer,
      initialState
    );



    const location = useLocation();
    
    
      useEffect(() => {
      const publicRoutes = [
        "/login",
        "/register",
        "/forgot-password",
      ];

      
    
      if (publicRoutes.includes(location.pathname)) return;
    
      const fetchAuth = async () => {
        try {
          const data = await GetMe();
          console.log("1111",data);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchAuth();
    }, []);



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