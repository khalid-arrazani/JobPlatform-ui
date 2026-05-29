import "../../pages/Login.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { useState, useContext } from "react";

import { LoginUser } from "../../logic/api/auth/auth";

import { AuthContext } from "../../logic/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
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

      if (!data.user.isComplete) {
        navigate("/CompleteProfile");
      } else {
        navigate("/");
      };

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
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              sx={{ width: "85%", marginBottom: "20px" }}
            />

            <TextField
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              variant="standard"
              type="password"
              sx={{ width: "85%", margin: "  10px 0" }}
            />

            <Button
              variant="contained"
              onClick={handleLogin}
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
    </>
  );
}
