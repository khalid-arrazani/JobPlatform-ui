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

export default function SignUpForm () {

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
                          showPassword
                            ? "hide the password"
                            : "display the password"
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
              </FormControl>

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
                    position:"relative"
                  }}
                >
                 {state.loadingLogin ? 
                  <Player
                    autoplay
                    loop
                    src={loadingAnimation}
                    style={{
                      width: "6rem",
                      position:"absolute",
                      top:-20,
                      left:"35%",
                      
                    }}
                    
                  /> : "Login"}
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
