import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";



import AboutMeModal from "./AboutMeModal.jsx";
import { useState } from "react";

export default function AboutMeCard() {



    const [open, setOpen] = useState(false);
    const [bio, setBio] = useState('')

  const sx = {
    borderRadius: "0.5rem",
    fontWeight: 500,
    fontSize: "0.75rem",
    height: "1.8rem",
    px: "0.3rem",

    background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",

    color: "#4338ca",

    "&:hover": {
      transform: "translateY(-0.12rem)",
      transition: "0.3s",
      boxShadow: "0 0.3rem 0.8rem rgba(99,102,241,0.2)",
    },
  };
  return (
    <Card
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        width: "44vw",
        m: 1,
      }}
    >
      <AboutMeModal
      open={open}
      setOpen={setOpen}
      bio={bio}
      setBio={setBio}

      />
      <CardContent sx={{ p: 0.5 }} style={{ paddingBottom: "0" }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mb: "0.3rem",
            fontSize: "1.1rem",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          About Me
          <IconButton
          onClick={()=>setOpen(true)}
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

        <Typography
          variant="body2"
          sx={{ color: "#555", mb: "0.9rem", fontSize: "0.9rem" }}
        >
          I'm a motivated web developer focused on building clean, fast and
          scalable web applications. I enjoy turning ideas into real products.
        </Typography>

        <Divider sx={{ my: "0.9rem" }} />

        {/* Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.2rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Box sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.95rem" }}
              >
                Availability
              </Typography>

              <Typography
                sx={{ fontSize: "0.85rem", color: "#6366f1", fontWeight: 500 }}
              >
                Available
              </Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.95rem" }}
              >
                Experience Level
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#6366f1", fontWeight: 500 }}>
                Mid-Level
              </Typography>
            </Box>
          </div>

          <div>
            <Box sx={{ width: "100%", mb: "0.2rem", mt: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.9rem" }}
              >
                Languages
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: "0.4rem",
                  flexWrap: "wrap",
                  mt: "0.3rem",
                }}
              >
                <Chip label="Arabic" size="small" sx={sx} />

                <Chip label="English" size="small" sx={sx} />

                <Chip label="French" size="small" sx={sx} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#888", fontSize: "0.90rem" }}
                >
                  Preferred Job Type
                </Typography>
                <Typography sx={{ fontSize: "0.85rem", color: "#6366f1", fontWeight: 500 }}>
                  Full-Time
                </Typography>
              </Box>
            </Box>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
