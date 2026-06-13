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
    width: "80%",
    px: 2 ,
    py: 1.5,
    borderRadius: "5px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
    height:"auto",
    mt:2
  }}
  style={{height:"fit-Content"}}
>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: "1rem",
      mb: 2,
      color: "#1F2937",
    }}
  >
    Job Overview
  </Typography>

  {/* Job Title */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5}}>
    <WorkOutlineRoundedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Job Title
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        Frontend Developer
      </Typography>
    </Box>
  </Box>

  {/* Company */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
    <BusinessOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Company
      </Typography>

      <Typography
        sx={{
          fontSize: "0.82rem",
          fontWeight: 500,
          color: "#8B5CF6",
        }}
      >
        Google
      </Typography>
    </Box>
  </Box>

  {/* Location */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5}}>
    <LocationOnOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Location
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        London, United Kingdom (Hybrid)
      </Typography>
    </Box>
  </Box>

  {/* Job Type */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
    <BadgeOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Job Type
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        Full Time
      </Typography>
    </Box>
  </Box>

  {/* Experience */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
    <TimelineOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Experience
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        Mid Level (2 - 4 years)
      </Typography>
    </Box>
  </Box>

  {/* Salary */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
    <PaidOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Salary
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        $90,000 - $120,000 / year
      </Typography>
    </Box>
  </Box>

  {/* Posted */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1.5 }}>
    <AccessTimeOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Posted
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        2 days ago
      </Typography>
    </Box>
  </Box>

  {/* Applicants */}
  <Box sx={{ display: "flex", gap: 1.5, mb: 1 }}>
    <GroupOutlinedIcon sx={{ color: "#8B5CF6" }} />
    <Box>
      <Typography sx={{ fontSize: "0.72rem", color: "#9CA3AF" }}>
        Applicants
      </Typography>

      <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
        248 applicants
      </Typography>
    </Box>
  </Box>

  <Divider sx={{ my: 2 }} />

  {/* Report */}
  <Box
    sx={{
      display: "flex",
      gap: 1,
      alignItems: "center",
      color: "#EF4444",
      cursor: "pointer",
      transition: "0.2s",

      "&:hover": {
        opacity: 0.8,
      },
    }}
  >
    <FlagOutlinedIcon sx={{ fontSize: "1rem" }} />

    <Typography sx={{ fontSize: "0.82rem", fontWeight: 500 }}>
      Report this job
    </Typography>
  </Box>
</Card>
  );
}