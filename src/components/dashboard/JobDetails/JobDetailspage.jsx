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
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TelegramIcon from '@mui/icons-material/Telegram';

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

          <Card
            sx={{
              flex: 1,
              height: "auto",

              borderRadius: "10px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#fff",
              pr: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                src="https://i.pinimgproxy.com/?url=aHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS8yNTYvMjgxLzI4MTc2NC5wbmc=&ts=1781217189&sig=ab15924525ba4834dae1622a3a8c25e61e488fad2189d2f0bb622776e27e9a24"
                sx={{
                  width: 90,
                  height: 90,
                  bgcolor: "#fff",
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  m: "2rem",
                  p:2
                }}
              />

              {/* Left Side */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderLeft: "solid 1px #d4d3d3",
                  pl: "1.2rem",
                  height: "fit-Content",
                }}
              >
                <Box>
                    <Stack direction="row" spacing={1.5}>
                    <Chip
                      label="Verified Company"
                      size="small"
                      sx={{
                        bgcolor: "#e8ffea",
                        color: "#238a3f",
                        fontWeight: 400,
                      }}
                    />
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "1.7rem",
                      fontWeight: 700,
                      color: "#060505e8",
                    }}
                  >
                    Senior UI/UX Designer
                  </Typography>

                  <Typography
                    sx={{
                      color: "#000000",
                      mt: 0.5,
                      fontSize: "0.95rem",
                      mb: 1.5,
                    }}
                  >
                    Google • San Francisco, CA
                  </Typography>

                  <Stack direction="row" spacing={1.5}>
                    <Chip
                      label="Full Time"
                      size="small"
                      sx={{
                        bgcolor: "#fce8ff",
                        color: "#7C3AED",
                        fontWeight: 400,
                      }}
                    />

                    <Chip
                      label="Senior Level"
                      size="small"
                      sx={{
                        bgcolor: "#fce8ff",
                        color: "#7C3AED",
                        fontWeight: 400,
                      }}
                    />
                    <Chip
                      label="$95k – $120k / year"
                      size="small"
                      sx={{
                        bgcolor: "#e9fcf1",
                        color: "#27a25e",
                        fontWeight: 400,
                      }}
                    />

                    <Chip
                      label="Posted 2 days ago"
                      size="small"
                      sx={{
                        bgcolor: "#f2f0f0",
                        color: "#404040c5",
                        fontWeight: 400,
                      }}
                    />
                   
                  </Stack>
                </Box>
              </Box>
            </Box>
            {/* Right Side */}
            <Stack direction="row" spacing={2}>

              <Button
                variant="outlined"
                startIcon={<TurnedInNotOutlinedIcon />}
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  borderColor: "#DDD",
                  color:"#a320e5"
                }}
              >
                Save Job
              </Button>

              <Button
                variant="contained"
                startIcon={<TelegramIcon />}
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  px: 4,
                  py: 1.2,
                  fontWeight: 300,
                  background: "linear-gradient(30deg, #8e1ef8 0%, #be81fa 35%, #8518fa 100%)",

                  "&:hover": {
                    background: "linear-gradient(90deg, #AA6EEA 0%, #7F28E3 100%)",
                 
                  },
                }}
              >
                Apply Now
              </Button>
            </Stack>
          </Card>
        </Box>

        <Box sx={{ height: "100%", width: "25%", background: "#ddd" }}></Box>
      </Box>
    </Box>
  );
}
