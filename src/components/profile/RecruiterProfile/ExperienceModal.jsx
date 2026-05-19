import {
  Modal,
  Card,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

import { useState } from "react";

export default function ExperienceModal({
  open,
  setOpen,
  experience,
  setExperience,
}) {
  const [value, setValue] =
    useState(experience || "");

  const handleSave = () => {
    setExperience(value);

    setOpen(false);
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
          width: "28rem",
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
          Experience Level
        </Typography>

        {/* Select */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              mb: 1,
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Years of Experience
          </Typography>

          <TextField
            select
            fullWidth
            size="small"
            value={value}
            onChange={(e) =>
              setValue(e.target.value)
            }
          >
            <MenuItem value="0-1 Years">
              0-1 Years
            </MenuItem>

            <MenuItem value="1-2 Years">
              1-2 Years
            </MenuItem>

            <MenuItem value="2-4 Years">
              2-4 Years
            </MenuItem>

            <MenuItem value="4+ Years">
              4+ Years
            </MenuItem>

            <MenuItem value="10+ Years">
              10+ Years
            </MenuItem>
          </TextField>
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{
              textTransform: "none",
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </Box>
      </Card>
    </Modal>
  );
}