import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  Box,
  Card,
  Container,
} from "@mui/material";



export default function AuthLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#b184ff",
        display: "flex",
        alignItems: "center",
      }}
    >
      
          {children}
        
    </Box>
  );
}