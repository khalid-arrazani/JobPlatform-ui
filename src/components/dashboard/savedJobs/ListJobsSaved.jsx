import {
  Avatar,
  Box,
  Card,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function ListJobsSaved() {
  return (
    <>
      <Card
        sx={{
          p: 3,
          borderRadius: "20px",
          border: "1px solid #EEF2F7",
          boxShadow: "none",
          mb: 2,
          cursor: "pointer",
          transition: "all 0.2s ease",

          "&:hover": {
            boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "flex-start",
            }}
          >
            <Avatar
              sx={{
                width: 64,
                height: 64,
                borderRadius: "18px",
                background: "linear-gradient(135deg, #9333EA, #3B82F6)",
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
            >
              S
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Frontend Developer
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  color: "#64748B",
                  fontSize: "1rem",
                }}
              >
                Shopify
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
                <Chip
                  size="small"
                  label="Remote"
                  sx={{
                    bgcolor: "#F8FAFC",
                    borderRadius: "8px",
                  }}
                />

                <Chip
                  size="small"
                  label="Full-time"
                  sx={{
                    bgcolor: "#F8FAFC",
                    borderRadius: "8px",
                  }}
                />

                <Chip
                  size="small"
                  label="$80k - $120k"
                  sx={{
                    bgcolor: "#F8FAFC",
                    borderRadius: "8px",
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: "0.85rem",
                  color: "#94A3B8",
                }}
              >
                Saved 2 days ago
              </Typography>
            </Box>
          </Box>

          {/* Save Button */}
          <IconButton
            sx={{
              color: "#8B5CF6",

              "&:hover": {
                bgcolor: "#F5F3FF",
              },
            }}
          >
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}
