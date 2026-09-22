import { Box, Typography, Modal, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function EditInfoModal({ setOpen, open }) {
  const [about, setAbout] = useState("");
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={onClose} sx={{ placeContent: "center" }}>
        <Box
          sx={{
            height: "100%",
            width: "100vw",
            bgcolor: "#f4edf5",
            px: 1,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "4.5rem",
              borderBottom: "solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontFamily: "monospace", fontSize: "1.3rem" }}>
              Edit Profile Info
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

          <Box sx={{ flex: 1 }}>





            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Location
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",
                    width: "3.4rem",
                    
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight:"solid #ddd 1px"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    id="Location--Streamline-Tabler"
                    height="24"
                    width="24"
                  >
                    
                    <path
                      d="m21 3 -6.5 18a0.55 0.55 0 0 1 -1 0L10 14l-7 -3.5a0.55 0.55 0 0 1 0 -1L21 3"
                      stroke-width="1.8"
                    ></path>
                  </svg>

                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.4rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-input": {
                      py: 0,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Location
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",
                    width: "3.4rem",
                    
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight:"solid #ddd 1px"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    id="Location--Streamline-Tabler"
                    height="24"
                    width="24"
                  >
                    
                    <path
                      d="m21 3 -6.5 18a0.55 0.55 0 0 1 -1 0L10 14l-7 -3.5a0.55 0.55 0 0 1 0 -1L21 3"
                      stroke-width="1.8"
                    ></path>
                  </svg>

                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.4rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-input": {
                      py: 0,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box>


            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Location
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",
                    width: "3.4rem",
                    
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRight:"solid #ddd 1px"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    id="Location--Streamline-Tabler"
                    height="24"
                    width="24"
                  >
                    
                    <path
                      d="m21 3 -6.5 18a0.55 0.55 0 0 1 -1 0L10 14l-7 -3.5a0.55 0.55 0 0 1 0 -1L21 3"
                      stroke-width="1.8"
                    ></path>
                  </svg>

                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.4rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-input": {
                      py: 0,
                    },
                    border: "none",
                  }}
                  slotProps={{
                    htmlInput: {
                      maxLength: 700,
                    },
                  }}
                />
              </Box>
            </Box>






          </Box>
        </Box>
      </Modal>
    </>
  );
}
