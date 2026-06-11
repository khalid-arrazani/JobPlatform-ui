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
              color: "#f940fcec",
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
              flex:1,
              height:"10rem",
              px: 4,
              py: 2,
              borderRadius: "28px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#fff",
              mb: 3,
            }}
          >

          <Box  sx={{display:"flex",}}>
            <Avatar
              src="https://logo.clearbit.com/google.com"
              sx={{
                width: 110,
                height: 110,
                bgcolor: "#fff",
                border: "1px solid #eee",
                borderRadius:"10px",
                m:"1rem"
              }}
            />

            {/* Left Side */}
            <Box display="flex" alignItems="center" gap={3}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#1E1E1E",
                  }}
                >
                  Senior UI/UX Designer
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    mt: 0.5,
                    fontSize: "0.95rem",
                  }}
                >
                  Google • San Francisco, CA
                </Typography>

                <Stack direction="row" spacing={1} mt={2}>
                  <Chip
                    label="Full Time"
                    sx={{
                      bgcolor: "#F3E8FF",
                      color: "#7C3AED",
                      fontWeight: 600,
                    }}
                  />

                  <Chip
                    label="Senior Level"
                    sx={{
                      bgcolor: "#EEF2FF",
                      color: "#4F46E5",
                      fontWeight: 600,
                    }}
                  />
                </Stack>

                <Stack direction="row" spacing={3} mt={2}>
                  <Typography color="text.secondary">
                    👥 128 Applicants
                  </Typography>

                  <Typography color="text.secondary">🔖 842 Saved</Typography>

                  <Typography color="text.secondary">
                    💰 $95k – $120k
                  </Typography>
                </Stack>
              </Box>
            </Box>
</Box>
            {/* Right Side */}
            <Stack spacing={2}>
              <Button
                variant="outlined"
                startIcon={<TurnedInNotOutlinedIcon />}
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  borderColor: "#DDD",
                }}
              >
                Save Job
              </Button>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  bgcolor: "#7C3AED",

                  "&:hover": {
                    bgcolor: "#6D28D9",
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
