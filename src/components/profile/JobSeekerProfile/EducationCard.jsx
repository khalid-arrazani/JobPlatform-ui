import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import EducationModal from "./EducationModal";
import { useState } from "react";

export default function EducationCard() {
  const [open, setOpen] = useState(false);
  

  const [educations, setEducations] = useState([
    {
      degree: "Frontend Development",
      school: "Online Learning",
      period: "2023 - Present",
    },
    {
      degree: "Forklift Diploma",
      school: "Professional Training",
      period: "2022 - 2023",
    }
  ]);
  

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
      <EducationModal open={open} setOpen={setOpen} educations={educations} setEducations={setEducations} />

      <CardContent sx={{ p: "0.75rem !important" }}>
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            mb: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Education
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

        {/* Education Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {educations.map((item, index) => (
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
