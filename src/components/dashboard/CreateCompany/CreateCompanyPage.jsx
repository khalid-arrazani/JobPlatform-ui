import { Card, Typography, Box, Divider, Button } from "@mui/material";
import Left_side from "./left_Side";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState } from "react";

export default function CreateCompanyPage() {
  const [step, setStep] = useState(0);

  const steps = ["Company Information", "Additional Details", "Branding"];

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
            px:4
          }}
        >
          {/* header */}
          <Box
            sx={{
             
              display: "flex",
              justifyContent: "space-between",
               
              py:2
            }}
          >
            {/* title part side  */}
            <Box>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#0f0e27ea",
                  fontFamily: "-apple-system",
                  pl: 1,
                }}
              >
                Creat Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#38374dea",
                  fontFamily: "-apple-system",
                  pl: 1,
                }}
              >
                Company Information
              </Typography>
            </Box>

            {/* stepper part side  */}
            <Box sx={{ display: "flex", gap: 1, p: 1, alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  color: "#0f0e27ea",
                }}
              >
            
                step {step + 1} of 3
              </Typography>

              <Stepper
                activeStep={step}
                sx={{
                  width: "10rem",
                  my: 2,

                  "& .MuiStepIcon-root": {
                    fontSize: "1.5rem",
                  },
                }}
              >
                {steps.map((label) => (
                  <Step sx={{ p: 0 }} key={label}>
                    <StepLabel
                      sx={{ "& .MuiStepLabel-iconContainer": { p: 0, mx: 1 } }}
                    ></StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>

          <Box sx={{height:"70%",width:"100%" ,border:"solid 0.5px #b3b0b069",borderRadius:"15px"}}>

          </Box>


          <Button
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            sx={{ position: "absolute", bottom: 1, right: 10 }}
          >
            {" "}
            Next Step
          </Button>

          <Button
            disabled={step == 0}
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
            sx={{ position: "absolute", bottom: 1, left: 10 }}
          >
            {" "}
            Back Step
          </Button>
        </Box>
      </Box>
    </>
  );
}
