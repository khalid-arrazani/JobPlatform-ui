import {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";

import { authReducer } from "./reducer/authReducer";
import { getMeUser } from "../api/user/user";
import { useLocation } from "react-router-dom";

import { LoginUser, RegisterUser } from "../api/auth/auth";

export const AuthContext = createContext();

const initialState = {
  user: null,
  loading: false,
  loadingLogin: false,
};

import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }) {
  const location = useLocation();
  const [snackBar, setSnackBar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [state, dispatch] = useReducer(authReducer, initialState);

  const fetchUser = async () => {
    console.log("get me user");
    dispatch({
      type: "LOADING",
      payload: true,
    });
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
      dispatch({
        type: "LOADING",
        payload: false,
      });
    }
  };

  useEffect(() => {
    if (location.pathname == "/login") return;
    fetchUser();
  }, []);

  const [sign, setSign] = useState("Sign In");

  const checkRole = state.user?.user?.role;




  //-------------------------------------Sgin In section------------------------------------------//
  //-********************************************************************************************-//

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    dispatch({
      type: "LOADINGLOGIN",
      payload: true,
    });
    try {
      const data = await LoginUser({
        email,
        password,
      });

      setSnackBar({
        open: true,
        message: data.message,
        severity: "success",
      });

      dispatch({
        type: "LOADINGLOGIN",
        payload: data,
      });

      if (data.user.isComplete == false) {
        navigate("/CompleteProfile");
      } else {
        navigate("/Dashboard/Jobs");
      }
    } catch (error) {
      console.log(error.response.data);

      setSnackBar({
        open: true,
        message: error.response.data.message,
        severity: "error",
      });
    }finally{
       dispatch({
      type: "LOADING",
      payload: false,
    });
    }
  };


  
  //-------------------------------------Sgin Up section------------------------------------------//
  //-********************************************************************************************-//

  const [role, setrole] = useState("jobSeeker");

  const [emailR, setEmailR] = useState("");
  const [username, setUsername] = useState("");
  const [passwordR, setPasswordR] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    username: false,
    password: false,
  });

  const handleRegister = async () => {
    try {
      const data = await RegisterUser({
        email: emailR,
        password: passwordR,
        role,
        username,
      });
      dispatch({
        type: "REGISTER",
        payload: data,
      });
      setSnackBar({
        open: true,
        message: data.message,
        severity: "success",
      });
      setSign("Sign In");
    } catch (error) {
      console.log(error?.response?.data);
      setSnackBar({
        open: true,
        message: error?.response?.data?.message,
        severity: "error",
      });
    }
  };

  function cardRecruiter() {
    setrole("recruiter");
  }

  function cardJobSeeker() {
    setrole("jobSeeker");
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isUsernameValid = username.trim().length >= 3;

  const isPasswordValid = password.length >= 6;

  const isFormValid = isEmailValid && isUsernameValid && isPasswordValid;

  const errors = {
    email: !isEmailValid ? "Invalid email" : "",
    username: username.length < 3 ? "Username too short" : "",
    password: password.length < 6 ? "Password too short" : "",
  };

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


        //--------------sign  In----------------//
        

        email,
        setEmail,
        password,
        setPassword,
        handleLogin,


        //-------------sign Up-----------------//


        emailR,
        setEmailR,

        passwordR,
        setPasswordR,

        username,
        setUsername,

        touched,
        setTouched,

        handleRegister,

        cardRecruiter,
        cardJobSeeker,

        isEmailValid,
        isUsernameValid,
        isPasswordValid,
        isFormValid,

        errors,
        role, 
        setrole
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
