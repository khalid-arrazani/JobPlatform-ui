import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Avatar,
} from "@mui/material";

import UploadCompanyPhotocopy from "./UploadCompanyPhotocopy.jsx"


import { useState } from "react";

export default function CompanyInformation() {
  const [companyLogo, setCompanyLogo] =
    useState("");



  return (
    <Card
      elevation={0}
      sx={{
        flex: 1,

        border: "1px solid #e5e7eb",

        borderRadius: "1rem",

        p: 3,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          mb: 4,

          flexWrap: "wrap",

          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",

              fontWeight: 700,

              color: "#111827",
            }}
          >
            Company Information
          </Typography>

          <Typography
            sx={{
              color: "#6b7280",

              mt: 0.5,
            }}
          >
            Update your company
            details and information.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",

            borderRadius: "0.7rem",

            background: "#4f46e5",

            px: 2.5,

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


      {/* UploadPhoto */}
     <UploadCompanyPhotocopy/>



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
        {/* Company Name */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.9rem",
            }}
          >
            Company Name
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="TechCorp Solutions"
          />
        </Box>

        {/* Industry */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.9rem",
            }}
          >
            Industry
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="Information Technology"
          />
        </Box>

        {/* Company Size */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.9rem",
            }}
          >
            Company Size
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="51 - 200 employees"
          />
        </Box>

        {/* Website */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.9rem",
            }}
          >
            Website
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="https://company.com"
          />
        </Box>

        {/* Email */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.9rem",
            }}
          >
            Company Email
          </Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="contact@company.com"
          />
        </Box>

        {/* Phone */}
        <Box>
          <Typography
            sx={{
              mb: 1,

              fontWeight: 600,

              fontSize: "0.9rem",
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
      </Box>

      {/* Description */}
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            mb: 1,

            fontWeight: 600,

            fontSize: "0.9rem",
          }}
        >
          Company Description
        </Typography>

        <TextField
          fullWidth
          size="small"
          multiline
          rows={3}
          placeholder="Tell candidates about your company..."
        />
      </Box>
    </Card>
  );
}