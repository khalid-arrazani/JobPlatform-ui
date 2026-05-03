import "./Login.css";
import title from "../assets/title.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import {
  Email,
  Lock,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { useState } from "react";

export default function AuthUIShowcase() {
  const [sign, setSign] = useState("Sign Up");
  const [role, setrole] = useState("JobSeeker");

  useGSAP(() => {
    gsap.set(".cardSignUp", {
      x: "80%",
      opacity: 0,
    });
  });
  // buttonsign

  function signUp() {
    if (sign === "Sign Up") {
      gsap.to(".buttonsign", {
        duration: 0.5,
        opacity: 0,
        y: "10",
        repeat: 1,

        yoyo: true,
      });

      gsap.to(".boxTronsform", {
        x: "100%",
        duration: 0.5,
        borderTopRightRadius: "0%",
        borderBottomRightRadius: "0%",
        borderBottomLeftRadius: "20%",
        borderTopLeftRadius: "20%",
      });
      gsap.to(".cardSignUp", {
        opacity: 1,
        x: "0%",
        duration: 0.5,
      });
      gsap.to(".cardSignIn", {
        x: "-100%",
        duration: 0.5,
        opacity: 0,
      });

      setSign("Sign In");
    } else {
      gsap.to(".buttonsign", {
        duration: 0.5,
        opacity: 0,
        repeat: 1,
        y: "10",
        yoyo: true,
      });
      gsap.to(".boxTronsform", {
        x: "0%",
        duration: 0.5,
        borderTopRightRadius: "20%",
        borderBottomRightRadius: "20%",
        borderBottomLeftRadius: "0%",
        borderTopLeftRadius: "0%",
      });

      gsap.to(".cardSignUp", {
        x: "70%",
        duration: 0.5,
        opacity: 0,
      });

      gsap.to(".cardSignIn", {
        x: "0%",
        duration: 0.5,
        opacity: 1,
      });

      setSign("Sign Up");
    }
  }

  function cardRecruiter() {
    setrole("Recruiter");
  }

  function cardJobSeeker() {
    setrole("JobSeeker");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#a782e7",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          height: "100vh",
          width: "100%",
          background: "#00000000",
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
                }}
              />

              <TextField
                label="Email"
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
                }}
              />

              <TextField
                label="Password"
                type="password"
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
                      role === "JobSeeker"
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
                      role === "Recruiter"
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
                sx={{
                  mt: 2,
                  height: "55px",
                  width: "50%",
                  borderRadius: "15px",
                  fontSize: "18px",
                  textTransform: "none",
                  background:
                    "linear-gradient(to right,rgb(28, 43, 56),rgb(132, 0, 255))",
                }}
              >
                Create Account
              </Button>
            </Card>
          </Container>

          <Card
            className="boxTronsform"
            sx={{
              height: "85vh",
              width: "50%",
              background: "#868484",
              borderTopRightRadius: "20%",
              borderBottomRightRadius: "20%",
              borderBottomLeftRadius: "0%",
              borderTopLeftRadius: "0%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0",
              overflow: "hidden",
              position: "relative",
              zIndex: "2",
            }}
          >
            <Typography
              style={{
                width: "100%",
                zIndex: 10,
                position: "absolute",
                color: "#e4e4e4",
                top: "15%",
                textAlign: "center",
                fontSize: "200%",
                fontFamily: "Space Grotesk",
                letterSpacing: "6px",
                fontWeight: 700,
              }}
            >
              WELCOME
            </Typography>
            <img
              src={title}
              alt=""
              style={{
                width: "80%",
                zIndex: 10,
                position: "absolute",
                background: "#c2b6b600",
                top: "20%",
              }}
            />
            <Typography
              style={{
                width: "100%",
                zIndex: 10,
                position: "absolute",
                color: "#e4e4e4",
                top: "50%",
                textAlign: "center",
                fontSize: "150%",
                fontFamily: "monospace",
              }}
            >
              Your Next Career Starts Here
            </Typography>

            <div className="gradient"> </div>

            <Container
              sx={{
                height: "100%",
                width: "100%",
                background: "#1d1a1a",
                margin: "0px",
              }}
              style={{
                margin: "0px",
                padding: "0px",
              }}
            >
              <CardContent
                sx={{ height: "50%", width: "100%", zIndex: 8888 }}
                style={{
                  margin: "0px",
                  padding: "0px",
                }}
              ></CardContent>

              <CardContent
                sx={{
                  height: "50%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 5,
                }}
                style={{
                  padding: 0,
                }}
              >
                <Button
                  className="buttonsign"
                  onClick={signUp}
                  size="large"
                  sx={{
                    zIndex: 5,
                    color: "#e7e7e7fd",
                    height: "50px",
                    width: "40%",
                    fontSize :"20px",
                    backdropFilter:"blur(20px)",
                     border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {sign}
                </Button>
              </CardContent>
            </Container>
          </Card>

          <Card
            sx={{
              height: "90%",
              width: "50%",
              borderRadius: "25px",
              boxShadow: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff00",
            }}
          >
            <Card
              className="cardSignIn"
              sx={{
                height: "80%",
                width: "80%",
                borderRadius: "25px",
                backdropFilter: "blur(10px)",
                background: "#c0c0c033",
                border: "1px solid rgba(255, 255, 255, 0.13)",
              }}
            >
              <CardContent
                sx={{
                  height: "20%",
                  justifyContent: "center",
                  background: "#3abb4500",
                  marginTop: "20px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: 2,
                  }}
                >
                  Sign In
                </Typography>
              </CardContent>

              <CardContent
                sx={{
                  height: "80%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                }}
              >
                <TextField
                  label="Email"
                  variant="standard"
                  sx={{ width: "85%", marginBottom: "20px" }}
                />

                <TextField
                  label="Password"
                  variant="standard"
                  type="password"
                  sx={{ width: "85%", margin: "  10px 0" }}
                />

                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ m: "20px" }}
                >
                  Sign In
                </Button>
                <Button variant="TEXT">Forgot Password ?</Button>
              </CardContent>
            </Card>
          </Card>
        </Card>
      </Container>
    </Box>
  );
}
