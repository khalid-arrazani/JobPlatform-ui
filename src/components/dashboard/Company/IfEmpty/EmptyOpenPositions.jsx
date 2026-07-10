import {Typography, Box, Button } from "@mui/material";
import { CircleCheckBig } from "lucide-react";
import AddIcon from '@mui/icons-material/Add';
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";


export default function EmptyOpenPositions() {
  return (
    <>
      <Box
        sx={{
          height: "15rem",
          width: "100%",
          border: "dashed 1px #d0d0d0",
          borderStyle: "dashed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap:1.5,
          py:2
        }}
      >
        <WorkOutlineOutlinedIcon  style={{margin:"0px",height:"4rem",width:"10rem",color:"#7fbffb"}}  />

        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "-apple-system",
            color: "#0b0b14ca",
            fontSize: "1.8rem",
          }}
        >
          No open positions yet
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
          Create your first job posting to start attracting qualified candidates.
        </Typography>
        <Button sx={{gap:1.5}} variant="contained"> <AddIcon/> Post a Job</Button>
      </Box>
    </>
  );
}
