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
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Full Name
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
                    borderRight: "solid #ddd 1px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Toilet-Sign-Man--Streamline-Flex"
                    height="30"
                    width="30"
                  >
                    
                    <g id="toilet-sign-man--toilet-sign-restroom-bathroom-user-human-person-man-male">
                      <path
                        id="Vector"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.00004 13.2497c-2.40384 0 -2.90385 -3.26896 -2.90385 -6.24973 2.26777 -0.52262 3.54009 -0.53454 5.80769 0 0 2.98077 -0.49999 6.24973 -2.90384 6.24973Z"
                        stroke-width="0.8"
                      ></path>
                      <path
                        id="Vector_2"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 4.75391c1.28125 0 2.00195 -0.72071 2.00195 -2.00196S8.28125 0.75 7 0.75s-2.00195 0.7207 -2.00195 2.00195S5.71875 4.75391 7 4.75391Z"
                        stroke-width="0.8"
                      ></path>
                    </g>
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
                Headline
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
                    borderRight: "solid #ddd 1px",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Human-Resources-Businessman--Streamline-Ultimate" height="24" width="24">
  <desc>
    Human Resources Businessman Streamline Icon: https://streamlinehq.com
  </desc>
  <path fill="#ffbc44" d="M13.4351 16.3047c0 -0.2535 0.1008 -0.4969 0.2801 -0.6762 0.1793 -0.1794 0.4227 -0.2802 0.6763 -0.2802h7.6517c0.2536 0 0.4969 0.1009 0.6763 0.2802 0.1794 0.1792 0.2801 0.4227 0.2801 0.6762v5.7389c0 0.2536 -0.1008 0.497 -0.2801 0.6763 -0.1793 0.1793 -0.4227 0.2801 -0.6763 0.2801h-7.6517c-0.2536 0 -0.4969 -0.1008 -0.6763 -0.2801 -0.1794 -0.1793 -0.2801 -0.4227 -0.2801 -0.6763v-5.7389Z" stroke-width="1"></path>
  <path fill="#ffdda1" d="M22.0432 15.3483h-7.6516c-0.2537 0 -0.497 0.1009 -0.6764 0.2802 -0.1794 0.1792 -0.2801 0.4227 -0.2801 0.6762v5.7389c0 0.2536 0.1008 0.497 0.2801 0.6763 0.1793 0.1793 0.4227 0.2801 0.6764 0.2801h0.2687l7.6067 -7.6067c-0.0724 -0.0242 -0.1476 -0.0393 -0.2238 -0.045Z" stroke-width="1"></path>
  <path fill="#ffdda1" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M5.78267 7.69662c0.66205 0 1.30926 -0.19638 1.85984 -0.56415 0.55049 -0.36787 0.97955 -0.89074 1.23293 -1.50242 0.25338 -0.61168 0.31966 -1.28476 0.19053 -1.93412 -0.12923 -0.64935 -0.448 -1.24591 -0.91621 -1.71402 -0.46821 -0.4682 -1.06466 -0.78707 -1.71402 -0.9162 -0.64936 -0.129133 -1.32243 -0.06286 -1.93412 0.19052 -0.61178 0.25338 -1.13454 0.68245 -1.50241 1.23293 -0.36787 0.55049 -0.56415 1.19779 -0.56415 1.85984 0 0.8878 0.35264 1.7393 0.98053 2.36709 0.62778 0.62779 1.47918 0.98053 2.36708 0.98053Z" stroke-width="1"></path>
  <path fill="#66e1ff" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m7.69621 22.9999 0.47816 -5.7387h2.39123v-3.3476c0 -1.2684 -0.5039 -2.4848 -1.40075 -3.3816 -0.89688 -0.89688 -2.11322 -1.40071 -3.38158 -1.40071s-2.4848 0.50383 -3.38158 1.40071c-0.89688 0.8968 -1.40071 2.1132 -1.40071 3.3816v3.3476h2.39109l0.47826 5.7387h3.82588Z" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.4351 16.3047c0 -0.2535 0.1008 -0.4969 0.2801 -0.6762 0.1793 -0.1794 0.4227 -0.2802 0.6763 -0.2802h7.6517c0.2536 0 0.4969 0.1009 0.6763 0.2802 0.1794 0.1792 0.2801 0.4227 0.2801 0.6762v5.7389c0 0.2536 -0.1008 0.497 -0.2801 0.6763 -0.1793 0.1793 -0.4227 0.2801 -0.6763 0.2801h-7.6517c-0.2536 0 -0.4969 -0.1008 -0.6763 -0.2801 -0.1794 -0.1793 -0.2801 -0.4227 -0.2801 -0.6763v-5.7389Z" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="m15.8252 15.3483 0.4782 -0.9565c0.1043 -0.2926 0.3003 -0.5437 0.5588 -0.716 0.2585 -0.1724 0.5656 -0.2567 0.8758 -0.2405h0.9566c0.3101 -0.0162 0.6173 0.0681 0.8758 0.2405 0.2585 0.1723 0.4545 0.4234 0.5588 0.716l0.4783 0.9565" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M13.4351 19.1741h9.5645" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M18.2168 19.1741v1.4347" stroke-width="1"></path>
  <path stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M5.78271 11.0443v2.8693" stroke-width="1"></path>
  <path fill="#c77f67" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" d="M6.89903 4.34899c0.75145 -0.0001 1.49519 -0.15197 2.18642 -0.44674 -0.08863 -0.68976 -0.39129 -1.33444 -0.86545 -1.84334 -0.47416 -0.50891 -1.0957 -0.85628 -1.77756 -0.99351 -0.68177 -0.137231 -1.38949 -0.05729 -2.02353 0.22849 -0.63403 0.28588 -1.16255 0.76326 -1.5112 1.36499 0.51818 0.53467 1.13855 0.95974 1.82412 1.25011 0.68567 0.29027 1.42258 0.4399 2.1672 0.44Z" stroke-width="1"></path>
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
                    borderRight: "solid #ddd 1px",
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
