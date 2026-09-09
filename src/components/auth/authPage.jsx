import WelcomePage from "./WelcomePanel";
import SignIn from "./SignInForm";
import SingUpPage from "./SignUpForm";

import { Card, Container } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import SignInMobile from "./forMobile/SignInForm";

import { useState, useContext } from "react";

import { LoginUser } from "../../logic/api/auth/auth";

import { AuthContext } from "../../logic/context/AuthContext";
import { useNavigate } from "react-router-dom";
import SignPc from "./forPc/Sign";

export default function AuthPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch, setSnackBar } = useContext(AuthContext);




  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:1024px)");



  const handleLogin = async () => {
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
        type: "LOGIN",
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
    }
  };





  return (
    <>
      {isMobile && <SignInMobile handleLogin={handleLogin}  password={password}  setPassword={setPassword} email={email}  setEmail={setEmail} />}

      {!isMobile && (
       <SignPc/>
      )}
    </>
  );
}
