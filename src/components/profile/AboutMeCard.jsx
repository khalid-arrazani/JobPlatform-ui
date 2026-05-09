import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";

export default function AboutMeCard() {
  return (
    <Card
      sx={{
        borderRadius: "1rem",
        p: "0.5rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        background: "linear-gradient(135deg, #ffffff 0%, #f7f7ff 100%)",
        width:"86%",
     
        
      }}
    >
      <CardContent sx={{ p: 0.5 }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: "0.4rem", fontSize: "1rem" }}
        >
          About Me
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#555", mb: "0.9rem", fontSize: "0.75rem" }}
        >
          I'm a motivated web developer focused on building clean, fast and
          scalable web applications. I enjoy turning ideas into real products.
        </Typography>

        <Divider sx={{ my: "0.9rem" }} />

        {/* Info */}
        <Box sx={{ display: "flex", flexDirection: "row", gap: "0.2rem",justifyContent:"space-between" }}>

          <div>
            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.7rem" }}
              >
                Availability
              </Typography>

              <Typography sx={{ fontWeight: 500, fontSize: "0.85rem" }}>
                Available
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{ color: "#888", fontSize: "0.7rem" }}
              >
                Experience Level
              </Typography>
              <Typography sx={{ fontWeight: 500, fontSize: "0.85rem" }}>
                Mid-Level
              </Typography>
            </Box>
          </div>

          <Box sx={{width:"50%"}}>
            <Typography
              variant="caption"
              sx={{ color: "#888", fontSize: "0.7rem" }}
            >
              Languages
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "0.4rem",
                flexWrap: "wrap",
                mt: "0.3rem",
              }}
            >
              <Chip label="Arabic" size="small" sx={{ fontSize: "0.7rem" }} />
              <Chip label="English" size="small" sx={{ fontSize: "0.7rem" }} />
              <Chip label="French" size="small" sx={{ fontSize: "0.7rem" }} />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
