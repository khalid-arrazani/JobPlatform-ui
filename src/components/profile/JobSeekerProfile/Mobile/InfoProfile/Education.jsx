import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  Chip,
  Paper,
  Button,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function Education({ state }) {
  return (
    <>
      {state.user?.profile?.education.length >= 1 ? (
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
                      viewBox="0 0 48 48"
                      id="Global-Learning--Streamline-Plump"
                      height="24"
                      width="24"
                    >
                      <desc>
                        Global Learning Streamline Icon:
                        https://streamlinehq.com
                      </desc>
                      <g id="global-learning--global-learning-education">
                        <path
                          id="Vector 144"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.42969 28.5H13.7511"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Vector 145"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.42969 15.334H40.5725"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Vector 2536"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m18 32.502 0 12.0625"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Ellipse 19"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M30.5725 22c0 -11.0457 -3.8375 -20 -8.5714 -20s-8.5714 8.9543 -8.5714 20c0 2.2754 0.1628 4.4621 0.4628 6.5001"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Ellipse 18"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M41.7765 25c0.1472 -0.9786 0.2235 -1.9804 0.2235 -3 0 -11.0457 -8.9543 -20 -20 -20S2 10.9543 2 22c0 7.8085 4.47484 14.5718 11 17.8654"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Rectangle 1097"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.0055 33.9581c-1.3433 -0.6057 -1.3433 -2.3055 0 -2.9112 1.143 -0.5154 2.6524 -1.1677 4.5949 -1.9569 3.1146 -1.2653 5.3631 -2.0782 6.7454 -2.5505 1.0762 -0.3678 2.2331 -0.3678 3.3092 0 1.3824 0.4723 3.6308 1.2852 6.7454 2.5505 1.9426 0.7892 3.452 1.4415 4.5949 1.9569 1.3433 0.6057 1.3433 2.3055 0 2.9112 -1.1429 0.5155 -2.6523 1.1677 -4.5949 1.9569 -3.1146 1.2653 -5.363 2.0782 -6.7454 2.5506 -1.0761 0.3677 -2.233 0.3677 -3.3092 0 -1.3823 -0.4724 -3.6308 -1.2853 -6.7454 -2.5506 -1.9425 -0.7892 -3.4519 -1.4414 -4.5949 -1.9569Z"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Subtract"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M23.5 35.874v3.0866c0 1.5888 0.0648 2.7105 0.1425 3.4845 0.1025 1.0215 0.6811 1.8929 1.6177 2.3133 1.2676 0.569 3.462 1.2439 6.7398 1.2439 3.2778 0 5.4722 -0.6749 6.7398 -1.2439 0.9366 -0.4204 1.5152 -1.2918 1.6177 -2.3133 0.0777 -0.774 0.1425 -1.8957 0.1425 -3.4845l0 -3.0862"
                          stroke-width="3"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
                  >
                    Education
                  </Typography>
                </Box>

                <Button
                  // onClick={()=>{setExperienceOpen(true)}}
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
                    <desc>
                      Pencil Simple Light Streamline Icon:
                      https://streamlinehq.com
                    </desc>
                    <path
                      d="m15.5115375 4.0630625 -3.575 -3.575c-0.43736875 -0.43741875 -1.1465375 -0.43741875 -1.58390625 0L0.48838125 10.35310625c-0.21046875 0.20974375 -0.32853125 0.49481875 -0.32798125 0.79195625v3.575c0 0.618525 0.5014125 1.1199375 1.1199375 1.1199375h3.575c0.2971375 0.00055 0.5822125 -0.1175125 0.79195625 -0.32798125L15.5115375 5.64696875c0.43741875 -0.43736875 0.43741875 -1.1465375 0 -1.58390625ZM4.96813125 14.83285625c-0.02986875 0.03004375 -0.07043125 0.04701875 -0.11279375 0.04719375h-3.575c-0.0883625 0.00000625 -0.1599875 -0.071625 -0.1599875 -0.1599875v-3.575c0.000175 -0.0423625 0.01715 -0.082925 0.04719375 -0.11279375L8.31994375 3.87906875l3.8005875 3.8013875ZM14.832375 4.9686125l-2.03268125 2.03268125 -3.8005875 -3.80058125 2.03268125 -2.0334875c0.0625 -0.0625625 0.16389375 -0.0625625 0.2263875 0l3.5742 3.575c0.0625625 0.06249375 0.0625625 0.1638875 0 0.2263875Z"
                      stroke-width="0.0625"
                    ></path>
                  </svg>
                </Button>
              </Box>

              {state.user?.profile?.education?.map((ex) => (
                <>
                  <Divider />

                  <Box
                    sx={{
                      pt: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 0.3,
                      boxSizing: "border-box",
                      pb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0000009f",
                        fontFamily: "monospace",
                        fontSize: "1.3rem",
                        fontWeight: 550,
                      }}
                    >
                      {ex?.degree}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        maxWidth: 600,
                        fontFamily: "monospace",
                        color: "#8b0081b6",
                        fontSize: "1.1rem",
                        mb: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      {ex?.school}
                    </Typography>

                    <Chip
                      label={ex?.period}
                      sx={{
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "monospace",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#020313ae",
                        bgcolor: "#dddddd5a",
                      }}
                    />
                  </Box>
                </>
              ))}
            </Paper>
      ) : (
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
                      viewBox="0 0 48 48"
                      id="Global-Learning--Streamline-Plump"
                      height="24"
                      width="24"
                    >
                      <desc>
                        Global Learning Streamline Icon:
                        https://streamlinehq.com
                      </desc>
                      <g id="global-learning--global-learning-education">
                        <path
                          id="Vector 144"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.42969 28.5H13.7511"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Vector 145"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.42969 15.334H40.5725"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Vector 2536"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m18 32.502 0 12.0625"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Ellipse 19"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M30.5725 22c0 -11.0457 -3.8375 -20 -8.5714 -20s-8.5714 8.9543 -8.5714 20c0 2.2754 0.1628 4.4621 0.4628 6.5001"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Ellipse 18"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M41.7765 25c0.1472 -0.9786 0.2235 -1.9804 0.2235 -3 0 -11.0457 -8.9543 -20 -20 -20S2 10.9543 2 22c0 7.8085 4.47484 14.5718 11 17.8654"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Rectangle 1097"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.0055 33.9581c-1.3433 -0.6057 -1.3433 -2.3055 0 -2.9112 1.143 -0.5154 2.6524 -1.1677 4.5949 -1.9569 3.1146 -1.2653 5.3631 -2.0782 6.7454 -2.5505 1.0762 -0.3678 2.2331 -0.3678 3.3092 0 1.3824 0.4723 3.6308 1.2852 6.7454 2.5505 1.9426 0.7892 3.452 1.4415 4.5949 1.9569 1.3433 0.6057 1.3433 2.3055 0 2.9112 -1.1429 0.5155 -2.6523 1.1677 -4.5949 1.9569 -3.1146 1.2653 -5.363 2.0782 -6.7454 2.5506 -1.0761 0.3677 -2.233 0.3677 -3.3092 0 -1.3823 -0.4724 -3.6308 -1.2853 -6.7454 -2.5506 -1.9425 -0.7892 -3.4519 -1.4414 -4.5949 -1.9569Z"
                          stroke-width="3"
                        ></path>
                        <path
                          id="Subtract"
                          stroke="#000000c8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M23.5 35.874v3.0866c0 1.5888 0.0648 2.7105 0.1425 3.4845 0.1025 1.0215 0.6811 1.8929 1.6177 2.3133 1.2676 0.569 3.462 1.2439 6.7398 1.2439 3.2778 0 5.4722 -0.6749 6.7398 -1.2439 0.9366 -0.4204 1.5152 -1.2918 1.6177 -2.3133 0.0777 -0.774 0.1425 -1.8957 0.1425 -3.4845l0 -3.0862"
                          stroke-width="3"
                        ></path>
                      </g>
                    </svg>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
                  >
                    Education
                  </Typography>
                </Box>

                <Button
                  // onClick={()=>{setExperienceOpen(true)}}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    id="Add-1--Streamline-Core"
                    height="24"
                    width="24"
                  >
                    <desc>Add 1 Streamline Icon: https://streamlinehq.com</desc>
                    <g id="add-1--expand-cross-buttons-button-more-remove-plus-add-+-mathematics-math">
                      <path
                        id="Vector"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 0.5v13"
                        stroke-width="0.8"
                      ></path>
                      <path
                        id="Vector_2"
                        stroke="#000000f8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M0.5 6.95996h13"
                        stroke-width="0.8"
                      ></path>
                    </g>
                  </svg>
                </Button>
              </Box>

              <Divider />

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
                  No education added yet
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
                  Add your education to showcase your academic background.
                </Typography>

                <Button
                  startIcon={<AddIcon />}
                  // onClick={()=>{setExperienceOpen(true)}}

                  sx={{
                    textTransform: "none",
                    fontWeight: 400,
                    fontFamily: "system-ui",
                    border: "1px solid #ddd",
                    mt: 2,
                    borderRadius: "15px",
                  }}
                >
                  Add Education
                </Button>
              </Box>
            </Paper>
      )}
    </>
  );
}
