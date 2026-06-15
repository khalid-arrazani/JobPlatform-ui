import {
  Card,
  Box,
  Avatar,
  Typography,
  Stack,
  Chip,
  IconButton,
  Divider,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "16px",
        background:
          "linear-gradient(180deg, rgba(245,247,255,1) 0%, rgba(255,255,255,1) 40%)",
        border: "1px solid #EEF2F7",
        boxShadow: "0 8px 24px rgba(20, 20, 43, 0.06)",
        height:"100%",
        boxSizing:"border-box"

      }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={600} fontSize="16px">
          My Profile
        </Typography>

        <IconButton size="small" sx={{ background: "#F3F4F6" }}>
          <EditIcon fontSize="small" />
        </IconButton>
      </Stack>

      {/* Avatar Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
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

        <Typography mt={2} fontWeight={600} fontSize="18px">
          Younes Dev
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
          <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#6B7280" }} />
          <Typography fontSize="13px" color="text.secondary">
            Casablanca, Morocco
          </Typography>
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Info */}
      <Stack spacing={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <WorkOutlineOutlinedIcon sx={{ fontSize: 18, color: "#6366F1" }} />
          <Typography fontSize="14px">Experience: 2+ Years</Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <SchoolOutlinedIcon sx={{ fontSize: 18, color: "#6366F1" }} />
          <Typography fontSize="14px">
            Bachelor in Computer Science
          </Typography>
        </Stack>
      </Stack>

      {/* Skills */}
      <Box mt={3}>
        <Typography fontWeight={600} fontSize="14px" mb={1}>
          Skills
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {["React", "Node.js", "MongoDB", "UI/UX"].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                background: "#EEF2FF",
                color: "#4F46E5",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Resume */}
      <Box mt={3}>
        <Typography fontWeight={600} fontSize="14px" mb={1}>
          Resume
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<DownloadOutlinedIcon />}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
          }}
        >
          Download CV
        </Button>
      </Box>
    </Card>
  );
}