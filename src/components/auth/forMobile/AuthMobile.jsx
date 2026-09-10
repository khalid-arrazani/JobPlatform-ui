import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import logo from "./../../../assets/Logo/logo.png";
import loadingAnimation from "../../../assets/loginloadingAnimation.json";

import { Button, Box, TextField, Typography, Divider } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import { Player } from "@lottiefiles/react-lottie-player";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useContext } from "react";

import { AuthContext } from "../../../logic/context/AuthContext";
import SignIn from "./SignInForm";

export default function AuthMobile() {

  const { email, setEmail, password, setPassword, handleLogin ,...state
} =
    useContext(AuthContext);

  const outlinedPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  console.log(state.loading);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/03/23/18/24/italy-4961709_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex",
          flexDirection: "column-reverse",
          backdropFilter: "Blur(10px)",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100vw",

            backgroundSize: "cover",
            backgroundPosition: "top",
            display: "flex",
            flexDirection: "column-reverse",
            backdropFilter: "Blur(4px)",
            bgcolor: "#22032a65",
          }}
        >
          <Box
            sx={{
              height: "8rem",
              width: "8rem",
              position: "absolute",
              top: 30,
              placeSelf: "center",
            }}
          >
            <img src={logo} width={"100%"} />
          </Box>

          <Box
            sx={{
              height: "75%",
              width: "100%",
              bgcolor: "#fffffffc",
              borderTopLeftRadius: "80% 40% ",

              borderTopRightRadius: "250% 40% ",
              borderTop: "solid #b62ced",
            }}
            style={{ CornerRightUp: "" }}
          >
            <Box sx={{ width: "100%", height: "3.5rem" }}></Box>





            <SignIn/>




          </Box>
        </Box>
      </Box>
    </>
  );
}
