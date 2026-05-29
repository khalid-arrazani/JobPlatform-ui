import {
  createContext,
  useReducer,
  useState,
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

 const [sign, setSign] = useState("Sign Up");
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