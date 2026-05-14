import {
  Card,
  Box,
  Typography,
} from "@mui/material";

import WorkOutlineIcon from "@mui/icons-material/Work";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineIcon from "@mui/icons-material/Person";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function QuickStatsCard() {
  const stats = [
    {
      icon: <WorkOutlineIcon />,
      value: "24",
      label: "Active Jobs",
      bg: "#f3f0ff",
      color: "#5b21b6",
    },

    {
      icon: <GroupsOutlinedIcon />,
      value: "156",
      label: "Total Applicants",
      bg: "#ecfdf3",
      color: "#16a34a",
    },

    {
      icon: <PersonOutlineIcon />,
      value: "18",
      label: "Hired Candidates",
      bg: "#eff6ff",
      color: "#2563eb",
    },

    {
      icon: <VisibilityOutlinedIcon />,
      value: "12.5K",
      label: "Profile Views",
      bg: "#fff7ed",
      color: "#ea580c",
    },
  ];

  return (
    <Card
      sx={{
        width: "44vw",
        borderRadius: "1.2rem",
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
        }}
      >
        Quick Stats
      </Typography>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4,1fr)",
          },
          gap: "1rem",
        }}
      >
        {stats.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: "1rem",
              p: "1.2rem",

              background: item.bg,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-0.2rem)",
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                color: item.color,
                mb: "0.7rem",

                "& svg": {
                  fontSize: "1.5rem",
                },
              }}
            >
              {item.icon}
            </Box>

            {/* Value */}
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#111",
              }}
            >
              {item.value}
            </Typography>

            {/* Label */}
            <Typography
              sx={{
                fontSize: "0.78rem",
                color: "#666",
                mt: "0.2rem",
                textAlign: "center",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
}