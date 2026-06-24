import { Box, Button } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";

export default function CompanyBG ({  openImageLogo , openSetImagLogo,ImageLogo,  setPreviewLogo}) {
  const editorRef = useRef();

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1.2);

  const [preview, setPreview] = useState("");

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();

    canvas.toBlob((blob) => {
      if (!blob) return;

      const previewUrl = URL.createObjectURL(blob);

      setPreviewLogo(previewUrl);

      // setPhoto(blob);

      openSetImagLogo(false);
    }, "image/png");
  };

  return (
    <>
      {/* Upload */}

      <Dialog open={openImageLogo} onClose={() => openSetImagLogo(false)}>
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
              image={ImageLogo}
              width={360}
              height={360}
              border={5}
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
