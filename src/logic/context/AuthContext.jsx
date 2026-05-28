import {
  createContext,
  useReducer,
  useState,
} from "react";

import { authReducer } from "./reducer/authReducer";



export const AuthContext =
  createContext();

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

console.log(snackBar);

  const [state, dispatch] =
    useReducer(
      authReducer,
      initialState
    );


  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        snackBar,
         setSnackBar
      }}


    >
      {children}
    </AuthContext.Provider>
  );
}