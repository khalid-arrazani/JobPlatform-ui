import Navbar from "../components/dashboard/Navbar.jsx";
import "./Dashboard.css";
import { Box } from "@mui/material";

import ads from "../assets/ads.png"

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Card } from "@mui/material";
import { Avatar, Typography } from "@mui/material";

import JobList from "../components/dashboard/ListJobs.jsx";
export default function DashboardLayout() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#ccc9c0",
        padding: 0,
      }}
    >
      <Navbar />


      <div class="parent">
        <div class="div1">
          <Card
            sx={{
              height: "55%",
              width: "60%",
              borderRadius: "20px",
              mt: "20px",
              mr: "20px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                height: "25%",
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              }}
            />

            {/* Content */}
            <Box
              sx={{
                height: "75%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: "-50px",
                textAlign: "center",
                p: 2,
              }}
            >
              {/* Image */}
              <Avatar
                src="/myImage.jpg"
                sx={{
                  width: 90,
                  height: 90,
                  border: "4px solid white",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              />

              {/* Name */}
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  mt: 1,
                }}
              >
                Khalid Arrazani
              </Typography>

              {/* Description */}
              <Typography sx={{ fontSize: "13px", color: "#666", mt: 1 }}>
                Passionate developer building modern web apps.
              </Typography>

              {/* Address */}
              <Typography sx={{ fontSize: "12px", color: "#888", mt: 1 }}>
                📍 Agadir, Morocco
              </Typography>
            </Box>
          </Card>
        </div>

        <div class="div2">
          <JobList />
        </div>

        <div class="div3">
          <Card
            sx={{
              height: "55%",
              width: "85%",
              borderRadius: "10px",
              background: "#ffffff00",
              mt: "20px",
            }}
          >
          <img width={"100%"} src={ads}  />
          </Card>
        </div>

        <div class="div4">
          <Stack spacing={2}>
            <Pagination count={500} />
          </Stack>
        </div>

        
      </div>
    </Box>
  );
}
