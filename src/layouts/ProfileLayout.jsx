import { Box } from "@mui/material";
 
import Navbar from "../components/dashboard/Navbar5";

export default function ProfileLayout({children, part, setPart}) {
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
    <Box
            sx={{
              width: "100%",
              height: "3rem",
              background: "#eedcef",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom:"solid 2px #b3afaf3e"
            
            }}
          >
            <Navbar part={part} setPart={setPart} />
          </Box>

       {children}
      
        

    </Box>
  );
}