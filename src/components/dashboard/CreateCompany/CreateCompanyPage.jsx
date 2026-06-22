import { Card, Typography, Box, Divider, Button } from "@mui/material";
import Left_side from "./left_Side";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { use, useEffect, useState } from "react";

import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

import Header from "./header";

export default function CreateCompanyPage() {
  const [step, setStep] = useState(0);
  const [buttonT , setButtonT] = useState("Next : More Info")


  useEffect(()=>{
    step ==0 ? setButtonT("Next : More Info")  : step == 1 ? setButtonT("Next : Branding") : step == 2 ? setButtonT("Create Company") : null


  },[step])





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
          <Header step={step}/>

          <Box
            sx={{
              height: "70%",
              width: "100%",
              border: "solid 0.5px #b3b0b069",
              borderRadius: "15px",
            }}
          >



          </Box>





          <Box sx={{ height: "12.2%", width: "100%",display:"flex",  justifyContent:"space-between",py:2,boxSizing:"border-box",px:1 }}>

            <Button
              disabled={step == 0}
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
              sx={{color:"#fff" ,   bgcolor: step !== 0 ? "#487cff" : "#e0e0e0"  ,px:2,display:"flex", alignItems:"center",textAlign:"center",gap:1}}
              size="small"
            >

             <ChevronLeft /> Back Step 
            </Button>

            <Button
             size="small"
              onClick={() => {
                setStep((prev) => prev + 1);
              }}
              sx={{color:"#fff",bgcolor:"#4678f5",px:2,display:"flex", alignItems:"center",textAlign:"center",gap:1, fontFamily:"monospace",fontWeight:600}}
            >
              {buttonT} <ChevronRight />
            </Button>
          </Box>


        </Box>
      </Box>
    </>
  );
}
