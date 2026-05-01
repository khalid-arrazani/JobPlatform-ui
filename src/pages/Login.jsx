import "./Login.css"


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
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #cbced4, #9ea4af, #3f5e91b7)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          height: "100vh",
          width: "100%",
          background: "#ffffff00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "85vh",
            width: "80%",
            background: "#ffffff",
            borderRadius: "25px",
            display: "flex",
          }}
        >
          <Card
            sx={{
              height: "85vh",
              width: "50%",
              background: "#918a8a",
              borderRadius: " 0 20% 20% 0   ",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}
          >
        <div className="gradient"></div>
          </Card>

          <Card
            sx={{
              height: "85vh",
              width: "50%",
              borderRadius: "25px",
              boxShadow:0
            }}
          ></Card>
        </Card>
      </Container>
    </Box>
  );
}
