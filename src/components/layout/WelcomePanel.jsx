
import title from "../../assets/title.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import { useState } from "react";

import {

  Button,
  Card,
  CardContent,
  Container,


  Typography,

} from "@mui/material";

export default function WelcomePage (){
 
    const [sign, setSign] = useState("Sign Up");
      
    
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
    return<>

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
                {/* <Typography
                  style={{
                    width: "100%",
                    zIndex: 10,
                    position: "absolute",
                    color: "#d1cecefd",
                    top: "13%",
                    textAlign: "center",
                    fontSize: "250%",
                    fontFamily: "ui-monospace",
                    letterSpacing: "6px",
                    fontWeight: 500,
                  }}
                >
                  WELCOME 
                </Typography> */}
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
                    fontSize: "180%",
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
              </>
}