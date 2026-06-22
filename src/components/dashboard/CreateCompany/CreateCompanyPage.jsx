import { Card, Typography, Box, Divider,Button } from "@mui/material";
import Left_side from "./left_Side";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";

export default function CreateCompanyPage() {
    const [step , setStep] = useState(0)

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
            py: 2,
            position:"relative",
            boxSizing:"border-box"
          }}
        >


          <Stepper  sx={{ width: "50%" }} activeStep={step}>
            <Step sx={{ fontSize: "0.8rem" }}>

              <StepLabel >
                <Typography sx={{ fontSize: "0.8rem" }}>First step </Typography>
              </StepLabel>

            </Step>

            <Step>
              <StepLabel><Typography sx={{ fontSize: "0.8rem" }}>second step</Typography></StepLabel>
            </Step>

            <Step>
              <StepLabel><Typography sx={{ fontSize: "0.8rem" }}>Third step </Typography></StepLabel>
            </Step>
          </Stepper>

          <Button onClick={()=>{setStep((prev)=> prev + 1)}} sx={{position:"absolute",bottom:1,right:10}}> Next Step</Button>

          <Button disabled={step==0} onClick={()=>{setStep((prev)=> prev - 1)}} sx={{position:"absolute",bottom:1,left:10}}> Back Step</Button>



        </Box>
      </Box>
    </>
  );
}
