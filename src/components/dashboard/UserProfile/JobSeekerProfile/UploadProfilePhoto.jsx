import { Box, IconButton, Avatar, Button } from "@mui/material";

import { useState, useRef, useContext } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { ProfileContext } from "../../../logic/context/profileContext.jsx";

import { useAuth } from "../../../logic/context/AuthContext.jsx";
import {updateProfilePhotoJS} from "../../../logic/api/profile/GetMe.jsx";

import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";

export default function UploadProfilePhoto() {
  
  const { setSnackBar } = useAuth();

  const { dispatch, ...state } = useContext(ProfileContext);

  const editorRef = useRef();

  const [image, setImage] = useState(null);

  const [scale, setScale] = useState(1.2);

  const [open, setOpen] = useState(false);

  const handleSave = () => {
    dispatch({
      type: "SET_LOADING_UPDATE_PROFILE",
      payload: true,
    });
    const canvas = editorRef.current.getImageScaledToCanvas();

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      try {
        const formData = new FormData();

        formData.append("image", blob, "profile.png");

        const data = await updateProfilePhotoJS(formData);
        dispatch({
          type: "PROFILE",
          payload: data,
        });
        setSnackBar({
          open: true,
          message: data?.message,
          severity: "success",
        });
        setOpen(false);
      } catch (error) {
        setSnackBar({
          open: true,
          message: error.response?.data?.message,
          severity: "error",
        });
      } finally {
        dispatch({
          type: "SET_LOADING_UPDATE_PROFILE",
          payload: false,
        });
      }
    }, "image/png");
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
          src={state.user?.profile?.ProfileImage?.url}
          sx={{
            width: "100%",
            height: "100%",
            border: "4px solid white",
          }}
        />

        
      </Box>

   






    </>
  );
}
