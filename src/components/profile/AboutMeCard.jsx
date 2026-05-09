import { Card, CardContent, Typography, Box, Chip, Divider } from "@mui/material";

export default function AboutMeCard() {
  return (
    <Card
      sx={{
        borderRadius: "1.25rem", // 20px -> rem
        p: "1.6rem", // reduced ~20%
        boxShadow: "0 0.625rem 1.875rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        transform: "scale(0.8)", // shrink whole card by 20%
        transformOrigin: "top left",
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: "0.8rem" }}>
          About Me
        </Typography>

        <Typography variant="body2" sx={{ color: "#555", mb: "1.2rem" }}>
          I'm a motivated web developer focused on building clean, fast and
          scalable web applications. I enjoy turning ideas into real products.
        </Typography>

        <Divider sx={{ my: "1.2rem" }} />

        {/* Info */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          <Box>
            <Typography variant="caption" sx={{ color: "#888" }}>
              Availability
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>Available</Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "#888" }}>
              Experience Level
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>Mid-Level</Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: "#888" }}>
              Languages
            </Typography>

            <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", mt: "0.4rem" }}>
              <Chip label="Arabic" size="small" />
              <Chip label="English" size="small" />
              <Chip label="French" size="small" />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}