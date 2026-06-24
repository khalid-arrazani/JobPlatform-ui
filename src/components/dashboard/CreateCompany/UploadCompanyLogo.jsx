import { Box, Button } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";

export default function CompanyLogo ({ setPhoto }) {
  const editorRef = useRef();

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1.2);

  const [open, setOpen] = useState(false);

  const [preview, setPreview] = useState("");

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();

    canvas.toBlob((blob) => {
      if (!blob) return;

      const previewUrl = URL.createObjectURL(blob);

      setPreview(previewUrl);

      setPhoto(blob);

      setOpen(false);
    }, "image/png");
  };

  return (
    <>
      {/* Upload */}

      <Button
        component="label"
        size="small"
        variant="outlined"
        sx={{
          borderRadius: "0.4rem",
          textTransform: "none",
          borderColor: "#d6d3f0",
          color: "#5b21b6",
          fontWeight: 600,
          fontSize: "0.72rem",

          "&:hover": {
            borderColor: "#5b21b6",
            background: "#f8f5ff",
          },
        }}
      >
        Choose File
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(file);
              setOpen(true);
            }
          }}
        />
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <AvatarEditor
              ref={editorRef}
              image={image}
              width={350}
              height={350}
              border={20}
              borderRadius={200}
              scale={scale}
            />

            <Slider
              min={1}
              max={3}
              step={0.1}
              value={scale}
              onChange={(e, value) => setScale(value)}
            />

            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
