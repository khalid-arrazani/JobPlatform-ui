import {
  Card,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";

export default function SocialLinksCard() {
  const socials = [
    {
      icon: <LinkedInIcon />,
      color: "#0A66C2",
    },

    {
      icon: <XIcon />,
      color: "#111",
    },

    {
      icon: <GitHubIcon />,
      color: "#111",
    },

    {
      icon: <LanguageIcon />,
      color: "#5b21b6",
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
        Social Links
      </Typography>

      {/* Icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {socials.map((item, index) => (
          <IconButton
            key={index}
            sx={{
              width: "3rem",
              height: "3rem",

              border: "1px solid #ececec",
              background: "#fcfcff",

              transition: "0.3s",

              "&:hover": {
                transform: "translateY(-0.15rem)",
                background: "#f5f3ff",
              },

              "& svg": {
                fontSize: "1.4rem",
                color: item.color,
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Card>
  );
}