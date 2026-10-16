import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  Chip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function More_Info({ state, setSection, setOpenModal }) {
  const onClick = () => {
    setSection("About me");
    setOpenModal(true);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",

          boxSizing: "border-box",
          mb: 3,
          borderBottom: "1px #b72bfd3d solid",
          borderTop: "1px #b72bfd3d solid",
          py: 2,
        }}
      >
        {/* Professional Title */}
        <Box
          sx={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "15px",
            boxSizing: "border-box",
            bgcolor: "#d4c4da48",
            px: 1,
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.9,
          }}
        >
          <Box
            sx={{
              bgcolor: "#9340f123",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              height: "3rem",
              width: "3rem",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Text-Fields--Streamline-Rounded-Material"
              height="24"
              width="24"
            >
              <desc>Text Fields Streamline Icon: https://streamlinehq.com</desc>
              <path
                fill="#1c0674ee"
                d="M8.497 20c-0.348 0 -0.64285 -0.1215 -0.8845 -0.3645 -0.24165 -0.24315 -0.3625 -0.53835 -0.3625 -0.8855V6.5h-4c-0.347165 0 -0.642335 -0.12185 -0.8855 -0.3655C2.1215 5.89085 2 5.595 2 5.247s0.1215 -0.642835 0.3645 -0.8845C2.607665 4.120835 2.902835 4 3.25 4h10.5c0.34715 0 0.64235 0.121835 0.8855 0.3655 0.243 0.243665 0.3645 0.5395 0.3645 0.8875s-0.1215 0.64285 -0.3645 0.8845c-0.24315 0.24165 -0.53835 0.3625 -0.8855 0.3625h-4v12.25c0 0.34715 -0.12185 0.64235 -0.3655 0.8855 -0.24365 0.243 -0.5395 0.3645 -0.8875 0.3645Zm9 0c-0.348 0 -0.64285 -0.1215 -0.8845 -0.3645 -0.24165 -0.24315 -0.3625 -0.53835 -0.3625 -0.8855V11.5h-2c-0.34715 0 -0.64235 -0.12185 -0.8855 -0.3655 -0.243 -0.24365 -0.3645 -0.5395 -0.3645 -0.8875s0.1215 -0.64285 0.3645 -0.8845c0.24315 -0.24165 0.53835 -0.3625 0.8855 -0.3625h6.5c0.34715 0 0.64235 0.12185 0.8855 0.3655 0.243 0.24365 0.3645 0.5395 0.3645 0.8875s-0.1215 0.64285 -0.3645 0.8845c-0.24315 0.24165 -0.53835 0.3625 -0.8855 0.3625h-2v7.25c0 0.34715 -0.12185 0.64235 -0.3655 0.8855 -0.24365 0.243 -0.5395 0.3645 -0.8875 0.3645Z"
                stroke-width="0.5"
              ></path>
            </svg>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "system-ui",
                color: "#0b0317d8",
                fontSize: "1rem",
                fontWeight: 600,
                pb: 0.5,
              }}
            >
              Professional Title
            </Typography>

            <Typography
              sx={{
                fontFamily: "monospace",
                color: "#3e157b9f",
                fontSize: "0.8rem",
              }}
            >
              HR Manager · Recruiter · CEO
            </Typography>
          </Box>
        </Box>

        {/* Experience Level */}
        <Box
          sx={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "15px",
            boxSizing: "border-box",
            bgcolor: "#d4c4da48",
            px: 1,
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.9,
          }}
        >
          <Box
            sx={{
              bgcolor: "#9340f123",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              height: "3rem",
              width: "3rem",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              id="Arrow-Cursor-2--Streamline-Core"
              height="22"
              width="22"
            >
              <desc>
                Arrow Cursor 2 Streamline Icon: https://streamlinehq.com
              </desc>
              <g id="arrow-cursor-2--mouse-select-cursor">
                <path
                  id="Vector"
                  stroke="#1c0674ee"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.0055 5.42823c0.1561 -0.06508 0.2569 -0.09398 0.3497 -0.18665 0.0927 -0.09268 0.1448 -0.21836 0.1448 -0.34942s-0.0521 -0.25675 -0.1448 -0.34942c-0.0928 -0.09267 -0.1241 -0.14819 -0.3497 -0.21437C12.7798 4.26219 1.80942 0.553527 1.80942 0.553527c-0.17507 -0.059892 -0.36344 -0.069509 -0.5437 -0.027758C1.08546 0.567521 0.920531 0.658965 0.789686 0.78971c-0.130844 0.130745 -0.222358 0.29555 -0.264142 0.47567 -0.041783 0.18013 -0.032159 0.36835 0.027779 0.54329 0 0 3.796377 11.04723 3.842757 11.19743 0.04638 0.1502 0.10621 0.2567 0.19895 0.3494 0.09274 0.0927 0.21852 0.1447 0.34968 0.1447s0.25694 -0.052 0.34968 -0.1447c0.09274 -0.0927 0.11394 -0.1452 0.18346 -0.3494 0.06953 -0.2042 1.93949 -5.59378 1.93949 -5.59378s5.43206 -1.91901 5.58816 -1.98409Z"
                  stroke-width="1"
                ></path>
              </g>
            </svg>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "system-ui",
                color: "#0b0317d8",
                fontSize: "1rem",
                fontWeight: 600,
                pb: 0.5,
              }}
            >
              Location
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                color: "#3e157b9f",
                fontSize: "0.8rem",
              }}
            >
              Mountain View, California, USA
            </Typography>
          </Box>
        </Box>

        {/* Preferred Job Type */}
        <Box
          sx={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "15px",
            boxSizing: "border-box",
            bgcolor: "#d4c4da48",
            px: 1,
            mb: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.9,
          }}
        >
          <Box
            sx={{
              bgcolor: "#9340f123",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              height: "3rem",
              width: "3rem",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Calendar-3--Streamline-Ultimate"
              height="24"
              width="24"
            >
              <desc>Calendar 3 Streamline Icon: https://streamlinehq.com</desc>
              <path
                stroke="#1c0674ee"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 3.75H2.25c-0.82843 0 -1.5 0.67157 -1.5 1.5v16.5c0 0.8284 0.67157 1.5 1.5 1.5h19.5c0.8284 0 1.5 -0.6716 1.5 -1.5V5.25c0 -0.82843 -0.6716 -1.5 -1.5 -1.5Z"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M0.75 9.75h22.5"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 6V0.75"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6V0.75"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M5.625 14.25c-0.20711 0 -0.375 -0.1679 -0.375 -0.375s0.16789 -0.375 0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M5.625 14.25c0.20711 0 0.375 -0.1679 0.375 -0.375s-0.16789 -0.375 -0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M5.625 19.5c-0.20711 0 -0.375 -0.1679 -0.375 -0.375s0.16789 -0.375 0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M5.625 19.5c0.20711 0 0.375 -0.1679 0.375 -0.375s-0.16789 -0.375 -0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M12 14.25c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M12 14.25c0.2071 0 0.375 -0.1679 0.375 -0.375S12.2071 13.5 12 13.5"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M12 19.5c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M12 19.5c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M18.375 14.25c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M18.375 14.25c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M18.375 19.5c-0.2071 0 -0.375 -0.1679 -0.375 -0.375s0.1679 -0.375 0.375 -0.375"
                stroke-width="1.5"
              ></path>
              <path
                stroke="#1c0674ee"
                d="M18.375 19.5c0.2071 0 0.375 -0.1679 0.375 -0.375s-0.1679 -0.375 -0.375 -0.375"
                stroke-width="1.5"
              ></path>
            </svg>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "system-ui",
                color: "#0b0317d8",
                fontSize: "1rem",
                fontWeight: 600,
                pb: 0.5,
              }}
            >
              Member Since
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                color: "#3e157b9f",
                fontSize: "0.8rem",
              }}
            >
              Joined March 2026
            </Typography>
          </Box>
        </Box>

        {/* Languages */}
        <Box
          sx={{
            width: "100%",
            border: "1px solid #ddd",
            borderRadius: "15px",
            boxSizing: "border-box",
            bgcolor: "#d4c4da48",
            px: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.9,
          }}
        >
          <Box
            sx={{
              bgcolor: "#9340f123",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              height: "3rem",
              width: "3rem",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Translate-Text--Streamline-Sharp"
              height="30"
              width="30"
            >
              <desc>
                Translate Text Streamline Icon: https://streamlinehq.com
              </desc>
              <g id="translate-text--options-text-translate">
                <path
                  id="Vector 2131"
                  stroke="#1c0674ee"
                  d="M8 1v3"
                  stroke-width="1.5"
                ></path>
                <path
                  id="Vector 2132"
                  stroke="#1c0674ee"
                  d="M1 4h14"
                  stroke-width="1.5"
                ></path>
                <path
                  id="Vector 2377"
                  stroke="#1c0674ee"
                  d="M4 4v0.54662c0 2.49176 1.16105 4.84124 3.1404 6.35488L11 13.8529"
                  stroke-width="1.5"
                ></path>
                <path
                  id="Vector 2378"
                  stroke="#1c0674ee"
                  d="M12 4v0.54662c0 2.49176 -1.161 4.84124 -3.1404 6.35488L3.5 15"
                  stroke-width="1.5"
                ></path>
                <path
                  id="Vector 1"
                  stroke="#1c0674ee"
                  d="m12 23 3.6 -11h1.8L21 23m-7.8 -3.5634h6.6"
                  stroke-width="1.5"
                ></path>
              </g>
            </svg>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "system-ui",
                color: "#0b0317d8",
                fontSize: "1rem",
                fontWeight: 600,
                pb: 0.5,
              }}
            >
              Languages
            </Typography>
            <Typography
              sx={{
                fontFamily: "monospace",
                color: "#3e157b9f",
                fontSize: "0.8rem",
                boxSizing: "border-box",
                textWrap: "wrap",
                flexWrap: "wrap",
                width: "17rem",
              }}
            >
              {/* {state.user?.profile.aboutMe?.languages?.join(" - ")}
              {state.user?.profile.aboutMe?.languages?.length >= 1
                ? null
                : "Unknown"} */}
              English · French · Arabic
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
