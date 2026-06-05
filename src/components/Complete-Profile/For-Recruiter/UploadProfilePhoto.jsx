import {
  Box,
  Typography,

  Avatar,
  Button,

} from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";

export default function UploadProfilePhoto({setPhoto}) {
  
  const editorRef = useRef();

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1.2);

  const [open, setOpen] = useState(false);

const [preview, setPreview] = useState("");

const handleSave = () => {
  const canvas =
    editorRef.current.getImageScaledToCanvas();

  canvas.toBlob((blob) => {
    if (!blob) return;

    
    const previewUrl =
      URL.createObjectURL(blob);


    setPreview(previewUrl);

  
    setPhoto(blob);


    setOpen(false);
  }, "image/png");
};

  return (
    
    <>
      {/* Upload */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          mb: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Avatar */}
        <Box
          sx={{
            position: "relative",
            width: "5.5rem",
            height: "5.5rem",
          }}
        >
          <Avatar
            src={preview}
            sx={{
              width: "100%",
              height: "100%",
              background: "#ede9fe",
              borderRadius: "10px",
            }}
          />
        </Box>

        {/* Upload Text */}
        <Box>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#111827",
              mb: "0.3rem",
            }}
          >
            Upload profile photo
          </Typography>

          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#6b7280",
              mb: "0.5rem",
            }}
          >
            JPG or PNG • Max 2MB
          </Typography>

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
        </Box>
      </Box>
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
