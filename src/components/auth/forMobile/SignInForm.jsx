import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import logo from "./../../../assets/Logo/logo.png";

import { Button, Box, TextField, Typography, Divider } from "@mui/material";

import IconButton from "@mui/material/IconButton";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";


import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


export default function SignInMobile() {


  const outlinedPasswordId = React.useId();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };



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
              height: "10rem",
              width: "10rem",
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

            <Box
              sx={{
                width: "100%",
                height: "85%",
                boxSizing: "border-box",
                px: 2,
                py: 1,
                display:"flex",
                flexDirection:"column",justifyContent:"space-evenly"

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
                <InputLabel sx={{fontFamily:"system-ui"}} htmlFor={`${outlinedPasswordId}-input`}>
                  Enter your password
                </InputLabel>
                <OutlinedInput
                  id={`${outlinedPasswordId}-input`}
                  type={showPassword ? "text" : "password"}
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
                  label="Password"
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
                  fullWidth
                  sx={{
                    bgcolor: "#6d04a1",
                    mt: 5,
                    placeSelf: "center",
                    height: "3.5rem",
                    fontSize: "1.4rem",
                    textTransform: "none",
                    fontWeight: 400,
                    borderRadius: "10px",
                  }}
                >
                  Login
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
                  flexDirection:"column",
            
                }}
              >
                <Typography sx={{textAlign:"center",fontFamily:"system-ui",fontWeight:600,mt:2,color:"#04010fea"}}>
                  Don't have an account?
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#db93ff00",
                    color:"#6d04a1",
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
          </Box>
        </Box>
      </Box>
    </>
  );
}
