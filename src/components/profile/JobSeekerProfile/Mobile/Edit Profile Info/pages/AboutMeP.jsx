import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  MenuItem,
} from "@mui/material";

import ISO6391 from "iso-639-1";

import { Chip, Modal, Divider, Autocomplete } from "@mui/material";

import { updateProfileJS } from "../../../../../../logic/api/profile/GetMe";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../../logic/context/AuthContext";
import { useProfile } from "../../../../../../logic/context/profileContext";

export default function AboutMeP() {
  const { aboutOpen, setAboutOpen, dispatch, ...state } = useProfile();
  const { setSnackBar } = useAuth();

  // this is the languages List
  const lang = ISO6391.getAllNames();
  //---------------------------------

  const [about, setAbout] = useState("bio");
  const [language, setLanguage] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  // -----------------------availability and preferredJobType----------------------------
  const [availability, setAvailability] = useState("");
  const [preferredJobType, setPreferredJobType] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  useEffect(() => {
    const profile = state.user?.profile;

    if (!profile) return;

    setAbout(profile.aboutMe?.about || "");
    setLanguagesList(profile.aboutMe?.languages || []);
    setAvailability(profile.aboutMe?.availability || "");
    setPreferredJobType(profile.aboutMe?.preferredJobType || "");
    setExperienceLevel(profile.aboutMe?.experienceLevel || "");
  }, [state.user?.profile]);

  const handleAdd = () => {
    if (!language) return;

    setLanguagesList((prev) =>
      prev.includes(language) ? prev : [...prev, language],
    );
    setLanguage("");
  };

  const handleSave = async () => {
    const aboutMe = {
      about,
      languages: languagesList,
      availability,
      preferredJobType,
      experienceLevel,
    };

    dispatch({
      type: "SET_LOADING_UPDATE_PROFILE",
      payload: true,
    });
    setSnackBar({
      open: true,
      message: "Education Update Seccesfuly",
      severity: "success",
    });
    try {
      const data = await updateProfileJS({
        aboutMe,
      });
      dispatch({
        type: "PROFILE",
        payload: data,
      });
      setAboutOpen(false);
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
  };

  const handleDelete = (item) => {
    setLanguagesList((prev) => prev.filter((l) => l !== item));
  };
  return (
    <>
      <Box
        sx={{
          flex: 1,
          flexDirection: "column",
          position: "relative",
          overflow: "auto",
          display: "flex",
          justifyContent: "space-between",
          py: 2, px: 2,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
           
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "100%",
              boxSizing: "border-box",
              pb: 4,
            }}
          >
            {/* header About ME */}
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
                  viewBox="0 0 24 24"
                  id="Business-Card-1--Streamline-Ultimate"
                  height="40"
                  width="40"
                >
                  <path
                    d="M3 4.75h18s2 0 2 2v10.5s0 2 -2 2H3s-2 0 -2 -2V6.75s0 -2 2 -2"
                    fill="none"
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                  <path
                    d="M4.564 7.75h5v5h-5Z"
                    fill="none"
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                  <path
                    d="m4.564 15.75 4.436 0"
                    fill="none"
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                  <path
                    d="m15 8.25 4.238 0"
                    fill="none"
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                  <path
                    d="m15 15.75 4.238 0"
                    fill="none"
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                  <path
                    d="m13.291 12 5.947 0"
                    fill="none"
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
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
                  About Me
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#06041088",
                  }}
                >
                  Add and manage your personal information.
                </Typography>
              </Box>
            </Box>

            {/* about me */}
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
                About me
              </Typography>

              <Box
                sx={{
                  border: "solid #ddd 1px",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "3.4rem",

                    display: "flex",
                    alignItems: "center",

                    borderBottom: "solid #ddd 1px",
                    gap: 1,
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
                      id="Information-Circle--Streamline-Flex"
                      height="28"
                      width="28"
                    >
                      <g id="information-circle--information-frame-info-more-help-point-circle">
                        <path
                          id="Vector"
                          fill="#d7e0ff"
                          d="M2.11452 11.3428c2.2445 2.6357 7.52645 2.6357 9.77098 0 2.0673 -2.4277 1.9104 -7.17948 -0.5779 -9.2579 -2.22871 -1.861655 -6.3865 -1.861655 -8.61525 0C0.204096 4.16332 0.0471919 8.9151 2.11452 11.3428Z"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector_2"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.11452 11.3428c2.2445 2.6357 7.52645 2.6357 9.77098 0 2.0673 -2.4277 1.9104 -7.17948 -0.5779 -9.2579 -2.22871 -1.861655 -6.3865 -1.861655 -8.61525 0C0.204096 4.16332 0.0471919 8.9151 2.11452 11.3428Z"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector 1187"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.74599 6h0.49646c0.55229 0 1 0.44772 1 1v2.73504"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector 1188"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.76066 9.73505h2.97826"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Vector 1189"
                          stroke="#4147d5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.25713 3.71982v0.32278"
                          stroke-width="1"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 500,

                      color: "#070e1ee5",
                      fontFamily: "monospace",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    tell us about you
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      id="Arrow-Rectangle-Down-2--Streamline-Ultimate"
                      height="24"
                      width="24"
                    >
                      <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.75 0.75h18.5s2 0 2 2v18.5s0 2 -2 2H2.75s-2 0 -2 -2V2.75s0 -2 2 -2Z"
                        stroke-width="0"
                      ></path>
                      <path
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.649 6.937 12 11.1l5.351 -4.162c0.1191 -0.09868 0.2626 -0.16334 0.4154 -0.18714 0.1528 -0.0238 0.3092 -0.00585 0.4527 0.05193 0.1434 0.05779 0.2686 0.15328 0.3622 0.27636 0.0937 0.12308 0.1523 0.26918 0.1697 0.42285v4.417c-0.0032 0.2197 -0.0568 0.4357 -0.1567 0.6315 -0.0999 0.1957 -0.2433 0.3659 -0.4193 0.4975l-5.618 4.369c-0.1602 0.1207 -0.3554 0.186 -0.556 0.186 -0.2006 0 -0.3958 -0.0653 -0.556 -0.186l-5.619 -4.37c-0.17599 -0.1316 -0.31944 -0.3018 -0.4193 -0.4975 -0.09986 -0.1958 -0.15347 -0.4118 -0.1567 -0.6315V7.5c0.01769 -0.1534 0.07646 -0.29919 0.1701 -0.42197 0.09364 -0.12279 0.21868 -0.21803 0.36193 -0.27568 0.14325 -0.05765 0.29941 -0.07557 0.452 -0.05187 0.15259 0.02369 0.29595 0.08813 0.41497 0.18652Z"
                        clip-rule="evenodd"
                        stroke-width="1.2"
                      ></path>
                    </svg>
                  </Typography>
                </Box>

                <TextField
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  fullWidth
                  multiline
                  placeholder="Tell recruiters about your background, skills, and career goals..."
                  rows={3}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-root": {
                      py: 0.5,
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

            {/* --languages-- */}
            <Box>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                languages
              </Typography>
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",
                  border: "1px #ddd solid",
                  borderRadius: "8px",
                }}
              >
                <Autocomplete
                  disablePortal
                  options={lang}
                  value={language}
                  slotProps={{
                    popper: {
                      sx: {
                        transition: "none",
                        animation: "none",
                        m: 5,
                      },
                    },
                    listbox: {
                      sx: {
                        maxHeight: "150px",
                      },
                    },
                  }}
                  onChange={(e, value) => setLanguage(value)}
                  sx={{ flex: 1 }}
                  renderInput={(params) => (
                    <TextField
                      placeholder="Language"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "0.3rem",
                          fontFamily: "monospace",
                          fontSize: "1.2rem",
                        },
                        "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                          {
                            border: "none",
                          },
                        "& .MuiInputBase-root": {
                          py: 0.5,
                        },
                        border: "none",
                      }}
                      {...params}
                      size="small"
                    />
                  )}
                />

                <Button
                  variant="contained"
                  onClick={handleAdd}
                  sx={{
                    textTransform: "none",
                    height: "40px",
                    mr: 0.4,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Add-1--Streamline-Core"
                    height="25"
                    width="25"
                  >
                    <desc>Add 1 Streamline Icon: https://streamlinehq.com</desc>
                    <g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math">
                      <path
                        id="Union"
                        fill="#ffffff"
                        fill-rule="evenodd"
                        d="M8 1c0 -0.552285 -0.44772 -1 -1 -1S6 0.447715 6 1v5H1c-0.552285 0 -1 0.44772 -1 1s0.447715 1 1 1h5v5c0 0.5523 0.44772 1 1 1s1 -0.4477 1 -1V8h5c0.5523 0 1 -0.44772 1 -1s-0.4477 -1 -1 -1H8V1Z"
                        clip-rule="evenodd"
                        stroke-width="1"
                      ></path>
                    </g>
                  </svg>
                </Button>
              </Box>

              {/* Chips */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  my: 2,
                }}
              >
                {languagesList.map((item, index) => (
                  <Chip
                  sx={{borderRadius:"8px",fontSize:"1rem",fontFamily:"monospace"}}
                    key={index}
                    label={item}
                    onDelete={() => handleDelete(item)}
                  />
                ))}
              </Box>
            </Box>

            {/* -----------------------availability and preferredJobType----------------------- */}

            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 500,
                mb: "0.5rem",
                color: "#070e1ee5",
                fontFamily: "monospace",
              }}
            >
              Availability
            </Typography>

            <Box sx={{ border: "1px solid #ddd", mb: 3, borderRadius: "8px" }}>
              <TextField
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.3rem",
                    fontFamily: "monospace",
                    fontSize: "1.2rem",
                  },
                  "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                    },
                  "& .MuiInputBase-root": {},
                  border: "none",
                }}
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              >
                <MenuItem value="immediately">immediately</MenuItem>

                <MenuItem value="1_week">1_week</MenuItem>

                <MenuItem value="1_month">1_month</MenuItem>
              </TextField>
            </Box>

            {/* Preferred Job Type */}
            <Box>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Preferred Job Type
              </Typography>

              <Box
                sx={{ border: "1px solid #ddd", mb: 3, borderRadius: "8px" }}
              >
                <TextField
                  select
                  fullWidth
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0.3rem",
                      fontFamily: "monospace",
                      fontSize: "1.2rem",
                    },
                    "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                      {
                        border: "none",
                      },
                    "& .MuiInputBase-root": {
                      py: 0.2,
                    },
                    border: "none",
                  }}
                  value={preferredJobType}
                  onChange={(e) => setPreferredJobType(e.target.value)}
                >
                  <MenuItem value="full-time">full-time</MenuItem>

                  <MenuItem value="part-time">part-time</MenuItem>

                  <MenuItem value="remote">remote</MenuItem>

                  <MenuItem value="internship">internship</MenuItem>

                  <MenuItem value="freelance">freelance</MenuItem>

                  <MenuItem value="contract">contract</MenuItem>
                </TextField>
              </Box>
            </Box>

            {/* Experience Level */}
            <Box>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  mb: "0.5rem",
                  color: "#070e1ee5",
                  fontFamily: "monospace",
                }}
              >
                Experience Level
              </Typography>
              <Box
                sx={{ border: "1px solid #ddd", mb: 0, borderRadius: "8px" }}
              >
              <TextField
                select
                fullWidth
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "0.3rem",
                    fontFamily: "monospace",
                    fontSize: "1.2rem",
                  },
                  "& .css-18p5xg2-MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                    },
                  "& .MuiInputBase-root": {},
                  border: "none",
                }}
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
              >
                <MenuItem value="junior">junior</MenuItem>

                <MenuItem value="mid">mid</MenuItem>

                <MenuItem value="senior">senior</MenuItem>
              </TextField></Box>
            </Box>
          </Box>

          <Button
            fullWidth
            onClick={handleSave}
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
      </Box>
    </>
  );
}
