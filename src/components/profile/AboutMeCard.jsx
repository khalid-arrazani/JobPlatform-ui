import { Card, CardContent, Typography, Box, Chip, Divider } from "@mui/material";

export default function AboutMeCard() {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        p: 1,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          About Me
        </Typography>

        <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
          I'm a motivated web developer focused on building clean, fast and
          scalable web applications. I enjoy turning ideas into real products.
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Info */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
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

            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 0.5 }}>
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