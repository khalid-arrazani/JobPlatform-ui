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
            borderBottom:" solid #ddd 1px"
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Target--Streamline-Solar" height="24" width="24">
  <desc>
    Target Streamline Icon: https://streamlinehq.com
  </desc>
  <g id="Line Duotone/Essentional UI/Target">
    <path id="Vector" stroke="#737373" stroke-linecap="round" d="M2 12h3" stroke-width="1.5"></path>
    <path id="Vector_2" stroke="#737373" stroke-linecap="round" d="M19 12h3" stroke-width="1.5"></path>
    <path id="Vector_3" stroke="#737373" stroke-linecap="round" d="M12 22v-3" stroke-width="1.5"></path>
    <path id="Vector_4" stroke="#737373" stroke-linecap="round" d="M12 5V2" stroke-width="1.5"></path>
    <path id="Vector_5" stroke="#000000" d="M22 12c0 5.5228 -4.4772 10 -10 10 -5.52285 0 -10 -4.4772 -10 -10C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10Z" stroke-width="1.5"></path>
    <path id="Vector_6" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12 12h-2m2 0h2m-2 0v2m0 -2v-2" stroke-width="1.5"></path>
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

        <Box sx={{ width: "100%", height: " 3rem", bgcolor: "#dddddd00" }}></Box>
      </Paper>
    </>
  );
}
