import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import logo from "./../../../assets/Logo/logo.png";

import { Box } from "@mui/material";

import SignIn from "./SignInForm";
import SignUpForm from "./SignUpForm";

import { useContext, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { AuthContext } from "../../../logic/context/AuthContext";
import gsap from "gsap";

export default function AuthMobile() {
  const { sign } = useContext(AuthContext);

  useEffect(() => {
    if (sign === "Sign Up") {

       gsap.to(".SingIn", {
        display: "none",
        duration: 0.5,
      });

      gsap.to(".SignUp", {
        display: "block",
        duration: 0.5,
      });

     
      gsap.to(".base", {
        height: "95%",
        duration: 0.5,
      });


    } else {

     gsap.to(".SignUp", {
        display: "none",
        duration: 0.5,
      }); 

      gsap.to(".SingIn", {
        display: "block",
        duration: 0.5,
      });
      
      
      gsap.to(".base", {
        height: "75%",
        duration: 0.5,
      });

    }
  }, [sign]);

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
              top: 0,
              placeSelf: "center",
            }}
          >
            <img src={logo} width={"100%"} />
          </Box>

          <Box
            className="base"
            sx={{
              height: "75%",
              width: "100%",
              bgcolor: "#fffffffc",
              borderTopLeftRadius: "80% 40% ",

              borderTopRightRadius: "250% 40% ",
              borderTop: "solid #b62ced",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ width: "100%", height: "4rem" }}></Box>




            <Box  className="SingIn" sx={{ height: "100%" ,width:"100%"}}>
              <SignIn className="SingIn" />
            </Box>




            <Box className="SignUp" sx={{ height: "100%" ,width:"100%"}}>
              <SignUpForm  />
            </Box>



          </Box>
        </Box>
      </Box>
    </>
  );
}
