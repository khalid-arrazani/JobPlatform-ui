import {
  Box,
} from "@mui/material";

import { useEffect, useState} from "react";





import Header from "./Header";
import Footer from "./Footer";

import { useJob } from "../../../logic/context/JobContext";

export default function MyJobsPage() {
  const {fetchCompany , felterData , setFelterData } = useJob();

  
  useEffect(() => {
    fetchCompany();
  }, []);

 

  return (
    <>
      <Box
        sx={{
          height: "93%",
          width: "100vw",
          bgcolor: "#f2f2f5",
          boxSizing: "border-box",
          pt: 3,
          px: 2,
          overflow: "auto",
          display: "flex",
          gap: 1.5,
        }}
      >
        {/* left side */}
        <Box
          sx={{
            width: "75%",
            height: "100%",
            bgcolor: "#ffffff",
            boxSizing: "border-box",
            overflow: "hidden",
            borderRadius: "10px 10px 0px 0px",
            pt: 1,
          }}
        >
          {/* Header */}
          <Header/>

          {/* Footer */}
          <Footer  fetchCompany={fetchCompany}  />


        </Box>

        {/* right side */}

        <Box
          sx={{
            width: "25%",
            height: "100%",
            bgcolor: "#ddd",
            borderRadius: "10px 10px 0px 0px",
          }}
        ></Box>
      </Box>
    </>
  );
}
