import { Box, Typography, Chip, Card, Stack, Avatar } from "@mui/material";

import MenuCard from "./Menu";
import MenuCardDraft from "./MenuDraft";

import LinearProgress from "@mui/material/LinearProgress";

export default function Draft() {
  return (
    <>
      <Card
        sx={{
          bgcolor: "#ffffff",
          height: "9.5rem",
          width: "100%",
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
          my: 2,
          position: "relative",
        }}
      >
        {/* Left */}
        <Box
          sx={{
            width: "10rem",
            height: "100%",
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <Box
            sx={{
              width: "75%",
              height: "75%",
              border: "1px solid #ddd",
              borderRadius: "8px",
              placeContent: "center",
              placeItems: "center",
              p: 1,
            }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?w=200"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>

        {/* Right */}
        <Box
          sx={{
            width: "84%",
            borderLeft: "1px solid #ddd",
            height: "100%",
            pb: 1,
            px: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ mt: 1, width: "100%", justifyContent: "space-between" }}
          >
            <Chip
              label="● Draft"
              size="small"
              sx={{
                fontSize: "0.9rem",
                height: "22px",
                bgcolor: "#e1e1e1",
                color: "rgb(98, 98, 98)",
                borderRadius: "2px",
                fontWeight: 600,
                fontFamily: "monospace",
                width: "fit-Content",
              }}
            />

            <Box sx={{ display: "flex", height: "fit-Content", gap: 3 }}>
              <Chip
                label="Last saved: May 20,2024"
                size="small"
                sx={{
                  fontSize: "0.8rem",
                  height: "25px",
                  width: "fit-content",
                  bgcolor: "#e4e4e400",
                  color: "#666666",
                  fontWeight: 500,
                  borderRadius: "5px",
                }}
              />

              {/* Menu */}
              <MenuCardDraft />
            </Box>
          </Stack>
          <Typography
            sx={{
              fontSize: "1.7rem",
              fontWeight: 600,
              fontFamily: "ui-monospace",
              color: "#02020dda",
            }}
          >
            Senior Frontend Developer
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ mt: 1, mb: 1 }}>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                fontFamily: "monospace",
                color: "#02020db4",
              }}
            >
              Casablanca, Morocco
            </Typography>

            <Chip
              label="Full Time"
              size="small"
              sx={{
                fontSize: "0.7rem",
                height: "22px",
                bgcolor: "#d8f3ff",
                color: "#0150b7",
                borderRadius: "5px",
                fontWeight: 600,
              }}
            />

            <Chip
              label="Mid Level"
              size="small"
              sx={{
                fontSize: "0.7rem",
                height: "22px",
                bgcolor: "#ffd8de",
                color: "rgb(158,64,64)",
                borderRadius: "5px",
                fontWeight: 600,
              }}
            />

            <Chip
              label="Remote"
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
        </Box>
 

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,position: "absolute",
            bottom: 23,
            right: 15,
          }}
        >
          <Typography
            sx={{
              fontSize: ".9rem",
              fontWeight: 500,
              color:"#727272"
            }}
          >
            4 of 7 completed
          </Typography>

          <LinearProgress
            variant="determinate"
            value={(4 / 7) * 100}
            sx={{
              width: 170,
              height: 8,
              borderRadius: 5,
              bgcolor: "#ECECEC",

              "& .MuiLinearProgress-bar": {
                borderRadius: 5,
                bgcolor: "#6C3CF0",
              },
            }}
          />
        </Box>


      </Card>
    </>
  );
}
