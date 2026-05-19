import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

export default function SocialLinksModal({
  open,
  setOpen,
  socialLinks,
   setSocialLinks
}) {
  const [platform, setPlatform] =
    useState("");

  const [url, setUrl] =
    useState("");

 

  const handleAdd = () => {
    if (!platform.trim() || !url.trim())
      return;
  
    const formattedUrl =
  url.startsWith("http")
    ? url
    : `https://${url}`;
    const newLink = {
      platform,
      url:formattedUrl,
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
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "35rem",
          maxWidth: "90vw",

          p: 3,

          borderRadius: "1rem",

          outline: "none",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Social Links
        </Typography>

        {/* Inputs */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mb: 2,
          }}
        >
          {/* Platform */}
          <TextField
            select
            fullWidth
            size="small"
            label="Platform"
            value={platform}
            onChange={(e) =>
              setPlatform(e.target.value)
            }
          >
            <MenuItem value="LinkedIn">
              LinkedIn
            </MenuItem>

            <MenuItem value="GitHub">
              GitHub
            </MenuItem>

            <MenuItem value="Twitter">
              Twitter
            </MenuItem>

            <MenuItem value="Facebook">
              Facebook
            </MenuItem>

            <MenuItem value="Instagram">
              Instagram
            </MenuItem>
          </TextField>

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

          {/* Add */}
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              minWidth: "5rem",
              textTransform: "none",
              borderRadius: "0.5rem",
            }}
          >
            Add
          </Button>
        </Box>

        {/* Chips */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((item, index) => (
            <Chip
              key={index}
              label={item.platform}
              onDelete={() =>
                handleDelete(index)
              }
            />
          ))}
        </Box>

        {/* Save Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{
              textTransform: "none",
              borderRadius: "0.5rem",
            }}
          >
            Save
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}