import { Card, Typography, Box, Divider, Button } from "@mui/material";
import Left_side from "./left_Side";

import { useEffect, useState } from "react";

import Header from "./header";
import ButtonB from "./ButtonB";
import CompanyInformationForm from "./CompanyInformationForm";
import MoreInfo from "./MoreInfo";
import Branding from "./Branding";

export default function CreateCompanyPage() {



  const [step, setStep] = useState(0);
  
  const next = () => {
    setStep((prev) => prev + 1);
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };



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

          {/* Content */}
          {step == 0 ? (
            <CompanyInformationForm />
          ) : step == 1 ? (
            <MoreInfo />
          ) :step == 2 ? 
          <Branding />:
          null}

          {/* Bottom */}
          <ButtonB step={step} setStep={setStep} next={next} back={back}/>
        </Box>
      </Box>
    </>
  );
}
