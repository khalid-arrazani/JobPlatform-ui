import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";


import EducationModal from "./EducationModal";
import { useState, useEffect } from "react";
import { useProfile } from "../../../logic/context/profileContext";

export default function EducationCard() {
  const [open, setOpen] = useState(false);
  const { ...state } = useProfile();

  const [educations, setEducations] = useState();

  useEffect(() => {
    setEducations(
      state.user?.profile?.education?.map(({ _id, ...rest }) => rest) || [],
    );
  }, [state.user?.profile]);

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
      <EducationModal open={open} setOpen={setOpen} />

      <CardContent sx={{ p: "0.1rem !important" }}>


        {/* Header */}
        <Box
          sx={{
            pb: "0.5rem",
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
              <SchoolOutlinedIcon
                sx={{
                  color: "#2563eb",
                  fontSize: "1.3rem",
                }}
              />
            </Box>

            <Typography variant="h6">Education</Typography>
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
      <Divider sx={{ mb: "0.8rem" }} />


        {/* Education Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {educations?.map((item, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {item.degree}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.78rem",
                  color: "#6366f1",
                  fontWeight: 500,
                }}
              >
                {item.school}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.72rem",
                  color: "#777",
                  mt: "0.2rem",
                }}
              >
                {item.period}
              </Typography>

              {index !== educations.length - 1 && (
                <Divider sx={{ mt: "0.8rem" }} />
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
