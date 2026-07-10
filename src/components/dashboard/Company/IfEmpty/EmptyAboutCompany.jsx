import {Typography, Box, Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import AddIcon from '@mui/icons-material/Add';

export default function EmptyAboutCompany() {
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
          gap:1.5,
          py:2,
          mt:1
        }}
      >
        <InfoOutlinedIcon  style={{margin:"0px",height:"4rem",width:"10rem",color:"#7fbffb"}} color="#7fbffb" />

        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "-apple-system",
            color: "#0b0b14ca",
            fontSize: "1.8rem",
          }}
        >
          No company description yet
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
         Write a compelling company overview to showcase your mission, values, and what makes your workplace unique.
        </Typography>
        <Button sx={{gap:1.5}} variant="contained"> <AddIcon/>Add Company Description</Button>
      </Box>
    </>
  );
}
