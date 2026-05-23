import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  
} from "@mui/material";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import UploadProfilePhoto from "./UploadProfilePhoto.jsx"

export default function ProfileInformation() {
  return (
    <Box
   
      sx={{
        width:"100%",
        height:'auto'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
         
          alignItems: "center",
          my:2
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: 700,

              color: "#111827",
            }}
          >
            Profile Information
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",

              mt: 0.5,
            }}
          >
            Update your personal
            information and public
            profile.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",

            borderRadius: "0.8rem",

            px: 2.5,

            background: "#4f46e5",

            fontWeight: 600,

            boxShadow: "none",

            "&:hover": {
              background: "#4338ca",
              boxShadow: "none",
            },
          }}
        >
          Save Changes
        </Button>
      </Box>

      {/* Profile Photo */}
      <Box
        sx={{
          border:
            "1px solid #e5e7eb",

          borderRadius: "1rem",

          p: 1.5,

          mb: 2,
        }}
      >
      <UploadProfilePhoto/>
      </Box>

      {/* Inputs */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 2,
        }}
      >
        {/* Full Name */}
        <Box>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 600,
              fontSize: "0.92rem",
            }}
          >
            Full Name
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="Khalid Arrazani"
          />
        </Box>

        {/* Email */}
        <Box>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 600,
              fontSize: "0.92rem",
            }}
          >
            Email Address
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="khalid@email.com"
          />
        </Box>

        {/* Phone */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.92rem",
            }}
          >
            Phone Number
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="+212 6 00 00 00 00"
          />
        </Box>

        {/* Job Title */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.92rem",
            }}
          >
            Job Title
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="Frontend Developer"
          />
        </Box>

        {/* Location */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.92rem",
            }}
          >
            Location
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="Agadir, Morocco"
          />
        </Box>

        {/* Website */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.92rem",
            }}
          >
            Website
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="https://yourwebsite.com"
          />
        </Box>
      </Box>

      {/* Bio */}
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            mb: 1,

            fontWeight: 600,

            fontSize: "0.92rem",
          }}
        >
          Bio
        </Typography>

        <TextField
          fullWidth
          multiline
          rows={5}
          placeholder="Tell us about yourself..."
        />
      </Box>
    </Box>
  );
}