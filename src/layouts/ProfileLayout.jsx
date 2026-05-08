import { Box } from "@mui/material";
import Navbar from "../components/profile/Navbar.jsx";

export default function ProfileLayout({children}) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#ebeaea",
        padding: 0,
      }}
    >
    <Navbar/>

       {children }
      
        

    </Box>
  );
}