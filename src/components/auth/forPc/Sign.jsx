
import WelcomePage from "./WelcomePanel";
import SignIn from "./SignInForm";
import SingUpPage from "./SignUpForm";

import { Card, Container } from "@mui/material";


import { useState, useContext } from "react";

import { LoginUser } from "../../../logic/api/auth/auth";

import { AuthContext } from "../../../logic/context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function SignPc() {

const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch, setSnackBar } = useContext(AuthContext);




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



    return <>

    <Container
          sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              height: "85vh",

              width: "80%",
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2025/09/19/05/48/mountain-range-9842371_1280.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SingUpPage />
            <WelcomePage />
            <SignIn handleLogin={handleLogin}  password={password}  setPassword={setPassword} email={email}  setEmail={setEmail} />
          </Card>
        </Container>
    </>
}