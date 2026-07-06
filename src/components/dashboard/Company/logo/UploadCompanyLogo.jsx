import { Box, Button } from "@mui/material";

import { useState, useRef } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";
import { uptadeCompanyLogo } from "../../../../logic/api/company/Company";
import { useAuth } from "../../../../logic/context/AuthContext";

  
export default function CompanyLogo ({  setOpenEditorLogo, openEditorLogo, imageLogo ,fetchCompany }) {

  const editorRef = useRef();

  const { setSnackBar } = useAuth();

  const [reload , setReload] = useState(false)

  const [scale, setScale] = useState(1.2);


  const handleSave = () => {
    const canvas = editorRef.current.getImageScaledToCanvas();

    canvas.toBlob((blob) => {
      if (!blob) return;

      
      UploudBnner(blob)
      
    }, "image/png");
  };

  const UploudBnner = async (blob) => {
    setReload(true)
      try {
        const formData = new FormData();
  
        formData.append("companyLogo", blob);
  
        const res = await uptadeCompanyLogo(formData);
  
        setSnackBar({
          open: true,
          message: res?.message,
          severity: "success",
        });
  
        fetchCompany();
        setOpenEditorLogo(false);
  
      } catch (error) {
        console.log(error?.response?.data);
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

      <Dialog open={openEditorLogo} onClose={() => setOpenEditorLogo(false)}>
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
              image={imageLogo}
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
