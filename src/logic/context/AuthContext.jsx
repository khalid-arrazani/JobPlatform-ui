import {
  createContext,
  useReducer,
  useState,
  useContext,
} from "react";

import { authReducer } from "./reducer/authReducer";





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

   console.log(state);


 const [sign, setSign] = useState("Sign In");

 const checkRole = state.user?.role



  return (
    <AuthContext.Provider
      value={{
        ...state,
        checkRole,
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