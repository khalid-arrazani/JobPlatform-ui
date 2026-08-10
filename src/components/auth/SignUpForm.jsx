import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useContext } from "react";

import { RegisterUser } from "../../logic/api/auth/auth";

import { AuthContext } from "../../logic/context/AuthContext";

export default function SingUpPage() {
  
  const [role, setrole] = useState("jobSeeker");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    username: false,
    password: false,
  });

  const { dispatch , setSnackBar , setSign } = useContext(AuthContext);

  const handleRegister = async () => {
    try {
      console.log("Register done");
      const data = await RegisterUser({
        email,
        password,
        role,
        username
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
      setSign("Sign In")
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
    <>
      <Container
        sx={{
          position: "absolute",
          width: "34%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Card
          className="cardSignUp"
          sx={{
            height: "90%",
            width: "90%",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "30px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            p: 1,
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              mb: 0,
            }}
          >
            Sign Up
          </Typography>

          <TextField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            error={touched.username && !!errors.username}
            helperText={touched.username ? errors.username : ""}
            onBlur={() =>
              setTouched({
                ...touched,
                username: true,
              })
            }
            variant="standard"
            size="small"
            sx={{
              input: {
                color: "white",
              },
              label: {
                color: "#d1d1d1",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
              width: "90%",
              mb:0
            }}
          />

          <TextField
            label="Email"
            variant="standard"
            error={touched.email && !!errors.email}
            helperText={touched.email ? errors.email : ""}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() =>
              setTouched({
                ...touched,
                email: true,
              })
            }
            sx={{
              input: {
                color: "white",
              },
              label: {
                color: "#d1d1d1",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
              width: "90%",
              m:0
            }}
          />

          <TextField
            label="Password"
            type="password"
            error={touched.password && !!errors.password}
            helperText={touched.password ? errors.password : ""}
            onBlur={() =>
              setTouched({
                ...touched,
                password: true,
              })
            }
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            sx={{
              input: {
                color: "white",
              },
              label: {
                color: "#d1d1d1",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
              width: "90%",
              mt:0
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Card
              className="cardJobSeeker"
              onClick={cardJobSeeker}
              sx={{
                flex: 1,
                p: 1,
                cursor: "pointer",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                border:
                  role === "jobSeeker"
                    ? "1px solid #2196f3"
                    : "1px solid transparent",

                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                  p: 0,
                }}
              >
                Job Seeker
              </Typography>

              <Typography
                sx={{
                  color: "#cfcfcf",
                  mt: 1,
                  fontSize: "10px",
                }}
              >
                Find jobs and apply easily
              </Typography>
            </Card>

            <Card
              className="cardRecruiter"
              onClick={cardRecruiter}
              sx={{
                flex: 1,
                p: 1,
                cursor: "pointer",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                border:
                  role === "recruiter"
                    ? "1px solid #2196f3"
                    : "1px solid transparent",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
                width: "120px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Recruiter
              </Typography>

              <Typography
                sx={{
                  color: "#cfcfcf",
                  mt: 1,
                  fontSize: "10px",
                }}
              >
                Post jobs and hire talent
              </Typography>
            </Card>
          </Box>

          <Button
            variant="contained"
            disabled={!isFormValid}
            onClick={handleRegister}
            sx={{
              mt: 2,
              height: "55px",
              width: "50%",
              borderRadius: "15px",
              fontSize: "18px",
              textTransform: "none",
              background: "#481a5a",
            }}
          >
            Create Account
          </Button>
        </Card>
      </Container>
    </>
  );
}
