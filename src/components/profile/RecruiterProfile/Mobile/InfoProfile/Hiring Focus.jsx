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

export default function Hiring_Focus({ state }) {
  return (
    <>
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
            borderBottom:"#ddd solid 1px"
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
                viewBox="-0.5 -0.5 16 16"
                id="User-Head-Focus--Streamline-Sharp"
                height="30"
                width="30"
              >
                <desc>
                  User Head Focus Streamline Icon: https://streamlinehq.com
                </desc>
                <g id="user-head-focus--actions-head-focus-geometric-human-person-single-up-user-target">
                  <path
                    id="Vector 1149"
                    stroke="#000000"
                    d="M7.5 0.625v3.125"
                    stroke-width="0.8"
                  ></path>
                  <path
                    id="Vector 1150"
                    stroke="#000000"
                    d="M7.5 6.25v3.125"
                    stroke-width="0.8"
                  ></path>
                  <path
                    id="Vector 1151"
                    stroke="#000000"
                    d="M8.75 5h3.125"
                    stroke-width="0.8"
                  ></path>
                  <path
                    id="Vector 1152"
                    stroke="#000000"
                    d="M6.25 5H3.125"
                    stroke-width="0.8"
                  ></path>
                  <path
                    id="Ellipse 414"
                    stroke="#000000"
                    d="M5.625 10.139625c-1.4508375 0.21825 -2.82001875 0.6858124999999999 -4.0625 1.35775v2.2525625h11.875v-2.2525625c-1.2425 -0.6719375 -2.6116875 -1.1395 -4.0625 -1.35775"
                    stroke-width="0.8"
                  ></path>
                  <path
                    id="Ellipse 419"
                    stroke="#000000"
                    d="M4.375 5a3.125 3.125 0 1 0 6.25 0A3.125 3.125 0 1 0 4.375 5"
                    stroke-width="0.8"
                  ></path>
                </g>
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
            //   onClick={onClick}
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

        <Box sx={{ width: "100%", height: " 3rem", bgcolor: "#ddd" }}></Box>
      </Paper>
    </>
  );
}
