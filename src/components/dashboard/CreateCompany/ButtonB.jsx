import { Card, Typography, Box, Divider, Button } from "@mui/material";

import CircularProgress from '@mui/material/CircularProgress';

import { use, useEffect, useState } from "react";

import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function ButtonB({  step, next, back , state }) {

  const [buttonT, setButtonT] = useState("Next : More Info");
  
console.log(state.isLoading);

  useEffect(() => {
    step == 0
      ? setButtonT("Next : More Info")
      : step == 1
        ? setButtonT("Next : Branding")
        : step == 2
          ? setButtonT("Create Company")
          : null;
  }, [step]);



  return (
    <>
      <Box
        sx={{
          height: "12.2%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          py: 2,
          boxSizing: "border-box",
          px: 1,
        }}
      >
        <Button
          disabled={step == 0}
          onClick={back}
          sx={{
            color: "#fff",
            bgcolor: step !== 0 ? "#487cff" : "#e0e0e0",
            px: 2,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: 1,
          }}
          size="small"
        >
          <ChevronLeft /> Back Step
        </Button>

        <Button
          size="small"
          disabled={state.isLoadingCompany}
          onClick={next}
          sx={{
            color: "#fff",
            bgcolor: state.isLoadingCompany ? "#ddd" : "#4678f5",
            px: 2,
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            gap: 1,
            fontFamily: "monospace",
            fontWeight: 600,
          }}
        >
         {state.isLoadingCompany ? <CircularProgress size={30}/> : null}     {buttonT} <ChevronRight />
        </Button>
      </Box>
    </>
  );
}
