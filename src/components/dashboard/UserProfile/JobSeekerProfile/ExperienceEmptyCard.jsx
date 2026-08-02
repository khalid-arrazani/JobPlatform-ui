
import WorkOutlineIcon from '@mui/icons-material/WorkOutlineOutlined';


import {
  Box,
  Typography,

  Paper,
  Divider,
} from "@mui/material";




export default function EmptyExperienceCard() {

  
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
            <WorkOutlineIcon
              sx={{
                color: "#2563eb",
                fontSize: "1.3rem",
              }}
            />
          </Box>

          <Typography variant="h6">
            Experience
          </Typography>
        </Box>

     
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
          <WorkOutlineIcon
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
          No experience added yet
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 500,
            mb: 3,
            color: "#00000060",
          }}
        >
          Add your work experience to highlight
          your professional journey.
        </Typography>

       
      </Box>
    </Paper>
  );
}