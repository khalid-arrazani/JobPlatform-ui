import { Box, Typography, Modal,Button,TextField } from "@mui/material";
import { useState } from "react";

export default function EditInfoModal({ setOpen, open }) {
    const [about , setAbout ] = useState("")
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


            <Button onClick={()=>{
                setOpen(false)
            }} sx={{ borderRadius: "20px" }}>
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

           <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily:"monospace"
                }}
              >
                Full name
              </Typography>

              <TextField
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: {
                    maxLength: 700,
                  },
                }}
              />

            
            </Box>
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily:"monospace"
                }}
              >
                Headline
              </Typography>

              <TextField
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                fullWidth
                slotProps={{
                  htmlInput: {
                    maxLength: 700,
                  },
                }}
              />
            </Box>
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  mb: "0.5rem",
                  color: "#111827",
                }}
              >
                About Me*
              </Typography>

              <TextField
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                size="small"
                fullWidth
                multiline
                rows={3}
                slotProps={{
                  htmlInput: {
                    maxLength: 700,
                  },
                }}
              />

              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: "0.75rem",
                  color: "#6b7280",
                  textAlign: "right",
                }}
              >
                {about.length}/700
              </Typography>
            </Box>


        </Box>
        
      </Modal>
    </>
  );
}
