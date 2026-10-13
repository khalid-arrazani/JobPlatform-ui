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

export default function Hiring_Focus() {
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
          mb: 3,display:"flex",flexDirection:"column",gap:1
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
                id="Search-Circle--Streamline-Ultimate"
                height="30"
                width="30"
              >
                <desc>
                  Search Circle Streamline Icon: https://streamlinehq.com
                </desc>
                <path
                  fill="#66e1ff"
                  d="M12.0002 22.5416c5.822 0 10.5416 -4.7196 10.5416 -10.5416 0 -5.82202 -4.7196 -10.54169 -10.5416 -10.54169C6.17817 1.45831 1.4585 6.17798 1.4585 12c0 5.822 4.71967 10.5416 10.5417 10.5416Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#c2f3ff"
                  d="M4.5457 19.4543C2.56868 17.4774 1.45801 14.7959 1.45801 12c0 -2.79589 1.11067 -5.47729 3.08769 -7.4543C6.52271 2.56868 9.20411 1.45801 12 1.45801c2.7959 0 5.4774 1.11067 7.4543 3.08769L4.5457 19.4543Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.0002 22.5416c5.822 0 10.5416 -4.7196 10.5416 -10.5416 0 -5.82202 -4.7196 -10.54169 -10.5416 -10.54169C6.17817 1.45831 1.4585 6.17798 1.4585 12c0 5.822 4.71967 10.5416 10.5417 10.5416Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#e4f1f5"
                  d="M11.2089 15.9178c2.6007 0 4.7089 -2.1082 4.7089 -4.7089 0 -2.60065 -2.1082 -4.7089 -4.7089 -4.7089C8.60825 6.5 6.5 8.60825 6.5 11.2089c0 2.6007 2.10825 4.7089 4.7089 4.7089Z"
                  stroke-width="1"
                ></path>
                <path
                  fill="#ffffff"
                  d="M7.87973 14.5392c-0.88311 -0.8831 -1.37924 -2.0809 -1.37924 -3.3298 0 -1.24891 0.49613 -2.44667 1.37924 -3.32979 0.88312 -0.88312 2.08088 -1.37924 3.32977 -1.37924 1.2489 0 2.4467 0.49612 3.3298 1.37924L7.87973 14.5392Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.2089 15.9178c2.6007 0 4.7089 -2.1082 4.7089 -4.7089 0 -2.60065 -2.1082 -4.7089 -4.7089 -4.7089C8.60825 6.5 6.5 8.60825 6.5 11.2089c0 2.6007 2.10825 4.7089 4.7089 4.7089Z"
                  stroke-width="1"
                ></path>
                <path
                  stroke="#191919"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.5381 14.5382 17.4998 17.5"
                  stroke-width="1"
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

        <Box sx={{ width: "100%", height: " 3rem", bgcolor: "#100b0b00" }}>
          <Box
            sx={{
              width: "100%",
              height: " 3rem",
              bgcolor: "#85242400",
              display: "flex",
            }}
          >
            <Box sx={{ height: "2.5rem", width: "2.5rem", bgcolor: "#ab6fc731",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                id="Bag-Suitcase-4--Streamline-Plump"
                height="30"
                width="30"
              >
                <desc>
                  Bag Suitcase 4 Streamline Icon: https://streamlinehq.com
                </desc>
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

            <Box></Box>
          </Box>
        </Box>


      </Paper>
    </>
  );
}
