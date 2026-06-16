import {
  Box,
  Avatar,
  Typography,
  Stack,
  Chip,
  IconButton,
  Divider,
  Card,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import PsychologyIcon from "@mui/icons-material/Psychology";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        height: "fit-Content",
        width: "90%",
        bgcolor: "#f5eaf9",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 2,
          borderRadius: "16px",
          border: "1px solid #EEF2F7",
          boxShadow: "0 8px 24px rgba(20, 20, 43, 0.06)",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ display: "flex", fontWeight: 600 }} fontSize="16px">
            My Profile
          </Typography>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Stack>

        {/* Avatar Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 1,
          }}
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=12"
            sx={{
              width: 80,
              height: 80,
              border: "3px solid white",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            }}
          />

          <Typography
            fontWeight={600}
            sx={{ fontWeight: 600, fontSize: "18px", mt: 1 }}
          >
            Younes Dev
          </Typography>

          <Typography
            sx={{ fontWeight: 400, fontSize: "14px", color: "#444343" }}
          >
            karazani2003@gmail.com
          </Typography>

          <Stack
            direction="row"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <LocationOnOutlinedIcon sx={{ fontSize: 14, color: "#6B7280" }} />
            <Typography
              sx={{ fontWeight: 400, fontSize: "12px", color: "#444343" }}
            >
              Casablanca, Morocco
            </Typography>
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }} />
        {/* Info */}
        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <WorkOutlineOutlinedIcon sx={{ fontSize: 18, color: "#6f479d" }} />
            <Box>
              <Typography sx={{ fontSize: "12px", color: "#574a5a" }}>
                Experience
              </Typography>

              <Typography sx={{ fontSize: "12px", color: "#695d6b" }}>
                {" "}
                2+ Years
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <SchoolOutlinedIcon sx={{ fontSize: 18, color: "#6f479d" }} />
            <Box>
              <Typography sx={{ fontSize: "12px", color: "#574a5a" }}>
                Education
              </Typography>

              <Typography sx={{ fontSize: "12px", color: "#695d6b" }}>
                {" "}
                Bachelor in Computer Science
              </Typography>
            </Box>
          </Stack>

          <Stack
            direction="row"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <WorkHistoryOutlinedIcon sx={{ fontSize: 18, color: "#6f479d" }} />
            <Box>
              <Typography sx={{ fontSize: "12px", color: "#574a5a" }}>
                Job Preferences
              </Typography>

              <Typography sx={{ fontSize: "12px", color: "#695d6b" }}>
                Remote , Full-time
              </Typography>
            </Box>
          </Stack>

          {/* Skills */}
          <Stack
            direction="row"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <PsychologyIcon sx={{ fontSize: 18, color: "#6f479d" }} />
            <Box>
              <Typography sx={{ fontSize: "12px", color: "#695d6b" }}>
                Skills
              </Typography>

              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {["React", "Node.js", "MongoDB", "UI/UX"].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      background: "#e2e7f6",
                      color: "#7d7c89",
                      fontWeight: 500,
                      borderRadius: "7px",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>

          {/* Resume */}
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DescriptionOutlinedIcon
                sx={{ fontSize: 18, color: "#6f479d" }}
              />
              <Box>
                <Typography sx={{ fontSize: "12px", color: "#695d6b" }}>
                  Resume
                </Typography>

                <Stack
                  direction="row"
                  sx={{
                    flexWrap: "wrap",
                    gap: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "12px", color: "#ac87b3" }}>
                    younes-cv.pdf
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <IconButton
              sx={{
                position: "relative",
                top: 6,
                right: 4,
                borderRadius: "8px",
              }}
              size="small"
            >
              <DownloadOutlinedIcon
                sx={{ width: 20, height: 20, color: "#ac87b3" }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
