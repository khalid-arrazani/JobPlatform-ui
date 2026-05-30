import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useState,useContext } from "react";

import UploadProfilePhoto from "./UploadProfilePhoto";
import EditProfileModil from "./EditProfileModal";

import { ProfileContext } from "../../../logic/context/profileContext.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { ...state } = useContext(ProfileContext);
  console.log("55555555", state.user?.profile);

  return (
    <>
      <EditProfileModil
      open={open}
      setOpen={setOpen}
      />

      <Container
        sx={{
          borderRadius: "1rem",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #4f46e5 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 0.3rem 1rem rgba(0,0,0,0.12)",
          p: " 5.5rem",
          mt: 1,
          height: "100%",
        }}
      >
        {/* BACKGROUND SHAPE */}
        <Box
          sx={{
            position: "absolute",
            width: "50%",
            height: "12rem",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.07)",
            right: "15rem",
            top: "-5rem",
          }}
        />

        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            zIndex: 2,
            paddingLeft: 5,
          }}
        >
          <UploadProfilePhoto />

          {/* INFO */}
          <Box>
            <Box
              sx={{
                color: "#ffffffd0",
                fontWeight: "bold",
                fontSize: "1.3rem",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              Khalid Arrazani
              <Box
                sx={{
                  borderRadius: "0.3rem",
                  fontWeight: 500,
                  fontSize: "0.80rem",
                  px: "0.5rem",
                  background: " #4338ca ",
                  color: "#eeeeee",
                  "&:hover": {
                    transform: "translateY(-0.12rem)",
                    transition: "0.3s",
                    boxShadow: "0 0.3rem 0.8rem rgba(99,102,241,0.2)",
                  },
                  p: "0.5rem",
                }}
              >
                JobSeeker
              </Box>
            </Box>
            <Typography
              sx={{
                color: "#f0f0f0",
                fontSize: "0.89rem",
                mt: "0.3rem",
              }}
            >
              Full Stack Developer | React • MUI • Node.js • MongoDB • GSAP
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                mt: "0.4rem",
              }}
            >
              {/* Location */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: "#ffffffb9",
                  }}
                />

                <Typography
                  sx={{
                    color: "#ffffffb9",
                    fontSize: "0.8rem",
                  }}
                >
                  Taroudant, Morocco
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <EmailIcon
                  sx={{
                    fontSize: "1.1rem",
                    color: "#ffffffb9",
                  }}
                />

                <Typography
                  sx={{
                    color: "#ffffffb9",
                    fontSize: "0.8rem",
                  }}
                >
                  recruiter@nexhire.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* BUTTON */}
        <Button
          variant="contained"
          onClick={() => {
            setOpen(true);
          }}
          sx={{
            background: "white",
            color: "#363e53",

            borderRadius: "0.55rem",

            textTransform: "none",
            fontWeight: "600",

            "&:hover": {
              background: "#f3f4f621",
              color: "#fff",
            },
            mr: 4,
            mt: "6%",
            gap: 1,
            py: "0.8rem",
            fontSize: "0.8rem",
          }}
        >
          Edit Profile
          <EditIcon sx={{ width: "20%", m: 0 }} />
        </Button>
      </Container>
    </>
  );
}
