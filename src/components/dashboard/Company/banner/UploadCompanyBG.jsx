import { Box, Button } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";
import { uptadeCompanyBanner } from "../../../../logic/api/company/Company";
import { useAuth } from "../../../../logic/context/AuthContext";

export default function CompanyBG({
  openEditor,
  setOpenEditor,
  image,
  fetchCompany,
}) {
  const { setSnackBar } = useAuth();
  const editorRef = useRef();

  const [scale, setScale] = useState(1.3);

  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();

    const outputCanvas = document.createElement("canvas");

    outputCanvas.width = 1920;
    outputCanvas.height = 400;

    const ctx = outputCanvas.getContext("2d");

    ctx.drawImage(canvas, 0, 0, 1920, 400);

    outputCanvas.toBlob((blob) => {
      if (!blob) return;

      UploudBnner(blob);
      
    }, "image/png");
  };

  const UploudBnner = async (blob) => {
    try {
      const formData = new FormData();

      formData.append("backgroundType", "upload");

      formData.append("companyBackground", blob);

      const res = await uptadeCompanyBanner(formData);

      setSnackBar({
        open: true,
        message: res?.message,
        severity: "success",
      });

      fetchCompany();
      setOpenEditor(false);

    } catch (error) {
      console.log(error);
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
        open={openEditor}
        onClose={() => setOpenEditor(false)}
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
              image={image}
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
