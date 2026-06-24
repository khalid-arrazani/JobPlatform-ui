import { Box, Card, IconButton, Typography, Button } from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";

import PanoramaOutlinedIcon from "@mui/icons-material/PanoramaOutlined";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { MdOutlineFileUpload } from "react-icons/md";

export default function Branding() {
  return (
    <>
      <Box
        sx={{
          height: "70%",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderTop: "solid 0.5px #b3b0b069",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70%",
            borderRadius: "15px",
            overflow: "hidden",
            border: "solid 0.5px #b3b0b069",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "68%",
              bgcolor: "#ebebeb",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <PanoramaOutlinedIcon
              sx={{ width: "3rem", height: "3rem", color: "#0958c6" }}
            />

            <Typography
              sx={{
                fontFamily: "-apple-system",
                fontWeight: 700,
                color: "#0b0b12d9",
                m: 0,
              }}
            >
              Upload cover background
            </Typography>

            <Typography
              sx={{
                fontFamily: "-apple-system",
                fontWeight: 700,
                color: "#0a0a189f",
                m: 0,
                fontSize: "0.8rem",
                p: 0,
              }}
            >
              JBG or PNG. Recommended size 1920x600px. Max size 5MB
            </Typography>

            <Button
              sx={{
                color: "#4a62ff",
                bgcolor: "#ffffff",
                p: 0.8,
                display: "flex",
                gap: 0.5,
                alignItems: "center",
                borderRadius: "5px",
                mt: 1.5,textTransform:"none",
              }}
            >
              <MdOutlineFileUpload
                style={{ width: "1.3rem", height: "1.3rem", p: 0 }}
              />
              Choose Image
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "32%",
              bgcolor: "#ffffff",
              position: "relative",
              borderTop: "solid 0.5px #b3b0b069",
            }}
          >
            <Box
              sx={{
                width: "8rem",
                height: "8rem",
                position: "absolute",
                top: -75,
                left: 25,
                p: 0,
                bgcolor: "#fff",
                borderRadius: "25px",
                border: "solid 0.5px #b3b0b069",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DomainIcon
                sx={{ width: "70%", height: "70%", color: "#b1afaf" }}
              />

              <IconButton
                sx={{
                  position: "absolute",
                  bottom: -9,
                  right: -20,
                  bgcolor: "#0033ffd0",
                  color: "#fff",
                  p: 1,
                }}
              >
                <PhotoCameraIcon sx={{ width: "1.6rem", height: "1.6rem" }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
