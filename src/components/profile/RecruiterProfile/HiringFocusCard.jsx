import {
  Card,
  Box,
  Typography,
  Chip,
} from "@mui/material";

import WorkIcon from "@mui/icons-material/Work";

export default function HiringFocusCard() {
  const hiringTypes = [
    "Full-time",
    "Remote",
    "Hybrid",
    "Internship",
  ];

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Product Manager",
   
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          mb: "1.2rem",
        }}
      >
        <Box
          sx={{
            width: "2.4rem",
            height: "2.4rem",
            borderRadius: "0.8rem",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background: "#f3f0ff",
            color: "#5b21b6",
          }}
        >
          <WorkIcon />
        </Box>

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          Hiring Focus
        </Typography>
      </Box>

      {/* Hiring Types */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.7rem",
          mb: "1.5rem",
        }}
      >
        {hiringTypes.map((item, index) => (
          <Chip
            key={index}
            label={item}
            sx={{
              
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",

          p: ".5rem",
          borderRadius: ".5rem",

          border: "1px solid #ececec",
          background: "#fcfcff",

          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-0.15rem)",
            boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.06)",
          },
            }}
          />
        ))}
      </Box>

      {/* Roles */}
      <Typography
        sx={{
          fontSize: "0.9rem",
          fontWeight: 600,
          mb: "0.9rem",
        }}
      >
        Roles I hire for:
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.7rem",
        }}
      >
        {roles.map((role, index) => (
          <Chip
            key={index}
            label={role}
            sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",

          p: ".5rem",
          borderRadius: ".5rem",

          border: "1px solid #ececec",
          background: "#fcfcff",

          transition: "0.3s",

          "&:hover": {
            transform: "translateY(-0.15rem)",
            boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.06)",
          },
            }}
          />
        ))}
      </Box>
    </Card>
  );
}