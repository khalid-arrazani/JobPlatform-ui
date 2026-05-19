import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import TopSkillsModal from "./TopSkillsModal";
import { useState } from "react";

export default function TopSkillsCard() {
  const [open,setOpen]=useState(false)
  const [skills , setSkills] =useState ([
    "JavaScript",
    "React",
    "GSAP",
    "Node.js",
    "MongoDB",
    "Express",
    "MUI",
    "CSS",
  ])

  return (
    <Card
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        width: "44vw",
        m: 1,
      }}
    >
      <TopSkillsModal
      skills={skills}
      setSkills={setSkills}
      open={open}
      setOpen={setOpen}
      />

      <CardContent sx={{ p: "0.3rem !important" }}>
        {/* Title */}
        <Typography
          sx={{
            fontWeight: "700",
            mb: "1rem",
            fontSize: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Top Skills
          <IconButton
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

        {/* Skills */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
          }}
        >
          {skills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
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
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
