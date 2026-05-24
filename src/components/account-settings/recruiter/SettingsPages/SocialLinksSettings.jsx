import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";

import { useState } from "react";

export default function SocialLinksSettings() {
  const [socialLinks, setSocialLinks] =
    useState([
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
      },

      {
        platform: "GitHub",
        url: "https://github.com",
      },
    ]);

  const [platform, setPlatform] =
    useState("");

  const [url, setUrl] =
    useState("");

  const getIcon = (platform) => {
    switch (platform) {
      case "LinkedIn":
        return <LinkedInIcon />;

      case "GitHub":
        return <GitHubIcon />;

      case "Instagram":
        return <InstagramIcon />;

      default:
        return <LanguageIcon />;
    }
  };

  const handleAddLink = () => {
    if (!platform || !url) return;

    const newLink = {
      platform,
      url,
    };

    setSocialLinks((prev) => [
      ...prev,
      newLink,
    ]);

    setPlatform("");
    setUrl("");
  };

  const handleDelete = (index) => {
    setSocialLinks((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  return (
    <Card
      elevation={0}
      sx={{
        flex: 1,

        border: "1px solid #e5e7eb",

        borderRadius: "1.2rem",

        p: 3,
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
          Social Links
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 0.5,
          }}
        >
          Add your professional and
          social media links.
        </Typography>
      </Box>


      {/* Add Link */}
      <Typography
        sx={{
            fontWeight: 700,
            mb: 2,
        }}
      >
        Add New Link
      </Typography>

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
        {/* Platform */}
        <TextField
          fullWidth
          size="small"
          label="Platform"
          placeholder="LinkedIn"
          value={platform}
          onChange={(e) =>
            setPlatform(e.target.value)
          }
        />

        {/* URL */}
        <TextField
          fullWidth
          size="small"
          label="URL"
          placeholder="https://..."
          value={url}
          onChange={(e) =>
            setUrl(e.target.value)
          }
        />
      </Box>

      {/* Save */}
      <Button
        variant="contained"
        onClick={handleAddLink}
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
        Add Link
      </Button>
        {/* Existing Links */}
        <Box sx={{ mt: 4 }}>
          {socialLinks.map(
            (link, index) => (
              <Box
                key={index}
                sx={{
                  border:
                    "1px solid #e5e7eb",
  
                  borderRadius: "0.9rem",
  
                  p: 2,
  
                  mt: 1.5,
  
                  display: "flex",
  
                  justifyContent:
                    "space-between",
  
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: "#4f46e5",
                    }}
                  >
                    {getIcon(
                      link.platform
                    )}
                  </Box>
  
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {link.platform}
                    </Typography>
  
                    <Typography
                      sx={{
                        fontSize:
                          "0.85rem",
  
                        color: "#6b7280",
                      }}
                    >
                      {link.url}
                    </Typography>
                  </Box>
                </Box>
  
                <IconButton
                  onClick={() =>
                    handleDelete(index)
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )
          )}
        </Box>
    </Card>
  );
}