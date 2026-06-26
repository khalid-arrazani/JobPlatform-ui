import validator from "validator";

import {
  Card,
  Typography,
  Box,
  Divider,
  Button,
  Snackbar,
  Fade,
  Slide,
  Zoom,
  Grow,
  Alert,
} from "@mui/material";
import Left_side from "./left_Side";

import { useEffect, useState } from "react";

import Header from "./header";
import ButtonB from "./ButtonB";
import CompanyInformationForm from "./CompanyInformationForm";
import MoreInfo from "./MoreInfo";
import Branding from "./Branding";

export default function CreateCompanyPage() {
  const [snakState, setSnackStat] = useState(false);
  const [err, setErr] = useState("");
  

  const back = () => {
    setStep((prev) => prev - 1);
  };

  const [firstInfo, setFirstInfo] = useState({
    company_name: "",
    company_email: "",
    company_number: "",
    company_locatin: "",
    company_industry: "",
    company_webSite: "",
    company_about: "",
  });


  const validateForm = () => {

    if (validator.isEmpty(firstInfo.company_name.trim())) {
      setErr("Invalid email") 
      return false;
    }

    if (!validator.isEmail(firstInfo.company_email)) {
      setErr("Invalid email") 
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_number.trim()) ||
      !validator.isMobilePhone(firstInfo.company_number, "any")
    ) {
      setErr ("Invalid phone number")
      return false;
    }

    if (validator.isEmpty(firstInfo.company_locatin.trim())) {
      setErr ( "Location is required")
      return false;
    }

    if (validator.isEmpty(firstInfo.company_industry.trim())) {
      setErr  ("Industry is required")
      return false;
    }

    if (
      firstInfo.company_webSite &&
      !validator.isURL(firstInfo.company_webSite)
    ) {
      setErr("Invalid website")
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_about.trim()) ||
      !validator.isLength(firstInfo.company_about, { min: 20, max: 2000 })
    ) {
      setErr ("About company must be between 20 and 2000 characters");
      return false;
    }
    return true;
  };


  const [step, setStep] = useState(0);

  const next = () => {
    if (!validateForm()) {
      setSnackStat(true)
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleClose = () => {
    setSnackStat(false);
  };


  return (
    <>
      {/* this section for snakbar */}

      <Snackbar
        open={snakState}
        onClose={handleClose}
        TransitionComponent={Grow}
        autoHideDuration={2000}
        sx={{border:"solid 1px #9f9f9f",bgcolor:"#fff",width:"20%"}}
      >
        <Box>
          <lord-icon
            src="https://cdn.lordicon.com/lltgvngb.json"
            trigger="loop"
            colors="primary:#4f46e5"
            style={{
              width: "40px",
              height: "40px",
            }}
          ></lord-icon>

          <Typography>
            {err}
          </Typography>



          </Box>

          
     
      </Snackbar>

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
            <CompanyInformationForm
              setFirstInfo={setFirstInfo}
              firstInfo={firstInfo}
            />
          ) : step == 1 ? (
            <MoreInfo />
          ) : step == 2 ? (
            <Branding />
          ) : null}

          {/* Bottom */}
          <ButtonB step={step} setStep={setStep} next={next} back={back} />
        </Box>
      </Box>
    </>
  );
}
