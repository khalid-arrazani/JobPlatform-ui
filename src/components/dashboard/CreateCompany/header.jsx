import { Card, Typography, Box, Divider, Button } from "@mui/material";
import Left_side from "./left_Side";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


  const steps = ["Company Information", "Additional Details", "Branding"];

export default function Header({step}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          py: 2,
          height: "11.8%",
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
    </>
  );
}
