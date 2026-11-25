import { Box, Button, CircularProgress } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";
import { useAuth } from "../../../../../logic/context/AuthContext";
import { uptadeCompanyBanner } from "../../../../../logic/api/company/Company";


export default function CompanyBG({
  openEditor,
  setOpenEditor,
  image,
  fetchCompany,
}) {
  const { setSnackBar } = useAuth();
  const editorRef = useRef();
  const [reload , setReload] = useState(false)

  const [scale, setScale] = useState(1);

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
    setReload(true)
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
    }finally{
      setReload(false)
    }
  };

  return (
    <>
      {/* Upload */}

      <Dialog
        sx={{ "& .MuiPaper-root": { width: "100vw",m:1 } }}
        open={openEditor}
        onClose={() => setOpenEditor(false)}
      >
        <DialogContent sx={{width:"100%",p:1,boxSizing:"border-box"}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", 
              transform: "scale(0.75)",
              transformOrigin: "top center",
              width:"auto",
              height:"auto"
            }}
          >
            <AvatarEditor
              ref={editorRef}
              image={image}
              width={580}
              height={200}
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

            <Button disabled={reload} variant="contained" onClick={handleSave} sx={{display:"flex",gap:2,fontSize:"1.5rem"}}>
              Save
              {reload ? <CircularProgress enableTrackSlot size="25px" aria-label="Loading…" /> :null }
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
