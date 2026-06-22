import { Card, Typography, Box, Divider,Button } from "@mui/material";
import Left_side from "./left_Side";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function CreateCompanyPage() {
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
          <Stepper  sx={{ width: "50%" }} activeStep={1}>
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

          <Button sx={{position:"absolute",bottom:1}}> Next Step</Button>

        </Box>
      </Box>
    </>
  );
}
