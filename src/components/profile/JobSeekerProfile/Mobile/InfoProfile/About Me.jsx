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

export default function About_Me({ state }) {
  return (
    <>
     {state.user?.profile?.aboutMe?.about ?
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
                viewBox="0 0 24 24"
                id="Messages-People-Person-Bubble-Circle-1--Streamline-Ultimate"
                height="24"
                width="24"
              >
                <desc>
                  Messages People Person Bubble Circle 1 Streamline Icon:
                  https://streamlinehq.com
                </desc>
                <path
                  stroke="#000000af"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 0.74994c-1.0086 -0.004896 -1.9971 0.28223 -2.8461 0.82673 -0.849 0.54449 -1.5222 1.32308 -1.9385 2.24178 -0.4163 0.91871 -0.5577 1.93826 -0.4073 2.93559 0.1504 0.99733 0.5862 1.92982 1.2549 2.6849l-0.657 3.77996 3.423 -2.111c0.7204 0.1661 1.4677 0.1779 2.1929 0.0349 0.7253 -0.143 1.4122 -0.4376 2.0156 -0.8647 0.6034 -0.427 1.1098 -0.97674 1.4859 -1.61316 0.3761 -0.63641 0.6135 -1.34512 0.6965 -2.07968 0.083 -0.73457 0.0099 -1.47838 -0.2146 -2.1827 -0.2246 -0.70432 -0.5954 -1.35323 -1.0883 -1.90419 -0.4928 -0.55097 -1.0966 -0.99155 -1.7716 -1.29287C19.4703 0.904185 18.7392 0.748939 18 0.74994Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000af"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.375 13.125c0 0.8951 0.35558 1.7535 0.98851 2.3865 0.63294 0.6329 1.49138 0.9885 2.38649 0.9885 0.89511 0 1.75355 -0.3556 2.38649 -0.9885 0.63293 -0.633 0.98851 -1.4914 0.98851 -2.3865 0 -0.8951 -0.35558 -1.7535 -0.98851 -2.3865C8.50355 10.1056 7.64511 9.75 6.75 9.75c-0.89511 0 -1.75355 0.3556 -2.38649 0.9885 -0.63293 0.633 -0.98851 1.4914 -0.98851 2.3865Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000af"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 23.25c-0.1954 -1.4528 -0.9112 -2.7854 -2.0146 -3.7503 -1.10345 -0.965 -2.51953 -1.4969 -3.9854 -1.4969 -1.46587 0 -2.88195 0.5319 -3.98538 1.4969C1.66118 20.4646 0.945351 21.7972 0.75 23.25"
                  stroke-width="1.5"
                ></path>
              </svg>
            </Box>

            <Typography
              variant="h6"
              sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
            >
              About Me
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

        <Divider />

        <Box
          sx={{
            pt: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "#000000af",
              fontFamily: "monospace",
              mb: 0.6,
              fontSize: "1.1rem",
            }}
          >
            {state.user?.profile?.aboutMe?.about}
          </Typography>
        </Box>
      </Paper> 
      
      :
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
                viewBox="0 0 24 24"
                id="Messages-People-Person-Bubble-Circle-1--Streamline-Ultimate"
                height="24"
                width="24"
              >
                <desc>
                  Messages People Person Bubble Circle 1 Streamline Icon:
                  https://streamlinehq.com
                </desc>
                <path
                  stroke="#000000af"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 0.74994c-1.0086 -0.004896 -1.9971 0.28223 -2.8461 0.82673 -0.849 0.54449 -1.5222 1.32308 -1.9385 2.24178 -0.4163 0.91871 -0.5577 1.93826 -0.4073 2.93559 0.1504 0.99733 0.5862 1.92982 1.2549 2.6849l-0.657 3.77996 3.423 -2.111c0.7204 0.1661 1.4677 0.1779 2.1929 0.0349 0.7253 -0.143 1.4122 -0.4376 2.0156 -0.8647 0.6034 -0.427 1.1098 -0.97674 1.4859 -1.61316 0.3761 -0.63641 0.6135 -1.34512 0.6965 -2.07968 0.083 -0.73457 0.0099 -1.47838 -0.2146 -2.1827 -0.2246 -0.70432 -0.5954 -1.35323 -1.0883 -1.90419 -0.4928 -0.55097 -1.0966 -0.99155 -1.7716 -1.29287C19.4703 0.904185 18.7392 0.748939 18 0.74994Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000af"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.375 13.125c0 0.8951 0.35558 1.7535 0.98851 2.3865 0.63294 0.6329 1.49138 0.9885 2.38649 0.9885 0.89511 0 1.75355 -0.3556 2.38649 -0.9885 0.63293 -0.633 0.98851 -1.4914 0.98851 -2.3865 0 -0.8951 -0.35558 -1.7535 -0.98851 -2.3865C8.50355 10.1056 7.64511 9.75 6.75 9.75c-0.89511 0 -1.75355 0.3556 -2.38649 0.9885 -0.63293 0.633 -0.98851 1.4914 -0.98851 2.3865Z"
                  stroke-width="1.5"
                ></path>
                <path
                  stroke="#000000af"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 23.25c-0.1954 -1.4528 -0.9112 -2.7854 -2.0146 -3.7503 -1.10345 -0.965 -2.51953 -1.4969 -3.9854 -1.4969 -1.46587 0 -2.88195 0.5319 -3.98538 1.4969C1.66118 20.4646 0.945351 21.7972 0.75 23.25"
                  stroke-width="1.5"
                ></path>
              </svg>
            </Box>

            <Typography
              variant="h6"
              sx={{ fontFamily: "system-ui", color: "#0b0317d8" }}
            >
              About Me
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
            Tell us about yourself
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
            Share a short introduction about your background, interests, goals
            and what makes you unique.
          </Typography>

          <Button
            startIcon={<AddIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 400,
              fontFamily: "system-ui",
              border: "1px solid #ddd",
              mt: 2,
              borderRadius: "15px",
            }}
          >
            Add About
          </Button>
        </Box>
      </Paper>}

      
    </>
  );
}
