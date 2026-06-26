import validator from "validator";

import {
  Card,
  Typography,
  Box,
  Divider,
  Button,
  Snackbar,
  Fade,
  Zoom,
  Grow,
  Alert,
} from "@mui/material";
import Left_side from "./left_Side";
import Slide from "@mui/material/Slide";
import { useEffect, useRef, useState } from "react";

import Header from "./header";
import ButtonB from "./ButtonB";
import CompanyInformationForm from "./CompanyInformationForm";
import MoreInfo from "./MoreInfo";
import Branding from "./Branding";


import gsap from "gsap";

export default function CreateCompanyPage() {

  const [err, setErr] = useState("");
  const [step, setStep] = useState(0);

  const [firstInfo, setFirstInfo] = useState({
    company_name: "",
    company_email: "",
    company_number: "",
    company_locatin: "",
    company_industry: "",
    company_webSite: "",
    company_about: "",
  });

  const [secondtInfo, setSecondInfo] = useState({
    company_linkdin: {
      platform: "linkdin",
      url: "",
    },
    company_facebook: {
      platform: "facebook",
      url: "",
    },
    company_instagram: {
      platform: "instagram",
      url: "",
    },
    company_x: {
      platform: "x",
      url: "",
    },
    company_benefit: [],
  });

  const validatefirstInfo = () => {
    if (validator.isEmpty(firstInfo.company_name.trim())) {
      setErr("Invalid Company name");
      return false;
    }

    if (!validator.isEmail(firstInfo.company_email)) {
      setErr("Invalid email");
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_number.trim()) ||
      !validator.isMobilePhone(firstInfo.company_number, "any")
    ) {
      setErr("Invalid phone number");
      return false;
    }

    if (
      firstInfo.company_webSite &&
      !validator.isURL(firstInfo.company_webSite)
    ) {
      setErr("Invalid website");
      return false;
    }

    if (validator.isEmpty(firstInfo.company_industry.trim())) {
      setErr("Industry is required");
      return false;
    }

    if (validator.isEmpty(firstInfo.company_locatin.trim())) {
      setErr("Location is required");
      return false;
    }

    if (
      validator.isEmpty(firstInfo.company_about.trim()) ||
      !validator.isLength(firstInfo.company_about, { min: 20, max: 2000 })
    ) {
      setErr("About company must be between 20 and 2000 characters");
      return false;
    }
    return true;
  };

  const validatesecondtInfo = () => {
    if (
      secondtInfo.company_linkdin.url &&
      !validator.isURL(secondtInfo.company_linkdin.url)
    ) {
      setErr("Invalid LinkedIn URL");
      return false;
    }

    if (
      secondtInfo.company_facebook.url &&
      !validator.isURL(secondtInfo.company_facebook.url)
    ) {
      setErr("Invalid Facebook URL");
      return false;
    }

    if (
      secondtInfo.company_instagram.url &&
      !validator.isURL(secondtInfo.company_instagram.url)
    ) {
      setErr("Invalid Instagram URL");
      return false;
    }

    if (
      secondtInfo.company_x.url &&
      !validator.isURL(secondtInfo.company_x.url)
    ) {
      setErr("Invalid X URL");
      return false;
    }
    return true;
  };

  const next = () => {
    if (!validatefirstInfo()) {

      const tl = gsap.timeline();

      tl.to(".snakbar", {
        y: -100,
        duration: 0.2,
        opacity: 1,
        yoyo: true,
        repeat: 1,
        repeatDelay: 2.3,
      });
    }else if (!validatesecondtInfo() && step == 1 ) {

      const tl = gsap.timeline();

      tl.to(".snakbar", {
        y: -100,
        duration: 0.2,
        opacity: 1,
        yoyo: true,
        repeat: 1,
        repeatDelay: 2.3,
      });
    }else {
      setStep((prev) => prev + 1);
    }
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
        {/* this section for snakbar */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box
          className="snakbar"
          sx={{
            border: "solid 1px #c9c9c9",
            bgcolor: "#fff",
            width: "auto",
            borderRadius: "10px",
            pr: 2,
            by: 1,
            position: "absolute",
            left: "50%",
            opacity: 0,
            bottom: "-10%",
            zIndex: 5000,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <lord-icon
              src="https://cdn.lordicon.com/lltgvngb.json"
              trigger="loop"
              colors="primary:#4f46e5"
              style={{
                width: "40px",
                height: "40px",
              }}
            ></lord-icon>

            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                color: "#980505e1",
              }}
            >
              {err}
            </Typography>
          </Box>
        </Box>
        {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

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
            <MoreInfo secondtInfo={secondtInfo} setSecondInfo={setSecondInfo} />
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
