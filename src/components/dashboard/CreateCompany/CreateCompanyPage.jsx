import validator from "validator";









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

  const [firstInfo , setFirstInfo ] = useState({
    company_name:"",
    company_email:"",
    company_number:"",
    company_locatin:"",
    company_industry:"",
    company_webSite:"",
    company_about:""
  })

console.log(firstInfo);
//   const validateForm = () => {
//   if (validator.isEmpty(company_name.trim())) {
//     alert("Company name is required");
//     return false;
//   }

//   if (!validator.isEmail(company_email)) {
//     alert("Invalid email");
//     return false;
//   }

//   if (
//     validator.isEmpty(company_number.trim()) ||
//     !validator.isMobilePhone(company_number, "any")
//   ) {
//     alert("Invalid phone number");
//     return false;
//   }

//   if (validator.isEmpty(company_locatin.trim())) {
//     alert("Location is required");
//     return false;
//   }

//   if (validator.isEmpty(company_industry.trim())) {
//     alert("Industry is required");
//     return false;
//   }

//   if (
//     company_webSite &&
//     !validator.isURL(company_webSite)
//   ) {
//     alert("Invalid website");
//     return false;
//   }

//   if (
//     validator.isEmpty(company_about.trim()) ||
//     !validator.isLength(company_about, { min: 20, max: 2000 })
//   ) {
//     alert("About company must be between 20 and 2000 characters");
//     return false;
//   }

//   return true;
// };



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
            <CompanyInformationForm setFirstInfo={setFirstInfo} firstInfo={firstInfo} />
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
