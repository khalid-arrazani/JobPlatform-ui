import { Box, Avatar, Typography, Button, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";


import EditIcon from "@mui/icons-material/Edit";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export default function Header() {
  return (
    <>
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
          p:" 5.5rem",
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
          <Box
            sx={{
              position: "relative",
              width: "8rem",
              height: "8rem",
              mr:"1rem"
            }}
          >
            {/* Avatar */}
            <Avatar
              src="/profile.jpg"
              sx={{
                width: "100%",
                height: "100%",
                border: "4px solid white",
              }}
            />

            {/* Camera Button */}
            <IconButton
              sx={{
                position: "absolute",
                bottom: "0.2rem",
                right: "0.2rem",

                width: "2.2rem",
                height: "2.2rem",

                background: "#312e81",
                color: "#fff",

                border: "2px solid white",

                "&:hover": {
                  background: "#4338ca",
                },
              }}
            >
              <PhotoCameraIcon sx={{ fontSize: "1rem" }} />
            </IconButton>
          </Box>

          {/* INFO */}
          <Box>
            <Typography
              sx={{
                color: "#ffffffd0",
                fontWeight: "bold",
                fontSize: "1.3rem",
                display:"flex",
                gap:"0.5rem",
                alignItems:"center"
              }}
            >
              Khalid Arrazani
              <Box        sx={{
                borderRadius: "0.3rem",
                fontWeight: 500,
                fontSize: "0.75rem",
                px: "0.5rem",
                background: " #4338ca ",
                color: "#eeeeee",
                "&:hover": {
                  transform: "translateY(-0.12rem)",
                  transition: "0.3s",
                  boxShadow: "0 0.3rem 0.8rem rgba(99,102,241,0.2)",
                },
                p:"0.3rem"
              }}>Recruiter</Box>
            </Typography>
            <Typography
              sx={{
                color: "#f0f0f0",
                fontSize: "0.89rem",
                mt: "0.3rem",
              }}
            >
              HR & Talent Acquisition Specialist
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
