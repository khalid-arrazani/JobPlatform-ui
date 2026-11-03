import { Card, Typography, Box, Chip } from "@mui/material";

export default function SkillsCard({ jobInfo }) {
  return (
    <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
    <Card
      sx={{
        width: "93%",
        px: 2,
        py: 1.5,
        borderRadius: "5px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        height: "auto",
        mt: 2,
        boxSizing:"border-box"
      }}
    >
      <Typography
        sx={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#1f2937ed",
          mb: 1,
          fontFamily:'monospace'
        }}
      >
        Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {jobInfo?.skills.map((skill) => 
          <Chip
            size="small"
            sx={{
              bgcolor: "#F3E8FF",
              color: "#8B5CF6",
              fontSize: "0.88rem",
              fontWeight: 500,
              borderRadius: "8px",
              height: "28px",

              "& .MuiChip-label": {
                px: 1.2,
              },fontFamily:'monospace'
            }}
            label={skill}
          />
        )}

       
      </Box>
    </Card>
    </Box>
  );
}
