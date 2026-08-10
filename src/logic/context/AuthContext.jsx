import {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";

import { authReducer } from "./reducer/authReducer";
import { getMeUser } from "../api/user/user";

export const AuthContext = createContext();

const initialState = {
  user: null,
};

export default function AuthProvider({ children }) {
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [state, dispatch] = useReducer(authReducer, initialState);

  const fetchUser = async () => {
    try {
      const user = await getMeUser();

      dispatch({
        type: "GET-USER",
        payload: user,
      });
      console.log(user);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(state);

  const [sign, setSign] = useState("Sign In");

  const checkRole = state.user?.role;

  return (
    <AuthContext.Provider
      value={{
        ...state,
        checkRole,
        dispatch,
        snackBar,
        setSnackBar,
        sign,
        setSign,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
