import {
  createContext,
  useReducer,
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}