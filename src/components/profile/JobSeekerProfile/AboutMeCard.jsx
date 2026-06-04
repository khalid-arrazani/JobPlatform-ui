import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider

} from "@mui/material";


import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';


import AboutMeModal from "./AboutMeModal.jsx";
import { useState } from "react";
import { useProfile } from "../../../logic/context/profileContext.jsx";

export default function AboutMeCard() {
  const { ...state } = useProfile();

  const [open, setOpen] = useState(false);

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
      <AboutMeModal open={open} setOpen={setOpen} />
      <CardContent sx={{ p: 0.5 }} style={{ paddingBottom: "0" }}>


        {/* Title */}
       <Box
        sx={{
          pb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              bgcolor: "#eef4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonOutlineIcon
              sx={{
                color: "#2563eb",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          <Typography variant="h6">
            About Me
          </Typography>
        </Box>

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
      </Box>

      






        <Typography
          variant="body2"
          sx={{ color: "#555", mb: "0.9rem", fontSize: "0.9rem" }}
        >
          {state.user?.profile?.aboutMe?.about ||
            "----------------------------"}
        </Typography>

        <Divider sx={{ my: "0.9rem" }} />

        {/* Info */}
        <Box
          sx={{
            display: "flex",
            gap: "0.2rem",
            width: "100%",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box sx={{ mt: 1, width: "100%" }}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.95rem" }}
              >
                Availability
              </Typography>

              <Typography
                sx={{ fontSize: "0.85rem", color: "#6366f1", fontWeight: 500 }}
              >
                {state.user?.profile?.aboutMe?.availability ||
                  "----------------------------"}
              </Typography>
            </Box>

            <Box sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.95rem" }}
              >
                Experience Level
              </Typography>
              <Typography
                sx={{ fontSize: "0.85rem", color: "#6366f1", fontWeight: 500 }}
              >
                {state.user?.profile?.aboutMe?.experienceLevel ||
                  "-----------------"}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "50%",
              borderLeft: "solid 1px #b4b4b4 ",
              pl: "1rem",
              pb: "1rem",
            }}
          >
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
                  width: "100%",
                }}
              >
                {state.user?.profile?.aboutMe?.languages.map((l) => (
                  <Chip label={l} size="small" sx={sx} />
                )) || "-------------------"}
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
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: "#6366f1",
                    fontWeight: 500,
                  }}
                >
                  {state.user?.profile?.aboutMe?.preferredJobType ||
                    "-----------------"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
