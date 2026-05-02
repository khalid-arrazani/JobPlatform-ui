import "./Login.css";

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
  useGSAP(() => {
    gsap.to(".box", {
      delay:2,
      x: "100%",
      duration: 1,
      borderTopRightRadius: "0%",
      borderBottomRightRadius: "0%",
      borderBottomLeftRadius: "20%",
      borderTopLeftRadius: "20%",
    });
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#523b79",
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
          <Card
            className="box"
            sx={{
              height: "85vh",
              width: "50%",
              background: "#7e7e7e",
              // borderRadius: " 0 20% 20% 0 ",
              borderTopRightRadius: "20%",
              borderBottomRightRadius: "20%",
              borderBottomLeftRadius: "0%",
              borderTopLeftRadius: "0%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0",
              zIndex: "2",
            }}
          >
            <div className="gradient"></div>
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
              sx={{
                height: "80%",
                width: "80%",
                borderRadius: "25px",
                backdropFilter: "blur(5px)",
                background: "#c0c0c000",
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
                  variant="h2"
                  sx={{
                    fontWeight: "400",
                    textAlign: "center",
                    color: "#1a0d0dc0",
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
                  sx={{ m: "  20px" }}
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
