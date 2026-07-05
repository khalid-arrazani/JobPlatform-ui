import { Box, Button } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";

export default function CompanyBG() {
  const editorRef = useRef();


  const [scale, setScale] = useState(1.3);
  const [SetImagBG, openSetImagBG] = useState(1.3);
  const [ImageBG, openImageBG] = useState(1.3);

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();

    const outputCanvas = document.createElement("canvas");

    outputCanvas.width = 1920;
    outputCanvas.height = 400;

    const ctx = outputCanvas.getContext("2d");

    ctx.drawImage(canvas, 0, 0, 1920, 400);

    outputCanvas.toBlob((blob) => {
      if (!blob) return;

      const previewUrl = URL.createObjectURL(blob);

      setPreviewBG(previewUrl);

      setBackground({
        type: "upload",
        bannerId: null,
        image: blob,
      });

      openSetImagBG(false);
    }, "image/png");
  };

  const selectBanner = async () => {
      if (SelectedBanner == null) {
        setSnackBar({
          open: true,
          message: "Choose a banner.",
          severity: "warning",
        });
  
        return;
      }
  
      if (SelectedBanner === bannerid) {
        setSnackBar({
          open: true,
          message: "You didn't make any changes.",
          severity: "warning",
        });
  
        return;
      }
      try {
        const formData = new FormData();
  
        formData.append("backgroundType", "banner");
  
        formData.append("bannerId",SelectedBanner);
  
        const res = await uptadeCompanyBanner(formData);
  
       setSnackBar({
          open: true,
          message: res?.message,
          severity: "success",
        });
  
        fetchCompany()
        setOpen(false);
      } catch (error) {
        setSnackBar({
          open: true,
          message: error?.response?.data?.message,
          severity: "error",
        });
      }
    };

  return (
    <>
      {/* Upload */}

      <Dialog
        sx={{ "& .MuiPaper-root": { maxWidth: "100vw" } }}
        open={true}
        onClose={() => openSetImagBG(false)}
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              transform: "scale(1)",
              transformOrigin: "top center",
            }}
          >
            <AvatarEditor
              ref={editorRef}
              image={ImageBG}
              width={1160}
              height={240}
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
