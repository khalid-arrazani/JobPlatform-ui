import {Typography, Box} from "@mui/material";
import { CircleCheckBig } from "lucide-react";



export default function EmptyBenefits() {

  
  return (
    <>
      <Box
        sx={{
          height: "14rem",
          width: "100%",
          border: "dashed 1px #d0d0d0",
          borderStyle: "dashed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap:1,
          py:2
        }}
      >
        <CircleCheckBig  style={{margin:"0px",height:"4rem",width:"10rem"}} color="#7fbffb" />

        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "-apple-system",
            color: "#0b0b14ca",
            fontSize: "1.8rem",
          }}
        >
          No benefits added yet
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            color: "#0b0b1468",
            fontSize: "1rem",
            textAlign: "center",
            px: 3,
         
          }}
        >
          Start adding employee benefits to help candidates understand what
          makes your company unique
        </Typography>
       
      </Box>
    </>
  );
}
