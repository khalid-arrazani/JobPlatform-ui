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

export default function Experience({ state , setSection ,setOpenModal}) {
  return (
    <>
      {state.user?.profile?.experience.length >= 1 ? (
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
                  bgcolor: "#eef4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                >
                  <g id="motion-photos-on">
                    <path
                      id="Union"
                      fill="#000000c8"
                      d="M12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.3775 0.27949 -2.69283 0.78516 -3.88965l1.84179 0.7793C4.22359 9.84449 4 10.8948 4 12c0 4.4183 3.58172 8 8 8 4.4183 0 8 -3.5817 8 -8 0 -4.41828 -3.5817 -8 -8 -8 -1.1052 0 -2.15551 0.22359 -3.11035 0.62695l-0.7793 -1.84179C9.30717 2.27949 10.6225 2 12 2M5.5 4C6.32843 4 7 4.67157 7 5.5S6.32843 7 5.5 7 4 6.32843 4 5.5 4.67157 4 5.5 4"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Experience
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
                  Pencil Simple Light Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  d="m15.5115375 4.0630625 -3.575 -3.575c-0.43736875 -0.43741875 -1.1465375 -0.43741875 -1.58390625 0L0.48838125 10.35310625c-0.21046875 0.20974375 -0.32853125 0.49481875 -0.32798125 0.79195625v3.575c0 0.618525 0.5014125 1.1199375 1.1199375 1.1199375h3.575c0.2971375 0.00055 0.5822125 -0.1175125 0.79195625 -0.32798125L15.5115375 5.64696875c0.43741875 -0.43736875 0.43741875 -1.1465375 0 -1.58390625ZM4.96813125 14.83285625c-0.02986875 0.03004375 -0.07043125 0.04701875 -0.11279375 0.04719375h-3.575c-0.0883625 0.00000625 -0.1599875 -0.071625 -0.1599875 -0.1599875v-3.575c0.000175 -0.0423625 0.01715 -0.082925 0.04719375 -0.11279375L8.31994375 3.87906875l3.8005875 3.8013875ZM14.832375 4.9686125l-2.03268125 2.03268125 -3.8005875 -3.80058125 2.03268125 -2.0334875c0.0625 -0.0625625 0.16389375 -0.0625625 0.2263875 0l3.5742 3.575c0.0625625 0.06249375 0.0625625 0.1638875 0 0.2263875Z"
                  stroke-width="0.0625"
                ></path>
              </svg>
            </Button>
          </Box>

          {state.user?.profile?.experience?.map((ex) => (
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
                  {ex?.title}
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
                  {ex?.company}
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
                  bgcolor: "#eef4ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                >
                  <g id="motion-photos-on">
                    <path
                      id="Union"
                      fill="#000000c8"
                      d="M12 2c5.5228 0 10 4.47715 10 10 0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10 0 -1.3775 0.27949 -2.69283 0.78516 -3.88965l1.84179 0.7793C4.22359 9.84449 4 10.8948 4 12c0 4.4183 3.58172 8 8 8 4.4183 0 8 -3.5817 8 -8 0 -4.41828 -3.5817 -8 -8 -8 -1.1052 0 -2.15551 0.22359 -3.11035 0.62695l-0.7793 -1.84179C9.30717 2.27949 10.6225 2 12 2M5.5 4C6.32843 4 7 4.67157 7 5.5S6.32843 7 5.5 7 4 6.32843 4 5.5 4.67157 4 5.5 4"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Experience
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
              No experience added yet
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
              Add your work experience to highlight your professional journey.
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
              Add Experience
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}
