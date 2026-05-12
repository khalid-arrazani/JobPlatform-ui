import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
} from "@mui/material";

export default function EducationCard() {
  const education = [
    {
      degree: "Frontend Development",
      school: "Online Learning",
      period: "2023 - Present",
    },
    {
      degree: "Forklift Diploma",
      school: "Professional Training",
      period: "2022 - 2023",
    }, 
  ];

  return (
    <Card
      sx={{
         borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        width: "44vw",
        m:1
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
          Education
        </Typography>

        {/* Education Items */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {education.map((item, index) => (
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

              {index !== education.length - 1 && (
                <Divider sx={{ mt: "0.8rem" }} />
              )}
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}