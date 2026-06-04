import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";

export default function EmptySocialLinksCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        width: "44vw",
        m: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              bgcolor: "#eef4ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinkOutlinedIcon
              sx={{
                color: "#2563eb",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          <Typography variant="h6">
            Social Links
          </Typography>
        </Box>

        <Button
          startIcon={<AddIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add Link
        </Button>
      </Box>

      <Divider />

      {/* Empty State */}
      <Box
        sx={{
          py: "1rem",
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            bgcolor: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          <LinkOutlinedIcon
            sx={{
              fontSize: 30,
              color: "#6b7280",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          fontWeight={600}
          mb={1}
          sx={{ color: "#00000079" }}
        >
          No social links added yet
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 500,
            mb: 3,
            color: "#00000060",
          }}
        >
          Add your LinkedIn, GitHub, portfolio,
          Twitter, or other professional links
          to help employers learn more about you.
        </Typography>

        <Button
          startIcon={<AddIcon />}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add Link
        </Button>
      </Box>
    </Paper>
  );
}