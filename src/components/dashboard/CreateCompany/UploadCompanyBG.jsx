import { Box, Button } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";

export default function CompanyBG ({  openImageBG , openSetImagBG,ImageBG,  setPreviewBG}) {
  const editorRef = useRef();

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1.3);

  const [preview, setPreview] = useState("");

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();

    canvas.toBlob((blob) => {
      if (!blob) return;

      const previewUrl = URL.createObjectURL(blob);

      setPreviewBG(previewUrl);

      // setPhoto(blob);

      openSetImagBG(false);
    }, "image/png");
  };

  return (
    <>
      {/* Upload */}

      <Dialog open={openImageBG} onClose={() => openSetImagBG(false)}>
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
              image={ImageBG}
              width={580}
              height={120}
              border={0}
              borderRadius={0}
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
