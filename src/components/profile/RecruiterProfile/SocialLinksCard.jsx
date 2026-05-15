import { Card, Box, Typography, IconButton } from "@mui/material";

import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

import EditIcon from "@mui/icons-material/Edit";

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
        mx:1
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          mb: "1rem",
        }}
      >
        <Box
          sx={{
            width: "2.4rem",
            height: "2.4rem",
            borderRadius: "0.8rem",
            background: "#f5f3ff",
            color: "#5b21b6",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinkOutlinedIcon />
        </Box>

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 700,
            display:"flex",
            flex:1,
            justifyContent:'space-between',
            alignItems:"center"
          }}
        >
          Social Links
                    <IconButton
            sx={{
              background: "#160a7e00",
              color: "#6e6e6e",

              "&:hover": {
                background: "#37373849",
              },
              width: "2.5rem",
              height: "2.5rem",
              p: 1,
            }}
          >
            <EditIcon sx={{ width: "100%", m: 0 }} />
          </IconButton>

        </Typography>
      </Box>

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
