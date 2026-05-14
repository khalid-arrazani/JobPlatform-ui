import {
  Card,
  Box,
  Typography,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";

export default function RecruiterStatsCard() {
  const stats = [
    {
      icon: <WorkIcon />,
      title: "Experience",
      value: "4+ Years",
    },

    {
      icon: <CalendarMonthIcon />,
      title: "Joined NexHire",
      value: "May 2024",
    },

    {
      icon: <DescriptionOutlinedIcon />,
      title: "Jobs Posted",
      value: "24",
    },

    {
      icon: <GroupOutlinedIcon />,
      title: "Candidates Hired",
      value: "18",
    },
  ];

  return (
<Card
  sx={{
    width: "44vw",
    borderRadius: "1rem",
    p: "1rem",
    background: "#fff",
    boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
    m:1
  }}
>
        {/* Header */}
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            mb: "1.2rem",
            color: "#111",
          }}
        >
          Professional Overview
        </Typography>
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "1rem",
    }}
  >
    {stats.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.9rem",

          p: "1rem",
          borderRadius: "1rem",

          border: "1px solid #ececec",
          background: "#fcfcff",

          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-0.15rem)",
            boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.06)",
          },
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: "3rem",
            height: "3rem",
            borderRadius: "0.9rem",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background: "#f5f3ff",
            color: "#5b21b6",

            "& svg": {
              fontSize: "1.4rem",
            },
          }}
        >
          {item.icon}
        </Box>

        {/* Text */}
        <Box>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#777",
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              mt: "0.1rem",
            }}
          >
            {item.value}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Card>
  );
}