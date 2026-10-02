import { Box, IconButton, Avatar, Button } from "@mui/material";

import { useState, useRef, useContext } from "react";

import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, Slider } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import { useAuth } from "../../../../logic/context/AuthContext";
import { ProfileContext } from "../../../../logic/context/profileContext";
import { updateProfilePhotoJS } from "../../../../logic/api/profile/GetMe";

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

        formData.append("profileImage", blob, "profile.png");

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
          bgcolor: "#fffcfc",
          height: "7rem",
          width: "7rem",
          borderRadius: "50%",
          position: "absolute",
          top: "-2.8rem",
          ml: "0.5rem",
          border: "solid 1px #fff",
          boxSizing: "border-box",
        }}
      >
        {/* Avatar */}
        <Avatar
          src={state.user?.profile?.ProfileImage?.url}
          sx={{
            width: "100%",
            height: "100%",
            border: "4px solid white",
            boxSizing: "border-box",
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

            background: "#dfdfdf8e",
            color: "#fff",

            border: "2px solid white",
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

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="Gallery-Edit--Streamline-Solar-Ar"
            height="30"
            width="30"
          >
            <desc>Gallery Edit Streamline Icon: https://streamlinehq.com</desc>
            <path
              d="M22 12c0 4.714 0 7.0711 -1.4645 8.5355C19.0711 22 16.714 22 12 22c-4.71405 0 -7.07107 0 -8.53553 -1.4645C2 19.0711 2 16.714 2 12c0 -4.71405 0 -7.07107 1.46447 -8.53553C4.92893 2 7.28595 2 12 2"
              stroke="#000000"
              stroke-linecap="round"
              stroke-width="1.5"
            ></path>
            <path
              d="m2 12.5001 1.75159 -1.5326c0.91127 -0.7973 2.28469 -0.7516 3.1409 0.1046l4.28971 4.2897c0.6872 0.6873 1.769 0.781 2.5642 0.2221l0.2982 -0.2095c1.1442 -0.8042 2.6923 -0.711 3.7319 0.2246L21 18.5001"
              stroke="#000000"
              stroke-linecap="round"
              stroke-width="1.5"
            ></path>
            <path
              d="m18.562 2.9354 0.4171 -0.4171c0.6911 -0.69107 1.8115 -0.69107 2.5026 0s0.6911 1.81151 0 2.50257l-0.4171 0.4171M18.562 2.9354s0.0522 0.88632 0.8342 1.66838c0.7821 0.78205 1.6684 0.83419 1.6684 0.83419M18.562 2.9354l-3.8345 3.83455c-0.2598 0.25973 -0.3896 0.38959 -0.5013 0.53278 -0.1317 0.1689 -0.2447 0.35166 -0.3368 0.54503 -0.0782 0.16393 -0.1362 0.33815 -0.2524 0.68661L13.2651 9.65m7.7995 -4.21203L17.23 9.27253c-0.2597 0.25972 -0.3895 0.38958 -0.5327 0.50127 -0.1689 0.13174 -0.3517 0.2447 -0.5451 0.3368 -0.1639 0.0782 -0.3381 0.1362 -0.6866 0.2524l-1.1156 0.3719m0 0 -0.7219 0.2406c-0.1714 0.0572 -0.3605 0.0125 -0.4883 -0.1153 -0.1278 -0.1278 -0.1725 -0.3169 -0.1153 -0.4883l0.2406 -0.7219m1.0849 1.0849L13.2651 9.65"
              stroke="#000000"
              stroke-width="1.5"
            ></path>
          </svg>
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
              width={250}
              height={250}
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
