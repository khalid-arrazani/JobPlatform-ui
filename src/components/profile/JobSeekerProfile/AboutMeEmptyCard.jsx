import PersonOutlineIcon from '@mui/icons-material/PersonOutlineOutlined';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";

import { useProfile } from "../../../logic/context/profileContext.jsx";
import AboutMeModal from "./AboutMeModal.jsx";


export default function EmptyAboutCard() {

  const {setAboutOpen} = useProfile()

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "1rem",
        p: "1rem",
        boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.08)",
        width: "44vw",
        m: 1,
      }}
    >
      <AboutMeModal/>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
            <PersonOutlineIcon
              sx={{
                color: "#2563eb",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          <Typography variant="h6">
            About Me
          </Typography>
        </Box>

        <Button
          startIcon={<EditOutlinedIcon />}
          onClick={()=>{setAboutOpen(true)}}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add About
        </Button>
      </Box>

      <Divider />

      <Box
        sx={{
          py: "1rem",
          px: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            bgcolor: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 1.5,
          }}
        >
          <PersonOutlineIcon
            sx={{
              fontSize: 30,
              color: "#6b7280",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          fontWeight={600}
          mb={1}
          sx={{ color: "#00000079" }}
        >
          Tell us about yourself
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 500,
            mb: 3,
            color: "#00000060",
          }}
        >
          Share a short introduction about your
          background, interests, goals and what
          makes you unique.
        </Typography>

        <Button
          startIcon={<EditOutlinedIcon />}
          onClick={()=>{setAboutOpen(true)}}
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Add About
        </Button>
      </Box>
    </Paper>
  );
}