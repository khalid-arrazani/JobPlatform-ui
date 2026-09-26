import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { useState } from "react";

export default function ExperienceP() {
  const [about, setAbout] = useState("");

  return (
    <>
      <Box
        sx={{
          flex: 1,
          pt: 4,
          flexDirection: "column",
          position: "relative",
          overflow: "auto",
          display: "flex",
          justifyContent: "space-between",
          pb: 4,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ width: "100%", boxSizing: "border-box" }}>
          {/* header experience */}
          <Box
            sx={{
              height: "4rem",
              width: "100%",

              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <Box
              sx={{
                height: "3.5rem",
                width: "3.5rem",
                bgcolor: "#ecddfd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Case-Round--Streamline-Solar"
                height="40"
                width="40"
              >
                <g id="Line Duotone/School/Case Round">
                  <path
                    id="Vector"
                    stroke="#41008b"
                    d="M3 12c0 3.7712 0 7.6569 1.31802 8.8284C5.63604 22 7.75736 22 12 22c4.2426 0 6.364 0 7.682 -1.1716C21 19.6569 21 15.7712 21 12"
                    stroke-width="1.2"
                  ></path>
                  <path
                    id="Vector_2"
                    stroke="#41008b"
                    stroke-linecap="round"
                    d="M9.1709 4c0.41183 -1.16519 1.5231 -2 2.8293 -2s2.4175 0.83481 2.8293 2"
                    stroke-width="1.2"
                  ></path>
                  <path
                    id="Vector_3"
                    stroke="#41008b"
                    d="m14.6603 14.2019 6.1976 -1.8593c0.4109 -0.1232 0.6164 -0.1849 0.7685 -0.3071 0.1328 -0.1067 0.2362 -0.2457 0.3002 -0.4036 0.0734 -0.1808 0.0734 -0.3953 0.0734 -0.8242 0 -1.68743 0 -2.53112 -0.3297 -3.17502 -0.2869 -0.56026 -0.7427 -1.01609 -1.303 -1.30297C19.7234 6 18.8797 6 17.1923 6H6.80765c-1.68738 0 -2.53107 0 -3.17497 0.32971 -0.56026 0.28688 -1.01609 0.74271 -1.30297 1.30297C2 8.27658 2 9.12027 2 10.8077c0 0.4289 0 0.6434 0.07336 0.8242 0.06407 0.1579 0.16743 0.2969 0.30027 0.4036 0.15211 0.1222 0.35755 0.1839 0.76843 0.3071l6.19762 1.8593"
                    stroke-width="1.2"
                  ></path>
                  <path
                    id="Vector_4"
                    stroke="#41008b"
                    stroke-linecap="round"
                    d="M14 12.5h-4c-0.27614 0 -0.5 0.2239 -0.5 0.5v2.1615c0 0.2044 0.12448 0.3883 0.3143 0.4642l0.7001 0.2801c0.9537 0.3814 2.0175 0.3814 2.9712 0l0.7001 -0.2801c0.1898 -0.0759 0.3143 -0.2598 0.3143 -0.4642V13c0 -0.2761 -0.2239 -0.5 -0.5 -0.5Z"
                    stroke-width="1.2"
                  ></path>
                </g>
              </svg>
            </Box>
            <Box
              sx={{
                height: "4rem",
                width: "auto",

                display: "flex",

                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#060410c6",
                }}
              >
                Experience
              </Typography>
              <Typography
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#06041088",
                }}
              >
                Add and manage your work experience
              </Typography>
            </Box>
          </Box>

          {/* Add experience */}
          <Box
            sx={{
              height: "auto",
              width: "100%",
              display: "flex",
              alignItems: "center",my:2,
              flexDirection:"column",gap:2
            }}
          >
            <TextField fullWidth placeholder="Role"   sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.3rem",
                    fontFamily: "monospace",
                    fontSize: "1.3rem",
                  },
                  "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                    {
                     border:"1px dashed #b3b1b1"
                    },
                  "& .MuiInputBase-input": {
                    py: 1,
                  },
                  
                }} />
            <TextField fullWidth placeholder="Company" sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.3rem",
                    fontFamily: "monospace",
                    fontSize: "1.3rem",
                  },
                  "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                    {
                     border:"1px dashed #b3b1b1"
                    },
                  "& .MuiInputBase-input": {
                    py: 1,
                  },
                  
                }} />
            <TextField fullWidth placeholder="Period"   sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.3rem",
                    fontFamily: "monospace",
                    fontSize: "1.3rem",
                  },
                  "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                    {
                     border:"1px dashed #b3b1b1"
                    },
                  "& .MuiInputBase-input": {
                    py: 1,
                  },
                  
                }}  />
           


            <Button
              fullWidth
              sx={{
                display: "flex",
                gap: 2,
                bgcolor: "#ffffff",
                color: "#6622db",
                borderRadius: "8px",
                fontFamily: "monospace",
                textTransform: "none",
                fontSize: "1.2rem",
                fontWeight: 600,

                border: "1px dashed #909090dd",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#6622db"
                id="Plus--Streamline-Phosphor"
                height="18"
                width="18"
              >
                <desc>Plus Streamline Icon: https://streamlinehq.com</desc>
                <path
                  d="M15.84 8c0 0.3608125 -0.29251875 0.65331875 -0.65333125 0.65333125H8.65333125v6.5333375c0 0.50293125 -0.54444375 0.81726875 -0.98 0.5658 -0.2021375 -0.11670625 -0.3266625 -0.3323875 -0.3266625 -0.5658V8.65333125H0.81333125c-0.50293125 0 -0.81726875 -0.54444375 -0.5658 -0.98 0.1167125 -0.20215 0.33238125 -0.326675 0.5658 -0.3266625h6.5333375V0.81333125c0 -0.50293125 0.54444375 -0.81726875 0.98 -0.5658 0.2021375 0.11670625 0.3266625 0.3323875 0.3266625 0.5658v6.5333375h6.5333375c0.3608125 0.0000125 0.65333125 0.29251875 0.65333125 0.65333125Z"
                  stroke-width="3"
                ></path>
              </svg>
              Add Experience
            </Button>
          </Box>

          {/* --------- */}
          <Box
            sx={{
              width: "100%",

              border: "1px solid #c1b9c858",
              boxSizing: "border-box",
              borderRadius: "10px",
              px: 1.5,
              py: 1,
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  height: "3rem",
                  width: "3rem",
                  bgcolor: "#ecddfd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <svg
                  id="Data-Center--Streamline-Carbon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height="32"
                  width="32"
                >
                  <desc>
                    Data Center Streamline Icon: https://streamlinehq.com
                  </desc>
                  <defs></defs>
                  <path
                    d="M14 5h-2.5V3a1.00115 1.00115 0 0 0 -1 -1H5.5a1.00115 1.00115 0 0 0 -1 1v2H2a1.00115 1.00115 0 0 0 -1 1v8a1.00115 1.00115 0 0 0 1 1h12a1.00115 1.00115 0 0 0 1 -1V6a1.00115 1.00115 0 0 0 -1 -1ZM2 14V6h2.5v1H3.5v1h1v1H3.5v1h1v1H3.5v1h1v2Zm8.5 0H5.5V3h5Zm3.5 0h-2.5v-2h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h2.5Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M7 4h2v1h-2Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M7 6h2v1h-2Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M7 8h2v1h-2Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    id="_Transparent_Rectangle_"
                    d="M0 0h16v16H0Z"
                    fill="none"
                    stroke-width="0.2"
                  ></path>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#120843c6",
                    mb: 0.5,
                  }}
                >
                  NexHire
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#06041088",
                    mb: 0.5,
                  }}
                >
                  Full Stack Developer
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ height: "1.3rem", width: "1.3rem" }}>
                    <svg
                      version="1.1"
                      id="Calendar--Streamline-Carbon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0"
                      y="0"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                      enable-background="new 0 0 32 32"
                      height="20"
                      width="20"
                    >
                      <path
                        d="M13 2h-2V1h-1v1h-4V1h-1v1H3c-0.55 0 -1 0.45 -1 1v10c0 0.55 0.45 1 1 1h10c0.55 0 1 -0.45 1 -1V3c0 -0.55 -0.45 -1 -1 -1zm0 11H3V6h10v7zm0 -8H3V3h2v1h1V3h4v1h1V3h2v2z"
                        fill="#000000c5"
                        stroke-width="0.2"
                      ></path>
                      <path
                        id="_Transparent_Rectangle_"
                        d="M0 0h16v16H0Z"
                        fill="none"
                        stroke-width="0.2"
                      ></path>
                    </svg>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#120843c6",
                    }}
                  >
                    2021 - 2023
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "2rem",
                  width: "5rem",

                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                <IconButton>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Pen--Streamline-Solar-Ar"
                    height="24"
                    width="24"
                  >
                    <path
                      d="m14.3601 4.07866 0.9268 -0.92688c1.5357 -1.53571 4.0256 -1.53571 5.5613 0 1.5357 1.5357 1.5357 4.02557 0 5.56128l-0.9269 0.92687m-5.5612 -5.56127s0.1158 1.96962 1.8537 3.70752c1.7379 1.73789 3.7075 1.85375 3.7075 1.85375m-5.5612 -5.56127L5.83882 12.5999c-0.57716 0.5772 -0.86574 0.8657 -1.11392 1.1839 -0.29277 0.3754 -0.54376 0.7815 -0.74856 1.2112 -0.17361 0.3643 -0.30266 0.7515 -0.56078 1.5258l-1.09375 3.2813M19.9213 9.63993l-8.5212 8.52127c-0.5772 0.5771 -0.8657 0.8657 -1.1839 1.1139 -0.37538 0.2928 -0.78151 0.5438 -1.21122 0.7486 -0.36428 0.1736 -0.75146 0.3026 -1.5258 0.5607l-3.28126 1.0938m0 0 -0.80208 0.2674c-0.38106 0.127 -0.80118 0.0278 -1.08521 -0.2562 -0.28403 -0.2841 -0.3832 -0.7042 -0.25618 -1.0852l0.26736 -0.8021m1.87611 1.8761 -1.87611 -1.8761"
                      stroke="#7b1ad5"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </IconButton>

                <IconButton>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Trash-Bin-Minimalistic--Streamline-Solar-Ar"
                    height="24"
                    width="24"
                  >
                    <path
                      d="M9.17065 4c0.41184 -1.16519 1.52305 -2 2.82925 -2 1.3063 0 2.4175 0.83481 2.8293 2"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M20.5 6H3.49988"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="m18.8333 8.5 -0.4599 6.8991c-0.177 2.6549 -0.2655 3.9824 -1.1305 4.7916C16.3778 21 15.0474 21 12.3866 21h-0.7733c-2.66082 0 -3.99123 0 -4.85623 -0.8093 -0.86501 -0.8092 -0.95351 -2.1367 -1.1305 -4.7916L5.16663 8.5"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="m9.5 11 0.5 5"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="m14.5 11 -0.5 5"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",

              border: "1px solid #c1b9c858",
              boxSizing: "border-box",
              borderRadius: "10px",
              px: 1.5,
              py: 1,
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                gap: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  height: "3rem",
                  width: "3rem",
                  bgcolor: "#ecddfd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <svg
                  id="Data-Center--Streamline-Carbon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  height="32"
                  width="32"
                >
                  <desc>
                    Data Center Streamline Icon: https://streamlinehq.com
                  </desc>
                  <defs></defs>
                  <path
                    d="M14 5h-2.5V3a1.00115 1.00115 0 0 0 -1 -1H5.5a1.00115 1.00115 0 0 0 -1 1v2H2a1.00115 1.00115 0 0 0 -1 1v8a1.00115 1.00115 0 0 0 1 1h12a1.00115 1.00115 0 0 0 1 -1V6a1.00115 1.00115 0 0 0 -1 -1ZM2 14V6h2.5v1H3.5v1h1v1H3.5v1h1v1H3.5v1h1v2Zm8.5 0H5.5V3h5Zm3.5 0h-2.5v-2h1v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h2.5Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M7 4h2v1h-2Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M7 6h2v1h-2Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    d="M7 8h2v1h-2Z"
                    fill="#41008b"
                    stroke-width="0.2"
                  ></path>
                  <path
                    id="_Transparent_Rectangle_"
                    d="M0 0h16v16H0Z"
                    fill="none"
                    stroke-width="0.2"
                  ></path>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#120843c6",
                    mb: 0.5,
                  }}
                >
                  NexHire
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#06041088",
                    mb: 0.5,
                  }}
                >
                  Full Stack Developer
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ height: "1.3rem", width: "1.3rem" }}>
                    <svg
                      version="1.1"
                      id="Calendar--Streamline-Carbon"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0"
                      y="0"
                      viewBox="0 0 16 16"
                      xml:space="preserve"
                      enable-background="new 0 0 32 32"
                      height="20"
                      width="20"
                    >
                      <path
                        d="M13 2h-2V1h-1v1h-4V1h-1v1H3c-0.55 0 -1 0.45 -1 1v10c0 0.55 0.45 1 1 1h10c0.55 0 1 -0.45 1 -1V3c0 -0.55 -0.45 -1 -1 -1zm0 11H3V6h10v7zm0 -8H3V3h2v1h1V3h4v1h1V3h2v2z"
                        fill="#000000c5"
                        stroke-width="0.2"
                      ></path>
                      <path
                        id="_Transparent_Rectangle_"
                        d="M0 0h16v16H0Z"
                        fill="none"
                        stroke-width="0.2"
                      ></path>
                    </svg>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#120843c6",
                    }}
                  >
                    2021 - 2023
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "2rem",
                  width: "5rem",

                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                <IconButton>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Pen--Streamline-Solar-Ar"
                    height="24"
                    width="24"
                  >
                    <path
                      d="m14.3601 4.07866 0.9268 -0.92688c1.5357 -1.53571 4.0256 -1.53571 5.5613 0 1.5357 1.5357 1.5357 4.02557 0 5.56128l-0.9269 0.92687m-5.5612 -5.56127s0.1158 1.96962 1.8537 3.70752c1.7379 1.73789 3.7075 1.85375 3.7075 1.85375m-5.5612 -5.56127L5.83882 12.5999c-0.57716 0.5772 -0.86574 0.8657 -1.11392 1.1839 -0.29277 0.3754 -0.54376 0.7815 -0.74856 1.2112 -0.17361 0.3643 -0.30266 0.7515 -0.56078 1.5258l-1.09375 3.2813M19.9213 9.63993l-8.5212 8.52127c-0.5772 0.5771 -0.8657 0.8657 -1.1839 1.1139 -0.37538 0.2928 -0.78151 0.5438 -1.21122 0.7486 -0.36428 0.1736 -0.75146 0.3026 -1.5258 0.5607l-3.28126 1.0938m0 0 -0.80208 0.2674c-0.38106 0.127 -0.80118 0.0278 -1.08521 -0.2562 -0.28403 -0.2841 -0.3832 -0.7042 -0.25618 -1.0852l0.26736 -0.8021m1.87611 1.8761 -1.87611 -1.8761"
                      stroke="#7b1ad5"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </IconButton>

                <IconButton>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Trash-Bin-Minimalistic--Streamline-Solar-Ar"
                    height="24"
                    width="24"
                  >
                    <path
                      d="M9.17065 4c0.41184 -1.16519 1.52305 -2 2.82925 -2 1.3063 0 2.4175 0.83481 2.8293 2"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M20.5 6H3.49988"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="m18.8333 8.5 -0.4599 6.8991c-0.177 2.6549 -0.2655 3.9824 -1.1305 4.7916C16.3778 21 15.0474 21 12.3866 21h-0.7733c-2.66082 0 -3.99123 0 -4.85623 -0.8093 -0.86501 -0.8092 -0.95351 -2.1367 -1.1305 -4.7916L5.16663 8.5"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="m9.5 11 0.5 5"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="m14.5 11 -0.5 5"
                      stroke="#7b1ad5"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </IconButton>
              </Box>
            </Box>
          </Box>
          {/* ---------- */}
        </Box>

        <Button
          fullWidth
          sx={{
            display: "flex",
            gap: 2,
            bgcolor: "#6622db",
            color: "#ffffffe9",
            borderRadius: "8px",
            fontFamily: "monospace",
            textTransform: "none",
            fontSize: "1.2rem",
            fontWeight: 600,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            id="Floppy-Disk--Streamline-Plump"
            height="24"
            width="28"
          >
            <desc>Floppy Disk Streamline Icon: https://streamlinehq.com</desc>
            <g id="floppy-disk--disk-floppy-electronics-device-disc-computer-storage">
              <g id="Subtract">
                <path
                  fill="#ffffffea"
                  d="M23.9996 9.90039c1.7129 0 3.0746 -0.03399 4.1161 -0.07753 0.9627 -0.04025 1.6254 -0.70845 1.6712 -1.58837 0.0369 -0.7102 0.0627 -1.57606 0.0627 -2.6091 0 -1.87964 -0.0854 -3.20573 -0.1679 -4.0476l-0.0018 -0.01927C27.9541 1.5216 26.0629 1.5 24 1.5c-2.0632 0 -3.9546 0.02161 -5.6806 0.05853l-0.0019 0.01927c-0.0824 0.84186 -0.1679 2.16795 -0.1679 4.04759 0 1.03304 0.0258 1.89891 0.0628 2.6091 0.0457 0.87992 0.7084 1.54812 1.6711 1.58837 1.0415 0.04354 2.4032 0.07753 4.1161 0.07753Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#ffffffea"
                  d="M32.8496 5.62539c0 -1.73599 -0.0695 -3.0478 -0.1494 -3.98205 0.2999 0.01053 0.5935 0.0215 0.8809 0.03287 1.4719 0.05822 2.9177 0.55666 4.1044 1.49398 1.1168 0.88222 2.5026 2.04927 3.7982 3.34482 1.2957 1.29562 2.463 2.68154 3.3456 3.79859 0.9376 1.1867 1.4362 2.6328 1.4945 4.105 0.1049 2.6522 0.1762 5.8334 0.1762 9.5814 0 7.4014 -0.2781 12.5927 -0.5439 15.8643 -0.2671 3.2879 -2.804 5.8247 -6.0918 6.0918 -0.4899 0.0398 -1.0229 0.0799 -1.5999 0.1193 0.1273 -2.1647 0.2356 -5.1578 0.2356 -9.0754 0 -4.9442 -0.1725 -8.4158 -0.3379 -10.6083 -0.1832 -2.4279 -2.0427 -4.3376 -4.4878 -4.544C31.6209 21.6742 28.4504 21.5 24 21.5s-7.6209 0.1742 -9.6743 0.3477c-2.4451 0.2064 -4.3046 2.116 -4.48779 4.544C9.6725 28.5842 9.5 32.0558 9.5 37c0 3.9176 0.1083 6.9107 0.23557 9.0754 -0.57699 -0.0394 -1.10995 -0.0795 -1.59987 -0.1193 -3.28785 -0.2671 -5.82468 -2.8039 -6.09181 -6.0918C1.77808 36.5927 1.5 31.4014 1.5 24c0 -7.4014 0.27808 -12.5927 0.5439 -15.86431 0.26713 -3.28785 2.80396 -5.82467 6.09181 -6.0918 1.79434 -0.14579 4.16609 -0.29526 7.16329 -0.40053 -0.0799 0.93425 -0.1494 2.24605 -0.1494 3.98203 0 1.08297 0.0271 2.00084 0.0668 2.76491 0.1304 2.5075 2.1154 4.3285 4.5418 4.4299 1.0853 0.0454 2.4889 0.0802 4.2414 0.0802 1.7526 0 3.1561 -0.0348 4.2414 -0.0802 2.4264 -0.1014 4.4114 -1.9224 4.5418 -4.4299 0.0398 -0.76408 0.0668 -1.68194 0.0668 -2.76491Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#ffffffea"
                  fill-rule="evenodd"
                  d="M35.2483 46.2504C32.2955 46.394 28.5689 46.5 24 46.5s-8.2955 -0.106 -11.2483 -0.2496C12.6193 44.1279 12.5 41.0825 12.5 37c0 -4.8747 0.1701 -8.2707 0.3294 -10.3826 0.0738 -0.9781 0.7901 -1.6994 1.7487 -1.7804 1.9635 -0.1658 5.0496 -0.337 9.4219 -0.337 4.3723 0 7.4584 0.1712 9.4219 0.337 0.9586 0.081 1.6749 0.8023 1.7487 1.7804 0.1593 2.1119 0.3294 5.5079 0.3294 10.3826 0 4.0825 -0.1193 7.1279 -0.2517 9.2504ZM17.5 31c0 -0.8284 0.6716 -1.5 1.5 -1.5h10c0.8284 0 1.5 0.6716 1.5 1.5s-0.6716 1.5 -1.5 1.5H19c-0.8284 0 -1.5 -0.6716 -1.5 -1.5Zm1.5 5.5c-0.8284 0 -1.5 0.6716 -1.5 1.5s0.6716 1.5 1.5 1.5h6c0.8284 0 1.5 -0.6716 1.5 -1.5s-0.6716 -1.5 -1.5 -1.5h-6Z"
                  clip-rule="evenodd"
                  stroke-width="1"
                ></path>
              </g>
            </g>
          </svg>
          Save Changes
        </Button>
      </Box>
    </>
  );
}
