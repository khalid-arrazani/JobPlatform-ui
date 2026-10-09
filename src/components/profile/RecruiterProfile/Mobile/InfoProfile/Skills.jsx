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

export default function Skills({ state, setSection ,setOpenModal }) {
  const onClick = ()=>{
    setSection("Skills");
    setOpenModal(true)
  }
  return (
    <>
      {state.user?.profile?.skills.length >= 1 ? (
        <Paper
          elevation={0}
          sx={{
            borderRadius: "1rem",
            p: "1rem",

            width: "100%",

            boxSizing: "border-box",
            border: "1px dashed #ddd",
            mb: 13,
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
                  id="Science-Molecule--Streamline-Ultimate"
                  height="24"
                  width="24"
                >
                  <desc>
                    Science Molecule Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.759 12.009c0 0.5968 0.23706 1.1691 0.659 1.591 0.422 0.422 0.9943 0.659 1.591 0.659s1.169 -0.237 1.591 -0.659c0.4219 -0.4219 0.659 -0.9942 0.659 -1.591 0 -0.5967 -0.2371 -1.169 -0.659 -1.591 -0.422 -0.42191 -0.9943 -0.65897 -1.591 -0.65897s-1.169 0.23706 -1.591 0.65897c-0.42194 0.422 -0.659 0.9943 -0.659 1.591Z"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.40269 22.6163c0.98456 0.9846 3.04628 0.8113 5.7316 -0.4816 2.68532 -1.2929 5.77431 -3.5996 8.58731 -6.4127 2.813 -2.813 5.1198 -5.90197 6.4127 -8.58728 1.2929 -2.68532 1.4662 -4.74704 0.4816 -5.73161 -0.9846 -0.984561 -3.0463 -0.811324 -5.7316 0.48161C14.199 3.17765 11.11 5.48436 8.29698 8.29741 5.48393 11.1105 3.17722 14.1994 1.88429 16.8847 0.591359 19.57 0.418121 21.6318 1.40269 22.6163Z"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.29698 15.7221c1.39289 1.3928 2.86812 2.6761 4.34152 3.7764 1.4735 1.1003 2.9162 1.9961 4.2458 2.6363 1.3297 0.6402 2.5202 1.0122 3.5036 1.0949 0.9834 0.0826 1.7405 -0.1258 2.228 -0.6133 0.4875 -0.4875 0.6959 -1.2446 0.6133 -2.228 -0.0826 -0.9835 -0.4547 -2.174 -1.0949 -3.5036 -0.6402 -1.3297 -1.536 -2.7724 -2.6363 -4.2458 -1.1003 -1.4734 -2.3835 -2.94868 -3.7764 -4.34156 -1.3929 -1.39288 -2.8681 -2.67611 -4.3416 -3.7764 -1.47337 -1.1003 -2.91609 -1.99612 -4.24573 -2.63632C5.80463 1.24452 4.61411 0.872484 3.63068 0.789849 2.64724 0.707214 1.89016 0.9156 1.40265 1.40311 0.915142 1.89062 0.706756 2.6477 0.789391 3.63114c0.082635 0.98343 0.454669 2.17395 1.094869 3.50359 0.6402 1.32964 1.53602 2.77235 2.63632 4.24577 1.1003 1.4734 2.38352 2.9487 3.7764 4.3416Z"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Skills
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

          <Divider sx={{ mb: 1.5 }} />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 1.5,
              boxSizing: "border-box",
              flexWrap: "wrap",
              height: "auto",
            }}
          >
            {/* Skllis map */}
            {state.user?.profile?.skills?.map((s) => (
              <>
                <Chip
                  label={s}
                  sx={{
                    fontSize: "1.3rem",
                    fontFamily: "monospace",
                    py: 2.2,
                    borderRadius: "8px",
                    border: "0.5px dashed #5401633b",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                    transition: "transform 0.3s ease",
                  }}
                />
              </>
            ))}
          </Box>
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
            mb: 13,
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
                  id="Science-Molecule--Streamline-Ultimate"
                  height="24"
                  width="24"
                >
                  <desc>
                    Science Molecule Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.759 12.009c0 0.5968 0.23706 1.1691 0.659 1.591 0.422 0.422 0.9943 0.659 1.591 0.659s1.169 -0.237 1.591 -0.659c0.4219 -0.4219 0.659 -0.9942 0.659 -1.591 0 -0.5967 -0.2371 -1.169 -0.659 -1.591 -0.422 -0.42191 -0.9943 -0.65897 -1.591 -0.65897s-1.169 0.23706 -1.591 0.65897c-0.42194 0.422 -0.659 0.9943 -0.659 1.591Z"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M1.40269 22.6163c0.98456 0.9846 3.04628 0.8113 5.7316 -0.4816 2.68532 -1.2929 5.77431 -3.5996 8.58731 -6.4127 2.813 -2.813 5.1198 -5.90197 6.4127 -8.58728 1.2929 -2.68532 1.4662 -4.74704 0.4816 -5.73161 -0.9846 -0.984561 -3.0463 -0.811324 -5.7316 0.48161C14.199 3.17765 11.11 5.48436 8.29698 8.29741 5.48393 11.1105 3.17722 14.1994 1.88429 16.8847 0.591359 19.57 0.418121 21.6318 1.40269 22.6163Z"
                    stroke-width="1.5"
                  ></path>
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.29698 15.7221c1.39289 1.3928 2.86812 2.6761 4.34152 3.7764 1.4735 1.1003 2.9162 1.9961 4.2458 2.6363 1.3297 0.6402 2.5202 1.0122 3.5036 1.0949 0.9834 0.0826 1.7405 -0.1258 2.228 -0.6133 0.4875 -0.4875 0.6959 -1.2446 0.6133 -2.228 -0.0826 -0.9835 -0.4547 -2.174 -1.0949 -3.5036 -0.6402 -1.3297 -1.536 -2.7724 -2.6363 -4.2458 -1.1003 -1.4734 -2.3835 -2.94868 -3.7764 -4.34156 -1.3929 -1.39288 -2.8681 -2.67611 -4.3416 -3.7764 -1.47337 -1.1003 -2.91609 -1.99612 -4.24573 -2.63632C5.80463 1.24452 4.61411 0.872484 3.63068 0.789849 2.64724 0.707214 1.89016 0.9156 1.40265 1.40311 0.915142 1.89062 0.706756 2.6477 0.789391 3.63114c0.082635 0.98343 0.454669 2.17395 1.094869 3.50359 0.6402 1.32964 1.53602 2.77235 2.63632 4.24577 1.1003 1.4734 2.38352 2.9487 3.7764 4.3416Z"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </Box>

              <Typography
                variant="h6"
                sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
              >
                Skills
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
              No skills added yet
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
              Add your skills to showcase your strengths and expertise.
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
              Add Skills
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}
