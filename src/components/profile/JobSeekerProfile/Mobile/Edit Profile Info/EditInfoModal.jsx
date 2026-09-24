import {
  Box,
  Typography,
  Modal,
  Button,

  IconButton,

} from "@mui/material";

import { useState } from "react";
import MainListEdit from "./mainListEdit";
import ProfileP from "./pages/ProfileP";
import ExperienceP from "./pages/ExperienceP";

export default function EditInfoModal({ setOpen, open }) {

  const onClose = () => {
    setOpen(false);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal open={open} onClose={onClose} sx={{ placeContent: "center" }}>
        <Box
          sx={{
            height: "100%",
            width: "100vw",
            bgcolor: "#ffffff",
            px: 2,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* header */}
          <Box
            sx={{
              width: "100%",
              height: "4.5rem",
              borderBottom: "solid 1px #ddd",
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{ borderRadius: "8px" }}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Layout-Window-25--Streamline-Sharp-Gradient-Free"
                height="30"
                width="30"
              >
                <g id="Gradient/Interface Essential/layout-window-25--layout-layouts-window-columns-three">
                  <path
                    id="Subtract"
                    fill="url(#paint0_linear_644_11525)"
                    fill-rule="evenodd"
                    d="M23 1H1v6h22V1ZM1 15V9h22v6H1Zm0 2v6h22v-6H1Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_644_11525"
                    x1="22.926"
                    x2="-3.127"
                    y1="23.005"
                    y2="8.349"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#e71dc5c0"></stop>
                    <stop offset="1" stop-color="#4828ff"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </IconButton>
            <MainListEdit open={openModal} setOpen={setOpenModal} />
            <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
              Edit Profile
            </Typography>

            <Button
              onClick={() => {
                setOpen(false);
              }}
              sx={{ borderRadius: "20px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                id="X--Streamline-Tabler"
                height="24"
                width="24"
              >
                <path d="M18 6 6 18" stroke-width="2"></path>
                <path d="m6 6 12 12" stroke-width="2"></path>
              </svg>
            </Button>
          </Box>




          <ExperienceP/>

          

          

      
        </Box>
      </Modal>
    </>
  );
}
