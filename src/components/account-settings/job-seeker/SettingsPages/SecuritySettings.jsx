import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Divider,
} from "@mui/material";

export default function SecuritySettings() {
  return (
    <Card
      elevation={0}
      sx={{
        flex: 1,
      }}
    >
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Security Settings
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 0.5,
          }}
        >
          Manage your password and account security.
        </Typography>
      </Box>

      {/* Change Email */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: "1rem",
          }}
        >
          Change Email
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            size="small"
            type="email"
            label="Current Email"
          />

          <TextField
            fullWidth
            size="small"
            type="email"
            label="New Email"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "0.8rem",
              background: "#4f46e5",
              fontWeight: 600,
              boxShadow: "none",

              "&:hover": {
                background: "#4338ca",
                boxShadow: "none",
              },
            }}
          >
            Update Email
          </Button>

          <Button
            variant="outlined"
            sx={{
              textTransform: "none",
              borderRadius: "0.8rem",
              fontWeight: 600,
              borderColor: "#d1d5db",
              color: "#111827",

              "&:hover": {
                borderColor: "#4f46e5",
              },
            }}
          >
            Verify Email
          </Button>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Change Password */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: "1rem",
          }}
        >
          Change Password
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr",
            },
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            size="small"
            type="password"
            label="Current Password"
          />

          <TextField
            fullWidth
            size="small"
            type="password"
            label="New Password"
          />

          <TextField
            fullWidth
            size="small"
            type="password"
            label="Confirm Password"
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            textTransform: "none",
            borderRadius: "0.8rem",
            background: "#4f46e5",
            fontWeight: 600,
            boxShadow: "none",

            "&:hover": {
              background: "#4338ca",
              boxShadow: "none",
            },
          }}
        >
          Update Password
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Active Sessions */}
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            mb: 1,
            fontSize: "1rem",
          }}
        >
          Active Sessions
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mb: 2,
            fontSize: "0.92rem",
          }}
        >
          You're logged in on this device.
        </Typography>

        <Box
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: "0.9rem",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              Chrome on Windows
            </Typography>

            <Typography
              sx={{
                color: "#6b7280",
                fontSize: "0.85rem",
              }}
            >
              Agadir, Morocco
            </Typography>
          </Box>

          <Button
            color="error"
            sx={{
              textTransform: "none",
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Card>
  );
}