import { Card, Typography, Box, Button, Collapse } from "@mui/material";
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
        <CircleCheckBig  style={{margin:"0px",height:"8rem",width:"10rem"}} color="#389af5" />

        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "-apple-system",
            color: "#0b0b14e4",
            fontSize: "2rem",
          }}
        >
          No benefits added yet
        </Typography>

        <Typography
          sx={{
            fontWeight: 500,
            color: "#0b0b1468",
            fontSize: "1rem",
            textAlign: "center",
            px: 3,
          }}
        >
          Start adding employee benefits to help candidates understand what
          makes your company unique
        </Typography>
        <Button variant="contained">Add Benefit</Button>
      </Box>
    </>
  );
}
