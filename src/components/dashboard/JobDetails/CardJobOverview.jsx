import {
  Card,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

export default function JobOverview() {


  return (
   <Card
  sx={{
    width: "18.5rem",
    p: 3,
    mt: 1,
    borderRadius: "22px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
  }}
>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: "1rem",
      mb: 3,
    }}
  >
    Job Overview
  </Typography>

  {/* Job Title */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <WorkOutlineRoundedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Job Title
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        Frontend Developer
      </Typography>
    </Box>
  </Box>

  {/* Company */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <BusinessOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Company
      </Typography>

      <Typography
        fontSize="0.82rem"
        fontWeight={500}
        color="#8B5CF6"
      >
        Google
      </Typography>
    </Box>
  </Box>

  {/* Location */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <LocationOnOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Location
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        London, United Kingdom (Hybrid)
      </Typography>
    </Box>
  </Box>

  {/* Job Type */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <BadgeOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Job Type
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        Full Time
      </Typography>
    </Box>
  </Box>

  {/* Experience */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <TimelineOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Experience
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        Mid Level (2 - 4 years)
      </Typography>
    </Box>
  </Box>

  {/* Salary */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <PaidOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Salary
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        $90,000 - $120,000 / year
      </Typography>
    </Box>
  </Box>

  {/* Posted */}
  <Box display="flex" gap={1.5} mb={2.5}>
    <AccessTimeOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Posted
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        2 days ago
      </Typography>
    </Box>
  </Box>

  {/* Applicants */}
  <Box display="flex" gap={1.5} mb={2}>
    <GroupOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography fontSize="0.72rem" color="#9CA3AF">
        Applicants
      </Typography>

      <Typography fontSize="0.82rem" fontWeight={500}>
        248 applicants
      </Typography>
    </Box>
  </Box>

  <Divider sx={{ my: 2 }} />

  <Box
    display="flex"
    gap={1}
    sx={{
      color: "#EF4444",
      cursor: "pointer",
    }}
  >
    <FlagOutlinedIcon />

    <Typography fontSize="0.82rem">
      Report this job
    </Typography>
  </Box>
</Card>
  );
}