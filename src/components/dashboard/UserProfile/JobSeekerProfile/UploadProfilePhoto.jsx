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

            <Button
              onClick={handleSave}
              fullWidth
              disabled={state.isLoadingUptadeProfile}
              variant="contained"
              sx={{
                height: "3rem",
                borderRadius: "0.5rem",

                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                mt: "1rem",
                background: "#6d28d9",

                "&:hover": {
                  background: "linear-gradient(135deg,#4c1d95 0%,#5b21b6 100%)",
                },
                mb: "2.5rem",
              }}
            >
              {state.isLoadingUptadeProfile ? (
                <CircularProgress
                  aria-label="Loading…"
                  size={30}
                  sx={{
                    color: green[800],
                    position: "absolute",
                  }}
                />
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  Save
                </Box>
              )}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
