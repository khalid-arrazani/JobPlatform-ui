import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";

import { TfiPencilAlt } from "react-icons/tfi";
import { FcVoicePresentation } from "react-icons/fc";

import EditIcon from "@mui/icons-material/Edit";

import { useState } from "react";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AboutMeModal from "./AboutMeModal";
import { useProfile } from "../../../logic/context/profileContext";
export default function AboutMeCard() {
  const { ...state } = useProfile();
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        width: "44vw",
        borderRadius: "1rem",
        p: "1rem",
        background: "#fff",
        boxShadow: "0 0.4rem 1.5rem rgba(0,0,0,0.06)",
        mx: 1,
        mt: 1,
      }}
    >
      <AboutMeModal open={open} setOpen={setOpen} />

      <CardContent sx={{ p: "0.5rem !important" }}>
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
            <PersonOutlineOutlinedIcon />
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
            About Me
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
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

        
        {/* Description */}
        <Typography
          sx={{
            fontSize: "0.85rem",
            lineHeight: 1.8,
            color: "#666",
          }}
        >
          {state.user?.profile?.aboutMe}
        </Typography>

        <Box
          sx={{
            border: "dashed 1px #ddd ",
            height: "15rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "7.5rem",
              width: "7.5rem",
              bgcolor: "#fae9fc",
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
          viewBox="0 0 24 24"
          id="Common-File-Edit--Streamline-Ultimate"
          height={"50%"}
          width={"50%"}
        >
          <desc>
            {
              "\n    Common File Edit Streamline Icon: https://streamlinehq.com\n  "
            }
          </desc>
          <path
            fill="#e3e3e395"
            d="M18.8932 4.82626c0.1794 0.17934 0.2802 0.42259 0.2803 0.67625V22.0432c0 0.2537 -0.1008 0.497 -0.2802 0.6764 -0.1794 0.1793 -0.4227 0.2801 -0.6763 0.2801H1.9565c-0.25368 0 -0.49697 -0.1008 -0.67635 -0.2801C1.10077 22.5402 1 22.2969 1 22.0432V1.95677c0 -0.25368 0.10077 -0.49697 0.28015 -0.67634 0.17938 -0.17938 0.42267 -0.28016 0.67635 -0.28016h12.7147c0.2537 0.00006 0.4969 0.10087 0.6763 0.28026l3.5457 3.54573Z"
            strokeWidth={1}
          />
          <path
            fill="#ffffff"
            d="m17.8908 3.82385 -2.5433 -2.54332c-0.1794 -0.17939 -0.4226 -0.2802 -0.6763 -0.28026H1.9565c-0.25368 0 -0.49697 0.10078 -0.67635 0.28016C1.10077 1.4598 1 1.70309 1 1.95677V20.7137L17.8908 3.82385Z"
            strokeWidth={1}
          />
          <path
            fill="#ff984470"
            stroke="#191919db"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m22.4059 14.9842 -7.298 7.2981 -3.5869 0.7174 0.7174 -3.5869 7.298 -7.2981c0.1877 -0.1883 0.4107 -0.3377 0.6563 -0.4397 0.2455 -0.1019 0.5088 -0.1544 0.7747 -0.1544 0.2658 0 0.5291 0.0525 0.7747 0.1544 0.2455 0.102 0.4685 0.2514 0.6562 0.4397l0.0076 0.0077c0.1884 0.1877 0.3378 0.4107 0.4398 0.6562 0.1019 0.2456 0.1544 0.5088 0.1544 0.7747s-0.0525 0.5291 -0.1544 0.7747c-0.102 0.2455 -0.2514 0.4685 -0.4398 0.6562Z"
            strokeWidth={0.3}
          />
          <path
            stroke="#191919d8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.65198 22.9997H1.9565c-0.25368 0 -0.49697 -0.1008 -0.67635 -0.2801C1.10077 22.5402 1 22.2969 1 22.0432V1.95677c0 -0.25368 0.10077 -0.49697 0.28015 -0.67634 0.17938 -0.17938 0.42267 -0.28016 0.67635 -0.28016h12.7147c0.2537 0.00006 0.4969 0.10087 0.6763 0.28026l3.5457 3.54573c0.1794 0.17934 0.2802 0.42259 0.2803 0.67625v3.14974"
            strokeWidth={0.3}
          />
          </svg>
          </Box>

          <Typography>
            Tell others about yourself
          </Typography>
          <Typography>
            Schar your background, experience , and what makes you unique
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
