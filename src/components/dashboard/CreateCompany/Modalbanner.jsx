import { Typography, Box, IconButton, Button } from "@mui/material";
import Modal from "@mui/material/Modal";

import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

const banners = {
  1: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590367/AAYABATzAAgAAQAAAAAAAGzDZR5rStISQ1yERktnsWHnrA_erl1qv.jpg",
  2: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590346/AAYABATzAAgAAQAAAAAAAMRw-ZRQGUcDTI2otj46zINFIw_ajmzct.jpg",
  3: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590332/AAYABATzAAgAAQAAAAAAAOBT-FNgMROnShuQ5eB2HbQteg_teo4cw.jpg",
  4: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590315/AAYABATzAAgAAQAAAAAAAN6Y-o5SDacURUWv0_FkZRq6Gg_m1bqxn.jpg",
  5: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590304/AAYABATzAAgAAQAAAAAAAMj_3rfOgP3ZQmm5o1-2ZgmbRw_oftb6h.jpg",
  6: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590296/AAYABATzAAgAAQAAAAAAAMo80PNuvpeYSWmOieS4NeQYtQ_avkput.jpg",
  7: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590281/AAYABATzAAgAAQAAAAAAAMOHxFnK8NKlT9yznyIWepeV4w_fapjy3.jpg",
  8: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590217/AAYABATzAAgAAQAAAAAAALNrMPYvoAPPTSuRq_eKjwPCMg_pvk6kp.jpg",
  9: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590212/AAYABATzAAgAAQAAAAAAAQidZ4lo5ohrTLODXaijuiow2A_uubxgf.jpg",
  10: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590190/AAYABATzAAgAAQAAAAAAALL3VUK4GDT6TD2xvmyubQ6QGQ_cf8v3m.jpg",
  11: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590173/AAYABATzAAgAAQAAAAAAAAPFzwpvhXv8S5-B3JgetGKbiQ_svtqwc.jpg",
  12: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590134/AAYABATzAAgAAQAAAAAAAAIViJt5_fXtQleFNmpGiUR4Cw_mfzkyj.jpg",
  13: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782590118/AAYABATzAAgAAQAAAAAAAL1oYjwyW3ZoR2WlcN4Df8JI4A_yre58r.jpg",
  14: "https://res.cloudinary.com/dzppmepd9/image/upload/v1782589674/AAYABATzAAgAAQAAAAAAAL7g7rQW-r65R0ySdjUJAn_9mQ_aygqkz.jpg",
};

export default function Modalbanner({
  bannerModal,
  setbannerModal,
  setBackground,background
}) {
  const [SelectedBanner, setSelectedBanner] = useState(null);

  const selectBanner = () => {
    setBackground({
      type: "banner",
      bannerId: SelectedBanner,
      image: null,
    });
    setbannerModal(false)
  };

  useEffect(()=>{
    if( background.bannerId == null){
        setSelectedBanner(null);
    }
  },[background.type])

  const handleClose = () => {
    setbannerModal(false);
  };


  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={handleClose}
      open={bannerModal}
    >
      <Box
        sx={{
          width: "90%",

          borderRadius: "10px",
          height: "90%",
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
            height: "10%",

            display: "flex",
            alignItems: "center",
            px: 2,
            boxSizing: "border-box",
            justifyContent: "space-between",
            borderBottom: "solid #b4b4b473 1px",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: 600,
              color: "#050318d2",
              fontFamily: "system-ui",
            }}
          >
            Add a cover image
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "78%",
            display: "flex",
            p: 2,
            boxSizing: "border-box",
            justifyContent: "space-evenly",
            borderBottom: "solid #b4b4b473 1px",
            flexWrap: "wrap",
            overflow: "auto",
            gap: 2,
          }}
        >
          {Object.entries(banners).map(([id, url]) => (
            <Box
              key={id}
              component="img"
              src={url}
              onClick={() => setSelectedBanner(Number(id))}
              sx={{
                width: 300,
                height: 120,
                cursor: "pointer",
                borderRadius: 2,
                border:
                  SelectedBanner === Number(id)
                    ? "3px solid #268ff9"
                    : "3px solid transparent",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "12%",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Button
            onClick={selectBanner}
            size="large"
            sx={{ mr: 4, bgcolor: "#2c68ff", color: "#fff", px: 4 }}
          >
            {" "}
            Save{" "}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
