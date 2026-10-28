import { Box } from "@mui/material";


import { useProfile } from "../logic/context/profileContext.jsx";
import { useEffect } from "react";
import Navbar from "../components/NavBar/Navbar.jsx";


export default function DashboardLayout({ children }) {

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
          height: "4rem",
          background: "#eedcef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // borderBottom: "solid 2px #b3afaf3e",
        }}
      >
        <Navbar/>
      </Box>

      {children}
    </Box>
  );
}
