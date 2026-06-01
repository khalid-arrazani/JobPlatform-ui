import { Box, IconButton, Avatar, Button } from "@mui/material";

import { useState, useRef,useContext } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { ProfileContext } from "../../../logic/context/profileContext.jsx";

import { useAuth } from "../../../logic/context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

import { updateProfileHeader } from "../../../logic/api/profile/GetMe.jsx";

export default function UploadProfilePhoto() {
 
  const {setSnackBar,} = useAuth()

  const { ...state } = useContext(ProfileContext);
  const editorRef = useRef();

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1.2);

  const [open, setOpen] = useState(false);


  const [preview , setPreview] = useState("");

  const [imageFile, setImageFile] = useState(null);



  const handleSave = async() => {

    const canvas = editorRef.current.getImageScaledToCanvas();

    canvas.toBlob((blob) => {
      if (!blob) return;

      const previewUrl = URL.createObjectURL(blob);

      setPreview(previewUrl);

      setImageFile(blob);

      setOpen(false);
    }, "image/png");

     try {
       const formData = new FormData();
       if (imageFile) {
        formData.append(
          "image",
          imageFile,
          "profile.png"
        );
      };

      const data =
        await updateProfileHeader(formData);

        console.log(data);

        setSnackBar({
          open: true,
          message: data?.message,
          severity: "success",
        });


        // Navigate('/profile')


      } catch (error) {
        console.log(error.response.data);
        
        setSnackBar({
          open: true,
          message: error.response.data?.message,
          severity: "error",
        });
      }
  };


    
    


  return (
    <>
      {/* Upload */}

   <Box
  sx={{
    position: "relative",
    width: "8rem",
    height: "8rem",
    mr: "1rem",
  }}
>
  {/* Avatar */}
  <Avatar
    src={state.user?.profile?.ProfileImage}
    sx={{
      width: "100%",
      height: "100%",
      border: "4px solid white",
    }}
  />

  {/* Upload Button */}
  <IconButton
    component="label"
    sx={{
      position: "absolute",
      bottom: "0.2rem",
      right: "0.2rem",

      width: "2.2rem",
      height: "2.2rem",

      background: "#312e81",
      color: "#fff",

      border: "2px solid white",

      "&:hover": {
        background: "#4338ca",
      },
    }}
  >
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

    <PhotoCameraIcon sx={{ fontSize: "1rem" }} />
  </IconButton>
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
