import {
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import Navbar from "./Navbar";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";


import CardCompany from "./CardCompany";
import JobOverview from "./CardJobOverview";

export default function JobDetailsPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        background: "#eeabf2",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
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
        }}
      >
        <Navbar />
      </Box>


      <Box
        sx={{
          width: "100%",
          flex: 1,
          background: "#f7f7f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          pt: 1,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "75%",
            background: "#f7f7f7",
            pl: "1.9rem",
          }}
        >

          <Button
            startIcon={<KeyboardBackspaceIcon />}
            //   onClick={() => navigate("/jobs")}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "#ae2eb0ec",
              borderRadius: "12px",
              px: 1.5,

              mb: 0.8,
              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "rgba(139, 92, 246, 0.08)",
                color: "#f02bf3dc",
                transform: "translateX(-3px)",
              },
              display: "flex",
              alignContent: "center",
            }}
          >
            Back to Jobs
          </Button>
          <CardCompany/>
        </Box>



            
        <Box sx={{ height: "100%", width: "25%", display:"flex"}}>
          <JobOverview/>
         
        </Box>



      </Box>
    </Box>
  );
}
