import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import logo from "./../../../assets/Logo/logo.png"

import { Button, Box, CardContent, TextField, Typography } from "@mui/material";
import { CornerRightUp } from "lucide-react";

export default function SignInMobile() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/03/23/18/24/italy-4961709_1280.jpg')", backgroundSize: "cover",
            backgroundPosition: "top",
            display:"flex",
            flexDirection:"column-reverse",
        }}
      >
        <Box sx={{height:"10rem",width:"10rem",position:"absolute",top:30,placeSelf:"center"}}>
            <img src={logo} width={"100%"} />

          </Box>
        <Box sx={{height:"75%" , width:'100%',bgcolor:"#fff",borderTopLeftRadius:"100% 20% ",borderTop:"solid #b62ced"}}  style={{CornerRightUp:""}}  >
          
        <Box sx={{width:"100%",bgcolor:"#bbbbbb08",height:"8rem"}}></Box>
        <Box sx={{width:"100%",bgcolor:"#bbb",height:"10rem"}}></Box>
         
        </Box>
      </Box>
    </>
  );
}
