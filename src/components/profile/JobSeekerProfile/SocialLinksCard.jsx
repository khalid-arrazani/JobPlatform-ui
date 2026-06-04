import { Card, Box, Typography, IconButton } from "@mui/material";

import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

import EditIcon from "@mui/icons-material/Edit";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import SocialLinksModal from "./SocialLinksModal";
import { useEffect, useState } from "react";


import { useProfile } from "../../../logic/context/profileContext";

export default function SocialLinksCard() {

  const { setSocialOpen,...state} = useProfile()
  const [socialLinks, setSocialLinks] = useState([]);

 const getIcon = (platform) => {
  switch (platform) {
    case "LinkedIn":
      return <LinkedInIcon />;
    case "GitHub":
      return <GitHubIcon />;

    case "Twitter":
      return <XIcon />;

    case "Facebook":
      return <FacebookIcon />;

    case "Instagram":
      return <InstagramIcon />;

    default:
      return <LanguageIcon />;
  }
};

 useEffect(()=>{
    setSocialLinks(state.user?.profile?.socialLinks)
  },[state.user?.profile])


  return (
    <Card
      sx={{
        width: "44vw",
        borderRadius: "1rem",
        p: "1rem",
        background: "#fff",
        boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
        mx: 1,
      }}
    >
      <SocialLinksModal/>
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
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Social Links
          <IconButton
            onClick={() => setSocialOpen(true)}
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
        {socialLinks?.length === 0 ? (
          <Typography
            sx={{
              color: "#6b7280",
              fontSize: "0.9rem",
            }}
          >
            No social links added yet.
          </Typography>
        ) : (
          socialLinks?.map((item, index) => (
            <Box
              key={index}
              component="a"
              href={item.url}
              target="_blank"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,

                p: 1.2,

                borderRadius: "0.7rem",

                textDecoration: "none",

                background: "#f8fafc",

                transition: "0.2s",

                "&:hover": {
                  background: "#eef2ff",
                },
              }}
            >
              {getIcon(item.platform)}

              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  {item.platform}
                </Typography>

          
              </Box>
            </Box>
          ))
        )}
      </Box>
    </Card>
  );
}
