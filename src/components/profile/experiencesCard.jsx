import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function ExperienceCard() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "NexHire",
      period: "2025 - Present",
    },
    {
      role: "React Developer",
      company: "Freelance",
      period: "2024 - 2025",
    },
  ];

  return (
    <Card
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        width: "80%",
      }}
    >
      <CardContent sx={{ p: "0.75rem !important" }}>
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            mb: "1rem",
          }}
        >
          Experience
        </Typography>

        {/* Experience Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {experiences.map((exp, index) => (
            <Box key={index}>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}
              >
                {exp.role}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.78rem",
                  color: "#6366f1",
                  fontWeight: 500,
                }}
              >
                {exp.company}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.72rem",
                  color: "#777",
                  mt: "0.2rem",
                }}
              >
                {exp.period}
              </Typography>

              {index !== experiences.length - 1 && (
                <Divider sx={{ mt: "0.8rem" }} />
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}