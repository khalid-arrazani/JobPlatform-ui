import { Box } from "@mui/material";

import Navbar from "../components/dashboard/Navbar5.jsx";
import { useProfile } from "../logic/context/profileContext.jsx";
import { useEffect } from "react";


export default function DashboardLayout({ children, part, setPart }) {

  const {fetchUser , ...state } = useProfile();

  useEffect(() => {
    fetchUser();
  }, []);


  useEffect(() => {
    fetchUser();
  }, [state.reloadCompany]);


  
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#e8e8e8",
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "3rem",
          background: "#eedcef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "solid 2px #b3afaf3e",
        }}
      >
        <Navbar part={part} setPart={setPart} />
      </Box>

      {children}
    </Box>
  );
}
