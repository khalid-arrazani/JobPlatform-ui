import {
  Box,
  Typography,
  Button,
  Card,
  Divider,
 
} from "@mui/material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

export default function CVSettings() {
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
          CV / Resume
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 0.5,
          }}
        >
          Upload and manage your
          resume.
        </Typography>
      </Box>

      {/* Upload Section */}
      <Box
        sx={{
          border: "2px dashed #d1d5db",

          borderRadius: "1rem",

          p: 4,

          textAlign: "center",

          mb: 4,

          background: "#fafafa",
        }}
      >
        <UploadFileIcon
          sx={{
            fontSize: "3rem",
            color: "#4f46e5",
            mb: 1,
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          Upload Your Resume
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mb: 3,
            fontSize: "0.92rem",
          }}
        >
          PDF, DOC, DOCX up to 5MB
        </Typography>

        <Button
          component="label"
          variant="contained"
          startIcon={<UploadFileIcon />}
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
          Upload CV

          <input
            hidden
            type="file"
            accept=".pdf,.doc,.docx"
          />
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Uploaded CV */}
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: "1rem",
          }}
        >
          Uploaded Resume
        </Typography>

        <Box
          sx={{
            border:
              "1px solid #e5e7eb",

            borderRadius: "1rem",

            p: 2,

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: 2,
          }}
        >
          {/* Left */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "3rem",
                height: "3rem",

                borderRadius: "0.8rem",

                background: "#eef2ff",

                display: "flex",

                justifyContent:
                  "center",

                alignItems: "center",
              }}
            >
              <DescriptionIcon
                sx={{
                  color: "#4f46e5",
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                }}
              >
                Khalid_Resume.pdf
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "0.85rem",
                }}
              >
                Uploaded 2 days ago
              </Typography>
            </Box>
          </Box>

          {/* Right */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button
              startIcon={
                <DownloadIcon />
              }
              sx={{
                textTransform: "none",
              }}
            >
              Download
            </Button>

            <Button
              color="error"
              startIcon={<DeleteIcon />}
              sx={{
                textTransform: "none",
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Box>

    </Card>
  );
}