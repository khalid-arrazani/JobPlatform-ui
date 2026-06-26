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
} from "@mui/material";
import Left_side from "./left_Side";

import { useEffect, useState } from "react";

import Header from "./header";
import ButtonB from "./ButtonB";
import CompanyInformationForm from "./CompanyInformationForm";
import MoreInfo from "./MoreInfo";
import Branding from "./Branding";

export default function CreateCompanyPage() {
  const [snakState, setSnackStat] = useState(true);

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

  let err = null;
  const validateForm = () => {
    if (validator.isEmpty(firstInfo.company_name.trim())) {
      err = "Company name is required";
      return false;
    }

    if (!validator.isEmail(firstInfo.company_email)) {
      err = "Invalid email";
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_number.trim()) ||
      !validator.isMobilePhone(firstInfo.company_number, "any")
    ) {
      err = "Invalid phone number";
      return false;
    }

    if (validator.isEmpty(firstInfo.company_locatin.trim())) {
      err = "Location is required";
      return false;
    }

    if (validator.isEmpty(firstInfo.company_industry.trim())) {
      err = "Industry is required";
      return false;
    }

    if (
      firstInfo.company_webSite &&
      !validator.isURL(firstInfo.company_webSite)
    ) {
      err = "Invalid website";
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_about.trim()) ||
      !validator.isLength(firstInfo.company_about, { min: 20, max: 2000 })
    ) {
      err = "About company must be between 20 and 2000 characters";
      return false;
    }
    return true;
  };

  const [step, setStep] = useState(0);

  const next = () => {
    if (!validateForm()) {
      console.log(err);
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
        message="I love snacks"
        TransitionComponent={Grow}
        autoHideDuration={1200}
      />

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
