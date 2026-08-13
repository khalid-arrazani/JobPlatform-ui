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
  const { ...state } = useProfile();

  const [open, setOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    setSocialLinks(state.user?.profile?.socialLinks);
  }, [state.user?.profile]);

  const getIcon = (platform) => {
    switch (platform) {
      case "LinkedIn":
        return <LinkedInIcon sx={{ color: "#0A66C2" }} />;

      case "GitHub":
        return <GitHubIcon sx={{ color: "#181717" }} />;

      case "Twitter":
        return <XIcon sx={{ color: "#000000" }} />;

      case "Facebook":
        return <FacebookIcon sx={{ color: "#1877F2" }} />;

      case "Instagram":
        return <InstagramIcon sx={{ color: "#E4405F" }} />;

      default:
        return <LanguageIcon sx={{ color: "#6B7280" }} />;
    }
  };
  return (
    <Card
      sx={{
        width: "46vw",
        borderRadius: "1rem",
        p: "1rem",
        background: "#fff",
        boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
        mx: 1,
        mt: 1,
        boxSizing: "border-box",
      }}
    >
      <SocialLinksModal
        open={open}
        setOpen={setOpen}
        socialLinks={socialLinks}
        setSocialLinks={setSocialLinks}
      />
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
            onClick={() => setOpen(true)}
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
          <Box
            sx={{
              border: "dashed 1px #ddd ",
              height: "15rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "7.5rem",
                width: "7.5rem",
                bgcolor: "#fdedff75",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
                id="Share-Link--Streamline-Core"
                height={14}
                width={14}
              >
                <desc>
                  {
                    "\n    Share Link Streamline Icon: https://streamlinehq.com\n  "
                  }
                </desc>
                <g id="share-link--share-transmit">
                  <path
                    id="Vector"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.76 6 4.48 -2.25"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_2"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.76 8 4.48 2.25"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_3"
                    fill="#ffffff"
                    d="M2.75 9.25a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_4"
                    fill="#ffffff"
                    d="M11.25 13.5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_5"
                    fill="#ffffff"
                    d="M11.25 5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_6"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.75 9.25a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_7"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 13.5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_8"
                    stroke="#c70ed28c"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 5a2.25 2.25 0 1 0 0 -4.5 2.25 2.25 0 0 0 0 4.5Z"
                    strokeWidth={1}
                  />
                </g>
              </svg>
            </Box>

            <Typography
              sx={{
                fontSize: "1.3rem",
                fontWeight: 600,
                fontFamily: "system-ui",
                color: "#040213da",
              }}
            >
              No social links added yet.
            </Typography>

            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "monospace",
                color: "#040213da",
              }}
            >
              Schare your social links
            </Typography>
          </Box>
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
                textDecorationColor: "none",
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
