import { Box, Avatar, Typography, Button, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
          p: 3,
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
          {/* AVATAR */}
          <Avatar
            src=""
            sx={{
              width: "7rem",
              height: "7rem",
              border: "0.15rem solid white",
            }}
          />

          {/* INFO */}
          <Box>
            <Typography
              sx={{
                color: "#ffffffd0",
                fontWeight: "bold",
                fontSize: "1.3rem",
              }}
            >
              Khalid Arrazani
            </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <LocationOnIcon
                  sx={{
                    fontSize: "1rem",
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
            <Typography
              sx={{
                color: "#dbeafe",
                fontSize: "0.79rem",
                mt: "0.1rem",
              }}
            >
              Frontend Developer
            </Typography>

            {/* SOCIALS */}
            <Box
              sx={{
                display: "flex",
                gap: "0.4rem",
                mt: "0.7rem",
              }}
            >
              <IconButton
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",

                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: "1rem" }} />
              </IconButton>

              <IconButton
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",

                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",

                  "&:hover": {
                    background: "rgba(255,255,255,0.2)",
                  },
                }}
              >
                <TwitterIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
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
