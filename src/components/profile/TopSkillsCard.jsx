import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

export default function TopSkillsCard() {
  const skills = [
    "JavaScript",
    "React",
    "GSAP",
    "Node.js",
    "MongoDB",
    "Express",
    "MUI",
    "CSS",
  ];

  return (
    <Card
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        width: "44vw",
        m:1
       
        
      }}
    >
      <CardContent sx={{ p: "0.3rem !important" }}>
        {/* Title */}
        <Typography
          sx={{
            fontWeight: "700",
            mb: "1rem",
            fontSize: "1rem",
          }}
        >
          Top Skills
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

                background:
                  "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",

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