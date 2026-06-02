import LoadingImg from "../../../assets/LoadingImg.svg"

import Lottie from "lottie-react";

import loadingAnimation from "../../../assets/loadingAnimation.json";


import {

  Card,
  Box,
  Divider,
} from "@mui/material";

export default function LoadingPage (){


    return <>
    <Box sx={{width:"100%", height:"100%", display:"flex" , justifyContent:"center", alignContent:"center" }}>

    <Lottie
      animationData={loadingAnimation}
      loop={true}
      style={{
        width: 200,
        height: 200,
      }}
    />

    </Box>
    </>
}