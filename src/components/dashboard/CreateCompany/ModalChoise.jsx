import { Typography, Box, IconButton, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

import CloseIcon from "@mui/icons-material/Close";

import { GalleryHorizontal, ImageUp } from "lucide-react";

export default function ModalChoise({
  choiseModal,
  setchoiseModal,
  setImagBG,
  openSetImagBG,
  handlebannerModal,
  BG,
}) {
  const handleClose = () => {
    setchoiseModal(false);
  };

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={handleClose}
      open={choiseModal}
    >
      <Box
        sx={{
          width: "60%",
          borderRadius: "10px",
          height: "50%",
          bgcolor: "#fff",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "&:focus": {
            outline: "none",
          },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "15%",
            bgcolor: "#ffffff",
            display: "flex",
            alignItems: "center",
            px: 2,
            boxSizing: "border-box",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#050318d2",
              fontFamily: "system-ui",
            }}
          >
            Banner
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "60%",
            bgcolor: "#9c9c9c",
            backgroundImage: `url(${BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>

        <Box
          sx={{
            width: "100%",
            height: "25%",
            bgcolor: "#ffffff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "70%",
              display: "flex",
              justifyContent: "space-around",

              boxSizing: "border-box",
            }}
          >
            <Button
              size="small"
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0px",
                gap: 0.5,
              }}
              onClick={handlebannerModal}
            >
              <GalleryHorizontal
                size={30}
                color="#2a6aff"
                style={{ margin: 0 }}
              />
              <Typography sx={{ fontSize: "0.9rem" }}>Choose Banner</Typography>
            </Button>

            <Button
              size="small"
              component="label"
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "0px",
                gap: 0.5,
              }}
            >
              <ImageUp size={30} color="#2a6aff" style={{ margin: 0 }} />
              <Typography sx={{ fontSize: "0.9rem" }}>Upload Image</Typography>
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImagBG(file);
                    openSetImagBG(true);
                  }
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
