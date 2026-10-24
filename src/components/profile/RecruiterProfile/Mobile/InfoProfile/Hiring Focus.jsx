import { Box, Typography, Chip, Paper, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function Hiring_Focus({ state, setSection, setOpenModal }) {
  const onClick = () => {
    setSection("Experience");
    setOpenModal(true);
  };


    const hasHiringFocus = 
  state.user?.profile?.hiring_Focus.jobCategoriesList.length > 0 ||
  state.user?.profile?.hiring_Focus.rolesList.length > 0 ||
  state.user?.profile?.hiring_Focus.experienceLevelsList.length > 0 ||
  state.user?.profile?.hiring_Focus.employmentTypesList.length > 0 ||
  state.user?.profile?.hiring_Focus.workArrangementsList.length > 0 ||
  state.user?.profile?.hiring_Focus.preferredSkillsList.length > 0 ||
  state.user?.profile?.hiring_Focus.aboutHiringfocus.trim() !== "";


  return (
    <>

   {}


        <Paper
          elevation={0}
          sx={{
            borderRadius: "1rem",
            p: "1rem",
            width: "100%",
            boxSizing: "border-box",
            border: "1px dashed #ddd",
            mb: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pb: 1,
              borderBottom: " solid #ddd 1px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Cursor-Target-1--Streamline-Ultimate"
                  height="30"
                  width="30"
                >
                  <desc>
                    Cursor Target 1 Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.002 17.2471v6"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.002 0.74707v6"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75201 11.9971H0.752014"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M23.252 11.9971h-6"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#41008b"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75201 11.998c0 1.0835 0.2134 2.1562 0.628 3.1572 0.4146 1.0009 1.02229 1.9104 1.78837 2.6765 0.76609 0.7661 1.67556 1.3738 2.6765 1.7884 1.00093 0.4146 2.07372 0.6279 3.15712 0.6279 1.0834 0 2.1562 -0.2133 3.1572 -0.6279 1.0009 -0.4146 1.9104 -1.0223 2.6764 -1.7884 0.7661 -0.7661 1.3738 -1.6756 1.7884 -2.6765 0.4146 -1.001 0.628 -2.0737 0.628 -3.1572 0 -1.0834 -0.2134 -2.15616 -0.628 -3.15709 -0.4146 -1.00094 -1.0223 -1.91041 -1.7884 -2.67649 -0.766 -0.76609 -1.6755 -1.37378 -2.6764 -1.78838 -1.001 -0.4146 -2.0738 -0.62799 -3.1572 -0.62799 -1.0834 0 -2.15619 0.21339 -3.15712 0.62799 -1.00094 0.4146 -1.91041 1.02229 -2.6765 1.78838 -0.76608 0.76608 -1.37377 1.67555 -1.78837 2.67649 -0.4146 1.00093 -0.628 2.07369 -0.628 3.15709Z"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Hiring Focus
              </Typography>
            </Box>

            <Button
              onClick={onClick}
              sx={{
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#000000"
                id="Pencil-Simple-Light--Streamline-Phosphor"
                height="24"
                width="24"
              >
                <path
                  d="m15.5115375 4.0630625 -3.575 -3.575c-0.43736875 -0.43741875 -1.1465375 -0.43741875 -1.58390625 0L0.48838125 10.35310625c-0.21046875 0.20974375 -0.32853125 0.49481875 -0.32798125 0.79195625v3.575c0 0.618525 0.5014125 1.1199375 1.1199375 1.1199375h3.575c0.2971375 0.00055 0.5822125 -0.1175125 0.79195625 -0.32798125L15.5115375 5.64696875c0.43741875 -0.43736875 0.43741875 -1.1465375 0 -1.58390625ZM4.96813125 14.83285625c-0.02986875 0.03004375 -0.07043125 0.04701875 -0.11279375 0.04719375h-3.575c-0.0883625 0.00000625 -0.1599875 -0.071625 -0.1599875 -0.1599875v-3.575c0.000175 -0.0423625 0.01715 -0.082925 0.04719375 -0.11279375L8.31994375 3.87906875l3.8005875 3.8013875ZM14.832375 4.9686125l-2.03268125 2.03268125 -3.8005875 -3.80058125 2.03268125 -2.0334875c0.0625 -0.0625625 0.16389375 -0.0625625 0.2263875 0l3.5742 3.575c0.0625625 0.06249375 0.0625625 0.1638875 0 0.2263875Z"
                  stroke-width="0.0625"
                ></path>
              </svg>
            </Button>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: " auto",
              bgcolor: "#100b0b00",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Job categories */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#85242400",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  bgcolor: "#ab6fc731",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 48 48"
                  id="Bag-Suitcase-4--Streamline-Plump"
                  height="25"
                  width="25"
                >
                  <g id="bag-suitcase-4--product-business-briefcase">
                    <path
                      id="Rectangle 97"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.586 14.236c0.21 -2.133 1.67 -3.848 3.785 -4.196C10.353 9.548 15.57 9 24 9c8.43 0 13.647 0.548 16.63 1.04 2.114 0.348 3.575 2.063 3.784 4.196C44.69 17.033 45 21.426 45 27c0 5.574 -0.31 9.967 -0.586 12.764 -0.21 2.133 -1.67 3.848 -3.785 4.196C37.647 44.452 32.43 45 24 45c-8.43 0 -13.646 -0.548 -16.63 -1.04 -2.114 -0.348 -3.575 -2.063 -3.784 -4.196C3.31 36.967 3 32.574 3 27c0 -5.573 0.31 -9.967 0.586 -12.764Z"
                      stroke-width="3"
                    ></path>
                    <path
                      id="Intersect"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M44.986 24.972C39.6 26.67 28.47 30 24 30c-4.47 0 -15.6 -3.33 -20.986 -5.028"
                      stroke-width="3"
                    ></path>
                    <path
                      id="Subtract"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.738 9.2c0.457 -1.408 1.238 -3.052 1.824 -4.204 0.478 -0.938 1.34 -1.615 2.384 -1.755A22.939 22.939 0 0 1 24 3.045c1.245 0 2.278 0.091 3.053 0.196 1.044 0.14 1.906 0.817 2.384 1.755 0.586 1.152 1.367 2.796 1.824 4.203"
                      stroke-width="3"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0b0317c1",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Job Categories
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",
                    color: "#0b0317d8",
                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label="IT & Software"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="Engineering"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Role */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#85242400",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  bgcolor: "#ab6fc731",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  id="User-Profile-Focus--Streamline-Core"
                  height="25"
                  width="25"
                >
                  <desc>
                    User Profile Focus Streamline Icon: https://streamlinehq.com
                  </desc>
                  <g id="user-profile-focus--close-geometric-human-person-profile-focus-user">
                    <path
                      id="Vector"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 10.5v2c0 0.2652 -0.1054 0.5196 -0.2929 0.7071s-0.4419 0.2929 -0.7071 0.2929h-2"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector_2"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 0.5h2c0.2652 0 0.5196 0.105357 0.7071 0.292893 0.1875 0.187537 0.2929 0.441887 0.2929 0.707107v2"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector_3"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M0.5 3.5v-2c0 -0.26522 0.105357 -0.51957 0.292893 -0.707107C0.98043 0.605357 1.23478 0.5 1.5 0.5h2"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector_4"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.5 13.5h-2c-0.26522 0 -0.51957 -0.1054 -0.707107 -0.2929C0.605357 13.0196 0.5 12.7652 0.5 12.5v-2"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector_5"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.99975 6.49998c1.10456 0 1.99999 -0.89543 1.99999 -1.99999S8.10431 2.5 6.99975 2.5c-1.10457 0 -1.99999 0.89543 -1.99999 1.99999s0.89542 1.99999 1.99999 1.99999Z"
                      stroke-width="1"
                    ></path>
                    <path
                      id="Vector_6"
                      stroke="#3a0454ad"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.8034 11.0001c-0.2584 -0.8057 -0.7659 -1.50842 -1.44938 -2.00701 -0.68349 -0.4986 -1.50767 -0.76726 -2.3537 -0.76726 -0.84603 0 -1.6702 0.26866 -2.3537 0.76726 -0.6835 0.49859 -1.191 1.20131 -1.44935 2.00701h7.60613Z"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0b0317c1",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Roles
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",
                    color: "#0b0317d8",
                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label="Frontend Developer"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="Backend Developer"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Experience Levels */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#85242400",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  bgcolor: "#ab6fc731",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="26"
                  width="26"
                >
                  <g id="motion-photos-on">
                    <path
                      id="Union"
                      fill="#3a0454ad"
                      d="M12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.3775 0.27949 -2.69283 0.78516 -3.88965l1.84179 0.7793C4.22359 9.84449 4 10.8948 4 12c0 4.4183 3.58172 8 8 8 4.4183 0 8 -3.5817 8 -8 0 -4.41828 -3.5817 -8 -8 -8 -1.1052 0 -2.15551 0.22359 -3.11035 0.62695l-0.7793 -1.84179C9.30717 2.27949 10.6225 2 12 2M5.5 4C6.32843 4 7 4.67157 7 5.5S6.32843 7 5.5 7 4 6.32843 4 5.5 4.67157 4 5.5 4"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0b0317c1",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Experience Levels
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",
                    color: "#0b0317d8",
                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label="Junior"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="Mid-Level"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Employment Types */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#85242400",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  bgcolor: "#ab6fc731",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Clinical-Notes--Streamline-Outlined-Material"
                  height="26"
                  width="26"
                >
                  <desc>
                    Clinical Notes Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#3a0454ad"
                    d="M17 15.75c-0.83335 0 -1.54165 -0.29165 -2.125 -0.875S14 13.58335 14 12.75s0.29165 -1.54165 0.875 -2.125S16.16665 9.75 17 9.75s1.54165 0.29165 2.125 0.875S20 11.91665 20 12.75s-0.29165 1.54165 -0.875 2.125S17.83335 15.75 17 15.75Zm0 -1.5c0.425 0 0.78125 -0.14375 1.06875 -0.43125 0.2875 -0.2875 0.43125 -0.64375 0.43125 -1.06875 0 -0.425 -0.14375 -0.78125 -0.43125 -1.06875C17.78125 11.39375 17.425 11.25 17 11.25c-0.425 0 -0.78125 0.14375 -1.06875 0.43125C15.64375 11.96875 15.5 12.325 15.5 12.75c0 0.425 0.14375 0.78125 0.43125 1.06875 0.2875 0.2875 0.64375 0.43125 1.06875 0.43125Zm-6 8.5v-2.9c0 -0.35 0.08335 -0.67915 0.25 -0.9875 0.16665 -0.30835 0.4 -0.55415 0.7 -0.7375 0.46665 -0.28335 0.95 -0.52915 1.45 -0.7375 0.5 -0.20835 1.01665 -0.37915 1.55 -0.5125l2.05 2.65 2.05 -2.65c0.53335 0.13335 1.04585 0.30415 1.5375 0.5125 0.49165 0.20835 0.97085 0.45415 1.4375 0.7375 0.3 0.18335 0.5375 0.42915 0.7125 0.7375 0.175 0.30835 0.2625 0.6375 0.2625 0.9875v2.9H11Zm1.5 -1.5h3.925l-2.05 -2.65c-0.33335 0.13335 -0.65835 0.27915 -0.975 0.4375s-0.61665 0.32915 -0.9 0.5125v1.7Zm5.075 0H21.5v-1.7c-0.28335 -0.18335 -0.57915 -0.35415 -0.8875 -0.5125 -0.30835 -0.15835 -0.62915 -0.30415 -0.9625 -0.4375l-2.075 2.65ZM4.5 21c-0.4125 0 -0.765585 -0.1469 -1.05925 -0.44075C3.146915 20.2656 3 19.9125 3 19.5V4.5c0 -0.4125 0.146915 -0.765665 0.44075 -1.0595C3.734415 3.146835 4.0875 3 4.5 3h15c0.4125 0 0.76565 0.146835 1.0595 0.4405C20.85315 3.734335 21 4.0875 21 4.5v6.175c-0.18335 -0.33335 -0.4 -0.64165 -0.65 -0.925S19.81665 9.21665 19.5 9V4.5H4.5v15h5v1.5H4.5Zm2.5 -12.5h8.525c0.23335 -0.08335 0.47365 -0.14585 0.721 -0.1875 0.24735 -0.04165 0.49865 -0.0625 0.754 -0.0625V7H7v1.5Zm0 4.25h5.5c0 -0.25 0.02085 -0.50415 0.0625 -0.7625 0.04165 -0.25835 0.10415 -0.50415 0.1875 -0.7375H7v1.5Zm0 4.25h3.95c0.28335 -0.21665 0.58335 -0.39585 0.9 -0.5375s0.64165 -0.27915 0.975 -0.4125V15.5H7v1.5Zm-2.5 2.5V4.5v4.5V19.5Z"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0b0317c1",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Employment Types
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",
                    color: "#0b0317d8",
                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label="Full-Time"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="Contract"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Work Arrangements */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#85242400",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  bgcolor: "#ab6fc731",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Location-On--Streamline-Outlined-Material"
                  height="26"
                  width="26"
                >
                  <desc>
                    Location On Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    fill="#3a0454ad"
                    d="M12.00225 11.75c0.48185 0 0.8936 -0.1716 1.23525 -0.51475 0.34165 -0.34315 0.5125 -0.75565 0.5125 -1.2375s-0.1716 -0.8936 -0.51475 -1.23525c-0.34315 -0.34165 -0.75565 -0.5125 -1.2375 -0.5125s-0.8936 0.1716 -1.23525 0.51475c-0.34165 0.34315 -0.5125 0.75565 -0.5125 1.2375s0.1716 0.8936 0.51475 1.23525c0.34315 0.34165 0.75565 0.5125 1.2375 0.5125ZM12 20.025c2.21665 -2.01665 3.85415 -3.84585 4.9125 -5.4875C17.97085 12.89585 18.5 11.45 18.5 10.2c0 -1.96315 -0.6274 -3.57065 -1.88225 -4.8225C15.3629 4.125835 13.82365 3.5 12 3.5c-1.82365 0 -3.3629 0.625835 -4.61775 1.8775C6.1274 6.62935 5.5 8.23685 5.5 10.2c0 1.25 0.54165 2.69585 1.625 4.3375 1.08335 1.64165 2.70835 3.47085 4.875 5.4875ZM12 22c-2.68335 -2.28335 -4.6875 -4.40415 -6.0125 -6.3625C4.6625 13.67915 4 11.86665 4 10.2c0 -2.5 0.804165 -4.49165 2.4125 -5.975C8.02085 2.741665 9.88335 2 12 2c2.11665 0 3.97915 0.741665 5.5875 2.225C19.19585 5.70835 20 7.7 20 10.2c0 1.66665 -0.6625 3.47915 -1.9875 5.4375C16.6875 17.59585 14.68335 19.71665 12 22Z"
                    stroke-width="0.5"
                  ></path>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0b0317c1",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Work Arrangements
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",
                    color: "#0b0317d8",
                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label="Remote"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="Hybrid"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Work Arrangements */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#85242400",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",
                  bgcolor: "#ab6fc731",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Cog--Streamline-Ultimate"
                  height="26"
                  width="26"
                >
                  <desc>Cog Streamline Icon: https://streamlinehq.com</desc>
                  <path
                    d="M20.254 13.5H22.5a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2.247a11.8 11.8 0 0 0 -1 -2.922l1.589 -1.588a1 1 0 0 0 0 -1.414l-1.418 -1.414a1 1 0 0 0 -1.414 0l-1.59 1.589a11.769 11.769 0 0 0 -2.92 -1V1.5a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1v2.249a11.777 11.777 0 0 0 -2.921 1l-1.59 -1.587a1 1 0 0 0 -1.414 0L3.16 4.577a1 1 0 0 0 0 1.414L4.75 7.58a11.821 11.821 0 0 0 -1 2.921H1.5a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2.246a11.821 11.821 0 0 0 1 2.921l-1.59 1.59a1 1 0 0 0 0 1.414l1.419 1.414a1 1 0 0 0 1.414 0l1.589 -1.59a11.8 11.8 0 0 0 2.922 1v2.25a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2.245a11.8 11.8 0 0 0 2.92 -1l1.591 1.589a1 1 0 0 0 1.414 0l1.414 -1.414a1 1 0 0 0 0 -1.414l-1.589 -1.59a11.821 11.821 0 0 0 1.004 -2.926"
                    fill="none"
                    stroke="#3a0454ad"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                  <path
                    d="M7.5 12.001a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0"
                    fill="none"
                    stroke="#3a0454ad"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  ></path>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0b0317c1",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Preferred Skills
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",
                    color: "#0b0317d8",
                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Chip
                    label="React"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="JavaScript"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                  <Chip
                    label="Node.js"
                    sx={{
                      fontSize: "0.8rem",
                      fontFamily: "monospace",
                      borderRadius: "8px",
                      fontWeight: 500,
                      color: "#51027e",
                      bgcolor: "#d8a1f77b",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* About My hiring focus */}
            <Box
              sx={{
                width: "100%",
                height: " auto",
                bgcolor: "#6f6e6e1a",
                display: "flex",
                gap: 2,
                boxSizing: "border-box",
                p: 1,
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  height: "2.5rem",
                  width: "2.5rem",

                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#615b63b9"
                  class="bi bi-quote"
                  viewBox="0 0 16 16"
                  id="Quote--Streamline-Bootstrap"
                  height="26"
                  width="26"
                >
                  <desc>Quote Streamline Icon: https://streamlinehq.com</desc>
                  <path
                    d="M12 12a1 1 0 0 0 1 -1V8.558a1 1 0 0 0 -1 -1h-1.388q0 -0.527 0.062 -1.054 0.093 -0.558 0.31 -0.992t0.559 -0.683q0.34 -0.279 0.868 -0.279V3q-0.868 0 -1.52 0.372a3.3 3.3 0 0 0 -1.085 0.992 4.9 4.9 0 0 0 -0.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1 -1V8.558a1 1 0 0 0 -1 -1H4.612q0 -0.527 0.062 -1.054 0.094 -0.558 0.31 -0.992 0.217 -0.434 0.559 -0.683 0.34 -0.279 0.868 -0.279V3q-0.868 0 -1.52 0.372a3.3 3.3 0 0 0 -1.085 0.992 4.9 4.9 0 0 0 -0.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"
                    stroke-width="1"
                  ></path>
                </svg>
              </Box>

              <Box
                sx={{
                  height: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.8,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0f0d12dd",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  About my hiring focus
                </Typography>

                <Box
                  sx={{
                    fontFamily: "system-ui",

                    fontSize: "1rem",
                    fontWeight: 600,
                    display: "flex ",
                    gap: 0.5,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      color: "#0b031792",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    }}
                  >
                    I recruit junior and mid-level developers for remote and
                    full-time positions.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>



      <Paper
        elevation={0}
        sx={{
          borderRadius: "1rem",
          p: "1rem",

          width: "100%",

          boxSizing: "border-box",
          border: "1px dashed #ddd",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pb: 1,
            borderBottom: " solid #ddd 1px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                id="Cursor-Target-1--Streamline-Ultimate"
                height="30"
                width="30"
              >
                <desc>
                  Cursor Target 1 Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  stroke="#41008b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.002 17.2471v6"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#41008b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.002 0.74707v6"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#41008b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75201 11.9971H0.752014"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#41008b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M23.252 11.9971h-6"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#41008b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75201 11.998c0 1.0835 0.2134 2.1562 0.628 3.1572 0.4146 1.0009 1.02229 1.9104 1.78837 2.6765 0.76609 0.7661 1.67556 1.3738 2.6765 1.7884 1.00093 0.4146 2.07372 0.6279 3.15712 0.6279 1.0834 0 2.1562 -0.2133 3.1572 -0.6279 1.0009 -0.4146 1.9104 -1.0223 2.6764 -1.7884 0.7661 -0.7661 1.3738 -1.6756 1.7884 -2.6765 0.4146 -1.001 0.628 -2.0737 0.628 -3.1572 0 -1.0834 -0.2134 -2.15616 -0.628 -3.15709 -0.4146 -1.00094 -1.0223 -1.91041 -1.7884 -2.67649 -0.766 -0.76609 -1.6755 -1.37378 -2.6764 -1.78838 -1.001 -0.4146 -2.0738 -0.62799 -3.1572 -0.62799 -1.0834 0 -2.15619 0.21339 -3.15712 0.62799 -1.00094 0.4146 -1.91041 1.02229 -2.6765 1.78838 -0.76608 0.76608 -1.37377 1.67555 -1.78837 2.67649 -0.4146 1.00093 -0.628 2.07369 -0.628 3.15709Z"
                  stroke-width="1.5"
                ></path>
              </svg>
            </Box>

            <Typography
              variant="h6"
              sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
            >
              Hiring Focus
            </Typography>
          </Box>

          <Button
            onClick={onClick}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#000000"
              id="Pencil-Simple-Light--Streamline-Phosphor"
              height="24"
              width="24"
            >
              <path
                d="m15.5115375 4.0630625 -3.575 -3.575c-0.43736875 -0.43741875 -1.1465375 -0.43741875 -1.58390625 0L0.48838125 10.35310625c-0.21046875 0.20974375 -0.32853125 0.49481875 -0.32798125 0.79195625v3.575c0 0.618525 0.5014125 1.1199375 1.1199375 1.1199375h3.575c0.2971375 0.00055 0.5822125 -0.1175125 0.79195625 -0.32798125L15.5115375 5.64696875c0.43741875 -0.43736875 0.43741875 -1.1465375 0 -1.58390625ZM4.96813125 14.83285625c-0.02986875 0.03004375 -0.07043125 0.04701875 -0.11279375 0.04719375h-3.575c-0.0883625 0.00000625 -0.1599875 -0.071625 -0.1599875 -0.1599875v-3.575c0.000175 -0.0423625 0.01715 -0.082925 0.04719375 -0.11279375L8.31994375 3.87906875l3.8005875 3.8013875ZM14.832375 4.9686125l-2.03268125 2.03268125 -3.8005875 -3.80058125 2.03268125 -2.0334875c0.0625 -0.0625625 0.16389375 -0.0625625 0.2263875 0l3.5742 3.575c0.0625625 0.06249375 0.0625625 0.1638875 0 0.2263875Z"
                stroke-width="0.0625"
              ></path>
            </svg>
          </Button>
        </Box>

        <Box
          sx={{
            pt: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#000000af", fontFamily: "monospace", mb: 0.6 }}
          >
            No Hiring Focus added yet
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 500,
              fontFamily: "monospace",

              color: "#00000077",
              fontSize: "0.8rem",
            }}
          >
            Showcase the roles, skills, and industries you focus on hiring for.
          </Typography>

          <Button
            startIcon={<AddIcon />}
            onClick={onClick}
            sx={{
              textTransform: "none",
              fontWeight: 400,
              fontFamily: "system-ui",
              border: "1px solid #ddd",
              mt: 2,
              borderRadius: "15px",
            }}
          >
            Add Experience
          </Button>
        </Box>
      </Paper>
    </>
  );
}
