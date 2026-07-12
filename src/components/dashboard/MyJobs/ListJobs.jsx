import {
  Box,
  Typography,
 
  Chip,
   
  Card,
  Stack,

} from "@mui/material";






import MenuCard from "./Menu";
import { useJob } from "../../../logic/context/JobContext";




export default function CardJobs (){
  const { dispatch, ...state } = useJob();



    return <>
     <Card

     key={123456789}
          sx={{
            bgcolor: "#ffffff",
            height: "9.5rem",
            border: "1px solid #ddddddb9",
            borderRadius: "10px",
            display: "flex",
            boxSizing: "border-box",
            boxShadow: "none",
            transition: "0.5s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
            },
          }}
        >
          {/* card job left side */}
          <Box sx={{ width: "16%", height: "100%" }}></Box>

          {/* card job right side */}
          <Box
            sx={{
              width: "84%",
              borderLeft: "solid 1px #ddd",
              height: "100%",
              pb: 1,
              px: 2,

              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.7rem",
                fontWeight: 600,
                fontFamily: "ui-monospace",
                color: "#02020dda",
              }}
            >
              Full Stack developer
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "monospace",
                color: "#02020db4",
              }}
            >
              Marrakesh, Morocco
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 1, mb: 1 }}
            >
              <Chip
                label={"Full Time"}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  height: "22px",
                  bgcolor: "#d8f3ff",
                  borderRadius: "5px",
                  color: "#0150b7",
                  fontWeight: 600,
                }}
              />

              <Chip
                label={"Mid Level"}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  height: "22px",
                  bgcolor: "#ffd8de",
                  color: "rgb(158, 64, 64)",
                  borderRadius: "5px",
                  fontWeight: 600,
                }}
              />
              <Chip
                label={"Hybrid"}
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  height: "22px",
                  bgcolor: "#f6d8ff",
                  color: "#72037c",
                  borderRadius: "5px",
                  fontWeight: 600,
                }}
              />
            </Stack>

            <Chip
              label={"Posted May 24,2024"}
              size="small"
              sx={{
                fontSize: "0.78rem",
                height: "25px",
                width: "9rem",
                bgcolor: "#e4e4e4",
                color: "#515151",
                fontWeight: 500,
                borderRadius: "5px",
              }}
            />

            <Chip
              label={"• Active"}
              size="small"
              sx={{
                fontSize: "0.9rem",
                height: "22px",
                bgcolor: "#d8ffda",
                color: "rgb(27, 137, 10)",
                borderRadius: "10px",
                fontWeight: 600,
                fontFamily: "monospace",
                position: "absolute",
                top: "18%",
                right: "20%",
              }}
            />

            {/* MoreVertIcon - Menu  */}
            <MenuCard JobId={5} />

            <Box
              sx={{
                width: "10rem",
                height: "3.5rem",
                position: "absolute",
                right: "15%",
                bottom: "10%",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Box sx={{ height: "100%", width: "50%" }}>
                <Typography sx={{ fontWeight: 600, fontFamily: "system-ui" }}>
                  24
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#04020e9a",
                    fontSize: "0.85rem",
                    fontFamily: "system-ui",
                  }}
                >
                  Applicants
                </Typography>
              </Box>
              <Box sx={{ height: "100%", width: "50%" }}>
                <Typography sx={{ fontWeight: 600, fontFamily: "system-ui" }}>
                  145
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#04020e9a",
                    fontSize: "0.85rem",
                    fontFamily: "system-ui",
                  }}
                >
                  Views
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
    </>
}