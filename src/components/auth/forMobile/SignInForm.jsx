import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
 
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

export default function SignIn() {
  const {sign , setSign, email, setEmail, password, setPassword, handleLogin, ...state } =
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
          width: "100%",
          height: "85%",
          boxSizing: "border-box",
          px: 3,
          py: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: "1.2rem",
            fontFamily: "system-ui",
            color: "#040217ec",
          }}
        >
          Email Address
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#ececec",
            pl: 1,
            borderRadius: "10px",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Email-2--Streamline-Cyber" height="35" width="35">
  
  <path fill="#ffffff" d="M23.2487 3.81909H0.751312V20.1809H23.2487V3.81909Z" stroke-width="1"></path>
  <path fill="#bbd8ff" d="M20.999 18.1357H3.00101L0.751312 20.1809H23.2487l-2.2497 -2.0452Z" stroke-width="1"></path>
  <path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.2487 3.81909 12 15.3746 0.751312 3.81909" stroke-width="1"></path>
  <path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m0.751312 20.181 8.283098 -7.6696" stroke-width="1"></path>
  <path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m14.9656 12.5114 8.2831 7.6696" stroke-width="1"></path>
  <path stroke="#092f63" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M23.2487 3.81909H0.751312V20.1809H23.2487V3.81909Z" stroke-width="1"></path>
</svg>

          <TextField
            label="Enter your email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              bgcolor: "#f0f0f0a9",
              borderRadius: "10px",

              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          ></TextField>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
            fontSize: "1.2rem",
            fontFamily: "system-ui",
            color: "#040217ec",
            mt: 3,
          }}
        >
          Password
        </Typography>
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#ececec",
            pl: 1,
            borderRadius: "10px",
          }}
        >


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Touch-Id--Streamline-Ultimate" height="35" width="35">
 
  <path d="M21 9.5a9 9 0 0 0 -18 0V24h18Z" fill="#9feaff" stroke-width="1"></path>
  <path d="M12 0.5a9 9 0 0 0 -9 9V24h9Z" fill="#dff9ff" stroke-width="1"></path>
  <path d="m3 12.5 0 11" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="M16.976 2A9 9 0 0 0 3 9.5" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="M21 23.5v-14a8.953 8.953 0 0 0 -1.516 -5" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="M18 16V9.5a6 6 0 0 0 -12 0v14" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="m18 23.5 0 -4.5" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="m9 17.5 0 6" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="M15 23.5v-14a3 3 0 0 0 -6 0v5" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="m12 10 0 8" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
  <path d="m12 21 0 2.5" fill="none" stroke="#00303e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
</svg>

        <FormControl
          fullWidth
          sx={{
            bgcolor: "#f0f0f0a9",
            borderRadius: "10px",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
          variant="outlined"
        >
          <InputLabel
            sx={{ fontFamily: "system-ui" }}
            htmlFor={`${outlinedPasswordId}-input`}
          >
            Enter your password
          </InputLabel>
          <OutlinedInput
            id={`${outlinedPasswordId}-input`}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Enter your password"
          />
        </FormControl></Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "1.5rem",
          }}
        >
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            disabled={state.loadingLogin}
            sx={{
              bgcolor: "#6d04a1",
              mt: 5,
              placeSelf: "center",
              height: "3.5rem",
              fontSize: "1.4rem",
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "10px",
              display: "flex",
              alignContent: "center",
              position: "relative",
            }}
          >
            {state.loadingLogin ? (
              <Player
                autoplay
                loop
                src={loadingAnimation}
                style={{
                  width: "6rem",
                  position: "absolute",
                  top: -20,
                  left: "35%",
                }}
              />
            ) : (
              "Login"
            )}
          </Button>
        </Box>

        <Divider
          sx={{
            fontFamily: "cursive",
            fontSize: "1.3rem",
            color: "#0f011a",
          }}
        >
          NexHire
        </Divider>

        <Box
          sx={{
            display: "flex",
            mb: "1.5rem",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "system-ui",
              fontWeight: 600,
              mt: 2,
              color: "#04010fea",
            }}
          >
            Don't have an account?
          </Typography>

          <Button
            variant="contained"
            fullWidth
            onClick={()=>{sign == "Sign Up"?setSign("Sign In"):setSign("Sign Up")}}
            sx={{
              bgcolor: "#db93ff00",
              color: "#6d04a1",
              mt: 1,
              placeSelf: "center",
              height: "3.5rem",
              fontSize: "1.4rem",
              textTransform: "none",
              fontWeight: 500,
              borderRadius: "10px",
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </>
  );
}
