import { Card, Typography, Box, Divider, Button } from "@mui/material";
import Left_side from "./left_Side";


import { useEffect, useState } from "react";



import Header from "./header";
import ButtonB from "./ButtonB";

export default function CreateCompanyPage() {
  const [step, setStep] = useState(0);





  return (
    <>
      <Box
        sx={{
          height: "92.3vh",
          width: "100vw",
          bgcolor: "#F8FAFC",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        {/* Left side */}
        <Left_side />

        {/* right side */}
        <Box
          sx={{
            height: "100%",
            bgcolor: "#F8FAFC",
            width: "75%",
            borderLeft: "solid 0.5px #d5d5d5",

            position: "relative",
            boxSizing: "border-box",
            px: 4,
          }}
        >
          {/* header */}
          <Header step={step} />

          <Box
            sx={{
              height: "70%",
              width: "100%",
              border: "solid 0.5px #b3b0b069",
              borderRadius: "15px",
            }}
          ></Box>

         <ButtonB step={step}  setStep={setStep}/>

        </Box>
      </Box>
    </>
  );
}
