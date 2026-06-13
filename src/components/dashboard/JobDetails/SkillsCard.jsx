import { Card, Typography, Box, Chip } from "@mui/material";

export default function SkillsCard() {
  return (
    <Card
      sx={{
        width: "80%",
        px: 2,
        py: 1.5,
        borderRadius: "5px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
        height: "auto",
        mt: 2
        ,mb:2
        
       
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1rem",
          color: "#1F2937",
          mb: 2,
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
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="React.js"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="JavaScript"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="TypeScript"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="HTML"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="CSS"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="Redux"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="Git"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="REST APIs"
        />
        <Chip
          size="small"
          sx={{
            bgcolor: "#F3E8FF",
            color: "#8B5CF6",
            fontSize: "0.72rem",
            fontWeight: 500,
            borderRadius: "8px",
            height: "28px",

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
          label="Figma"
        />
      </Box>
    </Card>
  );
}
