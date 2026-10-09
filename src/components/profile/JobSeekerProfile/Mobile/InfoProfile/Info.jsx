import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Drawer,
  Chip,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

export default function Info({ state, setSection ,setOpenModal }) {
 
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          boxSizing: "border-box",
          bgcolor: "#dddddd00",
          pb: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "system-ui",
            fontWeight: 500,
            fontSize: "1.5rem",
            color: "#040407e9",
          }}
        >
          {state.user?.profile?.fullName}
        </Typography>

        <Typography
          sx={{
            fontFamily: "system-ui",
            fontWeight: 450,
            fontSize: "1rem",
            color: "#040510c7",
          }}
        >
          {state.user?.profile?.headline}
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 500,
            fontSize: "0.9rem",
            color: "#0405109a",
            mt: 0.5,
          }}
        >
          {state.user?.profile?.location}
        </Typography>

        <Typography
          sx={{
            fontFamily:"",
            fontWeight: 500,
            fontSize: "0.9rem",
            color: "#0405109a",
            mt: 0.5,
          }}
        >
          {state.user?.profile?.userId?.email || "------------------"}
        </Typography>

      </Box>
    </>
  );
}
